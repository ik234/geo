#!/usr/bin/env python3
"""Собирает detective/dist/sw.js: список файлов для офлайна и версию кэша.

Версия — хэш содержимого всех файлов, а не число, которое надо не забыть
поднять. Поменялся любой байт — поменялась версия — браузер перекачает кэш.
Workflow вызывает его перед публикацией; пути считаются от расположения файла.
"""
import hashlib, json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
SKIP = {'sw.js', '.DS_Store'}
# Только с сетью: векторные гербы для окна увеличения в атласе весят 61 МБ.
# В офлайн-кэш они не идут и при просмотре туда не складываются, а без сети
# окно показывает маленький герб из кэша. В версию кэша они тоже не входят:
# правка SVG не должна заставлять устройства перекачивать весь офлайн.
# proto/ — прототипы для просмотра на устройствах; из игры на них ссылок нет.
ONLINE_ONLY = ('assets/coats-svg/', 'proto/')

candidates = [
    p for p in DIST.rglob('*')
    if p.is_file() and p.name not in SKIP and not p.name.startswith('.')
]
online_only = [p for p in candidates if p.relative_to(DIST).as_posix().startswith(ONLINE_ONLY)]
files = sorted(p for p in candidates if p not in online_only)
if not files:
    sys.exit('dist пуст — нечего кэшировать')

digest = hashlib.sha256()
for p in files:
    digest.update(p.relative_to(DIST).as_posix().encode())
    digest.update(p.read_bytes())
version = digest.hexdigest()[:12]

# index.html кладём и под именем './': навигация на корень каталога приходит
# именно этим адресом, а без него офлайн-старт с домашнего экрана не сработает.
urls = ['./'] + [p.relative_to(DIST).as_posix() for p in files]
listing = ',\n  '.join(f'"{u}"' for u in urls)
total = sum(p.stat().st_size for p in files)
online_js = json.dumps(['/' + d for d in ONLINE_ONLY])

(DIST / 'sw.js').write_text(f'''// Файл собирается detective/tools/gen-sw.py — править руками бессмысленно.
const VERSION = '{version}';
const CACHE = 'geo-' + VERSION;
const ASSETS = [
  {listing}
];
const ONLINE_ONLY = {online_js};

// addAll падает целиком, если хоть один запрос не удался, поэтому кладём
// по одному: пропущенный флаг не должен отменять весь офлайн.
self.addEventListener('install', event => {{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.all(ASSETS.map(url => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
}});

self.addEventListener('activate', event => {{
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
}});

// Cache-first: сайт статический, свежесть даёт новая версия кэша, а не запрос
// к сети. Зато в дороге без связи всё открывается мгновенно.
self.addEventListener('fetch', event => {{
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Мимо кэша прямо в сеть; без сети запрос просто не удаётся.
  if (ONLINE_ONLY.some(dir => url.pathname.includes(dir))) return;

  event.respondWith(
    caches.match(request).then(hit => {{
      if (hit) return hit;
      return fetch(request)
        .then(response => {{
          if (response.ok && response.type === 'basic') {{
            const copy = response.clone();
            caches.open(CACHE).then(cache => cache.put(request, copy));
          }}
          return response;
        }})
        .catch(() => (request.mode === 'navigate' ? caches.match('./') : Response.error()));
    }})
  );
}});
''', encoding='utf-8')

online_total = sum(p.stat().st_size for p in online_only)
print(f'sw.js: версия {version}, {len(urls)} адресов, {total/1024/1024:.1f} МБ; '
      f'только с сетью: {len(online_only)} файлов, {online_total/1024/1024:.1f} МБ')
