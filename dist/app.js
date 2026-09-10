import world from './assets/world.mjs';

const $ = selector => document.querySelector(selector);
const langs = ['ru', 'en', 'pt'];

const ui = {
  ru: {
    weekdays: 'Дни недели ↗',
    months: 'Все 12 месяцев ↗',
    siteTitle: 'Географический детектив',
    navMaps: 'Карты',
    viewGroup: 'Режим',
    topicGroup: 'Тема',
    levelGroup: 'Сложность',
    language: 'Язык',
    viewQuiz: 'Загадки',
    viewExplore: 'Карта',
    modeMixed: 'Всё вперемешку',
    modeFlags: 'Флаги',
    modeAnimals: 'Животные',
    levelMax: 'Максимальный',
    levelEasy: 'Базовый',
    quizEyebrow: 'ЭКСПЕДИЦИЯ НА ПЯТЬ ЗАГАДОК',
    quizTitle: 'Куда отправимся?',
    exploreEyebrow: 'АТЛАС ДЛЯ ИССЛЕДОВАНИЯ',
    exploreTitle: 'Что найдём на карте?',
    clueTag: 'ЗАГАДКА {current} / {total}',
    finishEyebrow: 'ЭКСПЕДИЦИЯ ЗАВЕРШЕНА',
    finishTitle: 'Пять загадок раскрыты!',
    finishText: 'Выбери другую тему или отправляйся в новый раунд.',
    playAgain: 'Ещё пять загадок',
    flagQuestion: 'Чей это флаг?',
    animalQuestion: 'Где его родной дом?',
    flagAltHidden: 'Фрагмент флага',
    flagPartial: 'Часть флага скрыта. Узнаешь?',
    flagHintOpen: 'Теперь флаг открыт целиком.',
    animalPrompt: 'Где живёт в природе, а не в зоопарке?',
    solved: 'Разгадано!',
    wrong: 'Пока не совпало. Попробуй другой вариант — спешить не нужно.',
    hint: 'Подсказка',
    reveal: 'Узнать ответ',
    next: 'Следующая загадка →',
    finishRound: 'Завершить раунд',
    all: 'Всё',
    flags: 'Флаги',
    animals: 'Животные',
    country: 'СТРАНА / ТЕРРИТОРИЯ',
    animal: 'ЖИВОТНОЕ',
    countryFact: 'Это флаг страны или территории: {name}. После ответа она подсвечивается на карте.',
    animalPointNote: 'Точка — пример места, не весь ареал',
    mapLabel: 'Карта стран и животных',
    exploreHelp: 'Нажми на выделенную страну или точку животного',
    resultMapLabel: '{name} на карте',
    footerLead: 'Без спешки. Подсказки разрешены — играйте вместе.',
    sourcesTitle: 'Об игре и источниках',
    sourceFlags: 'Флаги:',
    sourceMap: 'Контуры: Natural Earth / D3 Maps. Карта мира схематическая; маленькие страны могут быть едва заметны. У животных отмечен пример места в регионе обитания, а не весь ареал. Значки животных условные.',
    sourceFacts: 'Факты:',
  },
  en: {
    weekdays: 'Weekdays ↗',
    months: 'All 12 months ↗',
    siteTitle: 'Geography Detective',
    navMaps: 'Maps',
    viewGroup: 'Mode',
    topicGroup: 'Topic',
    levelGroup: 'Difficulty',
    language: 'Language',
    viewQuiz: 'Clues',
    viewExplore: 'Map',
    modeMixed: 'Mixed',
    modeFlags: 'Flags',
    modeAnimals: 'Animals',
    levelMax: 'Maximum',
    levelEasy: 'Basic',
    quizEyebrow: 'FIVE-CLUE EXPEDITION',
    quizTitle: 'Where shall we go?',
    exploreEyebrow: 'EXPLORATION ATLAS',
    exploreTitle: 'What can we find on the map?',
    clueTag: 'CLUE {current} / {total}',
    finishEyebrow: 'EXPEDITION COMPLETE',
    finishTitle: 'Five clues solved!',
    finishText: 'Choose another topic or start a new round.',
    playAgain: 'Five more clues',
    flagQuestion: 'Whose flag is this?',
    animalQuestion: 'Where is its native home?',
    flagAltHidden: 'Flag fragment',
    flagPartial: 'Part of the flag is hidden. Can you tell?',
    flagHintOpen: 'Now the whole flag is visible.',
    animalPrompt: 'Where does it live in the wild, not in a zoo?',
    solved: 'Solved!',
    wrong: 'Not quite. Try another answer; there is no rush.',
    hint: 'Hint',
    reveal: 'Show answer',
    next: 'Next clue →',
    finishRound: 'Finish round',
    all: 'All',
    flags: 'Flags',
    animals: 'Animals',
    country: 'COUNTRY / TERRITORY',
    animal: 'ANIMAL',
    countryFact: 'This is the flag of {name}. After the answer, it is highlighted on the map.',
    animalPointNote: 'The point is one example place, not the whole range',
    mapLabel: 'Map of countries and animals',
    exploreHelp: 'Tap a highlighted country or animal point',
    resultMapLabel: '{name} on the map',
    footerLead: 'Take your time. Hints are allowed; play together.',
    sourcesTitle: 'About the game and sources',
    sourceFlags: 'Flags:',
    sourceMap: 'Outlines: Natural Earth / D3 Maps. The world map is schematic; small countries may be hard to see. Animal points mark one example place in the habitat region, not the whole range. Animal icons are symbolic.',
    sourceFacts: 'Facts:',
  },
  pt: {
    weekdays: 'Dias da semana ↗',
    months: 'Todos os 12 meses ↗',
    siteTitle: 'Detetive de Geografia',
    navMaps: 'Mapas',
    viewGroup: 'Modo',
    topicGroup: 'Tema',
    levelGroup: 'Dificuldade',
    language: 'Idioma',
    viewQuiz: 'Pistas',
    viewExplore: 'Mapa',
    modeMixed: 'Misturado',
    modeFlags: 'Bandeiras',
    modeAnimals: 'Animais',
    levelMax: 'Máximo',
    levelEasy: 'Básico',
    quizEyebrow: 'EXPEDIÇÃO DE CINCO PISTAS',
    quizTitle: 'Para onde vamos?',
    exploreEyebrow: 'ATLAS PARA EXPLORAR',
    exploreTitle: 'O que vamos encontrar no mapa?',
    clueTag: 'PISTA {current} / {total}',
    finishEyebrow: 'EXPEDIÇÃO CONCLUÍDA',
    finishTitle: 'Cinco pistas resolvidas!',
    finishText: 'Escolhe outro tema ou começa uma nova rodada.',
    playAgain: 'Mais cinco pistas',
    flagQuestion: 'De quem é esta bandeira?',
    animalQuestion: 'Onde vive na natureza?',
    flagAltHidden: 'Fragmento da bandeira',
    flagPartial: 'Parte da bandeira está escondida. Consegues reconhecer?',
    flagHintOpen: 'Agora a bandeira está inteira.',
    animalPrompt: 'Onde vive na natureza, e não no zoológico?',
    solved: 'Descoberto!',
    wrong: 'Ainda não. Tenta outra resposta; não há pressa.',
    hint: 'Dica',
    reveal: 'Ver resposta',
    next: 'Próxima pista →',
    finishRound: 'Terminar rodada',
    all: 'Tudo',
    flags: 'Bandeiras',
    animals: 'Animais',
    country: 'PAÍS / TERRITÓRIO',
    animal: 'ANIMAL',
    countryFact: 'Esta é a bandeira de {name}. Depois da resposta, o lugar aparece destacado no mapa.',
    animalPointNote: 'O ponto é um exemplo de lugar, não toda a área',
    mapLabel: 'Mapa de países e animais',
    exploreHelp: 'Toca num país marcado ou num ponto de animal',
    resultMapLabel: '{name} no mapa',
    footerLead: 'Sem pressa. As dicas são permitidas; joguem juntos.',
    sourcesTitle: 'Sobre o jogo e as fontes',
    sourceFlags: 'Bandeiras:',
    sourceMap: 'Contornos: Natural Earth / D3 Maps. O mapa-múndi é esquemático; países pequenos podem ficar difíceis de ver. Os pontos dos animais mostram um exemplo de lugar na região de habitat, não toda a área. Os ícones de animais são simbólicos.',
    sourceFacts: 'Fatos:',
  },
};

const countryNameOverrides = {
  ru: { xk: 'Косово', eh: 'Западная Сахара', tf: 'Французские Южные и Антарктические территории', fk: 'Фолклендские острова', nc: 'Новая Каледония', gl: 'Гренландия', pr: 'Пуэрто-Рико' },
  en: { xk: 'Kosovo', eh: 'Western Sahara', tf: 'French Southern and Antarctic Lands', fk: 'Falkland Islands', nc: 'New Caledonia', gl: 'Greenland', pr: 'Puerto Rico' },
  pt: { xk: 'Kosovo', eh: 'Saara Ocidental', tf: 'Terras Austrais e Antárticas Francesas', fk: 'Ilhas Malvinas', nc: 'Nova Caledónia', gl: 'Gronelândia', pr: 'Porto Rico' },
};

const easyFlagFacts = {
  pt: { ru: 'Зелёное и красное поля, а между ними — герб.', en: 'Green and red fields with the coat of arms between them.', pt: 'Campos verde e vermelho, com o brasão entre eles.' },
  es: { ru: 'Красная, жёлтая, красная: средняя полоса шире.', en: 'Red, yellow, red: the middle stripe is wider.', pt: 'Vermelho, amarelo, vermelho: a faixa do meio é mais larga.' },
  fr: { ru: 'Три вертикальные полосы: синяя, белая и красная.', en: 'Three vertical stripes: blue, white and red.', pt: 'Três faixas verticais: azul, branca e vermelha.' },
  it: { ru: 'Три вертикальные полосы: зелёная, белая и красная.', en: 'Three vertical stripes: green, white and red.', pt: 'Três faixas verticais: verde, branca e vermelha.' },
  de: { ru: 'Сверху вниз: чёрный, красный, золотой.', en: 'From top to bottom: black, red and gold.', pt: 'De cima para baixo: preto, vermelho e dourado.' },
  gb: { ru: 'В одном флаге соединены прямые и диагональные кресты.', en: 'Straight and diagonal crosses are combined in one flag.', pt: 'Cruzes retas e diagonais juntas numa só bandeira.' },
  ie: { ru: 'Зелёная, белая и оранжевая вертикальные полосы.', en: 'Green, white and orange vertical stripes.', pt: 'Faixas verticais verde, branca e laranja.' },
  se: { ru: 'Жёлтый крест на синем фоне.', en: 'A yellow cross on a blue field.', pt: 'Uma cruz amarela sobre fundo azul.' },
  no: { ru: 'Синий крест с белой каймой на красном фоне.', en: 'A blue cross with a white border on a red field.', pt: 'Uma cruz azul com borda branca sobre fundo vermelho.' },
  fi: { ru: 'Синий крест на белом фоне.', en: 'A blue cross on a white field.', pt: 'Uma cruz azul sobre fundo branco.' },
  ch: { ru: 'Белый крест на красном фоне.', en: 'A white cross on a red field.', pt: 'Uma cruz branca sobre fundo vermelho.' },
  gr: { ru: 'Синие и белые полосы и белый крест в углу.', en: 'Blue and white stripes with a white cross in the corner.', pt: 'Faixas azuis e brancas com uma cruz branca no canto.' },
  pl: { ru: 'Белая полоса сверху, красная снизу.', en: 'White stripe on top, red stripe below.', pt: 'Faixa branca em cima, vermelha em baixo.' },
  ua: { ru: 'Синяя полоса сверху, жёлтая снизу.', en: 'Blue stripe on top, yellow stripe below.', pt: 'Faixa azul em cima, amarela em baixo.' },
  br: { ru: 'Жёлтый ромб на зелёном фоне, внутри — синий круг.', en: 'A yellow diamond on green, with a blue circle inside.', pt: 'Um losango amarelo no verde, com um círculo azul dentro.' },
  ar: { ru: 'Голубая, белая, голубая полосы и солнце в центре.', en: 'Light blue, white, light blue stripes and a sun in the center.', pt: 'Faixas azul-claro, branca, azul-claro e um sol no centro.' },
  ca: { ru: 'В центре — красный кленовый лист.', en: 'A red maple leaf is in the center.', pt: 'Uma folha de bordo vermelha fica no centro.' },
  us: { ru: 'Полосы и звёзды в синем прямоугольнике.', en: 'Stripes and stars in a blue rectangle.', pt: 'Faixas e estrelas num retângulo azul.' },
  mx: { ru: 'Зелёная, белая, красная полосы; на белой — герб с орлом.', en: 'Green, white and red stripes; the white stripe has an eagle coat of arms.', pt: 'Faixas verde, branca e vermelha; na branca há um brasão com águia.' },
  jp: { ru: 'Красный круг на белом фоне.', en: 'A red circle on a white field.', pt: 'Um círculo vermelho sobre fundo branco.' },
  cn: { ru: 'Пять жёлтых звёзд на красном фоне.', en: 'Five yellow stars on a red field.', pt: 'Cinco estrelas amarelas sobre fundo vermelho.' },
  in: { ru: 'На белой полосе — синее колесо.', en: 'A blue wheel sits on the white stripe.', pt: 'Uma roda azul fica na faixa branca.' },
  au: { ru: 'На синем фоне — звёзды и британский флаг в углу.', en: 'On a blue field: stars and the British flag in the corner.', pt: 'No fundo azul: estrelas e a bandeira britânica no canto.' },
  za: { ru: 'Зелёная фигура напоминает букву Y.', en: 'The green shape looks like the letter Y.', pt: 'A forma verde lembra a letra Y.' },
};

const countries = [
  ['af', 'AFG'], ['ao', 'AGO'], ['al', 'ALB'], ['ae', 'ARE'], ['ar', 'ARG'], ['am', 'ARM'], ['aq', 'ATA'], ['tf', 'ATF'], ['au', 'AUS'], ['at', 'AUT'], ['az', 'AZE'], ['bi', 'BDI'], ['be', 'BEL'], ['bj', 'BEN'], ['bf', 'BFA'], ['bd', 'BGD'], ['bg', 'BGR'], ['bs', 'BHS'], ['ba', 'BIH'], ['by', 'BLR'], ['bz', 'BLZ'], ['bo', 'BOL'], ['br', 'BRA'], ['bn', 'BRN'], ['bt', 'BTN'], ['bw', 'BWA'], ['cf', 'CAF'], ['ca', 'CAN'], ['ch', 'CHE'], ['cl', 'CHL'], ['cn', 'CHN'], ['ci', 'CIV'], ['cm', 'CMR'], ['cd', 'COD'], ['cg', 'COG'], ['co', 'COL'], ['cr', 'CRI'], ['cu', 'CUB'], ['cy', 'CYP'], ['cz', 'CZE'], ['de', 'DEU'], ['dj', 'DJI'], ['dk', 'DNK'], ['do', 'DOM'], ['dz', 'DZA'], ['ec', 'ECU'], ['eg', 'EGY'], ['er', 'ERI'], ['es', 'ESP'], ['ee', 'EST'], ['et', 'ETH'], ['fi', 'FIN'], ['fj', 'FJI'], ['fk', 'FLK'], ['fr', 'FRA'], ['ga', 'GAB'], ['gb', 'GBR'], ['ge', 'GEO'], ['gh', 'GHA'], ['gn', 'GIN'], ['gm', 'GMB'], ['gw', 'GNB'], ['gq', 'GNQ'], ['gr', 'GRC'], ['gl', 'GRL'], ['gt', 'GTM'], ['gy', 'GUY'], ['hn', 'HND'], ['hr', 'HRV'], ['ht', 'HTI'], ['hu', 'HUN'], ['id', 'IDN'], ['in', 'IND'], ['ie', 'IRL'], ['ir', 'IRN'], ['iq', 'IRQ'], ['is', 'ISL'], ['il', 'ISR'], ['it', 'ITA'], ['jm', 'JAM'], ['jo', 'JOR'], ['jp', 'JPN'], ['kz', 'KAZ'], ['ke', 'KEN'], ['kg', 'KGZ'], ['kh', 'KHM'], ['kr', 'KOR'], ['xk', 'KOS'], ['kw', 'KWT'], ['la', 'LAO'], ['lb', 'LBN'], ['lr', 'LBR'], ['ly', 'LBY'], ['lk', 'LKA'], ['ls', 'LSO'], ['lt', 'LTU'], ['lu', 'LUX'], ['lv', 'LVA'], ['ma', 'MAR'], ['md', 'MDA'], ['mg', 'MDG'], ['mx', 'MEX'], ['mk', 'MKD'], ['ml', 'MLI'], ['mm', 'MMR'], ['me', 'MNE'], ['mn', 'MNG'], ['mz', 'MOZ'], ['mr', 'MRT'], ['mw', 'MWI'], ['my', 'MYS'], ['na', 'NAM'], ['nc', 'NCL'], ['ne', 'NER'], ['ng', 'NGA'], ['ni', 'NIC'], ['nl', 'NLD'], ['no', 'NOR'], ['np', 'NPL'], ['nz', 'NZL'], ['om', 'OMN'], ['pk', 'PAK'], ['pa', 'PAN'], ['pe', 'PER'], ['ph', 'PHL'], ['pg', 'PNG'], ['pl', 'POL'], ['pr', 'PRI'], ['kp', 'PRK'], ['pt', 'PRT'], ['py', 'PRY'], ['ps', 'PSX'], ['qa', 'QAT'], ['ro', 'ROU'], ['ru', 'RUS'], ['rw', 'RWA'], ['eh', 'SAH'], ['sa', 'SAU'], ['sd', 'SDN'], ['ss', 'SDS'], ['sn', 'SEN'], ['sb', 'SLB'], ['sl', 'SLE'], ['sv', 'SLV'], ['so', 'SOM'], ['rs', 'SRB'], ['sr', 'SUR'], ['sk', 'SVK'], ['si', 'SVN'], ['se', 'SWE'], ['sz', 'SWZ'], ['sy', 'SYR'], ['td', 'TCD'], ['tg', 'TGO'], ['th', 'THA'], ['tj', 'TJK'], ['tm', 'TKM'], ['tl', 'TLS'], ['tt', 'TTO'], ['tn', 'TUN'], ['tr', 'TUR'], ['tw', 'TWN'], ['tz', 'TZA'], ['ug', 'UGA'], ['ua', 'UKR'], ['uy', 'URY'], ['us', 'USA'], ['uz', 'UZB'], ['ve', 'VEN'], ['vn', 'VNM'], ['vu', 'VUT'], ['ye', 'YEM'], ['za', 'ZAF'], ['zm', 'ZMB'], ['zw', 'ZWE'],
];

const regions = [
  { ru: 'Китай', en: 'China', pt: 'China' },
  { ru: 'Австралия', en: 'Australia', pt: 'Austrália' },
  { ru: 'Антарктика', en: 'Antarctica', pt: 'Antártida' },
  { ru: 'Южная Америка', en: 'South America', pt: 'América do Sul' },
  { ru: 'Европа', en: 'Europe', pt: 'Europa' },
];

const animals = [
  { id: 'panda', type: 'animal', key: 'animal:panda', emoji: '🐼', names: { ru: 'Большая панда', en: 'Giant panda', pt: 'Panda-gigante' }, region: 0, point: [103, 31], facts: { ru: 'Дикие большие панды живут в горных лесах центрального Китая. Их главная еда — бамбук.', en: 'Wild giant pandas live in mountain forests of central China. Their main food is bamboo.', pt: 'Pandas-gigantes selvagens vivem nas florestas montanhosas da China central. O seu alimento principal é o bambu.' } },
  { id: 'koala', type: 'animal', key: 'animal:koala', emoji: '🐨', names: { ru: 'Коала', en: 'Koala', pt: 'Coala' }, region: 1, point: [151, -28], facts: { ru: 'Коалы живут в восточной и юго-восточной Австралии и питаются главным образом листьями эвкалипта. Это сумчатые, а не медведи.', en: 'Koalas live in eastern and southeastern Australia and mostly eat eucalyptus leaves. They are marsupials, not bears.', pt: 'Coalas vivem no leste e sudeste da Austrália e comem principalmente folhas de eucalipto. São marsupiais, não ursos.' } },
  { id: 'penguin', type: 'animal', key: 'animal:penguin', emoji: '🐧', names: { ru: 'Императорский пингвин', en: 'Emperor penguin', pt: 'Pinguim-imperador' }, region: 2, point: [40, -70], facts: { ru: 'Императорские пингвины живут у берегов Антарктиды. Они размножаются на морском льду во время антарктической зимы.', en: 'Emperor penguins live around Antarctica. They breed on sea ice during the Antarctic winter.', pt: 'Pinguins-imperadores vivem perto da costa da Antártida. Reproduzem-se no gelo marinho durante o inverno antártico.' } },
  { id: 'kangaroo', type: 'animal', key: 'animal:kangaroo', emoji: '🦘', names: { ru: 'Рыжий кенгуру', en: 'Red kangaroo', pt: 'Canguru-vermelho' }, region: 1, point: [134, -25], facts: { ru: 'Рыжие кенгуру населяют открытые засушливые области Австралии. Это самые крупные современные сумчатые.', en: 'Red kangaroos live in open dry regions of Australia. They are the largest living marsupials.', pt: 'Cangurus-vermelhos vivem em regiões abertas e secas da Austrália. São os maiores marsupiais vivos.' } },
  { id: 'capybara', type: 'animal', key: 'animal:capybara', emoji: '🐾', names: { ru: 'Капибара', en: 'Capybara', pt: 'Capivara' }, region: 3, point: [-57, -16], facts: { ru: 'Обыкновенная капибара живёт в Южной Америке, рядом с водой. Это крупнейший современный грызун. Она хорошо плавает и ныряет.', en: 'Capybaras live in South America near water. They are the largest living rodents and swim and dive well.', pt: 'Capivaras vivem na América do Sul, perto da água. São os maiores roedores vivos e nadam e mergulham bem.' } },
];

let lang = 'ru';
let mode = 'mixed';
let level = 'max';
let view = 'quiz';
let exploreKind = 'all';
let selectedKey = 'flag:pt';
let round = [];
let pos = 0;
let solved = false;
let hinted = false;
let wrong = new Set();

function tr(key, vars = {}) {
  return (ui[lang][key] || ui.ru[key] || key).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function countryName(id, locale = lang) {
  return countryNameOverrides[locale]?.[id] || new Intl.DisplayNames([locale], { type: 'region' }).of(id.toUpperCase()) || id.toUpperCase();
}

function name(item) {
  return item.type === 'flag' ? countryName(item.id) : item.names[lang];
}

function fact(item) {
  if (item.type === 'animal') return item.facts[lang];
  return item.facts?.[lang] || tr('countryFact', { name: name(item) });
}

function regionName(index) {
  return regions[index][lang];
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const easyIds = new Set(Object.keys(easyFlagFacts));
const flags = countries.map(([id, iso]) => ({
  id,
  iso,
  type: 'flag',
  key: `flag:${id}`,
  tier: easyIds.has(id) ? 'easy' : 'max',
  facts: easyFlagFacts[id],
}));
const allItems = [...flags, ...animals];

function flagPool() {
  return level === 'easy' ? flags.filter(flag => flag.tier === 'easy') : flags;
}

function visibleItems() {
  if (exploreKind === 'flags') return flags;
  if (exploreKind === 'animals') return animals;
  return allItems;
}

function selectedItem() {
  return allItems.find(item => item.key === selectedKey) || visibleItems()[0];
}

function setStaticText() {
  document.documentElement.lang = lang;
  document.title = tr('siteTitle');
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = tr(node.dataset.i18n);
  });
  document.querySelector('nav').setAttribute('aria-label', tr('navMaps'));
  document.querySelector('.view-modes').setAttribute('aria-label', tr('viewGroup'));
  document.querySelector('.topic-modes').setAttribute('aria-label', tr('topicGroup'));
  document.querySelector('.level-modes').setAttribute('aria-label', tr('levelGroup'));
  document.querySelector('[data-view="quiz"]').textContent = tr('viewQuiz');
  document.querySelector('[data-view="explore"]').textContent = tr('viewExplore');
  document.querySelector('[data-mode="mixed"]').textContent = tr('modeMixed');
  document.querySelector('[data-mode="flags"]').textContent = tr('modeFlags');
  document.querySelector('[data-mode="animals"]').textContent = tr('modeAnimals');
  document.querySelector('[data-level="max"]').textContent = tr('levelMax');
  document.querySelector('[data-level="easy"]').textContent = tr('levelEasy');
}

function setChrome() {
  const quiz = view === 'quiz';
  setStaticText();
  $('#eyebrow').textContent = tr(quiz ? 'quizEyebrow' : 'exploreEyebrow');
  $('#title').textContent = tr(quiz ? 'quizTitle' : 'exploreTitle');
  document.querySelector('.topic-modes').hidden = !quiz;
  document.querySelector('.level-modes').hidden = !quiz || mode === 'animals';
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
}

function start() {
  const availableFlags = flagPool();
  const pool = mode === 'flags'
    ? shuffle(availableFlags)
    : mode === 'animals'
      ? shuffle(animals)
      : shuffle([...shuffle(availableFlags).slice(0, 3), ...shuffle(animals).slice(0, 2)]);

  round = pool.slice(0, 5).map(question => ({
    ...question,
    options: question.type === 'flag'
      ? shuffle([question, ...shuffle(availableFlags.filter(flag => flag.id !== question.id)).slice(0, 3)]).map(flag => flag.id)
      : shuffle([question.region, ...shuffle(regions.map((_, index) => index).filter(index => index !== question.region)).slice(0, 3)]),
  }));
  pos = 0;
  reset();
  render();
}

function reset() {
  solved = false;
  hinted = false;
  wrong.clear();
}

function render() {
  setChrome();
  if (view === 'explore') {
    renderExplore();
    return;
  }

  const q = round[pos];
  $('#progress').hidden = false;
  $('#game').className = 'game';
  $('#progress').innerHTML = round.map((_, index) => `<span class="step ${index < pos ? 'done' : index === pos ? 'current' : ''}"></span>`).join('');

  if (!q) {
    $('#game').innerHTML = `<div class="finish"><p class="eyebrow">${tr('finishEyebrow')}</p><h2>${tr('finishTitle')}</h2><p>${tr('finishText')}</p><button class="primary" id="again">${tr('playAgain')}</button></div>`;
    $('#again').onclick = start;
    return;
  }

  const visual = q.type === 'flag'
    ? `<div class="flag-window"><img class="${hinted || solved ? 'revealed' : ''}" src="assets/flags/${q.id}.svg" alt="${escapeHtml(solved ? name(q) : tr('flagAltHidden'))}"></div>`
    : `<span class="animal" aria-hidden="true">${q.emoji}</span><strong>${escapeHtml(name(q))}</strong>`;
  const visualNote = solved ? '<div class="result-map" id="map"></div>' : `<small>${q.type === 'flag' ? tr('flagPartial') : tr('animalPrompt')}</small>`;
  const message = solved
    ? `<strong>${tr('solved')}</strong> ${escapeHtml(fact(q))}`
    : wrong.size
      ? tr('wrong')
      : hinted
        ? (q.type === 'flag' ? tr('flagHintOpen') : escapeHtml(fact(q)))
        : '';

  $('#game').innerHTML = `
    <div class="visual">${visual}${visualNote}</div>
    <div class="question">
      <span class="tag">${tr('clueTag', { current: pos + 1, total: 5 })}</span>
      <h2>${q.type === 'flag' ? tr('flagQuestion') : tr('animalQuestion')}</h2>
      <div class="choices">${q.options.map(id => choiceButton(q, id)).join('')}</div>
      <p class="message" role="status">${message}</p>
      <div class="actions">${solved ? `<button class="primary" id="next">${pos === 4 ? tr('finishRound') : tr('next')}</button>` : `<button id="hint">${tr('hint')}</button><button id="reveal">${tr('reveal')}</button>`}</div>
    </div>`;

  document.querySelectorAll('[data-answer]').forEach(button => {
    button.onclick = () => {
      const answer = q.type === 'flag' ? button.dataset.answer : Number(button.dataset.answer);
      if (answer === (q.type === 'flag' ? q.id : q.region)) solved = true;
      else wrong.add(answer);
      render();
    };
  });

  if (solved) {
    $('#next').onclick = () => {
      pos++;
      reset();
      render();
    };
    drawResult(q);
  } else {
    $('#hint').onclick = () => {
      hinted = true;
      render();
    };
    $('#reveal').onclick = () => {
      solved = true;
      render();
    };
  }
}

function choiceButton(question, id) {
  const correct = question.type === 'flag' ? id === question.id : id === question.region;
  const label = question.type === 'flag' ? name(flags.find(flag => flag.id === id)) : regionName(id);
  return `<button data-answer="${id}" ${solved || wrong.has(id) ? 'disabled' : ''} class="${solved && correct ? 'correct' : ''}">${escapeHtml(label)}${solved && correct ? ' ✓' : ''}</button>`;
}

function renderExplore() {
  const item = selectedItem();
  const items = visibleItems();
  if (!items.some(candidate => candidate.key === item.key)) selectedKey = items[0].key;
  const current = selectedItem();

  $('#progress').hidden = true;
  $('#game').className = 'game explore';
  $('#game').innerHTML = `
    <div class="explore-map" id="exploreMap"></div>
    <div class="atlas">
      <div class="explore-tabs" aria-label="${escapeHtml(tr('exploreTitle'))}">
        <button data-kind="all" class="${exploreKind === 'all' ? 'active' : ''}">${tr('all')}</button>
        <button data-kind="flags" class="${exploreKind === 'flags' ? 'active' : ''}">${tr('flags')}</button>
        <button data-kind="animals" class="${exploreKind === 'animals' ? 'active' : ''}">${tr('animals')}</button>
      </div>
      <article class="fact-card">
        ${current.type === 'flag' ? `<img src="assets/flags/${current.id}.svg" alt="${escapeHtml(name(current))}">` : `<span class="animal-mini" aria-hidden="true">${current.emoji}</span>`}
        <div><span class="tag">${current.type === 'flag' ? tr('country') : tr('animal')}</span><h2>${escapeHtml(name(current))}</h2><p>${current.type === 'animal' ? `${escapeHtml(regionName(current.region))}. ` : ''}${escapeHtml(fact(current))}</p></div>
      </article>
      <div class="item-list" aria-label="${escapeHtml(tr('mapLabel'))}">${items.map(listItem).join('')}</div>
    </div>`;

  document.querySelectorAll('[data-kind]').forEach(button => {
    button.onclick = () => {
      exploreKind = button.dataset.kind;
      selectedKey = visibleItems()[0].key;
      renderExplore();
    };
  });
  document.querySelectorAll('[data-item]').forEach(button => {
    button.onclick = () => {
      selectedKey = button.dataset.item;
      renderExplore();
    };
  });
  drawExplore(current);
}

function listItem(item) {
  return `<button data-item="${item.key}" class="${item.key === selectedKey ? 'active' : ''}">${item.type === 'flag' ? `<img src="assets/flags/${item.id}.svg" alt="">` : `<span aria-hidden="true">${item.emoji}</span>`}<span>${escapeHtml(name(item))}</span></button>`;
}

function baseMap(container, label) {
  const features = topojson.feature(world, world.objects.features).features;
  const projection = d3.geoNaturalEarth1().fitExtent([[8, 8], [412, 225]], { type: 'Sphere' });
  const path = d3.geoPath(projection);
  const svg = d3.select(container).append('svg').attr('viewBox', '0 0 420 240').attr('role', 'img').attr('aria-label', label);
  svg.append('path').datum({ type: 'Sphere' }).attr('d', path).attr('fill', '#c7e4eb');
  return { features, projection, path, svg };
}

function drawResult(q) {
  const { features, projection, path, svg } = baseMap('#map', q.type === 'flag' ? tr('resultMapLabel', { name: name(q) }) : tr('animalPointNote'));
  svg.selectAll('.land').data(features).join('path').attr('d', path).attr('fill', feature => q.iso && feature.properties.id === q.iso ? '#f4b333' : '#f6faf6').attr('stroke', '#86a5af').attr('stroke-width', 0.4);
  if (q.point) {
    const [x, y] = projection(q.point);
    svg.append('circle').attr('cx', x).attr('cy', y).attr('r', 6).attr('fill', '#ca501b').attr('stroke', 'white').attr('stroke-width', 2);
  }
  $('#map').insertAdjacentHTML('beforeend', `<small>${q.type === 'flag' ? escapeHtml(name(q)) : tr('animalPointNote')}</small>`);
}

function drawExplore(current) {
  const flagIsos = new Set(flags.map(flag => flag.iso));
  const { features, projection, path, svg } = baseMap('#exploreMap', tr('mapLabel'));
  svg.selectAll('.land').data(features).join('path')
    .attr('d', path)
    .attr('fill', feature => current.iso === feature.properties.id ? '#f4b333' : flagIsos.has(feature.properties.id) ? '#dff0df' : '#f6faf6')
    .attr('stroke', '#86a5af')
    .attr('stroke-width', 0.4)
    .attr('class', feature => flagIsos.has(feature.properties.id) ? 'map-click land' : 'land')
    .on('click', (_, feature) => {
      const found = flags.find(flag => flag.iso === feature.properties.id);
      if (found) {
        selectedKey = found.key;
        renderExplore();
      }
    });
  animals.forEach(animal => {
    const [x, y] = projection(animal.point);
    svg.append('circle').attr('cx', x).attr('cy', y).attr('r', current.key === animal.key ? 7 : 5).attr('fill', current.key === animal.key ? '#ca501b' : '#2f7f8a').attr('stroke', 'white').attr('stroke-width', 2).attr('class', 'map-click').on('click', () => {
      selectedKey = animal.key;
      renderExplore();
    });
  });
  $('#exploreMap').insertAdjacentHTML('beforeend', `<small>${tr('exploreHelp')}</small>`);
}

$('#lang').onchange = event => {
  lang = event.target.value;
  render();
};
document.querySelectorAll('[data-view]').forEach(button => {
  button.onclick = () => {
    view = button.dataset.view;
    render();
  };
});
document.querySelectorAll('[data-level]').forEach(button => {
  button.onclick = () => {
    level = button.dataset.level;
    document.querySelectorAll('[data-level]').forEach(item => item.classList.toggle('active', item === button));
    view = 'quiz';
    start();
  };
});
document.querySelectorAll('[data-mode]').forEach(button => {
  button.onclick = () => {
    mode = button.dataset.mode;
    document.querySelectorAll('[data-mode]').forEach(item => item.classList.toggle('active', item === button));
    view = 'quiz';
    start();
  };
});

start();
flags.forEach(flag => {
  const image = new Image();
  image.src = `assets/flags/${flag.id}.svg`;
});

if (document.modelContext?.registerTool) {
  try {
    Promise.resolve(document.modelContext.registerTool({
      name: 'start_geography_round',
      description: 'Start a fresh five-question geography round and replace the current round.',
      inputSchema: {
        type: 'object',
        properties: {
          mode: { type: 'string', enum: ['mixed', 'flags', 'animals'] },
          level: { type: 'string', enum: ['easy', 'max'] },
        },
        required: ['mode'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute(input) {
        if (!input || !['mixed', 'flags', 'animals'].includes(input.mode)) throw Error('Invalid mode');
        if (input.level && !['easy', 'max'].includes(input.level)) throw Error('Invalid level');
        if (input.level) document.querySelector(`[data-level="${input.level}"]`).click();
        document.querySelector(`[data-mode="${input.mode}"]`).click();
        return { mode, level, questions: round.length };
      },
    })).catch(() => {});
  } catch {}
}
