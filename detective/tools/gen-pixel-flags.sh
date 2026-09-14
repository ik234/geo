#!/bin/sh
# Собирает dist/assets/flags-pixel/: каждый флаг ужат до 12×9 точек для
# эффекта «пиксели» на сложном уровне. Готовые картинки, а не canvas в
# браузере: у SVG флагов нет собственных размеров, только viewBox, а такие SVG
# Safari рисует на canvas ненадёжно.
#
# SVG рисует WebKit через qlmanage: встроенный рендерер ImageMagick теряет
# кривые, и у Бразилии пропал бы синий круг. qlmanage кладёт флаг 4:3 в квадрат
# 640×640 ровно в строки 80–559; -scale усредняет цвет по каждой клетке.
# Запускать после добавления или правки флагов, на macOS.
set -e
cd "$(dirname "$0")/../dist"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
qlmanage -t -s 640 -o "$tmp" assets/flags/*.svg >/dev/null
mkdir -p assets/flags-pixel
count=0
for png in "$tmp"/*.svg.png; do
  id=$(basename "$png" .svg.png)
  magick "$png" -crop 640x480+0+80 +repage -scale '12x9!' -strip "PNG24:assets/flags-pixel/$id.png"
  count=$((count + 1))
done
echo "пиксельных флагов: $count"
