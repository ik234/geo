// Глобус: контуры стран, соседи, куски суши, рисование на холсте и перелёты.
// Общий для игры и прототипа proto/globe.html. d3 и topojson страница
// подключает обычными скриптами, здесь они глобальные.
//
// Глобус поворачивается к нужному месту и приближается, пока его не станет
// видно, но соседи остаются вокруг; на дальних перелётах по пути отдаляется до
// целого глобуса. Маленькие страны обведены кольцом. В полёте рисуются грубые
// контуры 110m, на месте — подробные 50m: перерисовывать 80 тысяч точек каждый
// кадр незачем.
import world110 from './assets/world.mjs';

const deg = Math.PI / 180;

// Поправки к соседям из контуров. Сомалиленд и Северный Кипр в данных
// отдельные, а в игре это части Сомали и Кипра; Гонконг и Макао — части
// Китая. Ледник Сиачен не страна: его в игре нет, и он отпадает сам.
// Трёх настоящих заморских границ в контурах нет, их добавляем руками.
const partOf = { SOL: 'SOM', CYN: 'CYP', HKG: 'CHN', MAC: 'CHN' };
const extraBorders = [['FRA', 'NLD'], ['ESP', 'MAR'], ['ESP', 'GBR']];

// Ключ границы — пара кодов по алфавиту; так же названы пояснения note_… в
// словарях: для заморских границ и для границ Франции через Гвиану.
export const borderKey = (a, b) => [a, b].sort().join('|');

export const palette = {
  trail: { fill: '#f9dfa6', stroke: '#d9a441' },
  route: { fill: '#b9d3f0', stroke: '#3f6fb5' },
  neighbour: { fill: '#9ed8c9', stroke: '#2f7f8a' },
  solved: { fill: '#b7d85a', stroke: '#5b7d17' },
  unsolved: { fill: '#f6c3a6', stroke: '#ca501b' },
  goal: { fill: '#b7d85a', stroke: '#5b7d17' },
  primary: { fill: '#f4b333', stroke: '#ca501b' },
};
export const paintOrder = ['trail', 'route', 'neighbour', 'solved', 'unsolved', 'goal', 'primary'];
// Пройденному пути колец не нужно: на Балканах они сливались в кучу. Итогам
// раунда тоже: у эксперта это полторы сотни стран, и кольца закрыли бы глобус.
const ringless = new Set(['trail', 'solved', 'unsolved']);

let loading = null;

// Подробные контуры — 750 КБ, поэтому грузятся один раз и только когда глобус
// понадобился. Путь считается от этого файла, а не от страницы: модуль
// подключают и из корня сайта, и из proto/.
export function loadGeography(ids) {
  loading ||= fetch(new URL('assets/countries-50m.json', import.meta.url))
    .then(response => {
      if (!response.ok) throw new Error(`countries-50m.json: ${response.status}`);
      return response.json();
    })
    .then(world50 => buildGeography(world50, new Set(ids)))
    .catch(error => {
      loading = null;
      throw error;
    });
  return loading;
}

function buildGeography(world50, game) {
  const obj50 = world50.objects.features;
  const obj110 = world110.objects.features;
  const byId = new Map(topojson.feature(world50, obj50).features.map(feature => [feature.properties.id, feature]));
  const owner = geometry => partOf[geometry.properties.id] || geometry.properties.id;
  const inner = (a, b) => a !== b && owner(a) !== owner(b);
  const detail = { land: topojson.merge(world50, obj50.geometries), borders: topojson.mesh(world50, obj50, inner) };
  const coarse = { land: topojson.merge(world110, obj110.geometries), borders: topojson.mesh(world110, obj110, inner) };

  const partsById = new Map([...game].map(id => [id, [id]]));
  for (const [part, whole] of Object.entries(partOf)) {
    if (byId.has(part)) partsById.get(whole).push(part);
  }

  const adj = new Map([...game].map(id => [id, new Set()]));
  topojson.neighbors(obj50.geometries).forEach((list, i) => {
    const a = owner(obj50.geometries[i]);
    for (const j of list) {
      const b = owner(obj50.geometries[j]);
      if (a !== b && adj.has(a) && adj.has(b)) {
        adj.get(a).add(b);
        adj.get(b).add(a);
      }
    }
  });
  for (const [a, b] of extraBorders) {
    adj.get(a).add(b);
    adj.get(b).add(a);
  }

  // У Франции есть Гвиана, у США — Аляска и Гавайи: целиться во всю страну
  // значило бы показывать пол-океана. Берём самый большой кусок и то, что
  // лежит не дальше 25° от него.
  function focusOf(id) {
    const polygons = [];
    for (const part of partsById.get(id)) {
      const geometry = byId.get(part).geometry;
      if (geometry.type === 'Polygon') polygons.push({ type: 'Polygon', coordinates: geometry.coordinates });
      else if (geometry.type === 'MultiPolygon') polygons.push(...geometry.coordinates.map(coordinates => ({ type: 'Polygon', coordinates })));
    }
    const main = polygons.reduce((best, polygon) => (d3.geoArea(polygon) > d3.geoArea(best) ? polygon : best));
    const center = d3.geoCentroid(main);
    const near = polygons.filter(polygon => d3.geoDistance(d3.geoCentroid(polygon), center) < 25 * deg);
    return { type: 'MultiPolygon', coordinates: near.map(polygon => polygon.coordinates) };
  }

  const focus = new Map([...game].map(id => [id, focusOf(id)]));
  const centroids = new Map([...game].map(id => [id, d3.geoCentroid(focus.get(id))]));
  const away = (a, b) => d3.geoDistance(centroids.get(a), centroids.get(b)) / deg;

  // Докуда от точки дотягиваются страны, в градусах. У России это обход
  // шести с половиной тысяч точек, 13 мс, поэтому ответ запоминается.
  const reaches = new Map();
  function reach(point, ids) {
    const key = `${ids}@${point}`;
    if (!reaches.has(key)) {
      let farthest = 0;
      for (const id of ids) {
        for (const polygon of focus.get(id).coordinates) {
          for (const ring of polygon) {
            for (const position of ring) farthest = Math.max(farthest, d3.geoDistance(point, position));
          }
        }
      }
      reaches.set(key, farthest / deg);
    }
    return reaches.get(key);
  }

  const hopsCache = new Map();
  function hops(from) {
    if (!hopsCache.has(from)) {
      const distance = new Map([[from, 0]]);
      const queue = [from];
      for (let i = 0; i < queue.length; i++) {
        for (const next of adj.get(queue[i])) {
          if (!distance.has(next)) {
            distance.set(next, distance.get(queue[i]) + 1);
            queue.push(next);
          }
        }
      }
      hopsCache.set(from, distance);
    }
    return hopsCache.get(from);
  }

  // Суша по кускам. У страны в контурах бывает несколько многоугольников, и
  // пешком из одного в другой не попасть: Гвиана — это Франция, но из Европы
  // до неё не дойти; Калининград отрезан от остальной России; Малайзия и
  // Индонезия разделены морем. Путешествие и «По суше» в атласе считаются
  // по кускам: кусок — сросшиеся многоугольники одной страны, соседи — куски
  // разных стран с общей линией границы. Заморских границ из extraBorders
  // здесь нет вовсе: общей линии в контурах у них нет. Без этого выходил
  // маршрут по суше из Бразилии в Марокко — через Гвиану и Сеуту.
  const landPolygons = [];
  for (const geometry of obj50.geometries) {
    const id = owner(geometry);
    if (!game.has(id) || !geometry.arcs) continue;
    const shape = byId.get(geometry.properties.id).geometry;
    const arcs = geometry.type === 'Polygon' ? [geometry.arcs] : geometry.arcs;
    const coordinates = shape.type === 'Polygon' ? [shape.coordinates] : shape.coordinates;
    arcs.forEach((polygonArcs, i) => landPolygons.push({ id, geometry: { type: 'Polygon', arcs: polygonArcs }, coordinates: coordinates[i] }));
  }
  const polygonLinks = topojson.neighbors(landPolygons.map(polygon => polygon.geometry));
  const pieceRoot = landPolygons.map((_, i) => i);
  const findPiece = i => (pieceRoot[i] === i ? i : (pieceRoot[i] = findPiece(pieceRoot[i])));
  polygonLinks.forEach((list, i) => {
    for (const j of list) if (landPolygons[i].id === landPolygons[j].id) pieceRoot[findPiece(i)] = findPiece(j);
  });
  const pieceOf = landPolygons.map((_, i) => findPiece(i));
  const pieceCountry = new Map(pieceOf.map((piece, i) => [piece, landPolygons[i].id]));
  const pieceLinks = new Map([...pieceCountry.keys()].map(piece => [piece, new Set()]));
  polygonLinks.forEach((list, i) => {
    for (const j of list) if (landPolygons[i].id !== landPolygons[j].id) pieceLinks.get(pieceOf[i]).add(pieceOf[j]);
  });

  // «Сама страна» — куски с многоугольниками из её прицела (focusOf): отсюда
  // путешествие начинается и сюда приходит. Из Литвы в Россию попадают в
  // Калининград, но цель «Россия» этим ещё не достигнута.
  const homePieces = new Map([...game].map(id => [id, new Set()]));
  const focusParts = new Map([...game].map(id => [id, new Set(focus.get(id).coordinates)]));
  landPolygons.forEach((polygon, i) => {
    if (focusParts.get(polygon.id).has(polygon.coordinates)) homePieces.get(polygon.id).add(pieceOf[i]);
  });

  // Сколько границ до каждого куска суши от «самой страны».
  const landCache = new Map();
  function landFrom(id) {
    if (!landCache.has(id)) {
      const distance = new Map([...homePieces.get(id)].map(piece => [piece, 0]));
      const queue = [...distance.keys()];
      for (let i = 0; i < queue.length; i++) {
        for (const next of pieceLinks.get(queue[i])) {
          if (distance.has(next)) continue;
          distance.set(next, distance.get(queue[i]) + 1);
          queue.push(next);
        }
      }
      landCache.set(id, distance);
    }
    return landCache.get(id);
  }

  const nearest = (pieces, distance) => Math.min(...[...pieces].map(piece => distance.get(piece) ?? Infinity));
  const landDistance = (from, to) => nearest(homePieces.get(to), landFrom(from));

  // Куда шагнуть из кусков at: страна → куски, на которые попадёшь. В страну
  // цели — только в «саму страну», иначе заголовок «Россия → Россия».
  function landSteps(at, goal) {
    const steps = new Map();
    for (const piece of at) {
      for (const next of pieceLinks.get(piece)) {
        const id = pieceCountry.get(next);
        if (id === goal && !homePieces.get(goal).has(next)) continue;
        if (!steps.has(id)) steps.set(id, new Set());
        steps.get(id).add(next);
      }
    }
    return steps;
  }

  // По суше: до каких стран можно дойти от «самой страны» и за сколько границ.
  function landReach(id) {
    return [...game].filter(other => other !== id).map(other => [other, landDistance(id, other)]).filter(([, count]) => count < Infinity);
  }

  const withNeighbours = [...game].filter(id => adj.get(id).size > 0);
  const islands = [...game].filter(id => adj.get(id).size === 0 && id !== 'ATA');

  return {
    game, byId, partsById, detail, coarse, adj, focus, centroids, away, reach, hops,
    homePieces, landFrom, landDistance, landSteps, landReach, nearest, withNeighbours, islands,
  };
}

// Глобус на холсте. onMarks(kinds) зовётся при каждой смене раскраски — по
// нему страница рисует легенду. onSelect(id) — нажатие на страну, если
// глобус интерактивный (setInteractive): тогда его ещё и крутят пальцем.
export function createGlobe(canvas, geo, { onMarks = () => {}, onSelect = () => {} } = {}) {
  const { detail, coarse, byId, partsById, focus, centroids, adj, away, reach } = geo;
  const ctx = canvas.getContext('2d');
  const projection = d3.geoOrthographic().clipAngle(90).precision(0.3);
  const path = d3.geoPath(projection, ctx);
  const sphere = { type: 'Sphere' };
  const graticule = d3.geoGraticule10();
  let W = 0;
  let H = 0;
  let marks = {};
  let view = null;
  let flight = null;
  let flightTarget = null;
  let interactive = false;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width;
    H = rect.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function wholeGlobeScale() {
    return (Math.min(W, H) / 2) * 0.92;
  }

  // Показываемое занимает до половины окна, но ближе, чем 18° по короткой
  // стороне, не подлетаем: без соседей непонятно, где это вообще. Совсем
  // крошечному (оно и так будет в кольце) даём 30°: у Тувалу при 18° вокруг
  // один океан. Чуть обрезанный по краям глобус выглядит ошибкой, поэтому
  // приближение меньше чем в 1,3 раза не делаем.
  //
  // Соседей (around) в кадр берём не целиком, а только внутри круга на 4°
  // шире показываемого, радиусом от 6° до 15°. Целиком Россия у Норвегии,
  // Финляндии и Эстонии отбрасывала глобус до целого шара, и сама страна
  // оставалась пятнышком в кольце; так было у 24 стран из 158.
  function viewFor(ids, center, around = []) {
    const shape = { type: 'GeometryCollection', geometries: ids.map(id => focus.get(id)) };
    const middle = center || (ids.length === 1 ? centroids.get(ids[0]) : d3.geoCentroid(shape));
    const probe = d3.geoOrthographic().rotate([-middle[0], -middle[1]]).scale(1).translate([0, 0]).clipAngle(90);
    let [[x0, y0], [x1, y1]] = d3.geoPath(probe).bounds(shape);
    if (around.length) {
      probe.clipAngle(Math.min(15, Math.max(6, reach(middle, ids) + 4)));
      const [[a0, b0], [a1, b1]] = d3.geoPath(probe).bounds({ type: 'GeometryCollection', geometries: around.map(id => focus.get(id)) });
      // Сосед, который весь дальше этого круга, границ не добавляет.
      if (a0 <= a1) [x0, y0, x1, y1] = [Math.min(x0, a0), Math.min(y0, b0), Math.max(x1, a1), Math.max(y1, b1)];
    }
    const fit = Math.min((W * 0.5) / Math.max(x1 - x0, 1e-6), (H * 0.5) / Math.max(y1 - y0, 1e-6));
    const near = Math.min(W, H) / (18 * deg);
    const closest = Math.max(x1 - x0, y1 - y0) * near < 16 ? Math.min(W, H) / (30 * deg) : near;
    const whole = wholeGlobeScale();
    const scale = Math.min(fit, closest);
    return { center: middle, scale: scale < whole * 1.3 ? whole : scale };
  }

  function outline(id) {
    for (const part of partsById.get(id)) path(byId.get(part));
  }

  function draw(current, detailed) {
    projection.rotate([-current.center[0], -current.center[1]]).scale(current.scale).translate([W / 2, H / 2]);
    const layers = detailed ? detail : coarse;
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();
    path(sphere);
    ctx.fillStyle = '#c7e4eb';
    ctx.fill();
    ctx.beginPath();
    path(graticule);
    ctx.strokeStyle = 'rgba(20, 52, 64, .08)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.beginPath();
    path(layers.land);
    ctx.fillStyle = '#f6faf6';
    ctx.fill();
    ctx.beginPath();
    path(layers.borders);
    ctx.strokeStyle = '#9db4bb';
    ctx.lineWidth = 0.7;
    ctx.stroke();
    for (const kind of paintOrder) {
      for (const id of marks[kind] || []) {
        ctx.beginPath();
        outline(id);
        ctx.fillStyle = palette[kind].fill;
        ctx.fill();
        ctx.strokeStyle = palette[kind].stroke;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    ctx.beginPath();
    path(sphere);
    ctx.strokeStyle = 'rgba(20, 52, 64, .35)';
    ctx.lineWidth = 1;
    ctx.stroke();
    if (!detailed) return;
    // Кольцо, как на картах в Википедии, — если страна меньше пятна 16×16px.
    for (const kind of paintOrder.filter(kind => !ringless.has(kind))) {
      for (const id of marks[kind] || []) {
        const area = partsById.get(id).reduce((sum, part) => sum + path.area(byId.get(part)), 0);
        if (area >= 250 || d3.geoDistance(centroids.get(id), current.center) > 85 * deg) continue;
        const [cx, cy] = projection(centroids.get(id));
        const [[x0, y0], [x1, y1]] = path.bounds(focus.get(id));
        const radius = Math.min(60, Math.max(16, Math.hypot(x1 - x0, y1 - y0) / 2 + 8));
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.strokeStyle = palette[kind].stroke;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }
    }
  }

  function flyTo(to) {
    flight?.stop();
    flight = null;
    if (!view || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      view = to;
      draw(view, true);
      return;
    }
    const from = view;
    const distance = d3.geoDistance(from.center, to.center);
    const route = d3.geoInterpolate(from.center, to.center);
    const whole = wholeGlobeScale();
    // На далёкий перелёт отдаляемся до целого глобуса, на соседний — чуть-чуть.
    const lift = Math.min(1, distance / (60 * deg));
    const dip = Math.max(0, Math.log(Math.max(from.scale, to.scale)) - Math.log(whole));
    // От 1,4 с к соседней стране до 3,6 с на другую сторону Земли.
    const duration = 1400 + 2200 * Math.min(1, distance / Math.PI);
    flightTarget = to;
    const timer = d3.timer(elapsed => {
      const progress = Math.min(1, elapsed / duration);
      const e = d3.easeCubicInOut(progress);
      const logScale = Math.log(from.scale) + (Math.log(to.scale) - Math.log(from.scale)) * e - lift * dip * Math.sin(Math.PI * e);
      view = progress < 1 ? { center: route(e), scale: Math.max(whole, Math.exp(logScale)) } : to;
      draw(view, progress === 1);
      if (progress === 1) {
        timer.stop();
        if (flight === timer) flight = null;
      }
    });
    flight = timer;
  }

  const sameView = (a, b) => Boolean(a && b) && Math.abs(a.scale - b.scale) < 0.5 && d3.geoDistance(a.center, b.center) < 1e-6;

  // Перерисовка (ответ, смена языка) не должна заново запускать полёт туда,
  // куда глобус уже летит или где уже стоит: тогда только перекрашиваем, а
  // если и краски те же — не трогаем вовсе. Подробный кадр стоит около 0,1 с,
  // а во «Всех соседях» перерисовка идёт на каждое нажатие варианта.
  function show(nextMarks, ids, center, around) {
    const repaint = JSON.stringify(nextMarks) !== JSON.stringify(marks);
    marks = nextMarks;
    onMarks(paintOrder.filter(kind => (marks[kind] || []).length));
    // Холста нет на странице (другой раздел игры): вид под нулевой размер
    // считать нельзя, глобус покажут заново, когда холст вернётся.
    if (!W || !H) return;
    const target = viewFor(ids, center, around);
    if (flight && sameView(flightTarget, target)) return;
    if (!flight && sameView(view, target)) {
      if (repaint) draw(view, true);
      return;
    }
    flyTo(target);
  }

  function showNeighbours(id) {
    const neighbours = [...adj.get(id)];
    show({ primary: [id], neighbour: neighbours }, [id], centroids.get(id), neighbours.filter(other => away(other, id) < 35));
  }

  // Страна под пальцем. Если под ним море, берём ближайшую по центру не
  // дальше 18px: иначе в Ватикан или Тувалу не попасть.
  function countryAt(x, y) {
    if (!view || Math.hypot(x - W / 2, y - H / 2) > view.scale) return null;
    const point = projection.invert([x, y]);
    if (!point || point.some(Number.isNaN)) return null;
    for (const id of geo.game) {
      if (partsById.get(id).some(part => d3.geoContains(byId.get(part), point))) return id;
    }
    let found = null;
    let best = 18;
    for (const id of geo.game) {
      if (d3.geoDistance(centroids.get(id), view.center) > 80 * deg) continue;
      const [cx, cy] = projection(centroids.get(id));
      const distance = Math.hypot(cx - x, cy - y);
      if (distance < best) [found, best] = [id, distance];
    }
    return found;
  }

  let drag = null;
  let dragFrame = 0;

  canvas.addEventListener('pointerdown', event => {
    if (!interactive || !view) return;
    drag = { x: event.clientX, y: event.clientY, from: view, moved: false };
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener('pointermove', event => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    drag.moved = true;
    flight?.stop();
    flight = null;
    // Пиксели сдвига — в градусы на текущем масштабе: точка под пальцем
    // едет вместе с ним. В кадре — грубые контуры, как в полёте.
    const k = 180 / Math.PI / drag.from.scale;
    view = { center: [drag.from.center[0] - dx * k, Math.max(-85, Math.min(85, drag.from.center[1] + dy * k))], scale: drag.from.scale };
    if (!dragFrame) {
      dragFrame = requestAnimationFrame(() => {
        dragFrame = 0;
        draw(view, false);
      });
    }
  });

  canvas.addEventListener('pointerup', event => {
    if (!drag) return;
    const { moved } = drag;
    drag = null;
    if (moved) {
      cancelAnimationFrame(dragFrame);
      dragFrame = 0;
      draw(view, true);
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const id = countryAt(event.clientX - rect.left, event.clientY - rect.top);
    if (id) onSelect(id);
  });

  canvas.addEventListener('pointercancel', () => {
    if (drag?.moved) draw(view, true);
    drag = null;
  });

  // Safari на iPhone шлёт resize всякий раз, когда прячет или показывает свою
  // панель при прокрутке, а холст при этом того же размера. Раньше такой
  // resize останавливал перелёт, и глобус замирал на полпути между странами.
  // Идущий перелёт следующим кадром сам нарисует глобус в новом размере.
  function refit() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height || (rect.width === W && rect.height === H)) return;
    resize();
    if (view && !flight) draw(view, true);
  }

  addEventListener('resize', refit);
  resize();

  return {
    show,
    showNeighbours,
    // Холст сменил размер не от окна (другой раздел, другая вёрстка).
    refit,
    setInteractive(value) {
      interactive = value;
    },
  };
}
