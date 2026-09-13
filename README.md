# Geo

Единый репозиторий географического продукта.

## Структура

- `detective/` — опубликованный сайт «Географический детектив»: статический `dist/`, PWA, redirect для старого chatgpt.site и инструменты публикации.
- `interactive-maps/` — исходники самостоятельных HTML-карт дней недели, месяцев и начала лета. Опубликованные копии лежат в `detective/dist/weekdays.html`, `detective/dist/months.html` и `detective/dist/summer.html`.

## Публикация

https://ik234.github.io/geo/

GitHub Pages публикует артефакт из `detective/dist/` через `.github/workflows/pages.yml` при каждом push в `main`. Все пути внутри сайта должны оставаться относительными: сайт живёт в подкаталоге `/geo/`.

## Локальный запуск

```sh
python3 -m http.server 8765 --directory detective/dist
```

Затем открыть `http://localhost:8765`.

Карты правятся в `interactive-maps/`, после изменения опубликованные HTML-копии нужно перенести в `detective/dist/`.
