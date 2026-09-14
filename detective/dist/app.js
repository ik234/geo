import world from './assets/world.mjs';

const $ = selector => document.querySelector(selector);
const langs = ['ru', 'en', 'pt', 'es', 'de', 'pl'];

const ui = {
  ru: {


    siteTitle: 'Географический детектив',
    brand: 'ГЕО / ДЕТЕКТИВ',
    viewGroup: 'Режим',
    topicGroup: 'Тема',
    levelGroup: 'Сложность',
    language: 'Язык',
    viewQuiz: 'Загадки',
    viewExplore: 'Карта',
    modeMixed: 'Всё вперемешку',
    modeFlags: 'Флаги',
    modeCoats: 'Гербы',
    modeCapitals: 'Столицы',
    modeAnimals: 'Животные',
    levelEasy: 'Простой',
    levelMedium: 'Средний',
    levelMax: 'Сложный',
    lengthGroup: 'Длина',
    lengthFixed: 'Раунд',
    lengthEndless: 'Бесконечно',
    playerBoard: 'Игрок и результаты',
    playerName: 'Имя для рекорда',
    playerPlaceholder: 'Игрок1',
    savePlayer: 'Записать',
    playerReady: '{name} в таблице.',
    playerPrompt: 'Введи имя, чтобы попасть в таблицу рекордов.',
    playerRejected: 'Такое имя не подойдёт. Выбери другое.',
    scoreboardTitle: 'Рекорды',
    scoreboardScope: '{mode} · {level} · {length}',
    scoreboardEmpty: 'В этой категории пока нет рекордов.',
    scoreMeta: '{correct}/{total} · {date}',
    clearScores: 'Очистить категорию',
    scoreTitle: 'Твой счёт',
    scoreBreakdown: '{correct}/{total} правильных · ошибок: {mistakes} · подсказок: {hints}',
    scoreSaved: 'Результат записан: {score}.',
    scoreGuest: 'Раунд завершён. Введи имя, чтобы записать результат.',
    quizEyebrow: 'ЭКСПЕДИЦИЯ С ЗАГАДКАМИ',
    quizTitle: 'Куда отправимся?',
    exploreEyebrow: 'АТЛАС ДЛЯ ИССЛЕДОВАНИЯ',
    exploreTitle: 'Что найдём на карте?',
    clueTag: 'ЗАГАДКА {current} / {total}',
    finishEyebrow: 'ЭКСПЕДИЦИЯ ЗАВЕРШЕНА',
    finishTitle: 'Раунд завершён!',
    finishText: 'Выбери другую тему или отправляйся в новый раунд.',
    playAgain: 'Новый раунд',
    flagQuestion: 'Чей это флаг?',
    coatQuestion: 'Чей это герб?',
    capitalQuestion: 'Какая столица у этой страны?',
    animalQuestion: 'Где его родной дом?',
    flagAltHidden: 'Фрагмент флага',
    coatAltHidden: 'Герб страны',
    flagPartial: 'Часть флага скрыта. Узнаешь?',
    veilKeyhole: 'Смотрим в замочную скважину. Узнаешь?',
    veilHoles: 'Флаг весь в дырках, как сыр. Узнаешь?',
    veilStrip: 'Видна только узкая полоска. Узнаешь?',
    veilPixels: 'Флаг рассыпался на пиксели. Узнаешь?',
    coatPartial: 'На гербе спрятана страна. Узнаешь?',
    capitalPrompt: 'Выбери столицу страны.',
    flagHintOpen: 'Теперь флаг открыт целиком.',
    coatHintOpen: 'Теперь герб открыт целиком.',
    capitalHint: 'Столица начинается на «{letter}».',
    countryHint: 'Страна начинается на «{letter}».',
    animalPrompt: 'Где живёт в природе, а не в зоопарке?',
    coatSolved: 'Это герб страны {name}.',
    capitalSolved: 'Столица страны {name} — {capital}.',
    solved: 'Разгадано!',
    wrong: 'Пока не совпало. Попробуй другой вариант — спешить не нужно.',
    hint: 'Подсказка',
    reveal: 'Узнать ответ',
    next: 'Следующая загадка →',
    finishRound: 'Завершить раунд',
    countries: 'Страны',
    animals: 'Животные',
    country: 'СТРАНА / ТЕРРИТОРИЯ',
    animal: 'ЖИВОТНОЕ',
    flag: 'Флаг',
    coat: 'Герб',
    zoomFlag: 'Рассмотреть флаг',
    zoomCoat: 'Рассмотреть герб',
    close: 'Закрыть',
    capital: 'Столица',
    currency: 'Валюта',
    officialLanguages: 'Официальные языки',
    flagStory: 'Что на флаге',
    funFact: 'Любопытный факт',
    infoLoading: 'Загружаем сведения…',
    animalPointNote: 'Точка — пример места, не весь ареал',
    mapLabel: 'Карта стран и флагов',
    exploreHelp: 'Нажми на выделенную страну',
    exploreHelpAnimals: 'Нажми на выделенную страну или точку животного',
    resultMapLabel: '{name} на карте',
    footerLead: 'Без спешки. Подсказки разрешены — играйте вместе.',
    sourcesTitle: 'Об игре и источниках',
    sourceFlags: 'Флаги:',
    sourceCoats: 'Гербы:',
    sourceMap: 'Контуры: Natural Earth / D3 Maps. Карта мира схематическая; маленькие страны могут быть едва заметны.',
    sourceFacts: 'Сведения о странах: столица, валюта и официальные языки — по международным кодам, названия валют и языков подставляет браузер. Рассказы о флагах и факты написаны для этой игры.',
  },
  en: {


    siteTitle: 'Geography Detective',
    brand: 'GEO / DETECTIVE',
    viewGroup: 'Mode',
    topicGroup: 'Topic',
    levelGroup: 'Difficulty',
    language: 'Language',
    viewQuiz: 'Clues',
    viewExplore: 'Map',
    modeMixed: 'Mixed',
    modeFlags: 'Flags',
    modeCoats: 'Coats of arms',
    modeCapitals: 'Capitals',
    modeAnimals: 'Animals',
    levelEasy: 'Easy',
    levelMedium: 'Medium',
    levelMax: 'Hard',
    lengthGroup: 'Length',
    lengthFixed: 'Round',
    lengthEndless: 'Endless',
    playerBoard: 'Player and scores',
    playerName: 'Name for the record',
    playerPlaceholder: 'Player1',
    savePlayer: 'Enter',
    playerReady: '{name} is on the board.',
    playerPrompt: 'Enter a name to join the high-score table.',
    playerRejected: 'That name will not work. Choose another one.',
    scoreboardTitle: 'High score',
    scoreboardScope: '{mode} · {level} · {length}',
    scoreboardEmpty: 'No records in this category yet.',
    scoreMeta: '{correct}/{total} · {date}',
    clearScores: 'Clear category',
    scoreTitle: 'Your score',
    scoreBreakdown: '{correct}/{total} correct · mistakes: {mistakes} · hints: {hints}',
    scoreSaved: 'Score saved: {score}.',
    scoreGuest: 'Round complete. Enter a name to save the score.',
    quizEyebrow: 'GEOGRAPHY EXPEDITION',
    quizTitle: 'Where shall we go?',
    exploreEyebrow: 'EXPLORATION ATLAS',
    exploreTitle: 'What can we find on the map?',
    clueTag: 'CLUE {current} / {total}',
    finishEyebrow: 'EXPEDITION COMPLETE',
    finishTitle: 'Round complete!',
    finishText: 'Choose another topic or start a new round.',
    playAgain: 'New round',
    flagQuestion: 'Whose flag is this?',
    coatQuestion: 'Whose coat of arms is this?',
    capitalQuestion: 'What is the capital of this country?',
    animalQuestion: 'Where is its native home?',
    flagAltHidden: 'Flag fragment',
    coatAltHidden: 'Country coat of arms',
    flagPartial: 'Part of the flag is hidden. Can you tell?',
    veilKeyhole: 'Peek through the keyhole. Can you tell?',
    veilHoles: 'This flag is full of holes, like cheese. Can you tell?',
    veilStrip: 'Only a narrow strip is showing. Can you tell?',
    veilPixels: 'The flag fell apart into pixels. Can you tell?',
    coatPartial: 'This coat of arms hides a country. Can you tell?',
    capitalPrompt: 'Choose the country’s capital.',
    flagHintOpen: 'Now the whole flag is visible.',
    coatHintOpen: 'Now the whole coat of arms is visible.',
    capitalHint: 'The capital starts with “{letter}”.',
    countryHint: 'The country starts with “{letter}”.',
    animalPrompt: 'Where does it live in the wild, not in a zoo?',
    coatSolved: 'This is the coat of arms of {name}.',
    capitalSolved: 'The capital of {name} is {capital}.',
    solved: 'Solved!',
    wrong: 'Not quite. Try another answer; there is no rush.',
    hint: 'Hint',
    reveal: 'Show answer',
    next: 'Next clue →',
    finishRound: 'Finish round',
    countries: 'Countries',
    animals: 'Animals',
    country: 'COUNTRY / TERRITORY',
    animal: 'ANIMAL',
    flag: 'Flag',
    coat: 'Coat of arms',
    zoomFlag: 'Zoom in on the flag',
    zoomCoat: 'Zoom in on the coat of arms',
    close: 'Close',
    capital: 'Capital',
    currency: 'Currency',
    officialLanguages: 'Official languages',
    flagStory: 'On the flag',
    funFact: 'Fun fact',
    infoLoading: 'Loading details…',
    animalPointNote: 'The point is one example place, not the whole range',
    mapLabel: 'Map of countries and flags',
    exploreHelp: 'Tap a highlighted country',
    exploreHelpAnimals: 'Tap a highlighted country or animal point',
    resultMapLabel: '{name} on the map',
    footerLead: 'Take your time. Hints are allowed; play together.',
    sourcesTitle: 'About the game and sources',
    sourceFlags: 'Flags:',
    sourceCoats: 'Coats of arms:',
    sourceMap: 'Outlines: Natural Earth / D3 Maps. The world map is schematic; small countries may be hard to see.',
    sourceFacts: 'Country details: capital, currency and official languages come from international codes, and the browser supplies the currency and language names. The flag stories and fun facts were written for this game.',
  },
  pt: {


    siteTitle: 'Detetive de Geografia',
    brand: 'GEO / DETETIVE',
    viewGroup: 'Modo',
    topicGroup: 'Tema',
    levelGroup: 'Dificuldade',
    language: 'Idioma',
    viewQuiz: 'Pistas',
    viewExplore: 'Mapa',
    modeMixed: 'Misturado',
    modeFlags: 'Bandeiras',
    modeCoats: 'Brasões',
    modeCapitals: 'Capitais',
    modeAnimals: 'Animais',
    levelEasy: 'Fácil',
    levelMedium: 'Médio',
    levelMax: 'Difícil',
    lengthGroup: 'Duração',
    lengthFixed: 'Rodada',
    lengthEndless: 'Sem fim',
    playerBoard: 'Jogador e pontuações',
    playerName: 'Nome para o recorde',
    playerPlaceholder: 'Jogador1',
    savePlayer: 'Registar',
    playerReady: '{name} entrou na tabela.',
    playerPrompt: 'Escreve um nome para entrar na tabela de recordes.',
    playerRejected: 'Esse nome não serve. Escolhe outro.',
    scoreboardTitle: 'Recordes',
    scoreboardScope: '{mode} · {level} · {length}',
    scoreboardEmpty: 'Ainda não há recordes nesta categoria.',
    scoreMeta: '{correct}/{total} · {date}',
    clearScores: 'Limpar categoria',
    scoreTitle: 'A tua pontuação',
    scoreBreakdown: '{correct}/{total} certas · erros: {mistakes} · dicas: {hints}',
    scoreSaved: 'Pontuação guardada: {score}.',
    scoreGuest: 'Rodada concluída. Escreve um nome para guardar a pontuação.',
    quizEyebrow: 'EXPEDIÇÃO GEOGRÁFICA',
    quizTitle: 'Para onde vamos?',
    exploreEyebrow: 'ATLAS PARA EXPLORAR',
    exploreTitle: 'O que vamos encontrar no mapa?',
    clueTag: 'PISTA {current} / {total}',
    finishEyebrow: 'EXPEDIÇÃO CONCLUÍDA',
    finishTitle: 'Rodada concluída!',
    finishText: 'Escolhe outro tema ou começa uma nova rodada.',
    playAgain: 'Nova rodada',
    flagQuestion: 'De quem é esta bandeira?',
    coatQuestion: 'De quem é este brasão?',
    capitalQuestion: 'Qual é a capital deste país?',
    animalQuestion: 'Onde vive na natureza?',
    flagAltHidden: 'Fragmento da bandeira',
    coatAltHidden: 'Brasão do país',
    flagPartial: 'Parte da bandeira está escondida. Consegues reconhecer?',
    veilKeyhole: 'Espreita pelo buraco da fechadura. Consegues reconhecer?',
    veilHoles: 'A bandeira está cheia de buracos, como um queijo. Consegues reconhecer?',
    veilStrip: 'Só se vê uma faixa estreita. Consegues reconhecer?',
    veilPixels: 'A bandeira desfez-se em píxeis. Consegues reconhecer?',
    coatPartial: 'Este brasão esconde um país. Consegues reconhecer?',
    capitalPrompt: 'Escolhe a capital do país.',
    flagHintOpen: 'Agora a bandeira está inteira.',
    coatHintOpen: 'Agora o brasão está inteiro.',
    capitalHint: 'A capital começa por “{letter}”.',
    countryHint: 'O país começa por “{letter}”.',
    animalPrompt: 'Onde vive na natureza, e não no zoológico?',
    coatSolved: 'Este é o brasão de {name}.',
    capitalSolved: 'A capital de {name} é {capital}.',
    solved: 'Descoberto!',
    wrong: 'Ainda não. Tenta outra resposta; não há pressa.',
    hint: 'Dica',
    reveal: 'Ver resposta',
    next: 'Próxima pista →',
    finishRound: 'Terminar rodada',
    countries: 'Países',
    animals: 'Animais',
    country: 'PAÍS / TERRITÓRIO',
    animal: 'ANIMAL',
    flag: 'Bandeira',
    coat: 'Brasão',
    zoomFlag: 'Ampliar a bandeira',
    zoomCoat: 'Ampliar o brasão',
    close: 'Fechar',
    capital: 'Capital',
    currency: 'Moeda',
    officialLanguages: 'Línguas oficiais',
    flagStory: 'Na bandeira',
    funFact: 'Facto curioso',
    infoLoading: 'A carregar detalhes…',
    animalPointNote: 'O ponto é um exemplo de lugar, não toda a área',
    mapLabel: 'Mapa de países e bandeiras',
    exploreHelp: 'Toca num país marcado',
    exploreHelpAnimals: 'Toca num país marcado ou num ponto de animal',
    resultMapLabel: '{name} no mapa',
    footerLead: 'Sem pressa. As dicas são permitidas; joguem juntos.',
    sourcesTitle: 'Sobre o jogo e as fontes',
    sourceFlags: 'Bandeiras:',
    sourceCoats: 'Brasões:',
    sourceMap: 'Contornos: Natural Earth / D3 Maps. O mapa-múndi é esquemático; países pequenos podem ficar difíceis de ver.',
    sourceFacts: 'Dados dos países: capital, moeda e línguas oficiais vêm de códigos internacionais, e o navegador fornece os nomes das moedas e das línguas. Os textos sobre as bandeiras e os factos foram escritos para este jogo.',
  },
  es: {


    siteTitle: 'Detective de Geografía',
    brand: 'GEO / DETECTIVE',
    viewGroup: 'Modo',
    topicGroup: 'Tema',
    levelGroup: 'Dificultad',
    language: 'Idioma',
    viewQuiz: 'Pistas',
    viewExplore: 'Mapa',
    modeMixed: 'Mezclado',
    modeFlags: 'Banderas',
    modeCoats: 'Escudos',
    modeCapitals: 'Capitales',
    modeAnimals: 'Animales',
    levelEasy: 'Fácil',
    levelMedium: 'Medio',
    levelMax: 'Difícil',
    lengthGroup: 'Duración',
    lengthFixed: 'Ronda',
    lengthEndless: 'Sin fin',
    playerBoard: 'Jugador y puntuaciones',
    playerName: 'Nombre para el récord',
    playerPlaceholder: 'Jugador1',
    savePlayer: 'Guardar',
    playerReady: '{name} está en la tabla.',
    playerPrompt: 'Escribe un nombre para entrar en la tabla de récords.',
    playerRejected: 'Ese nombre no sirve. Elige otro.',
    scoreboardTitle: 'Récords',
    scoreboardScope: '{mode} · {level} · {length}',
    scoreboardEmpty: 'Todavía no hay récords en esta categoría.',
    scoreMeta: '{correct}/{total} · {date}',
    clearScores: 'Borrar categoría',
    scoreTitle: 'Tu puntuación',
    scoreBreakdown: '{correct}/{total} correctas · errores: {mistakes} · pistas: {hints}',
    scoreSaved: 'Puntuación guardada: {score}.',
    scoreGuest: 'Ronda terminada. Escribe un nombre para guardar el resultado.',
    quizEyebrow: 'EXPEDICIÓN GEOGRÁFICA',
    quizTitle: '¿A dónde vamos?',
    exploreEyebrow: 'ATLAS PARA EXPLORAR',
    exploreTitle: '¿Qué encontramos en el mapa?',
    clueTag: 'PISTA {current} / {total}',
    finishEyebrow: 'EXPEDICIÓN COMPLETA',
    finishTitle: '¡Ronda terminada!',
    finishText: 'Elige otro tema o empieza una ronda nueva.',
    playAgain: 'Nueva ronda',
    flagQuestion: '¿De quién es esta bandera?',
    coatQuestion: '¿De quién es este escudo?',
    capitalQuestion: '¿Cuál es la capital de este país?',
    animalQuestion: '¿Dónde está su hogar natural?',
    flagAltHidden: 'Fragmento de bandera',
    coatAltHidden: 'Escudo del país',
    flagPartial: 'Parte de la bandera está oculta. ¿La reconoces?',
    veilKeyhole: 'Mira por el ojo de la cerradura. ¿La reconoces?',
    veilHoles: 'La bandera está llena de agujeros, como un queso. ¿La reconoces?',
    veilStrip: 'Solo se ve una franja estrecha. ¿La reconoces?',
    veilPixels: 'La bandera se deshizo en píxeles. ¿La reconoces?',
    coatPartial: 'Este escudo esconde un país. ¿Lo reconoces?',
    capitalPrompt: 'Elige la capital del país.',
    flagHintOpen: 'Ahora se ve la bandera completa.',
    coatHintOpen: 'Ahora se ve el escudo completo.',
    capitalHint: 'La capital empieza por “{letter}”.',
    countryHint: 'El país empieza por “{letter}”.',
    animalPrompt: '¿Dónde vive en la naturaleza, no en un zoológico?',
    coatSolved: 'Este es el escudo de {name}.',
    capitalSolved: 'La capital de {name} es {capital}.',
    solved: '¡Resuelto!',
    wrong: 'Todavía no. Prueba otra respuesta; no hay prisa.',
    hint: 'Pista',
    reveal: 'Ver respuesta',
    next: 'Siguiente pista →',
    finishRound: 'Terminar ronda',
    countries: 'Países',
    animals: 'Animales',
    country: 'PAÍS / TERRITORIO',
    animal: 'ANIMAL',
    flag: 'Bandera',
    coat: 'Escudo',
    zoomFlag: 'Ampliar la bandera',
    zoomCoat: 'Ampliar el escudo',
    close: 'Cerrar',
    capital: 'Capital',
    currency: 'Moneda',
    officialLanguages: 'Lenguas oficiales',
    flagStory: 'En la bandera',
    funFact: 'Dato curioso',
    infoLoading: 'Cargando detalles…',
    animalPointNote: 'El punto es un lugar de ejemplo, no toda el área',
    mapLabel: 'Mapa de países y banderas',
    exploreHelp: 'Toca un país marcado',
    exploreHelpAnimals: 'Toca un país marcado o un punto de animal',
    resultMapLabel: '{name} en el mapa',
    footerLead: 'Sin prisa. Las pistas valen; jugad juntos.',
    sourcesTitle: 'Sobre el juego y las fuentes',
    sourceFlags: 'Banderas:',
    sourceCoats: 'Escudos:',
    sourceMap: 'Contornos: Natural Earth / D3 Maps. El mapa mundial es esquemático; los países pequeños pueden ser difíciles de ver.',
    sourceFacts: 'Datos de los países: capital, moneda y lenguas oficiales provienen de códigos internacionales, y el navegador aporta los nombres de monedas e idiomas. Los textos sobre las banderas y los datos curiosos se escribieron para este juego.',
  },
  de: {


    siteTitle: 'Geografie-Detektiv',
    brand: 'GEO / DETEKTIV',
    viewGroup: 'Modus',
    topicGroup: 'Thema',
    levelGroup: 'Schwierigkeit',
    language: 'Sprache',
    viewQuiz: 'Rätsel',
    viewExplore: 'Karte',
    modeMixed: 'Gemischt',
    modeFlags: 'Flaggen',
    modeCoats: 'Wappen',
    modeCapitals: 'Hauptstädte',
    modeAnimals: 'Tiere',
    levelEasy: 'Einfach',
    levelMedium: 'Mittel',
    levelMax: 'Schwer',
    lengthGroup: 'Länge',
    lengthFixed: 'Runde',
    lengthEndless: 'Endlos',
    playerBoard: 'Spieler und Punkte',
    playerName: 'Name für den Rekord',
    playerPlaceholder: 'Spieler1',
    savePlayer: 'Speichern',
    playerReady: '{name} steht in der Tabelle.',
    playerPrompt: 'Gib einen Namen ein, um in die Bestenliste zu kommen.',
    playerRejected: 'Dieser Name passt nicht. Wähle einen anderen.',
    scoreboardTitle: 'Bestenliste',
    scoreboardScope: '{mode} · {level} · {length}',
    scoreboardEmpty: 'In dieser Kategorie gibt es noch keine Rekorde.',
    scoreMeta: '{correct}/{total} · {date}',
    clearScores: 'Kategorie löschen',
    scoreTitle: 'Deine Punkte',
    scoreBreakdown: '{correct}/{total} richtig · Fehler: {mistakes} · Hinweise: {hints}',
    scoreSaved: 'Punktzahl gespeichert: {score}.',
    scoreGuest: 'Runde beendet. Gib einen Namen ein, um das Ergebnis zu speichern.',
    quizEyebrow: 'GEOGRAFIE-EXPEDITION',
    quizTitle: 'Wohin geht es?',
    exploreEyebrow: 'ATLAS ZUM ENTDECKEN',
    exploreTitle: 'Was finden wir auf der Karte?',
    clueTag: 'RÄTSEL {current} / {total}',
    finishEyebrow: 'EXPEDITION BEENDET',
    finishTitle: 'Runde beendet!',
    finishText: 'Wähle ein anderes Thema oder starte eine neue Runde.',
    playAgain: 'Neue Runde',
    flagQuestion: 'Zu wem gehört diese Flagge?',
    coatQuestion: 'Zu wem gehört dieses Wappen?',
    capitalQuestion: 'Wie heißt die Hauptstadt dieses Landes?',
    animalQuestion: 'Wo ist seine natürliche Heimat?',
    flagAltHidden: 'Flaggenausschnitt',
    coatAltHidden: 'Staatswappen',
    flagPartial: 'Ein Teil der Flagge ist verdeckt. Erkennst du sie?',
    veilKeyhole: 'Blick durchs Schlüsselloch. Erkennst du sie?',
    veilHoles: 'Die Flagge ist voller Löcher wie ein Käse. Erkennst du sie?',
    veilStrip: 'Nur ein schmaler Streifen ist zu sehen. Erkennst du sie?',
    veilPixels: 'Die Flagge ist in Pixel zerfallen. Erkennst du sie?',
    coatPartial: 'Dieses Wappen versteckt ein Land. Erkennst du es?',
    capitalPrompt: 'Wähle die Hauptstadt des Landes.',
    flagHintOpen: 'Jetzt ist die ganze Flagge sichtbar.',
    coatHintOpen: 'Jetzt ist das ganze Wappen sichtbar.',
    capitalHint: 'Die Hauptstadt beginnt mit „{letter}”.',
    countryHint: 'Das Land beginnt mit „{letter}”.',
    animalPrompt: 'Wo lebt es in der Natur, nicht im Zoo?',
    coatSolved: 'Das ist das Wappen von {name}.',
    capitalSolved: 'Die Hauptstadt von {name} ist {capital}.',
    solved: 'Gelöst!',
    wrong: 'Noch nicht ganz. Probiere eine andere Antwort; keine Eile.',
    hint: 'Hinweis',
    reveal: 'Antwort zeigen',
    next: 'Nächstes Rätsel →',
    finishRound: 'Runde beenden',
    countries: 'Länder',
    animals: 'Tiere',
    country: 'LAND / GEBIET',
    animal: 'TIER',
    flag: 'Flagge',
    coat: 'Wappen',
    zoomFlag: 'Flagge vergrößern',
    zoomCoat: 'Wappen vergrößern',
    close: 'Schließen',
    capital: 'Hauptstadt',
    currency: 'Währung',
    officialLanguages: 'Amtssprachen',
    flagStory: 'Auf der Flagge',
    funFact: 'Kurioses',
    infoLoading: 'Details werden geladen…',
    animalPointNote: 'Der Punkt ist ein Beispielort, nicht das ganze Verbreitungsgebiet',
    mapLabel: 'Karte der Länder und Flaggen',
    exploreHelp: 'Tippe auf ein markiertes Land',
    exploreHelpAnimals: 'Tippe auf ein markiertes Land oder einen Tierpunkt',
    resultMapLabel: '{name} auf der Karte',
    footerLead: 'Ganz ohne Eile. Hinweise sind erlaubt; spielt zusammen.',
    sourcesTitle: 'Über das Spiel und die Quellen',
    sourceFlags: 'Flaggen:',
    sourceCoats: 'Wappen:',
    sourceMap: 'Umrisse: Natural Earth / D3 Maps. Die Weltkarte ist schematisch; kleine Länder können schwer zu sehen sein.',
    sourceFacts: 'Länderdaten: Hauptstadt, Währung und Amtssprachen stammen aus internationalen Codes, die Namen von Währungen und Sprachen liefert der Browser. Die Flaggentexte und Kuriositäten wurden für dieses Spiel geschrieben.',
  },
  pl: {


    siteTitle: 'Detektyw Geograficzny',
    brand: 'GEO / DETEKTYW',
    viewGroup: 'Tryb',
    topicGroup: 'Temat',
    levelGroup: 'Poziom trudności',
    language: 'Język',
    viewQuiz: 'Zagadki',
    viewExplore: 'Mapa',
    modeMixed: 'Mieszane',
    modeFlags: 'Flagi',
    modeCoats: 'Herby',
    modeCapitals: 'Stolice',
    modeAnimals: 'Zwierzęta',
    levelEasy: 'Łatwy',
    levelMedium: 'Średni',
    levelMax: 'Trudny',
    lengthGroup: 'Długość',
    lengthFixed: 'Runda',
    lengthEndless: 'Bez końca',
    playerBoard: 'Gracz i wyniki',
    playerName: 'Imię do rekordu',
    playerPlaceholder: 'Gracz1',
    savePlayer: 'Zapisz',
    playerReady: '{name} jest w tabeli.',
    playerPrompt: 'Wpisz imię, aby trafić do tabeli rekordów.',
    playerRejected: 'To imię nie pasuje. Wybierz inne.',
    scoreboardTitle: 'Rekordy',
    scoreboardScope: '{mode} · {level} · {length}',
    scoreboardEmpty: 'W tej kategorii nie ma jeszcze rekordów.',
    scoreMeta: '{correct}/{total} · {date}',
    clearScores: 'Wyczyść kategorię',
    scoreTitle: 'Twój wynik',
    scoreBreakdown: '{correct}/{total} poprawnych · błędy: {mistakes} · podpowiedzi: {hints}',
    scoreSaved: 'Wynik zapisany: {score}.',
    scoreGuest: 'Runda zakończona. Wpisz imię, aby zapisać wynik.',
    quizEyebrow: 'WYPRAWA GEOGRAFICZNA',
    quizTitle: 'Dokąd ruszamy?',
    exploreEyebrow: 'ATLAS DO ODKRYWANIA',
    exploreTitle: 'Co znajdziemy na mapie?',
    clueTag: 'ZAGADKA {current} / {total}',
    finishEyebrow: 'WYPRAWA ZAKOŃCZONA',
    finishTitle: 'Runda zakończona!',
    finishText: 'Wybierz inny temat albo zacznij nową rundę.',
    playAgain: 'Nowa runda',
    flagQuestion: 'Czyja to flaga?',
    coatQuestion: 'Czyj to herb?',
    capitalQuestion: 'Jaka jest stolica tego kraju?',
    animalQuestion: 'Gdzie jest jego naturalny dom?',
    flagAltHidden: 'Fragment flagi',
    coatAltHidden: 'Herb państwa',
    flagPartial: 'Część flagi jest ukryta. Rozpoznasz?',
    veilKeyhole: 'Zajrzyj przez dziurkę od klucza. Rozpoznasz?',
    veilHoles: 'Flaga jest dziurawa jak ser. Rozpoznasz?',
    veilStrip: 'Widać tylko wąski pasek. Rozpoznasz?',
    veilPixels: 'Flaga rozsypała się na piksele. Rozpoznasz?',
    coatPartial: 'Ten herb ukrywa państwo. Rozpoznasz?',
    capitalPrompt: 'Wybierz stolicę kraju.',
    flagHintOpen: 'Teraz widać całą flagę.',
    coatHintOpen: 'Teraz widać cały herb.',
    capitalHint: 'Stolica zaczyna się od „{letter}”.',
    countryHint: 'Nazwa kraju zaczyna się od „{letter}”.',
    animalPrompt: 'Gdzie żyje w naturze, a nie w zoo?',
    coatSolved: 'To herb kraju {name}.',
    capitalSolved: 'Stolicą kraju {name} jest {capital}.',
    solved: 'Rozwiązane!',
    wrong: 'Jeszcze nie. Spróbuj innej odpowiedzi; nie trzeba się spieszyć.',
    hint: 'Podpowiedź',
    reveal: 'Pokaż odpowiedź',
    next: 'Następna zagadka →',
    finishRound: 'Zakończ rundę',
    countries: 'Kraje',
    animals: 'Zwierzęta',
    country: 'KRAJ / TERYTORIUM',
    animal: 'ZWIERZĘ',
    flag: 'Flaga',
    coat: 'Herb',
    zoomFlag: 'Powiększ flagę',
    zoomCoat: 'Powiększ herb',
    close: 'Zamknij',
    capital: 'Stolica',
    currency: 'Waluta',
    officialLanguages: 'Języki urzędowe',
    flagStory: 'Na fladze',
    funFact: 'Ciekawostka',
    infoLoading: 'Wczytywanie szczegółów…',
    animalPointNote: 'Punkt pokazuje przykładowe miejsce, nie cały zasięg',
    mapLabel: 'Mapa krajów i flag',
    exploreHelp: 'Dotknij zaznaczonego kraju',
    exploreHelpAnimals: 'Dotknij zaznaczonego kraju albo punktu zwierzęcia',
    resultMapLabel: '{name} na mapie',
    footerLead: 'Bez pośpiechu. Podpowiedzi są dozwolone; grajcie razem.',
    sourcesTitle: 'O grze i źródłach',
    sourceFlags: 'Flagi:',
    sourceCoats: 'Herby:',
    sourceMap: 'Kontury: Natural Earth / D3 Maps. Mapa świata jest schematyczna; małe kraje mogą być słabo widoczne.',
    sourceFacts: 'Dane o krajach: stolica, waluta i języki urzędowe pochodzą z kodów międzynarodowych, a nazwy walut i języków podaje przeglądarka. Teksty o flagach i ciekawostki napisano na potrzeby tej gry.',
  },
};

const featureFlags = {
  animals: false,
  coats: true,
  capitals: true,
};

const countryNameOverrides = {
  ru: { xk: 'Косово', eh: 'Западная Сахара', fk: 'Фолклендские острова', nc: 'Новая Каледония', gl: 'Гренландия', pr: 'Пуэрто-Рико' },
  en: { xk: 'Kosovo', eh: 'Western Sahara', fk: 'Falkland Islands', nc: 'New Caledonia', gl: 'Greenland', pr: 'Puerto Rico' },
  pt: { xk: 'Kosovo', eh: 'Saara Ocidental', fk: 'Ilhas Malvinas', nc: 'Nova Caledónia', gl: 'Gronelândia', pr: 'Porto Rico' },
  es: { xk: 'Kosovo', eh: 'Sáhara Occidental', fk: 'Islas Malvinas', nc: 'Nueva Caledonia', gl: 'Groenlandia', pr: 'Puerto Rico' },
  de: { xk: 'Kosovo', eh: 'Westsahara', fk: 'Falklandinseln', nc: 'Neukaledonien', gl: 'Grönland', pr: 'Puerto Rico' },
  pl: { xk: 'Kosowo', eh: 'Sahara Zachodnia', fk: 'Falklandy', nc: 'Nowa Kaledonia', gl: 'Grenlandia', pr: 'Portoryko' },
};

const easyFlagFacts = {
  pt: { ru: 'Зелёное и красное поля, а между ними — герб.', en: 'Green and red fields with the coat of arms between them.', pt: 'Campos verde e vermelho, com o brasão entre eles.', es: 'Campos verde y rojo, con el escudo entre ellos.', de: 'Grüne und rote Flächen, dazwischen das Wappen.', pl: 'Zielone i czerwone pola, a między nimi herb.' },
  es: { ru: 'Красная, жёлтая, красная: средняя полоса шире.', en: 'Red, yellow, red: the middle stripe is wider.', pt: 'Vermelho, amarelo, vermelho: a faixa do meio é mais larga.', es: 'Rojo, amarillo, rojo: la franja central es más ancha.', de: 'Rot, Gelb, Rot: Der mittlere Streifen ist breiter.', pl: 'Czerwony, żółty, czerwony: środkowy pas jest szerszy.' },
  fr: { ru: 'Три вертикальные полосы: синяя, белая и красная.', en: 'Three vertical stripes: blue, white and red.', pt: 'Três faixas verticais: azul, branca e vermelha.', es: 'Tres franjas verticales: azul, blanca y roja.', de: 'Drei senkrechte Streifen: Blau, Weiß und Rot.', pl: 'Trzy pionowe pasy: niebieski, biały i czerwony.' },
  it: { ru: 'Три вертикальные полосы: зелёная, белая и красная.', en: 'Three vertical stripes: green, white and red.', pt: 'Três faixas verticais: verde, branca e vermelha.', es: 'Tres franjas verticales: verde, blanca y roja.', de: 'Drei senkrechte Streifen: Grün, Weiß und Rot.', pl: 'Trzy pionowe pasy: zielony, biały i czerwony.' },
  de: { ru: 'Сверху вниз: чёрный, красный, золотой.', en: 'From top to bottom: black, red and gold.', pt: 'De cima para baixo: preto, vermelho e dourado.', es: 'De arriba abajo: negro, rojo y dorado.', de: 'Von oben nach unten: Schwarz, Rot und Gold.', pl: 'Od góry do dołu: czarny, czerwony i złoty.' },
  gb: { ru: 'В одном флаге соединены прямые и диагональные кресты.', en: 'Straight and diagonal crosses are combined in one flag.', pt: 'Cruzes retas e diagonais juntas numa só bandeira.', es: 'Cruces rectas y diagonales se combinan en una sola bandera.', de: 'Gerade und diagonale Kreuze sind in einer Flagge kombiniert.', pl: 'Proste i ukośne krzyże są połączone na jednej fladze.' },
  ie: { ru: 'Зелёная, белая и оранжевая вертикальные полосы.', en: 'Green, white and orange vertical stripes.', pt: 'Faixas verticais verde, branca e laranja.', es: 'Franjas verticales verde, blanca y naranja.', de: 'Senkrechte Streifen in Grün, Weiß und Orange.', pl: 'Pionowe pasy: zielony, biały i pomarańczowy.' },
  se: { ru: 'Жёлтый крест на синем фоне.', en: 'A yellow cross on a blue field.', pt: 'Uma cruz amarela sobre fundo azul.', es: 'Una cruz amarilla sobre fondo azul.', de: 'Ein gelbes Kreuz auf blauem Grund.', pl: 'Żółty krzyż na niebieskim tle.' },
  no: { ru: 'Синий крест с белой каймой на красном фоне.', en: 'A blue cross with a white border on a red field.', pt: 'Uma cruz azul com borda branca sobre fundo vermelho.', es: 'Una cruz azul con borde blanco sobre fondo rojo.', de: 'Ein blaues Kreuz mit weißem Rand auf rotem Grund.', pl: 'Niebieski krzyż z białą obwódką na czerwonym tle.' },
  fi: { ru: 'Синий крест на белом фоне.', en: 'A blue cross on a white field.', pt: 'Uma cruz azul sobre fundo branco.', es: 'Una cruz azul sobre fondo blanco.', de: 'Ein blaues Kreuz auf weißem Grund.', pl: 'Niebieski krzyż na białym tle.' },
  ch: { ru: 'Белый крест на красном фоне.', en: 'A white cross on a red field.', pt: 'Uma cruz branca sobre fundo vermelho.', es: 'Una cruz blanca sobre fondo rojo.', de: 'Ein weißes Kreuz auf rotem Grund.', pl: 'Biały krzyż na czerwonym tle.' },
  gr: { ru: 'Синие и белые полосы и белый крест в углу.', en: 'Blue and white stripes with a white cross in the corner.', pt: 'Faixas azuis e brancas com uma cruz branca no canto.', es: 'Franjas azules y blancas con una cruz blanca en la esquina.', de: 'Blaue und weiße Streifen mit einem weißen Kreuz in der Ecke.', pl: 'Niebiesko-białe pasy i biały krzyż w rogu.' },
  pl: { ru: 'Белая полоса сверху, красная снизу.', en: 'White stripe on top, red stripe below.', pt: 'Faixa branca em cima, vermelha em baixo.', es: 'Franja blanca arriba y roja abajo.', de: 'Oben ein weißer Streifen, unten ein roter.', pl: 'Biały pas u góry, czerwony na dole.' },
  ua: { ru: 'Синяя полоса сверху, жёлтая снизу.', en: 'Blue stripe on top, yellow stripe below.', pt: 'Faixa azul em cima, amarela em baixo.', es: 'Franja azul arriba y amarilla abajo.', de: 'Oben ein blauer Streifen, unten ein gelber.', pl: 'Niebieski pas u góry, żółty na dole.' },
  br: { ru: 'Жёлтый ромб на зелёном фоне, внутри — синий круг.', en: 'A yellow diamond on green, with a blue circle inside.', pt: 'Um losango amarelo no verde, com um círculo azul dentro.', es: 'Un rombo amarillo sobre verde, con un círculo azul dentro.', de: 'Eine gelbe Raute auf Grün, darin ein blauer Kreis.', pl: 'Żółty romb na zielonym tle, a w środku niebieskie koło.' },
  ar: { ru: 'Голубая, белая, голубая полосы и солнце в центре.', en: 'Light blue, white, light blue stripes and a sun in the center.', pt: 'Faixas azul-claro, branca, azul-claro e um sol no centro.', es: 'Franjas celeste, blanca y celeste, con un sol en el centro.', de: 'Hellblau, Weiß, Hellblau und eine Sonne in der Mitte.', pl: 'Jasnoniebieski, biały i jasnoniebieski pas oraz słońce w środku.' },
  ca: { ru: 'В центре — красный кленовый лист.', en: 'A red maple leaf is in the center.', pt: 'Uma folha de bordo vermelha fica no centro.', es: 'En el centro hay una hoja de arce roja.', de: 'In der Mitte ist ein rotes Ahornblatt.', pl: 'W środku znajduje się czerwony liść klonu.' },
  us: { ru: 'Полосы и звёзды в синем прямоугольнике.', en: 'Stripes and stars in a blue rectangle.', pt: 'Faixas e estrelas num retângulo azul.', es: 'Franjas y estrellas en un rectángulo azul.', de: 'Streifen und Sterne in einem blauen Rechteck.', pl: 'Pasy i gwiazdy w niebieskim prostokącie.' },
  mx: { ru: 'Зелёная, белая, красная полосы; на белой — герб с орлом.', en: 'Green, white and red stripes; the white stripe has an eagle coat of arms.', pt: 'Faixas verde, branca e vermelha; na branca há um brasão com águia.', es: 'Franjas verde, blanca y roja; en la blanca hay un escudo con un águila.', de: 'Grüne, weiße und rote Streifen; auf dem weißen ist ein Wappen mit Adler.', pl: 'Zielony, biały i czerwony pas; na białym jest herb z orłem.' },
  jp: { ru: 'Красный круг на белом фоне.', en: 'A red circle on a white field.', pt: 'Um círculo vermelho sobre fundo branco.', es: 'Un círculo rojo sobre fondo blanco.', de: 'Ein roter Kreis auf weißem Grund.', pl: 'Czerwone koło na białym tle.' },
  cn: { ru: 'Пять жёлтых звёзд на красном фоне.', en: 'Five yellow stars on a red field.', pt: 'Cinco estrelas amarelas sobre fundo vermelho.', es: 'Cinco estrellas amarillas sobre fondo rojo.', de: 'Fünf gelbe Sterne auf rotem Grund.', pl: 'Pięć żółtych gwiazd na czerwonym tle.' },
  in: { ru: 'На белой полосе — синее колесо.', en: 'A blue wheel sits on the white stripe.', pt: 'Uma roda azul fica na faixa branca.', es: 'En la franja blanca hay una rueda azul.', de: 'Auf dem weißen Streifen sitzt ein blaues Rad.', pl: 'Na białym pasie znajduje się niebieskie koło.' },
  au: { ru: 'На синем фоне — звёзды и британский флаг в углу.', en: 'On a blue field: stars and the British flag in the corner.', pt: 'No fundo azul: estrelas e a bandeira britânica no canto.', es: 'Sobre fondo azul: estrellas y la bandera británica en la esquina.', de: 'Auf blauem Grund: Sterne und die britische Flagge in der Ecke.', pl: 'Na niebieskim tle są gwiazdy i brytyjska flaga w rogu.' },
  za: { ru: 'Зелёная фигура напоминает букву Y.', en: 'The green shape looks like the letter Y.', pt: 'A forma verde lembra a letra Y.', es: 'La forma verde se parece a la letra Y.', de: 'Die grüne Form sieht aus wie der Buchstabe Y.', pl: 'Zielony kształt przypomina literę Y.' },
};

const countries = [
  ['af', 'AFG'], ['ao', 'AGO'], ['al', 'ALB'], ['ae', 'ARE'], ['ar', 'ARG'], ['am', 'ARM'], ['aq', 'ATA'], ['tf', 'ATF'], ['au', 'AUS'], ['at', 'AUT'], ['az', 'AZE'], ['bi', 'BDI'], ['be', 'BEL'], ['bj', 'BEN'], ['bf', 'BFA'], ['bd', 'BGD'], ['bg', 'BGR'], ['bs', 'BHS'], ['ba', 'BIH'], ['by', 'BLR'], ['bz', 'BLZ'], ['bo', 'BOL'], ['br', 'BRA'], ['bn', 'BRN'], ['bt', 'BTN'], ['bw', 'BWA'], ['cf', 'CAF'], ['ca', 'CAN'], ['ch', 'CHE'], ['cl', 'CHL'], ['cn', 'CHN'], ['ci', 'CIV'], ['cm', 'CMR'], ['cd', 'COD'], ['cg', 'COG'], ['co', 'COL'], ['cr', 'CRI'], ['cu', 'CUB'], ['cy', 'CYP'], ['cz', 'CZE'], ['de', 'DEU'], ['dj', 'DJI'], ['dk', 'DNK'], ['do', 'DOM'], ['dz', 'DZA'], ['ec', 'ECU'], ['eg', 'EGY'], ['er', 'ERI'], ['es', 'ESP'], ['ee', 'EST'], ['et', 'ETH'], ['fi', 'FIN'], ['fj', 'FJI'], ['fk', 'FLK'], ['fr', 'FRA'], ['ga', 'GAB'], ['gb', 'GBR'], ['ge', 'GEO'], ['gh', 'GHA'], ['gn', 'GIN'], ['gm', 'GMB'], ['gw', 'GNB'], ['gq', 'GNQ'], ['gr', 'GRC'], ['gl', 'GRL'], ['gt', 'GTM'], ['gy', 'GUY'], ['hn', 'HND'], ['hr', 'HRV'], ['ht', 'HTI'], ['hu', 'HUN'], ['id', 'IDN'], ['in', 'IND'], ['ie', 'IRL'], ['ir', 'IRN'], ['iq', 'IRQ'], ['is', 'ISL'], ['il', 'ISR'], ['it', 'ITA'], ['jm', 'JAM'], ['jo', 'JOR'], ['jp', 'JPN'], ['kz', 'KAZ'], ['ke', 'KEN'], ['kg', 'KGZ'], ['kh', 'KHM'], ['kr', 'KOR'], ['xk', 'KOS'], ['kw', 'KWT'], ['la', 'LAO'], ['lb', 'LBN'], ['lr', 'LBR'], ['ly', 'LBY'], ['lk', 'LKA'], ['ls', 'LSO'], ['lt', 'LTU'], ['lu', 'LUX'], ['lv', 'LVA'], ['ma', 'MAR'], ['mc', 'MCO'], ['md', 'MDA'], ['mg', 'MDG'], ['mx', 'MEX'], ['mk', 'MKD'], ['ml', 'MLI'], ['mm', 'MMR'], ['me', 'MNE'], ['mn', 'MNG'], ['mz', 'MOZ'], ['mr', 'MRT'], ['mw', 'MWI'], ['my', 'MYS'], ['na', 'NAM'], ['nc', 'NCL'], ['ne', 'NER'], ['ng', 'NGA'], ['ni', 'NIC'], ['nl', 'NLD'], ['no', 'NOR'], ['np', 'NPL'], ['nz', 'NZL'], ['om', 'OMN'], ['pk', 'PAK'], ['pa', 'PAN'], ['pe', 'PER'], ['ph', 'PHL'], ['pg', 'PNG'], ['pl', 'POL'], ['pr', 'PRI'], ['kp', 'PRK'], ['pt', 'PRT'], ['py', 'PRY'], ['ps', 'PSX'], ['qa', 'QAT'], ['ro', 'ROU'], ['ru', 'RUS'], ['rw', 'RWA'], ['eh', 'SAH'], ['sa', 'SAU'], ['sd', 'SDN'], ['ss', 'SDS'], ['sn', 'SEN'], ['sb', 'SLB'], ['sl', 'SLE'], ['sv', 'SLV'], ['so', 'SOM'], ['rs', 'SRB'], ['sr', 'SUR'], ['sk', 'SVK'], ['si', 'SVN'], ['se', 'SWE'], ['sz', 'SWZ'], ['sy', 'SYR'], ['td', 'TCD'], ['tg', 'TGO'], ['th', 'THA'], ['tj', 'TJK'], ['tm', 'TKM'], ['tl', 'TLS'], ['tt', 'TTO'], ['tn', 'TUN'], ['tr', 'TUR'], ['tw', 'TWN'], ['tz', 'TZA'], ['ug', 'UGA'], ['ua', 'UKR'], ['uy', 'URY'], ['us', 'USA'], ['uz', 'UZB'], ['ve', 'VEN'], ['vn', 'VNM'], ['vu', 'VUT'], ['ye', 'YEM'], ['za', 'ZAF'], ['zm', 'ZMB'], ['zw', 'ZWE'],
  ['va', 'VAT'], ['sm', 'SMR'], ['li', 'LIE'], ['ad', 'AND'], ['mt', 'MLT'], ['nr', 'NRU'], ['tv', 'TUV'], ['pw', 'PLW'], ['mh', 'MHL'], ['fm', 'FSM'], ['ws', 'WSM'], ['to', 'TON'], ['ki', 'KIR'], ['kn', 'KNA'], ['gd', 'GRD'], ['vc', 'VCT'], ['bb', 'BRB'], ['ag', 'ATG'], ['lc', 'LCA'], ['mv', 'MDV'], ['sc', 'SYC'], ['sg', 'SGP'], ['bh', 'BHR'],
];

const similarFlagGroups = [
  ['id', 'mc'],
  ['ro', 'td'],
  ['nl', 'lu'],
  ['ru', 'sk', 'si'],
  ['ie', 'ci'],
  ['au', 'nz'],
  ['co', 'ec', 've'],
  ['va', 'sm', 'li', 'ad', 'mt'],
  ['nr', 'tv', 'pw', 'mh', 'fm', 'ws', 'to', 'vu', 'ki'],
  ['kn', 'gd', 'vc', 'bb', 'ag', 'lc'],
  ['mv', 'sc', 'sg', 'bh'],
];

// Антарктиды здесь нет намеренно: MainFacts отдаёт под кодом aq герб Британской
// антарктической территории, а у самой Антарктиды герба нет.
const coatIds = [
  'af', 'ao', 'al', 'ae', 'ar', 'am', 'tf', 'au', 'at', 'az', 'bi', 'be', 'bj', 'bf', 'bd', 'bg', 'bs', 'ba', 'by', 'bz', 'bo', 'br', 'bn', 'bt', 'bw', 'cf', 'ca', 'ch', 'cl', 'cn', 'ci', 'cm', 'cd', 'co', 'cr', 'cu', 'cy', 'cz', 'de', 'dj', 'dk', 'do', 'dz', 'ec', 'eg', 'er', 'es', 'ee', 'et', 'fi', 'fj', 'fk', 'fr', 'ga', 'gb', 'ge', 'gh', 'gn', 'gm', 'gw', 'gq', 'gr', 'gl', 'gt', 'gy', 'hn', 'hr', 'ht', 'hu', 'id', 'in', 'ie', 'ir', 'iq', 'is', 'il', 'it', 'jm', 'jo', 'jp', 'kz', 'ke', 'kg', 'kh', 'kr', 'xk', 'kw', 'la', 'lb', 'lr', 'ly', 'lk', 'ls', 'lt', 'lu', 'lv', 'ma', 'mc', 'md', 'mg', 'mx', 'mk', 'ml', 'mm', 'me', 'mn', 'mz', 'mr', 'mw', 'my', 'na', 'nc', 'ne', 'ng', 'ni', 'nl', 'no', 'np', 'nz', 'om', 'pk', 'pa', 'pe', 'ph', 'pg', 'pl', 'kp', 'pt', 'py', 'ps', 'qa', 'ro', 'ru', 'rw', 'sa', 'sd', 'ss', 'sn', 'sb', 'sl', 'sv', 'so', 'rs', 'sr', 'sk', 'si', 'se', 'sy', 'td', 'tg', 'th', 'tj', 'tm', 'tt', 'tn', 'tr', 'tw', 'tz', 'ug', 'ua', 'uy', 'us', 'uz', 've', 'vn', 'vu', 'ye', 'za', 'zm', 'zw', 'va', 'sm', 'li', 'ad', 'mt', 'nr', 'tv', 'pw', 'mh', 'fm', 'ws', 'to', 'ki', 'kn', 'gd', 'vc', 'bb', 'ag', 'lc', 'mv', 'sc', 'sg', 'bh',
];

const similarCoatGroups = [
  ['de', 'pl', 'at', 'us', 'mx', 'ru', 'ro', 'rs', 'me', 'al'],
  ['gb', 'es', 'nl', 'no', 'fi', 'cz', 'bg', 'ee', 'lv'],
  ['ch', 'sk', 'hr', 'si', 'ge', 'dk', 'se', 'gr'],
  ['pt', 'br', 'ar', 'ca', 'au', 'za'],
  ['lt', 'by', 'ua', 'md'],
];

const flagPoints = {
  mc: [7.42, 43.73],
  va: [12.45, 41.9],
  sm: [12.46, 43.94],
  li: [9.55, 47.14],
  ad: [1.6, 42.55],
  mt: [14.38, 35.94],
  nr: [166.93, -0.52],
  tv: [179.2, -8.52],
  pw: [134.58, 7.51],
  mh: [171.18, 7.13],
  fm: [158.16, 6.92],
  ws: [-172.1, -13.76],
  to: [-175.2, -21.18],
  vu: [167.7, -15.4],
  ki: [-157.36, 1.87],
  kn: [-62.78, 17.36],
  gd: [-61.68, 12.12],
  vc: [-61.2, 13.25],
  bb: [-59.54, 13.19],
  ag: [-61.8, 17.06],
  lc: [-60.98, 13.91],
  mv: [73.51, 4.18],
  sc: [55.45, -4.62],
  sg: [103.82, 1.35],
  bh: [50.56, 26.07],
};

const capitalData = {
  "af": {"ru": "Кабул", "en": "Kabul", "pt": "Kabul", "es": "Kabul", "de": "Kabul", "pl": "Kabul"},
  "ao": {"ru": "Луанда", "en": "Luanda", "pt": "Luanda", "es": "Luanda", "de": "Luanda", "pl": "Luanda"},
  "al": {"ru": "Тирана", "en": "Tirana", "pt": "Tirana", "es": "Tirana", "de": "Tirana", "pl": "Tirana"},
  "ae": {"ru": "Абу-Даби", "en": "Abu Dhabi", "pt": "Abu Dhabi", "es": "Abu Dabi", "de": "Abu Dhabi", "pl": "Abu Zabi"},
  "ar": {"ru": "Буэнос-Айрес", "en": "Buenos Aires", "pt": "Buenos Aires", "es": "Buenos Aires", "de": "Buenos Aires", "pl": "Buenos Aires"},
  "am": {"ru": "Ереван", "en": "Yerevan", "pt": "Erevan", "es": "Ereván", "de": "Eriwan", "pl": "Erywań"},
  "tf": {"ru": "Порт-о-Франсе", "en": "Port-aux-Français", "pt": "Port-aux-Français", "es": "Port-aux-Français", "de": "Port-aux-Français", "pl": "Port-aux-Français"},
  "au": {"ru": "Канберра", "en": "Canberra", "pt": "Canberra", "es": "Canberra", "de": "Canberra", "pl": "Canberra"},
  "at": {"ru": "Вена", "en": "Vienna", "pt": "Viena", "es": "Viena", "de": "Wien", "pl": "Wiedeń"},
  "az": {"ru": "Баку", "en": "Baku", "pt": "Baku", "es": "Baku", "de": "Baku", "pl": "Baku"},
  "bi": {"ru": "Гитега", "en": "Gitega", "pt": "Gitega", "es": "Gitega", "de": "Gitega", "pl": "Gitega"},
  "be": {"ru": "Брюссель", "en": "Brussels", "pt": "Bruxelas", "es": "Bruselas", "de": "Brüssel", "pl": "Bruksela"},
  "bj": {"ru": "Порто-Ново", "en": "Porto-Novo", "pt": "Porto-Novo", "es": "Porto-Novo", "de": "Porto-Novo", "pl": "Porto-Novo"},
  "bf": {"ru": "Уагадугу", "en": "Ouagadougou", "pt": "Ouagadougou", "es": "Ouagadougou", "de": "Ouagadougou", "pl": "Ouagadougou"},
  "bd": {"ru": "Дакка", "en": "Dhaka", "pt": "Dhaka", "es": "Dhaka", "de": "Dhaka", "pl": "Dhaka"},
  "bg": {"ru": "София", "en": "Sofia", "pt": "Sófia", "es": "Sofia", "de": "Sofia", "pl": "Sofia"},
  "bs": {"ru": "Нассау", "en": "Nassau", "pt": "Nassau", "es": "Nassau", "de": "Nassau", "pl": "Nassau"},
  "ba": {"ru": "Сараево", "en": "Sarajevo", "pt": "Sarajevo", "es": "Sarajevo", "de": "Sarajevo", "pl": "Sarajewo"},
  "by": {"ru": "Минск", "en": "Minsk", "pt": "Minsk", "es": "Minsk", "de": "Minsk", "pl": "Mińsk"},
  "bz": {"ru": "Бельмопан", "en": "Belmopan", "pt": "Belmopan", "es": "Belmopan", "de": "Belmopan", "pl": "Belmopan"},
  "bo": {"ru": "Сукре", "en": "Sucre", "pt": "Sucre", "es": "Sucre", "de": "Sucre", "pl": "Sucre"},
  "br": {"ru": "Бразилиа", "en": "Brasília", "pt": "Brasília", "es": "Brasília", "de": "Brasília", "pl": "Brasília"},
  "bn": {"ru": "Бандар-Сери-Бегаван", "en": "Bandar Seri Begawan", "pt": "Bandar Seri Begawan", "es": "Bandar Seri Begawan", "de": "Bandar Seri Begawan", "pl": "Bandar Seri Begawan"},
  "bt": {"ru": "Тхимпху", "en": "Thimphu", "pt": "Thimphu", "es": "Thimphu", "de": "Thimphu", "pl": "Thimphu"},
  "bw": {"ru": "Габороне", "en": "Gaborone", "pt": "Gaborone", "es": "Gaborone", "de": "Gaborone", "pl": "Gaborone"},
  "cf": {"ru": "Банги", "en": "Bangui", "pt": "Bangui", "es": "Bangui", "de": "Bangui", "pl": "Bangui"},
  "ca": {"ru": "Оттава", "en": "Ottawa", "pt": "Ottawa", "es": "Ottawa", "de": "Ottawa", "pl": "Ottawa"},
  "ch": {"ru": "Берн", "en": "Bern", "pt": "Berna", "es": "Berna", "de": "Bern", "pl": "Berno"},
  "cl": {"ru": "Сантьяго", "en": "Santiago", "pt": "Santiago", "es": "Santiago", "de": "Santiago", "pl": "Santiago"},
  "cn": {"ru": "Пекин", "en": "Beijing", "pt": "Pequim", "es": "Pekín", "de": "Peking", "pl": "Pekin"},
  "ci": {"ru": "Ямусукро", "en": "Yamoussoukro", "pt": "Yamoussoukro", "es": "Yamoussoukro", "de": "Yamoussoukro", "pl": "Yamoussoukro"},
  "cm": {"ru": "Яунде", "en": "Yaoundé", "pt": "Yaoundé", "es": "Yaoundé", "de": "Yaoundé", "pl": "Yaoundé"},
  "cd": {"ru": "Киншаса", "en": "Kinshasa", "pt": "Kinshasa", "es": "Kinshasa", "de": "Kinshasa", "pl": "Kinshasa"},
  "cg": {"ru": "Браззавиль", "en": "Brazzaville", "pt": "Brazzaville", "es": "Brazzaville", "de": "Brazzaville", "pl": "Brazzaville"},
  "co": {"ru": "Богота", "en": "Bogotá", "pt": "Bogotá", "es": "Bogotá", "de": "Bogotá", "pl": "Bogotá"},
  "cr": {"ru": "Сан-Хосе", "en": "San José", "pt": "San José", "es": "San José", "de": "San José", "pl": "San José"},
  "cu": {"ru": "Гавана", "en": "Havana", "pt": "Havana", "es": "La Habana", "de": "Havanna", "pl": "Hawana"},
  "cy": {"ru": "Никосия", "en": "Nicosia", "pt": "Nicósia", "es": "Nicosia", "de": "Nicosia", "pl": "Nikozja"},
  "cz": {"ru": "Прага", "en": "Prague", "pt": "Praga", "es": "Praga", "de": "Prag", "pl": "Praga"},
  "de": {"ru": "Берлин", "en": "Berlin", "pt": "Berlin", "es": "Berlin", "de": "Berlin", "pl": "Berlin"},
  "dj": {"ru": "Джибути", "en": "Djibouti", "pt": "Djibuti", "es": "Yibuti", "de": "Djibouti", "pl": "Dżibuti"},
  "dk": {"ru": "Копенгаген", "en": "Copenhagen", "pt": "Copenhaga", "es": "Copenhague", "de": "Kopenhagen", "pl": "Kopenhaga"},
  "do": {"ru": "Санто-Доминго", "en": "Santo Domingo", "pt": "Santo Domingo", "es": "Santo Domingo", "de": "Santo Domingo", "pl": "Santo Domingo"},
  "dz": {"ru": "Алжир", "en": "Algiers", "pt": "Argel", "es": "Argel", "de": "Algier", "pl": "Algier"},
  "ec": {"ru": "Кито", "en": "Quito", "pt": "Quito", "es": "Quito", "de": "Quito", "pl": "Quito"},
  "eg": {"ru": "Каир", "en": "Cairo", "pt": "Cairo", "es": "El Cairo", "de": "Kairo", "pl": "Kair"},
  "er": {"ru": "Асмэра", "en": "Asmara", "pt": "Asmara", "es": "Asmara", "de": "Asmara", "pl": "Asmara"},
  "es": {"ru": "Мадрид", "en": "Madrid", "pt": "Madrid", "es": "Madrid", "de": "Madrid", "pl": "Madrid"},
  "ee": {"ru": "Таллин", "en": "Tallinn", "pt": "Tallinn", "es": "Tallinn", "de": "Tallinn", "pl": "Tallinn"},
  "et": {"ru": "Аддис-Абеба", "en": "Addis Ababa", "pt": "Adis Abeba", "es": "Adís Abeba", "de": "Addis Abeba", "pl": "Addis Abeba"},
  "fi": {"ru": "Хельсинки", "en": "Helsinki", "pt": "Helsinki", "es": "Helsinki", "de": "Helsinki", "pl": "Helsinki"},
  "fj": {"ru": "Сува", "en": "Suva", "pt": "Suva", "es": "Suva", "de": "Suva", "pl": "Suva"},
  "fk": {"ru": "Стэнли", "en": "Stanley", "pt": "Stanley", "es": "Stanley", "de": "Stanley", "pl": "Stanley"},
  "fr": {"ru": "Париж", "en": "Paris", "pt": "Paris", "es": "Paris", "de": "Paris", "pl": "Paryż"},
  "ga": {"ru": "Либревиль", "en": "Libreville", "pt": "Libreville", "es": "Libreville", "de": "Libreville", "pl": "Libreville"},
  "gb": {"ru": "Лондон", "en": "London", "pt": "Londres", "es": "Londres", "de": "London", "pl": "Londyn"},
  "ge": {"ru": "Тбилиси", "en": "Tbilisi", "pt": "Tbilisi", "es": "Tbilisi", "de": "Tbilisi", "pl": "Tbilisi"},
  "gh": {"ru": "Аккра", "en": "Accra", "pt": "Accra", "es": "Accra", "de": "Accra", "pl": "Accra"},
  "gn": {"ru": "Конакри", "en": "Conakry", "pt": "Conakry", "es": "Conakry", "de": "Conakry", "pl": "Conakry"},
  "gm": {"ru": "Банжул", "en": "Banjul", "pt": "Banjul", "es": "Banjul", "de": "Banjul", "pl": "Banjul"},
  "gw": {"ru": "Бисау", "en": "Bissau", "pt": "Bissau", "es": "Bissau", "de": "Bissau", "pl": "Bissau"},
  "gq": {"ru": "Малабо", "en": "Malabo", "pt": "Malabo", "es": "Malabo", "de": "Malabo", "pl": "Malabo"},
  "gr": {"ru": "Афины", "en": "Athens", "pt": "Atenas", "es": "Atenas", "de": "Athen", "pl": "Ateny"},
  "gl": {"ru": "Нуук", "en": "Nuuk", "pt": "Nuuk", "es": "Nuuk", "de": "Nuuk", "pl": "Nuuk"},
  "gt": {"ru": "Гватемала", "en": "Guatemala City", "pt": "Cidade da Guatemala", "es": "Ciudad de Guatemala", "de": "Guatemala-Stadt", "pl": "Gwatemala"},
  "gy": {"ru": "Джорджтаун", "en": "Georgetown", "pt": "Georgetown", "es": "Georgetown", "de": "Georgetown", "pl": "Georgetown"},
  "hn": {"ru": "Тегусигальпа", "en": "Tegucigalpa", "pt": "Tegucigalpa", "es": "Tegucigalpa", "de": "Tegucigalpa", "pl": "Tegucigalpa"},
  "hr": {"ru": "Загреб", "en": "Zagreb", "pt": "Zagreb", "es": "Zagreb", "de": "Zagreb", "pl": "Zagreb"},
  "ht": {"ru": "Порт-о-Пренс", "en": "Port-au-Prince", "pt": "Port-au-Prince", "es": "Port-au-Prince", "de": "Port-au-Prince", "pl": "Port-au-Prince"},
  "hu": {"ru": "Будапешт", "en": "Budapest", "pt": "Budapest", "es": "Budapest", "de": "Budapest", "pl": "Budapeszt"},
  "id": {"ru": "Джакарта", "en": "Jakarta", "pt": "Jacarta", "es": "Yakarta", "de": "Jakarta", "pl": "Dżakarta"},
  "in": {"ru": "Нью-Дели", "en": "New Delhi", "pt": "Nova Deli", "es": "Nueva Delhi", "de": "Neu-Delhi", "pl": "Nowe Delhi"},
  "ie": {"ru": "Дублин", "en": "Dublin", "pt": "Dublin", "es": "Dublin", "de": "Dublin", "pl": "Dublin"},
  "ir": {"ru": "Тегеран", "en": "Tehran", "pt": "Teerã", "es": "Teherán", "de": "Teheran", "pl": "Teheran"},
  "iq": {"ru": "Багдад", "en": "Baghdad", "pt": "Bagdá", "es": "Bagdad", "de": "Bagdad", "pl": "Bagdad"},
  "is": {"ru": "Рейкьявик", "en": "Reykjavík", "pt": "Reykjavík", "es": "Reykjavík", "de": "Reykjavík", "pl": "Reykjavík"},
  "il": {"ru": "Иерусалим", "en": "Jerusalem", "pt": "Jerusalém", "es": "Jerusalén", "de": "Jerusalem", "pl": "Jerozolima"},
  "it": {"ru": "Рим", "en": "Rome", "pt": "Roma", "es": "Roma", "de": "Rom", "pl": "Rzym"},
  "jm": {"ru": "Кингстон", "en": "Kingston", "pt": "Kingston", "es": "Kingston", "de": "Kingston", "pl": "Kingston"},
  "jo": {"ru": "Амман", "en": "Amman", "pt": "Amman", "es": "Amman", "de": "Amman", "pl": "Amman"},
  "jp": {"ru": "Токио", "en": "Tokyo", "pt": "Tóquio", "es": "Tokio", "de": "Tokio", "pl": "Tokio"},
  "kz": {"ru": "Астана", "en": "Astana", "pt": "Astana", "es": "Astana", "de": "Astana", "pl": "Astana"},
  "ke": {"ru": "Найроби", "en": "Nairobi", "pt": "Nairobi", "es": "Nairobi", "de": "Nairobi", "pl": "Nairobi"},
  "kg": {"ru": "Бишкек", "en": "Bishkek", "pt": "Bishkek", "es": "Bishkek", "de": "Bishkek", "pl": "Biszkek"},
  "kh": {"ru": "Пномпень", "en": "Phnom Penh", "pt": "Phnom Penh", "es": "Phnom Penh", "de": "Phnom Penh", "pl": "Phnom Penh"},
  "kr": {"ru": "Сеул", "en": "Seoul", "pt": "Seul", "es": "Seúl", "de": "Seoul", "pl": "Seul"},
  "xk": {"ru": "Приштина", "en": "Pristina", "pt": "Pristina", "es": "Pristina", "de": "Pristina", "pl": "Prisztina"},
  "kw": {"ru": "Эль-Кувейт", "en": "Kuwait City", "pt": "Cidade do Kuwait", "es": "Ciudad de Kuwait", "de": "Kuwait-Stadt", "pl": "Kuwejt"},
  "la": {"ru": "Вьентьян", "en": "Vientiane", "pt": "Vientiane", "es": "Vientiane", "de": "Vientiane", "pl": "Vientiane"},
  "lb": {"ru": "Бейрут", "en": "Beirut", "pt": "Beirute", "es": "Beirut", "de": "Beirut", "pl": "Bejrut"},
  "lr": {"ru": "Монровия", "en": "Monrovia", "pt": "Monrovia", "es": "Monrovia", "de": "Monrovia", "pl": "Monrovia"},
  "ly": {"ru": "Триполи", "en": "Tripoli", "pt": "Trípoli", "es": "Trípoli", "de": "Tripolis", "pl": "Trypolis"},
  "lk": {"ru": "Шри-Джаяварденепура-Котте", "en": "Sri Jayawardenepura Kotte", "pt": "Sri Jayawardenepura Kotte", "es": "Sri Jayawardenepura Kotte", "de": "Sri Jayawardenepura Kotte", "pl": "Sri Jayawardenepura Kotte"},
  "ls": {"ru": "Масеру", "en": "Maseru", "pt": "Maseru", "es": "Maseru", "de": "Maseru", "pl": "Maseru"},
  "lt": {"ru": "Вильнюс", "en": "Vilnius", "pt": "Vilnius", "es": "Vilnius", "de": "Vilnius", "pl": "Wilno"},
  "lu": {"ru": "Люксембург", "en": "Luxembourg", "pt": "Luxemburgo", "es": "Luxemburgo", "de": "Luxemburg", "pl": "Luksemburg"},
  "lv": {"ru": "Рига", "en": "Riga", "pt": "Riga", "es": "Riga", "de": "Riga", "pl": "Ryga"},
  "ma": {"ru": "Рабат", "en": "Rabat", "pt": "Rabat", "es": "Rabat", "de": "Rabat", "pl": "Rabat"},
  "mc": {"ru": "Монако", "en": "Monaco", "pt": "Mónaco", "es": "Monaco", "de": "Monaco", "pl": "Monako"},
  "md": {"ru": "Кишинёв", "en": "Chișinău", "pt": "Chisinau", "es": "Chisináu", "de": "Chișinău", "pl": "Kiszyniów"},
  "mg": {"ru": "Антананариву", "en": "Antananarivo", "pt": "Antananarivo", "es": "Antananarivo", "de": "Antananarivo", "pl": "Antananarivo"},
  "mx": {"ru": "Мехико", "en": "Mexico City", "pt": "Cidade do México", "es": "Ciudad de México", "de": "Mexiko-Stadt", "pl": "Meksyk"},
  "mk": {"ru": "Скопье", "en": "Skopje", "pt": "Skopje", "es": "Skopje", "de": "Skopje", "pl": "Skopje"},
  "ml": {"ru": "Бамако", "en": "Bamako", "pt": "Bamako", "es": "Bamako", "de": "Bamako", "pl": "Bamako"},
  "mm": {"ru": "Нейпьидо", "en": "Naypyidaw", "pt": "Naypyidaw", "es": "Naypyidaw", "de": "Naypyidaw", "pl": "Naypyidaw"},
  "me": {"ru": "Подгорица", "en": "Podgorica", "pt": "Podgorica", "es": "Podgorica", "de": "Podgorica", "pl": "Podgorica"},
  "mn": {"ru": "Улан-Батор", "en": "Ulaanbaatar", "pt": "Ulan Bator", "es": "Ulán Bator", "de": "Ulaanbaatar", "pl": "Ułan Bator"},
  "mz": {"ru": "Мапуту", "en": "Maputo", "pt": "Maputo", "es": "Maputo", "de": "Maputo", "pl": "Maputo"},
  "mr": {"ru": "Нуакшот", "en": "Nouakchott", "pt": "Nouakchott", "es": "Nouakchott", "de": "Nouakchott", "pl": "Nouakchott"},
  "mw": {"ru": "Лилонгве", "en": "Lilongwe", "pt": "Lilongwe", "es": "Lilongwe", "de": "Lilongwe", "pl": "Lilongwe"},
  "my": {"ru": "Куала-Лумпур", "en": "Kuala Lumpur", "pt": "Kuala Lumpur", "es": "Kuala Lumpur", "de": "Kuala Lumpur", "pl": "Kuala Lumpur"},
  "na": {"ru": "Виндхук", "en": "Windhoek", "pt": "Windhoek", "es": "Windhoek", "de": "Windhoek", "pl": "Windhoek"},
  "nc": {"ru": "Нумеа", "en": "Nouméa", "pt": "Nouméa", "es": "Nouméa", "de": "Nouméa", "pl": "Nouméa"},
  "ne": {"ru": "Ниамей", "en": "Niamey", "pt": "Niamey", "es": "Niamey", "de": "Niamey", "pl": "Niamey"},
  "ng": {"ru": "Абуджа", "en": "Abuja", "pt": "Abuja", "es": "Abuja", "de": "Abuja", "pl": "Abuja"},
  "ni": {"ru": "Манагуа", "en": "Managua", "pt": "Managua", "es": "Managua", "de": "Managua", "pl": "Managua"},
  "nl": {"ru": "Амстердам", "en": "Amsterdam", "pt": "Amsterdam", "es": "Amsterdam", "de": "Amsterdam", "pl": "Amsterdam"},
  "no": {"ru": "Осло", "en": "Oslo", "pt": "Oslo", "es": "Oslo", "de": "Oslo", "pl": "Oslo"},
  "np": {"ru": "Катманду", "en": "Kathmandu", "pt": "Katmandu", "es": "Katmandú", "de": "Kathmandu", "pl": "Katmandu"},
  "nz": {"ru": "Веллингтон", "en": "Wellington", "pt": "Wellington", "es": "Wellington", "de": "Wellington", "pl": "Wellington"},
  "om": {"ru": "Маскат", "en": "Muscat", "pt": "Mascate", "es": "Mascate", "de": "Maskat", "pl": "Maskat"},
  "pk": {"ru": "Исламабад", "en": "Islamabad", "pt": "Islamabad", "es": "Islamabad", "de": "Islamabad", "pl": "Islamabad"},
  "pa": {"ru": "Панама", "en": "Panama City", "pt": "Cidade do Panamá", "es": "Ciudad de Panamá", "de": "Panama-Stadt", "pl": "Panama"},
  "pe": {"ru": "Лима", "en": "Lima", "pt": "Lima", "es": "Lima", "de": "Lima", "pl": "Lima"},
  "ph": {"ru": "Манила", "en": "Manila", "pt": "Manila", "es": "Manila", "de": "Manila", "pl": "Manila"},
  "pg": {"ru": "Порт-Морсби", "en": "Port Moresby", "pt": "Port Moresby", "es": "Port Moresby", "de": "Port Moresby", "pl": "Port Moresby"},
  "pl": {"ru": "Варшава", "en": "Warsaw", "pt": "Varsóvia", "es": "Varsovia", "de": "Warschau", "pl": "Warszawa"},
  "pr": {"ru": "Сан-Хуан", "en": "San Juan", "pt": "San Juan", "es": "San Juan", "de": "San Juan", "pl": "San Juan"},
  "kp": {"ru": "Пхеньян", "en": "Pyongyang", "pt": "Pyongyang", "es": "Pionyang", "de": "Pjöngjang", "pl": "Pjongjang"},
  "pt": {"ru": "Лиссабон", "en": "Lisbon", "pt": "Lisboa", "es": "Lisboa", "de": "Lissabon", "pl": "Lizbona"},
  "py": {"ru": "Асунсьон", "en": "Asunción", "pt": "Asunción", "es": "Asunción", "de": "Asunción", "pl": "Asunción"},
  "ps": {"ru": "Рамалла", "en": "Ramallah", "pt": "Ramallah", "es": "Ramallah", "de": "Ramallah", "pl": "Ramallah"},
  "qa": {"ru": "Доха", "en": "Doha", "pt": "Doha", "es": "Doha", "de": "Doha", "pl": "Doha"},
  "ro": {"ru": "Бухарест", "en": "Bucharest", "pt": "Bucareste", "es": "Bucarest", "de": "Bukarest", "pl": "Bukareszt"},
  "ru": {"ru": "Москва", "en": "Moscow", "pt": "Moscou", "es": "Moscú", "de": "Moskau", "pl": "Moskwa"},
  "rw": {"ru": "Кигали", "en": "Kigali", "pt": "Kigali", "es": "Kigali", "de": "Kigali", "pl": "Kigali"},
  "eh": {"ru": "Эль-Аюн", "en": "Laayoune", "pt": "Laayoune", "es": "Laayoune", "de": "Laayoune", "pl": "Laayoune"},
  "sa": {"ru": "Эр-Рияд", "en": "Riyadh", "pt": "Riade", "es": "Riad", "de": "Riad", "pl": "Rijad"},
  "sd": {"ru": "Хартум", "en": "Khartoum", "pt": "Cartum", "es": "Jartum", "de": "Khartum", "pl": "Chartum"},
  "ss": {"ru": "Джуба", "en": "Juba", "pt": "Juba", "es": "Juba", "de": "Juba", "pl": "Juba"},
  "sn": {"ru": "Дакар", "en": "Dakar", "pt": "Dakar", "es": "Dakar", "de": "Dakar", "pl": "Dakar"},
  "sb": {"ru": "Хониара", "en": "Honiara", "pt": "Honiara", "es": "Honiara", "de": "Honiara", "pl": "Honiara"},
  "sl": {"ru": "Фритаун", "en": "Freetown", "pt": "Freetown", "es": "Freetown", "de": "Freetown", "pl": "Freetown"},
  "sv": {"ru": "Сан-Сальвадор", "en": "San Salvador", "pt": "San Salvador", "es": "San Salvador", "de": "San Salvador", "pl": "San Salvador"},
  "so": {"ru": "Могадишо", "en": "Mogadishu", "pt": "Mogadíscio", "es": "Mogadiscio", "de": "Mogadischu", "pl": "Mogadiszu"},
  "rs": {"ru": "Белград", "en": "Belgrade", "pt": "Belgrado", "es": "Belgrado", "de": "Belgrad", "pl": "Belgrad"},
  "sr": {"ru": "Парамарибо", "en": "Paramaribo", "pt": "Paramaribo", "es": "Paramaribo", "de": "Paramaribo", "pl": "Paramaribo"},
  "sk": {"ru": "Братислава", "en": "Bratislava", "pt": "Bratislava", "es": "Bratislava", "de": "Bratislava", "pl": "Bratislava"},
  "si": {"ru": "Любляна", "en": "Ljubljana", "pt": "Ljubljana", "es": "Ljubljana", "de": "Ljubljana", "pl": "Lublana"},
  "se": {"ru": "Стокгольм", "en": "Stockholm", "pt": "Estocolmo", "es": "Estocolmo", "de": "Stockholm", "pl": "Sztokholm"},
  "sz": {"ru": "Мбабане", "en": "Mbabane", "pt": "Mbabane", "es": "Mbabane", "de": "Mbabane", "pl": "Mbabane"},
  "sy": {"ru": "Дамаск", "en": "Damascus", "pt": "Damasco", "es": "Damasco", "de": "Damaskus", "pl": "Damaszek"},
  "td": {"ru": "Нджамена", "en": "N'Djamena", "pt": "N'Djamena", "es": "N'Djamena", "de": "N'Djamena", "pl": "N'Djamena"},
  "tg": {"ru": "Ломе", "en": "Lomé", "pt": "Lomé", "es": "Lomé", "de": "Lomé", "pl": "Lomé"},
  "th": {"ru": "Бангкок", "en": "Bangkok", "pt": "Bangkok", "es": "Bangkok", "de": "Bangkok", "pl": "Bangkok"},
  "tj": {"ru": "Душанбе", "en": "Dushanbe", "pt": "Dushanbe", "es": "Dushanbe", "de": "Dushanbe", "pl": "Duszanbe"},
  "tm": {"ru": "Ашхабад", "en": "Ashgabat", "pt": "Ashgabat", "es": "Ashgabat", "de": "Aschgabat", "pl": "Aszchabad"},
  "tl": {"ru": "Дили", "en": "Dili", "pt": "Dili", "es": "Dili", "de": "Dili", "pl": "Dili"},
  "tt": {"ru": "Порт-оф-Спейн", "en": "Port of Spain", "pt": "Port of Spain", "es": "Port of Spain", "de": "Port of Spain", "pl": "Port of Spain"},
  "tn": {"ru": "Тунис", "en": "Tunis", "pt": "Tunis", "es": "Tunis", "de": "Tunis", "pl": "Tunis"},
  "tr": {"ru": "Анкара", "en": "Ankara", "pt": "Ankara", "es": "Ankara", "de": "Ankara", "pl": "Ankara"},
  "tw": {"ru": "Тайбэй", "en": "Taipei", "pt": "Taipé", "es": "Taipéi", "de": "Taipeh", "pl": "Tajpej"},
  "tz": {"ru": "Додома", "en": "Dodoma", "pt": "Dodoma", "es": "Dodoma", "de": "Dodoma", "pl": "Dodoma"},
  "ug": {"ru": "Кампала", "en": "Kampala", "pt": "Kampala", "es": "Kampala", "de": "Kampala", "pl": "Kampala"},
  "ua": {"ru": "Киев", "en": "Kyiv", "pt": "Kiev", "es": "Kiev", "de": "Kiew", "pl": "Kijów"},
  "uy": {"ru": "Монтевидео", "en": "Montevideo", "pt": "Montevideo", "es": "Montevideo", "de": "Montevideo", "pl": "Montevideo"},
  "us": {"ru": "Вашингтон", "en": "Washington", "pt": "Washington", "es": "Washington", "de": "Washington", "pl": "Washington"},
  "uz": {"ru": "Ташкент", "en": "Tashkent", "pt": "Tasquente", "es": "Taskent", "de": "Taschkent", "pl": "Taszkent"},
  "ve": {"ru": "Каракас", "en": "Caracas", "pt": "Caracas", "es": "Caracas", "de": "Caracas", "pl": "Caracas"},
  "vn": {"ru": "Ханой", "en": "Hanoi", "pt": "Hanói", "es": "Hanói", "de": "Hanoi", "pl": "Hanoi"},
  "vu": {"ru": "Порт-Вила", "en": "Port Vila", "pt": "Port Vila", "es": "Port Vila", "de": "Port Vila", "pl": "Port Vila"},
  "ye": {"ru": "Сана", "en": "Sanaa", "pt": "Sanaa", "es": "Saná", "de": "Sanaa", "pl": "Sana"},
  "za": {"ru": "Претория", "en": "Pretoria", "pt": "Pretoria", "es": "Pretoria", "de": "Pretoria", "pl": "Pretoria"},
  "zm": {"ru": "Лусака", "en": "Lusaka", "pt": "Lusaka", "es": "Lusaka", "de": "Lusaka", "pl": "Lusaka"},
  "zw": {"ru": "Хараре", "en": "Harare", "pt": "Harare", "es": "Harare", "de": "Harare", "pl": "Harare"},
  "va": {"ru": "Ватикан", "en": "Vatican City", "pt": "Cidade do Vaticano", "es": "Ciudad del Vaticano", "de": "Vatikanstadt", "pl": "Watykan"},
  "sm": {"ru": "Сан-Марино", "en": "San Marino", "pt": "San Marino", "es": "San Marino", "de": "San Marino", "pl": "San Marino"},
  "li": {"ru": "Вадуц", "en": "Vaduz", "pt": "Vaduz", "es": "Vaduz", "de": "Vaduz", "pl": "Vaduz"},
  "ad": {"ru": "Андорра-ла-Велья", "en": "Andorra la Vella", "pt": "Andorra la Vella", "es": "Andorra la Vella", "de": "Andorra la Vella", "pl": "Andorra la Vella"},
  "mt": {"ru": "Валлетта", "en": "Valletta", "pt": "Valeta", "es": "La Valeta", "de": "Valletta", "pl": "Valletta"},
  "nr": {"ru": "Ярен", "en": "Yaren", "pt": "Yaren", "es": "Yaren", "de": "Yaren", "pl": "Yaren"},
  "tv": {"ru": "Фунафути", "en": "Funafuti", "pt": "Funafuti", "es": "Funafuti", "de": "Funafuti", "pl": "Funafuti"},
  "pw": {"ru": "Нгерулмуд", "en": "Ngerulmud", "pt": "Ngerulmud", "es": "Ngerulmud", "de": "Ngerulmud", "pl": "Ngerulmud"},
  "mh": {"ru": "Маджуро", "en": "Majuro", "pt": "Majuro", "es": "Majuro", "de": "Majuro", "pl": "Majuro"},
  "fm": {"ru": "Паликир", "en": "Palikir", "pt": "Palikir", "es": "Palikir", "de": "Palikir", "pl": "Palikir"},
  "ws": {"ru": "Апиа", "en": "Apia", "pt": "Apia", "es": "Apia", "de": "Apia", "pl": "Apia"},
  "to": {"ru": "Нукуалофа", "en": "Nuku'alofa", "pt": "Nuku'alofa", "es": "Nuku'alofa", "de": "Nuku'alofa", "pl": "Nuku'alofa"},
  "ki": {"ru": "Южная Тарава", "en": "South Tarawa", "pt": "South Tarawa", "es": "South Tarawa", "de": "South Tarawa", "pl": "South Tarawa"},
  "kn": {"ru": "Бастер", "en": "Basseterre", "pt": "Basseterre", "es": "Basseterre", "de": "Basseterre", "pl": "Basseterre"},
  "gd": {"ru": "Сент-Джорджес", "en": "St. George's", "pt": "St. George's", "es": "St. George's", "de": "St. George's", "pl": "St. George's"},
  "vc": {"ru": "Кингстаун", "en": "Kingstown", "pt": "Kingstown", "es": "Kingstown", "de": "Kingstown", "pl": "Kingstown"},
  "bb": {"ru": "Бриджтаун", "en": "Bridgetown", "pt": "Bridgetown", "es": "Bridgetown", "de": "Bridgetown", "pl": "Bridgetown"},
  "ag": {"ru": "Сент-Джонс", "en": "Saint John's", "pt": "Saint John's", "es": "Saint John's", "de": "Saint John's", "pl": "Saint John's"},
  "lc": {"ru": "Кастри", "en": "Castries", "pt": "Castries", "es": "Castries", "de": "Castries", "pl": "Castries"},
  "mv": {"ru": "Мале", "en": "Malé", "pt": "Malé", "es": "Malé", "de": "Malé", "pl": "Malé"},
  "sc": {"ru": "Виктория", "en": "Victoria", "pt": "Victoria", "es": "Victoria", "de": "Victoria", "pl": "Victoria"},
  "sg": {"ru": "Сингапур", "en": "Singapore", "pt": "Singapura", "es": "Singapur", "de": "Singapur", "pl": "Singapur"},
  "bh": {"ru": "Манама", "en": "Manama", "pt": "Manama", "es": "Manama", "de": "Manama", "pl": "Manama"},
};

const regions = [
  { ru: 'Китай', en: 'China', pt: 'China' },
  { ru: 'Австралия', en: 'Australia', pt: 'Austrália' },
  { ru: 'Антарктика', en: 'Antarctica', pt: 'Antártida' },
  { ru: 'Южная Америка', en: 'South America', pt: 'América do Sul' },
  { ru: 'Европа', en: 'Europe', pt: 'Europa' },
  { ru: 'Мексика', en: 'Mexico', pt: 'México' },
  { ru: 'Центральная Африка', en: 'Central Africa', pt: 'África Central' },
  { ru: 'Восточная Африка', en: 'East Africa', pt: 'África Oriental' },
  { ru: 'Тропическая Африка и Азия', en: 'Tropical Africa and Asia', pt: 'África tropical e Ásia' },
  { ru: 'Центральная Азия', en: 'Central Asia', pt: 'Ásia Central' },
  { ru: 'Северная Африка', en: 'North Africa', pt: 'África do Norte' },
  { ru: 'Арктика', en: 'Arctic', pt: 'Ártico' },
  { ru: 'Мадагаскар', en: 'Madagascar', pt: 'Madagascar' },
  { ru: 'Африканские саванны', en: 'African savannas', pt: 'Savanas africanas' },
  { ru: 'Новая Зеландия', en: 'New Zealand', pt: 'Nova Zelândia' },
  { ru: 'Балканские пещеры', en: 'Balkan caves', pt: 'Cavernas dos Balcãs' },
  { ru: 'Калифорнийский залив', en: 'Gulf of California', pt: 'Golfo da Califórnia' },
  { ru: 'Западная Австралия', en: 'Western Australia', pt: 'Austrália Ocidental' },
  { ru: 'Новая Гвинея и север Австралии', en: 'New Guinea and northern Australia', pt: 'Nova Guiné e norte da Austrália' },
  { ru: 'Гиндукуш и Гималаи', en: 'Hindu Kush and Himalayas', pt: 'Hindu Kush e Himalaia' },
  { ru: 'Центральная Америка', en: 'Central America', pt: 'América Central' },
  { ru: 'Восточная Австралия', en: 'Eastern Australia', pt: 'Austrália Oriental' },
  { ru: 'Юго-Восточная Азия', en: 'Southeast Asia', pt: 'Sudeste Asiático' },
  { ru: 'Южная и Юго-Восточная Азия', en: 'South and Southeast Asia', pt: 'Sul e Sudeste Asiático' },
  { ru: 'Травянистые равнины Южной Америки', en: 'South American grasslands', pt: 'Campos da América do Sul' },
  { ru: 'Галапагосские острова', en: 'Galapagos Islands', pt: 'Ilhas Galápagos' },
  { ru: 'Высокогорья Азии', en: 'High Asia', pt: 'Alta Ásia' },
];

const animals = [
  { id: 'panda', type: 'animal', key: 'animal:panda', tier: 'easy', emoji: '🐼', names: { ru: 'Большая панда', en: 'Giant panda', pt: 'Panda-gigante' }, region: 0, point: [103, 31], facts: { ru: 'Дикие большие панды живут в горных лесах центрального Китая. Их главная еда — бамбук.', en: 'Wild giant pandas live in mountain forests of central China. Their main food is bamboo.', pt: 'Pandas-gigantes selvagens vivem nas florestas montanhosas da China central. O seu alimento principal é o bambu.' } },
  { id: 'koala', type: 'animal', key: 'animal:koala', tier: 'easy', emoji: '🐨', names: { ru: 'Коала', en: 'Koala', pt: 'Coala' }, region: 1, point: [151, -28], facts: { ru: 'Коалы живут в восточной и юго-восточной Австралии и питаются главным образом листьями эвкалипта. Это сумчатые, а не медведи.', en: 'Koalas live in eastern and southeastern Australia and mostly eat eucalyptus leaves. They are marsupials, not bears.', pt: 'Coalas vivem no leste e sudeste da Austrália e comem principalmente folhas de eucalipto. São marsupiais, não ursos.' } },
  { id: 'penguin', type: 'animal', key: 'animal:penguin', tier: 'easy', emoji: '🐧', names: { ru: 'Императорский пингвин', en: 'Emperor penguin', pt: 'Pinguim-imperador' }, region: 2, point: [40, -70], facts: { ru: 'Императорские пингвины живут у берегов Антарктиды. Они размножаются на морском льду во время антарктической зимы.', en: 'Emperor penguins live around Antarctica. They breed on sea ice during the Antarctic winter.', pt: 'Pinguins-imperadores vivem perto da costa da Antártida. Reproduzem-se no gelo marinho durante o inverno antártico.' } },
  { id: 'kangaroo', type: 'animal', key: 'animal:kangaroo', tier: 'easy', emoji: '🦘', names: { ru: 'Рыжий кенгуру', en: 'Red kangaroo', pt: 'Canguru-vermelho' }, region: 1, point: [134, -25], facts: { ru: 'Рыжие кенгуру населяют открытые засушливые области Австралии. Это самые крупные современные сумчатые.', en: 'Red kangaroos live in open dry regions of Australia. They are the largest living marsupials.', pt: 'Cangurus-vermelhos vivem em regiões abertas e secas da Austrália. São os maiores marsupiais vivos.' } },
  { id: 'capybara', type: 'animal', key: 'animal:capybara', tier: 'easy', emoji: '🐾', names: { ru: 'Капибара', en: 'Capybara', pt: 'Capivara' }, region: 3, point: [-57, -16], facts: { ru: 'Обыкновенная капибара живёт в Южной Америке рядом с водой. Это крупнейший современный грызун, он хорошо плавает и ныряет.', en: 'Capybaras live in South America near water. They are the largest living rodents and swim and dive well.', pt: 'Capivaras vivem na América do Sul perto da água. São os maiores roedores vivos e nadam e mergulham bem.' } },
  { id: 'axolotl', type: 'animal', key: 'animal:axolotl', tier: 'medium', emoji: '🦎', names: { ru: 'Аксолотль', en: 'Axolotl', pt: 'Axolote' }, region: 5, point: [-99, 19], facts: { ru: 'Аксолотль — водная саламандра из озёр и каналов у Мехико. Он знаменит способностью отращивать утраченные части тела.', en: 'The axolotl is an aquatic salamander from lakes and canals near Mexico City. It is famous for regrowing lost body parts.', pt: 'O axolote é uma salamandra aquática de lagos e canais perto da Cidade do México. É famoso por regenerar partes do corpo.' } },
  { id: 'okapi', type: 'animal', key: 'animal:okapi', tier: 'medium', emoji: '🦌', names: { ru: 'Окапи', en: 'Okapi', pt: 'Ocapi' }, region: 6, point: [28, 1], facts: { ru: 'Окапи живёт в густых лесах бассейна Конго. Полосатые ноги напоминают зебру, но его ближайшие родственники — жирафы.', en: 'Okapis live in dense forests of the Congo Basin. Their striped legs look zebra-like, but their closest relatives are giraffes.', pt: 'Ocapis vivem nas florestas densas da bacia do Congo. As pernas listradas lembram uma zebra, mas os parentes mais próximos são as girafas.' } },
  { id: 'shoebill', type: 'animal', key: 'animal:shoebill', tier: 'medium', emoji: '🐦', names: { ru: 'Китоглав', en: 'Shoebill', pt: 'Bico-de-sapato' }, region: 7, point: [32, 1], facts: { ru: 'Китоглав живёт на болотах Восточной Африки. Его огромный клюв похож на башмак и помогает ловить крупную рыбу.', en: 'Shoebills live in East African wetlands. Their huge bill looks like a shoe and helps them catch large fish.', pt: 'Bicos-de-sapato vivem em zonas húmidas da África Oriental. O bico enorme parece um sapato e ajuda a apanhar peixes grandes.' } },
  { id: 'pangolin', type: 'animal', key: 'animal:pangolin', tier: 'medium', emoji: '🐾', names: { ru: 'Панголин', en: 'Pangolin', pt: 'Pangolim' }, region: 8, point: [20, 0], facts: { ru: 'Панголины встречаются в Африке и Азии. Их тело покрыто чешуями из кератина, а при опасности они сворачиваются в шар.', en: 'Pangolins are found in Africa and Asia. Their bodies are covered with keratin scales, and they curl into a ball when threatened.', pt: 'Pangolins vivem na África e na Ásia. O corpo tem escamas de queratina e, em perigo, eles enrolam-se numa bola.' } },
  { id: 'saiga', type: 'animal', key: 'animal:saiga', tier: 'medium', emoji: '🐐', names: { ru: 'Сайгак', en: 'Saiga antelope', pt: 'Saiga' }, region: 9, point: [65, 48], facts: { ru: 'Сайгак — степная антилопа Центральной Азии. Его необычный нос помогает фильтровать пыль и согревать холодный воздух.', en: 'The saiga is a steppe antelope of Central Asia. Its unusual nose helps filter dust and warm cold air.', pt: 'A saiga é um antílope das estepes da Ásia Central. O nariz incomum ajuda a filtrar poeira e aquecer o ar frio.' } },
  { id: 'fennec', type: 'animal', key: 'animal:fennec', tier: 'medium', emoji: '🦊', names: { ru: 'Фенек', en: 'Fennec fox', pt: 'Feneco' }, region: 10, point: [10, 25], facts: { ru: 'Фенек живёт в пустынях Северной Африки. Огромные уши помогают слышать добычу под песком и отдавать лишнее тепло.', en: 'Fennec foxes live in North African deserts. Their enormous ears help them hear prey under sand and release extra heat.', pt: 'Fenekos vivem nos desertos do norte da África. As orelhas enormes ajudam a ouvir presas sob a areia e a perder calor.' } },
  { id: 'narwhal', type: 'animal', key: 'animal:narwhal', tier: 'medium', emoji: '🐋', names: { ru: 'Нарвал', en: 'Narwhal', pt: 'Narval' }, region: 11, point: [-70, 75], facts: { ru: 'Нарвал — арктический кит. Его знаменитый бивень на самом деле длинный зуб, который может вырастать у самцов.', en: 'The narwhal is an Arctic whale. Its famous tusk is actually a long tooth that can grow from males.', pt: 'O narval é uma baleia do Ártico. A presa famosa é na verdade um dente comprido que pode crescer nos machos.' } },
  { id: 'aye-aye', type: 'animal', key: 'animal:aye-aye', tier: 'medium', emoji: '🐒', names: { ru: 'Ай-ай', en: 'Aye-aye', pt: 'Aie-aie' }, region: 12, point: [47, -19], facts: { ru: 'Ай-ай — ночной лемур с Мадагаскара. Он простукивает дерево и длинным пальцем достаёт личинок из ходов.', en: 'The aye-aye is a nocturnal lemur from Madagascar. It taps wood and uses a long finger to pull larvae from tunnels.', pt: 'O aie-aie é um lêmure noturno de Madagascar. Ele bate na madeira e usa um dedo comprido para tirar larvas dos túneis.' } },
  { id: 'secretary-bird', type: 'animal', key: 'animal:secretary-bird', tier: 'medium', emoji: '🐦', names: { ru: 'Птица-секретарь', en: 'Secretary bird', pt: 'Secretário' }, region: 13, point: [25, -20], facts: { ru: 'Птица-секретарь живёт в африканских саваннах. Это хищная птица на длинных ногах, которая часто охотится на земле.', en: 'Secretary birds live in African savannas. They are long-legged raptors that often hunt on the ground.', pt: 'Secretários vivem nas savanas africanas. São aves de rapina de pernas longas que caçam muitas vezes no chão.' } },
  { id: 'kakapo', type: 'animal', key: 'animal:kakapo', tier: 'medium', emoji: '🦜', names: { ru: 'Какапо', en: 'Kakapo', pt: 'Kakapo' }, region: 14, point: [167, -46], facts: { ru: 'Какапо — ночной нелетающий попугай из Новой Зеландии. Это один из самых необычных и редких попугаев мира.', en: 'The kakapo is a nocturnal flightless parrot from New Zealand. It is one of the world’s strangest and rarest parrots.', pt: 'O kakapo é um papagaio noturno e incapaz de voar da Nova Zelândia. É um dos papagaios mais estranhos e raros do mundo.' } },
  { id: 'olm', type: 'animal', key: 'animal:olm', tier: 'max', emoji: '🦎', names: { ru: 'Протей', en: 'Olm', pt: 'Proteu' }, region: 15, point: [15, 45], facts: { ru: 'Протей — слепая пещерная амфибия из карстовых пещер Балкан. Он может долго жить в темноте и обходиться без пищи.', en: 'The olm is a blind cave amphibian from Balkan karst caves. It can live in darkness and survive long periods without food.', pt: 'O proteu é um anfíbio cego das cavernas cársticas dos Balcãs. Vive no escuro e pode passar muito tempo sem comer.' } },
  { id: 'tuatara', type: 'animal', key: 'animal:tuatara', tier: 'max', emoji: '🦎', names: { ru: 'Туатара', en: 'Tuatara', pt: 'Tuatara' }, region: 14, point: [174, -41], facts: { ru: 'Туатара живёт на островах Новой Зеландии. Она похожа на ящерицу, но относится к отдельной древней линии пресмыкающихся.', en: 'Tuataras live on New Zealand islands. They look like lizards but belong to a separate ancient reptile lineage.', pt: 'Tuataras vivem em ilhas da Nova Zelândia. Parecem lagartos, mas pertencem a uma linhagem antiga separada de répteis.' } },
  { id: 'vaquita', type: 'animal', key: 'animal:vaquita', tier: 'max', emoji: '🐬', names: { ru: 'Вакита', en: 'Vaquita', pt: 'Vaquita' }, region: 16, point: [-114, 31], facts: { ru: 'Вакита — маленькая морская свинья, обитающая только в северной части Калифорнийского залива. Это один из самых редких морских млекопитающих.', en: 'The vaquita is a tiny porpoise found only in the northern Gulf of California. It is one of the rarest marine mammals.', pt: 'A vaquita é uma pequena toninha encontrada só no norte do Golfo da Califórnia. É um dos mamíferos marinhos mais raros.' } },
  { id: 'quokka', type: 'animal', key: 'animal:quokka', tier: 'max', emoji: '🦘', names: { ru: 'Квокка', en: 'Quokka', pt: 'Quokka' }, region: 17, point: [115.5, -32], facts: { ru: 'Квокка — небольшой сумчатый зверёк Западной Австралии. Особенно известны популяции на островах Роттнест и Болд.', en: 'The quokka is a small marsupial from Western Australia. Populations on Rottnest and Bald islands are especially well known.', pt: 'O quokka é um pequeno marsupial da Austrália Ocidental. As populações das ilhas Rottnest e Bald são especialmente conhecidas.' } },
  { id: 'cassowary', type: 'animal', key: 'animal:cassowary', tier: 'max', emoji: '🐦', names: { ru: 'Казуар', en: 'Cassowary', pt: 'Casuar' }, region: 18, point: [145, -17], facts: { ru: 'Казуары живут во влажных лесах Новой Гвинеи и северной Австралии. На голове у них шлемовидный гребень, а ноги очень мощные.', en: 'Cassowaries live in rainforests of New Guinea and northern Australia. They have a helmet-like casque and powerful legs.', pt: 'Casuares vivem nas florestas húmidas da Nova Guiné e do norte da Austrália. Têm um casco na cabeça e pernas poderosas.' } },
  { id: 'markhor', type: 'animal', key: 'animal:markhor', tier: 'max', emoji: '🐐', names: { ru: 'Мархур', en: 'Markhor', pt: 'Markhor' }, region: 19, point: [70, 35], facts: { ru: 'Мархур — горный козёл с большими спиральными рогами. Он живёт в скалистых районах Гиндукуша и Гималаев.', en: 'The markhor is a wild goat with large spiral horns. It lives in rocky areas of the Hindu Kush and Himalayas.', pt: 'O markhor é uma cabra selvagem com grandes chifres em espiral. Vive em áreas rochosas do Hindu Kush e do Himalaia.' } },
  { id: 'glass-frog', type: 'animal', key: 'animal:glass-frog', tier: 'max', emoji: '🐸', names: { ru: 'Стеклянная лягушка', en: 'Glass frog', pt: 'Rã-de-vidro' }, region: 20, point: [-84, 10], facts: { ru: 'Стеклянные лягушки живут у ручьёв влажных лесов Центральной Америки. У многих видов брюшко полупрозрачное.', en: 'Glass frogs live by rainforest streams in Central America. Many species have partly transparent bellies.', pt: 'Rãs-de-vidro vivem perto de riachos em florestas húmidas da América Central. Muitas espécies têm a barriga parcialmente transparente.' } },
  { id: 'ring-tailed-lemur', type: 'animal', key: 'animal:ring-tailed-lemur', tier: 'max', emoji: '🐒', names: { ru: 'Кошачий лемур', en: 'Ring-tailed lemur', pt: 'Lêmure-de-cauda-anelada' }, region: 12, point: [46, -24], facts: { ru: 'Кошачьи лемуры живут на юге Мадагаскара. Они держатся группами и легко узнаются по длинному полосатому хвосту.', en: 'Ring-tailed lemurs live in southern Madagascar. They are social animals and are easy to spot by their long striped tails.', pt: 'Lêmures-de-cauda-anelada vivem no sul de Madagascar. Vivem em grupos e são reconhecidos pela cauda comprida e listrada.' } },
  { id: 'platypus', type: 'animal', key: 'animal:platypus', tier: 'max', emoji: '🦫', names: { ru: 'Утконос', en: 'Platypus', pt: 'Ornitorrinco' }, region: 21, point: [148, -36], facts: { ru: 'Утконос живёт в восточной Австралии. Это млекопитающее откладывает яйца и находит добычу в воде с помощью чувствительного клюва.', en: 'Platypuses live in eastern Australia. This mammal lays eggs and finds prey underwater with a sensitive bill.', pt: 'Ornitorrincos vivem no leste da Austrália. Este mamífero põe ovos e encontra presas debaixo de água com um bico sensível.' } },
  { id: 'giant-salamander', type: 'animal', key: 'animal:giant-salamander', tier: 'max', emoji: '🦎', names: { ru: 'Китайская исполинская саламандра', en: 'Chinese giant salamander', pt: 'Salamandra-gigante-chinesa' }, region: 0, point: [109, 30], facts: { ru: 'Китайская исполинская саламандра — одна из крупнейших амфибий мира. Она живёт в прохладных горных ручьях и реках Китая.', en: 'The Chinese giant salamander is one of the world’s largest amphibians. It lives in cool mountain streams and rivers in China.', pt: 'A salamandra-gigante-chinesa é um dos maiores anfíbios do mundo. Vive em riachos e rios frios das montanhas da China.' } },
  { id: 'binturong', type: 'animal', key: 'animal:binturong', tier: 'max', emoji: '🐾', names: { ru: 'Бинтуронг', en: 'Binturong', pt: 'Binturong' }, region: 22, point: [102, 15], facts: { ru: 'Бинтуронг живёт в лесах Юго-Восточной Азии. Он лазает по деревьям и пользуется цепким хвостом почти как пятой лапой.', en: 'Binturongs live in Southeast Asian forests. They climb trees and use a prehensile tail almost like a fifth limb.', pt: 'Binturongs vivem nas florestas do Sudeste Asiático. Sobem em árvores e usam a cauda preênsil quase como uma quinta pata.' } },
  { id: 'dhole', type: 'animal', key: 'animal:dhole', tier: 'max', emoji: '🐕', names: { ru: 'Красный волк', en: 'Dhole', pt: 'Cão-selvagem-asiático' }, region: 23, point: [78, 20], facts: { ru: 'Красный волк, или дхоль, живёт в Южной и Юго-Восточной Азии. Это социальный дикий пёс, который охотится стаями.', en: 'The dhole lives in South and Southeast Asia. It is a social wild dog that hunts in packs.', pt: 'O cão-selvagem-asiático vive no Sul e Sudeste Asiático. É um canídeo social que caça em grupos.' } },
  { id: 'maned-wolf', type: 'animal', key: 'animal:maned-wolf', tier: 'max', emoji: '🐺', names: { ru: 'Гривистый волк', en: 'Maned wolf', pt: 'Lobo-guará' }, region: 24, point: [-48, -15], facts: { ru: 'Гривистый волк живёт на травянистых равнинах Южной Америки. Несмотря на название, это не настоящий волк, а отдельный длинноногий псовый.', en: 'Maned wolves live in South American grasslands. Despite the name, they are not true wolves but a distinct long-legged canid.', pt: 'Lobos-guará vivem nos campos da América do Sul. Apesar do nome, não são lobos verdadeiros, mas canídeos de pernas longas.' } },
  { id: 'marine-iguana', type: 'animal', key: 'animal:marine-iguana', tier: 'max', emoji: '🦎', names: { ru: 'Морская игуана', en: 'Marine iguana', pt: 'Iguana-marinha' }, region: 25, point: [-90, -1], facts: { ru: 'Морская игуана живёт на Галапагосских островах. Это единственная современная ящерица, которая регулярно плавает в море и ест водоросли.', en: 'Marine iguanas live on the Galapagos Islands. They are the only living lizards that regularly swim in the sea and eat algae.', pt: 'Iguanas-marinhas vivem nas Ilhas Galápagos. São os únicos lagartos atuais que nadam regularmente no mar e comem algas.' } },
  { id: 'snow-leopard', type: 'animal', key: 'animal:snow-leopard', tier: 'max', emoji: '🐆', names: { ru: 'Снежный барс', en: 'Snow leopard', pt: 'Leopardo-das-neves' }, region: 26, point: [78, 35], facts: { ru: 'Снежный барс живёт в высоких горах Центральной и Южной Азии. Длинный хвост помогает ему держать равновесие и согреваться.', en: 'Snow leopards live in high mountains of Central and South Asia. Their long tails help with balance and warmth.', pt: 'Leopardos-das-neves vivem nas altas montanhas da Ásia Central e do Sul. A cauda comprida ajuda no equilíbrio e no calor.' } },
];

// Язык берём из настроек браузера. Если ни один из поддерживаемых не подошёл —
// английский, а не русский: чужому человеку по ссылке он понятнее.
const storageKeys = {
  player: 'geoDetectivePlayer',
  scores: 'geoDetectiveScores',
  lang: 'geoDetectiveLang',
};

function detectLang() {
  const wanted = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of wanted) {
    const base = String(tag || '').toLowerCase().split('-')[0];
    if (langs.includes(base)) return base;
  }
  return 'en';
}

// Выбранный язык переживает перезагрузку; до первого выбора берём язык браузера.
function loadLang() {
  try {
    const saved = localStorage.getItem(storageKeys.lang);
    if (saved && langs.includes(saved)) return saved;
  } catch {}
  return detectLang();
}

function saveLang() {
  try {
    localStorage.setItem(storageKeys.lang, lang);
  } catch {}
}

let lang = loadLang();
let mode = 'flags';
let level = 'max';
let lengthMode = 'fixed';
let view = 'quiz';
let exploreKind = 'countries';
let selectedKey = 'flag:pt';
let exploreScroll = null; // { block, behavior } — отложенная прокрутка списка после перерисовки
let round = [];
let pos = 0;
let solved = false;
let hinted = false;
let wrong = new Set();

let player = loadPlayer();
let scores = loadScores();
let stats = freshStats();
let questionAwarded = false;
let statusMessage = '';

const blockedNameRoots = [
  'fuck', 'fuk', 'fuq', 'shit', 'bitch', 'cunt', 'dick', 'cock', 'asshole', 'nigg',
  'puta', 'puto', 'putain', 'putana', 'caralho', 'porra', 'merda', 'buceta', 'piroca',
  'cabron', 'cabrone', 'joder', 'mierda', 'cono', 'coño', 'pendejo', 'gilipoll', 'maricon', 'cojones', 'culero', 'verga', 'pvta', 'pvto',
  'arsch', 'scheiss', 'scheisse', 'fotze', 'wichs', 'schwanz', 'hurensohn', 'hure', 'miststueck',
  'kurw', 'kvrw', 'chuj', 'chvj', 'huj', 'hvj', 'pierdol', 'jebac', 'jebal', 'jebie', 'jeba', 'dupek', 'pizda', 'cipa', 'suka',
  'хуй', 'хуя', 'хуе', 'хуё', 'пизд', 'бляд', 'блять', 'бля', 'еба', 'ебо', 'ебу', 'еби', 'ёба', 'ёбу', 'ёби', 'сука', 'муд', 'гандон', 'пидор', 'пида',
  'huy', 'hui', 'huya', 'hue', 'xui', 'xuy', 'xyi', 'pizd', 'blya', 'ebat', 'yebat', 'yob', 'suka', 'mudak', 'gandon', 'pidor',
];

const confusables = {
  а: 'a', в: 'b', е: 'e', ё: 'e', з: 'z', к: 'k', м: 'm', н: 'h', о: 'o', р: 'p', с: 'c', т: 't', у: 'y', х: 'x',
  Α: 'a', А: 'a', Β: 'b', В: 'b', Ε: 'e', Е: 'e', Κ: 'k', К: 'k', Μ: 'm', М: 'm', Ν: 'n', Ο: 'o', О: 'o', Ρ: 'p', Р: 'p', С: 'c', Τ: 't', Т: 't', Υ: 'y', У: 'y', Χ: 'x', Х: 'x',
  ł: 'l', Ł: 'l', ß: 'ss', æ: 'ae', Æ: 'ae', œ: 'oe', Œ: 'oe',
  0: 'o', 1: 'i', 3: 'e', 4: 'a', 5: 's', 6: 'b', 7: 't', 8: 'b', 9: 'g',
  '@': 'a', '$': 's', '!': 'i', '+': 't',
};

const cyrillicLatin = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n',
  о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sh', ы: 'y', э: 'e', ю: 'yu', я: 'ya',
};

function tr(key, vars = {}) {
  return (ui[lang][key] || ui.ru[key] || key).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function loadPlayer() {
  const saved = safeParse(localStorage.getItem(storageKeys.player), null);
  return saved?.name ? { name: String(saved.name).slice(0, 18) } : { name: '' };
}

function loadScores() {
  const saved = safeParse(localStorage.getItem(storageKeys.scores), []);
  return Array.isArray(saved) ? pruneScores(saved.filter(score => score?.name && Number.isFinite(score?.score)).map(score => ({
    ...score,
    mode: score.mode || 'mixed',
    level: score.level || 'easy',
    lengthMode: score.lengthMode || 'fixed',
    total: score.total || score.correct || 0,
    date: score.date || new Date(0).toISOString(),
  }))) : [];
}

function savePlayer() {
  localStorage.setItem(storageKeys.player, JSON.stringify(player));
}

function saveScores() {
  localStorage.setItem(storageKeys.scores, JSON.stringify(pruneScores(scores)));
}

function freshStats() {
  return { score: 0, correct: 0, mistakes: 0, hints: 0, reveals: 0, startedAt: Date.now(), saved: false };
}

function simplifyLetters(value) {
  return [...value].map(char => confusables[char] || confusables[char.toLowerCase()] || char.toLowerCase()).join('');
}

function normalizeNameForFilter(value) {
  const folded = simplifyLetters(value.normalize('NFKD').replace(/[\u0300-\u036f]/g, ''));
  return folded.replace(/(.)\1{2,}/g, '$1$1').replace(/[^a-zа-яё0-9]/gi, '');
}

function transliterateForFilter(value) {
  const folded = value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  return [...folded].map(char => cyrillicLatin[char] || confusables[char] || char).join('').replace(/(.)\1{2,}/g, '$1$1').replace(/[^a-z0-9]/g, '');
}

function sanitizePlayerName(value) {
  return value.replace(/[^\p{L}\p{N} _-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 18);
}

function isBlockedName(value) {
  const clean = normalizeNameForFilter(value);
  const direct = value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zа-яё0-9]/gi, '');
  const latin = transliterateForFilter(value);
  return blockedNameRoots.some(root => clean.includes(root) || direct.includes(root) || latin.includes(root));
}

function validatePlayerName(value) {
  const name = sanitizePlayerName(value);
  if (name.length < 2 || isBlockedName(value) || isBlockedName(name)) return null;
  return name;
}

function modeLabel(value = mode) {
  return tr(value === 'flags' ? 'modeFlags' : value === 'coats' ? 'modeCoats' : value === 'capitals' ? 'modeCapitals' : value === 'animals' ? 'modeAnimals' : 'modeMixed');
}

function levelLabel(value = level) {
  return tr(value === 'easy' ? 'levelEasy' : value === 'medium' ? 'levelMedium' : 'levelMax');
}

function lengthLabel(value = lengthMode) {
  return tr(value === 'endless' ? 'lengthEndless' : 'lengthFixed');
}

function categoryKey(entry = { mode, level, lengthMode }) {
  return `${entry.mode}|${entry.level}|${entry.lengthMode || 'fixed'}`;
}

function categoryScores() {
  const key = categoryKey();
  return scores.filter(entry => categoryKey(entry) === key);
}

function compareScores(a, b) {
  return b.score - a.score || b.correct - a.correct || new Date(b.date) - new Date(a.date);
}

function pruneScores(entries) {
  const keptByCategory = new Map();
  return [...entries].sort(compareScores).filter(entry => {
    const key = categoryKey(entry);
    const count = keptByCategory.get(key) || 0;
    if (count >= 10) return false;
    keptByCategory.set(key, count + 1);
    return true;
  }).slice(0, 120);
}

function formatScoreDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat(lang, { day: '2-digit', month: '2-digit' }).format(date);
}

function roundScoreMeta(entry) {
  return tr('scoreMeta', { correct: entry.correct, total: entry.total, date: formatScoreDate(entry.date) });
}

function awardQuestion(revealed = false) {
  if (questionAwarded) return;
  questionAwarded = true;
  if (revealed) {
    stats.reveals++;
    return;
  }
  const levelBonus = level === 'max' ? 40 : level === 'medium' ? 20 : 0;
  const lengthBonus = lengthMode === 'endless' ? 10 : 0;
  const penalty = wrong.size * 15 + (hinted ? 25 : 0);
  stats.correct++;
  stats.score += Math.max(20, 100 + levelBonus + lengthBonus - penalty);
}

function saveFinishedScore(value) {
  if (stats.saved) return true;
  const name = validatePlayerName(value);
  if (!name) {
    statusMessage = tr('playerRejected');
    return false;
  }
  player = { name };
  savePlayer();
  const entry = {
    name,
    score: stats.score,
    correct: stats.correct,
    total: round.length,
    mode,
    level,
    lengthMode,
    mistakes: stats.mistakes,
    hints: stats.hints,
    reveals: stats.reveals,
    date: new Date().toISOString(),
  };
  stats.saved = true;
  scores = pruneScores([entry, ...scores]);
  saveScores();
  statusMessage = tr('scoreSaved', { score: stats.score });
  return true;
}

function renderPlayerBoard() {
  const board = document.querySelector('.player-board');
  if (!board) return;
  board.setAttribute('aria-label', tr('playerBoard'));
  $('#scoreScope').textContent = tr('scoreboardScope', { mode: modeLabel(), level: levelLabel(), length: lengthLabel() });
  // Карточка показывается только на финальном экране, где счёт раунда уже
  // написан крупно ниже. Дублировать его здесь незачем, да и рядом с «рекордов
  // пока нет» число выглядело прямым враньём. Показываем лучший в категории.
  const topScores = categoryScores().slice(0, 8);
  const best = topScores[0];
  $('#currentScore').textContent = best ? String(best.score) : '';
  $('#currentScore').hidden = !best;
  if (best) $('#currentScore').setAttribute('aria-label', `${tr('scoreboardTitle')}: ${best.score}`);
  $('#scoreList').innerHTML = topScores.length
    ? topScores.map((entry, index) => `<li><b>${index + 1}</b><strong>${escapeHtml(entry.name)}</strong><span>${entry.score}</span><small>${escapeHtml(roundScoreMeta(entry))}</small></li>`).join('')
    : `<li class="empty">${tr('scoreboardEmpty')}</li>`;
}

function renderFinish() {
  const savedText = stats.saved ? `<p class="message" role="status">${statusMessage || tr('playerReady', { name: player.name })}</p>` : '';
  const entryForm = stats.saved ? '' : `
    <form class="score-entry" id="scoreForm" novalidate>
      <label>
        <span>${tr('playerName')}</span>
        <input id="scoreName" name="scoreName" autocomplete="nickname" maxlength="18" placeholder="${escapeHtml(tr('playerPlaceholder'))}" value="${escapeHtml(player.name)}">
      </label>
      <button class="primary" type="submit">${tr('savePlayer')}</button>
      <p class="player-status" id="scoreStatus" role="status">${statusMessage || tr('playerPrompt')}</p>
    </form>`;
  $('#game').innerHTML = `
    <div class="finish">
      <p class="eyebrow">${tr('finishEyebrow')}</p>
      <h2>${tr('finishTitle')}</h2>
      <article class="final-score">
        <span>${tr('scoreTitle')}</span>
        <strong>${stats.score}</strong>
        <p>${tr('scoreBreakdown', { correct: stats.correct, total: round.length, mistakes: stats.mistakes, hints: stats.hints })}</p>
        <small>${tr('scoreboardScope', { mode: modeLabel(), level: levelLabel(), length: lengthLabel() })}</small>
      </article>
      ${entryForm}
      ${savedText}
      <button class="primary" id="again">${tr('playAgain')}</button>
    </div>`;
  $('#again').onclick = start;
  const form = $('#scoreForm');
  if (form) {
    form.onsubmit = event => {
      event.preventDefault();
      const ok = saveFinishedScore($('#scoreName').value);
      if (!ok) {
        $('#scoreStatus').textContent = statusMessage;
        $('#scoreName').focus();
        $('#scoreName').select();
        return;
      }
      renderPlayerBoard();
      renderFinish();
    };
  }
}

const dataCache = { countries: null, flagText: {}, facts: {} };
const dataPending = new Set();

function loadJson(url, key, assign) {
  if (dataPending.has(key)) return;
  dataPending.add(key);
  fetch(url)
    .then(response => (response.ok ? response.json() : {}))
    .catch(() => ({}))
    .then(value => {
      assign(value);
      dataPending.delete(key);
      // Перерисовка по приходу данных пересобирает список атласа и сбрасывает
      // его прокрутку. Пользователь в этот момент ничего не нажимал, поэтому
      // позицию надо вернуть на место.
      const list = document.querySelector('.item-list');
      const keepTop = list && list.scrollHeight > list.clientHeight + 1 ? list.scrollTop : null;
      render();
      const nextList = document.querySelector('.item-list');
      if (nextList && keepTop !== null) {
        const behavior = nextList.style.scrollBehavior;
        nextList.style.scrollBehavior = 'auto';
        nextList.scrollTop = keepTop;
        nextList.style.scrollBehavior = behavior;
      }
    });
}

// Тексты есть на всех шести языках, но факты переведены не для всех стран.
// Английский держим наготове как запасной: лучше английская строка, чем пустая.
// Тот же порог, что и у мобильной вёрстки в style.css: ниже него карта
// результата не рисуется вовсе, а не прячется стилями, — считать её впустую
// незачем, да и d3 нечего рисовать в блок нулевой ширины.
// Кнопка «Далее» на телефоне закреплена внизу и в прокрутке не нуждается,
// а вот рассказ о флаге после ответа может оказаться за нижним краем. Если он
// не поместился — подводим его ровно настолько, насколько надо.
//
// scrollIntoView здесь не годится: про закреплённую панель он не знает и текст,
// заехавший под неё, считает видимым. Поэтому нижнюю границу берём по самой
// панели, когда та закреплена, и докручиваем ровно на нехватку.
function revealSolvedNote() {
  const note = document.querySelector('.question .message');
  if (!note) return;
  const actions = document.querySelector('.question .actions');
  const floor = actions && getComputedStyle(actions).position === 'fixed'
    ? actions.getBoundingClientRect().top
    : window.innerHeight;
  const hidden = Math.round(note.getBoundingClientRect().bottom + 8 - floor);
  if (hidden > 0) window.scrollBy({ top: hidden, behavior: 'smooth' });
}

function wideScreen() {
  return window.matchMedia('(min-width: 701px)').matches;
}

function loreLang() {
  return lang;
}

function countryInfo(id) {
  if (!dataCache.countries) {
    loadJson('data/countries.json', 'countries', value => { dataCache.countries = value; });
    return null;
  }
  return dataCache.countries.countries?.[id] || null;
}

// Описание флага нужно и раунду, и атласу, а факты — только атласу. Поэтому они
// лежат в разных файлах: иначе раунд тянул бы сотни килобайт фактов ради одной строки.
function countryFlagText(id) {
  return loreText(dataCache.flagText, 'flags', id) || '';
}

// Один и тот же разбор для обоих файлов: берём язык интерфейса, а если нужной
// страны там нет — тянем английский и отвечаем из него.
function loreText(cache, file, id) {
  const key = loreLang();
  if (!cache[key]) {
    loadJson(`data/${file}.${key}.json`, `${file}:${key}`, value => { cache[key] = value; });
    return null;
  }
  if (cache[key][id]) return cache[key][id];
  if (key === 'en') return null;
  if (!cache.en) {
    loadJson(`data/${file}.en.json`, `${file}:en`, value => { cache.en = value; });
    return null;
  }
  return cache.en[id] || null;
}

function countryFacts(id) {
  return loreText(dataCache.facts, 'facts', id) || [];
}

// Факт выбирается один раз на открытие карточки: перерисовка — пришли данные,
// сменился язык — не должна подменять текст под рукой у читающего. Индекс переживает
// смену языка, поэтому там показывается тот же факт, только переведённый.
// При повторном открытии той же страны выпадает другой факт, иначе «случайный»
// слишком часто повторяется.
const lastFactIndex = new Map();
let factChoice = { key: null, index: 0 };

function chosenFact(item, facts) {
  if (!facts.length) return '';
  if (factChoice.key !== item.key) {
    let index = Math.floor(Math.random() * facts.length);
    if (facts.length > 1 && index === lastFactIndex.get(item.id)) index = (index + 1) % facts.length;
    lastFactIndex.set(item.id, index);
    factChoice = { key: item.key, index };
  }
  return facts[factChoice.index] || facts[0];
}

// Intl возвращает сам код, если названия нет в наборе CLDR движка; набор в Safari
// отличается от Chrome, поэтому запасная таблица проверяется всегда.
function intlName(type, code, table) {
  try {
    const value = new Intl.DisplayNames([lang], { type }).of(code);
    if (value && value !== code) return value;
  } catch {}
  return table?.[code]?.[lang] || table?.[code]?.en || code;
}

function currencyName(code) {
  return intlName('currency', code, dataCache.countries?.fallback?.currency);
}

function languageNames(codes) {
  return codes.map(code => intlName('language', code, dataCache.countries?.fallback?.language)).join(', ');
}

function countryPanel(item) {
  const info = countryInfo(item.id);
  const flagText = countryFlagText(item.id);
  const facts = countryFacts(item.id);
  if (!info && !flagText && !facts.length) return `<p class="country-loading">${tr('infoLoading')}</p>`;
  const rows = [];
  if (info?.capital) rows.push([tr('capital'), info.capital[lang] || info.capital.en]);
  if (info?.currency) rows.push([tr('currency'), currencyName(info.currency)]);
  if (info?.languages?.length) rows.push([tr('officialLanguages'), languageNames(info.languages)]);
  const notes = [];
  if (flagText) notes.push([tr('flagStory'), flagText]);
  const pick = chosenFact(item, facts);
  if (pick) notes.push([tr('funFact'), pick]);
  if (!rows.length && !notes.length) return '';
  return `<div class="country-panel">${rows.length ? `<dl class="country-facts">${rows
    .map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`)
    .join('')}</dl>` : ''}${notes
    .map(([term, value]) => `<p class="country-note"><b>${escapeHtml(term)}</b> ${escapeHtml(value)}</p>`)
    .join('')}</div>`;
}

function countryName(id, locale = lang) {
  return countryNameOverrides[locale]?.[id] || new Intl.DisplayNames([locale], { type: 'region' }).of(id.toUpperCase()) || id.toUpperCase();
}

function capitalName(item, locale = lang) {
  const value = typeof item === 'string' ? capitalById.get(item) : item;
  return value?.capital?.[locale] || value?.capital?.en || value?.capital?.ru || '';
}

function name(item) {
  return item.type === 'flag' || item.type === 'coat' || item.type === 'capital' ? countryName(item.id) : (item.names[lang] || item.names.en || item.names.ru);
}

function fact(item) {
  if (item.type === 'coat') return tr('coatSolved', { name: name(item) });
  if (item.type === 'capital') return tr('capitalSolved', { name: name(item), capital: capitalName(item) });
  if (item.type === 'animal') return item.facts[lang] || item.facts.en || item.facts.ru;
  return item.facts?.[lang] || '';
}

function firstLetter(value) {
  return [...String(value).trim()][0]?.toLocaleUpperCase(lang) || '';
}

function regionName(index) {
  return regions[index][lang] || regions[index].en || regions[index].ru;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const levelRank = { easy: 0, medium: 1, max: 2 };
const fixedRoundSizes = { easy: 5, medium: 15, max: 30 };
const easyIds = new Set(Object.keys(easyFlagFacts));
const mediumFlagIds = new Set([
  ...easyIds,
  'at', 'be', 'nl', 'dk', 'is', 'cz', 'sk', 'hu', 'ro', 'bg', 'hr', 'si', 'rs', 'ba', 'me', 'mk', 'al', 'tr', 'cy', 'ru',
  'ee', 'lv', 'lt', 'by', 'md', 'ge', 'am', 'az', 'kz', 'uz', 'kg', 'tj', 'tm',
  'ir', 'iq', 'il', 'jo', 'sa', 'ae', 'qa', 'kw', 'om', 'ye',
  'eg', 'ma', 'dz', 'tn', 'ly', 'et', 'ke', 'ug', 'tz', 'rw', 'gh', 'ng', 'sn', 'ci', 'cm', 'cd', 'mz', 'mg', 'zw', 'zm', 'bw', 'na',
  'cl', 'pe', 'co', 've', 'uy', 'py', 'bo', 'ec', 'pa', 'cr', 'cu', 'jm', 'ht', 'do', 'bs',
  'id', 'my', 'th', 'vn', 'kh', 'la', 'mm', 'ph', 'kr', 'kp', 'pk', 'bd', 'lk', 'np', 'bt', 'mn', 'nz', 'fj', 'pg',
]);
const coatIdSet = new Set(coatIds);
const easyCoatIds = new Set([...easyIds].filter(id => coatIdSet.has(id)));
const mediumCoatIds = new Set([...mediumFlagIds].filter(id => coatIdSet.has(id)));
const flags = countries.map(([id, iso]) => ({
  id,
  iso,
  type: 'flag',
  key: `flag:${id}`,
  tier: easyIds.has(id) ? 'easy' : mediumFlagIds.has(id) ? 'medium' : 'max',
  point: flagPoints[id],
  facts: easyFlagFacts[id],
}));
const flagById = new Map(flags.map(flag => [flag.id, flag]));
const coats = coatIds.map(id => {
  const flag = flagById.get(id);
  return {
    id,
    iso: flag?.iso,
    type: 'coat',
    key: `coat:${id}`,
    tier: easyCoatIds.has(id) ? 'easy' : mediumCoatIds.has(id) ? 'medium' : 'max',
    point: flag?.point,
  };
});
const coatById = new Map(coats.map(coat => [coat.id, coat]));
const capitals = countries.filter(([id]) => capitalData[id]).map(([id, iso]) => ({
  id,
  iso,
  type: 'capital',
  key: `capital:${id}`,
  tier: easyIds.has(id) ? 'easy' : mediumFlagIds.has(id) ? 'medium' : 'max',
  point: flagPoints[id],
  capital: capitalData[id],
}));
const capitalById = new Map(capitals.map(capital => [capital.id, capital]));
const allItems = [...flags, ...coats, ...capitals, ...animals];

function tierAllowed(item) {
  return levelRank[item.tier || 'easy'] <= levelRank[level];
}

function flagPool() {
  return flags.filter(tierAllowed);
}

function animalPool() {
  return animals.filter(tierAllowed);
}

function coatPool() {
  return coats.filter(tierAllowed);
}

function capitalPool() {
  return capitals.filter(tierAllowed);
}

function roundLength() {
  return lengthMode === 'endless' ? Infinity : fixedRoundSizes[level];
}

function takeSome(items, count) {
  return shuffle(items).slice(0, Math.max(0, count));
}

function pushUniqueFlags(target, source, used, limit) {
  for (const flag of source) {
    if (target.length >= limit) break;
    if (used.has(flag.id)) continue;
    target.push(flag);
    used.add(flag.id);
  }
}

function similarFlagOptions(question, availableFlags) {
  const byId = new Map(availableFlags.map(flag => [flag.id, flag]));
  const used = new Set([question.id]);
  const distractors = [];
  const relatedIds = similarFlagGroups.find(group => group.includes(question.id)) || [];
  const related = relatedIds.filter(id => id !== question.id).map(id => byId.get(id)).filter(Boolean);
  const hardFallback = availableFlags.filter(flag => flag.tier === 'max');
  pushUniqueFlags(distractors, shuffle(related), used, 3);
  pushUniqueFlags(distractors, shuffle(hardFallback), used, 3);
  pushUniqueFlags(distractors, shuffle(availableFlags), used, 3);
  return shuffle([question, ...distractors]).map(flag => flag.id);
}

function flagOptions(question, availableFlags) {
  if (level === 'max') return similarFlagOptions(question, availableFlags);
  return shuffle([question, ...shuffle(availableFlags.filter(flag => flag.id !== question.id)).slice(0, 3)]).map(flag => flag.id);
}

function similarCoatOptions(question, availableCoats) {
  const byId = new Map(availableCoats.map(coat => [coat.id, coat]));
  const used = new Set([question.id]);
  const distractors = [];
  const relatedIds = similarCoatGroups.find(group => group.includes(question.id)) || [];
  const related = relatedIds.filter(id => id !== question.id).map(id => byId.get(id)).filter(Boolean);
  const hardFallback = availableCoats.filter(coat => coat.tier === 'max');
  pushUniqueFlags(distractors, shuffle(related), used, 3);
  pushUniqueFlags(distractors, shuffle(hardFallback), used, 3);
  pushUniqueFlags(distractors, shuffle(availableCoats), used, 3);
  return shuffle([question, ...distractors]).map(coat => coat.id);
}

function coatOptions(question, availableCoats) {
  if (level === 'max') return similarCoatOptions(question, availableCoats);
  return shuffle([question, ...shuffle(availableCoats.filter(coat => coat.id !== question.id)).slice(0, 3)]).map(coat => coat.id);
}

function capitalOptions(question, availableCapitals) {
  const usedLabels = new Set([capitalName(question)]);
  const distractors = [];
  for (const capital of shuffle(availableCapitals.filter(item => item.id !== question.id))) {
    const label = capitalName(capital);
    if (!label || usedLabels.has(label)) continue;
    distractors.push(capital);
    usedLabels.add(label);
    if (distractors.length >= 3) break;
  }
  return shuffle([question, ...distractors]).map(capital => capital.id);
}

function mixedPool(availableFlags, availableAnimals) {
  if (lengthMode === 'endless') return shuffle([...availableFlags, ...availableAnimals]);
  const total = fixedRoundSizes[level];
  const desiredAnimals = Math.min(availableAnimals.length, Math.max(2, Math.round(total * 0.28)));
  const desiredFlags = Math.min(availableFlags.length, total - desiredAnimals);
  const firstPass = [...takeSome(availableFlags, desiredFlags), ...takeSome(availableAnimals, desiredAnimals)];
  if (firstPass.length >= total) return shuffle(firstPass).slice(0, total);
  const used = new Set(firstPass.map(item => item.key));
  const rest = [...availableFlags, ...availableAnimals].filter(item => !used.has(item.key));
  return shuffle([...firstPass, ...takeSome(rest, total - firstPass.length)]);
}

// Порядок списка — по названию на текущем языке, а не по коду страны.
// Ключ кэша включает язык, поэтому переключение языка пересортирует список само.
const sortedCache = new Map();

function sortedByName(items, kind) {
  const key = `${kind}:${lang}`;
  if (!sortedCache.has(key)) {
    const collator = new Intl.Collator(lang);
    sortedCache.set(key, [...items].sort((a, b) => collator.compare(name(a), name(b))));
  }
  return sortedCache.get(key);
}

// Атлас — один список стран: флаг, герб и столица одной страны живут в одной
// карточке, а не в трёх вкладках с почти одинаковым содержимым. Вкладка
// появляется, только если включат животных.
function visibleItems() {
  return featureFlags.animals && exploreKind === 'animals' ? sortedByName(animals, 'animals') : sortedByName(flags, 'countries');
}

function selectedItem() {
  return allItems.find(item => item.key === selectedKey) || visibleItems()[0];
}

function setStaticText() {
  document.documentElement.lang = lang;
  $('#lang').value = lang;
  document.title = tr('siteTitle');
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = tr(node.dataset.i18n);
  });
  document.querySelector('.view-modes').setAttribute('aria-label', tr('viewGroup'));
  document.querySelector('.topic-modes').setAttribute('aria-label', tr('topicGroup'));
  document.querySelector('.level-modes').setAttribute('aria-label', tr('levelGroup'));
  document.querySelector('.length-modes').setAttribute('aria-label', tr('lengthGroup'));
  document.querySelector('[data-view="quiz"]').textContent = tr('viewQuiz');
  document.querySelector('[data-view="explore"]').textContent = tr('viewExplore');
  document.querySelector('[data-mode="mixed"]').textContent = tr('modeMixed');
  document.querySelector('[data-mode="flags"]').textContent = tr('modeFlags');
  document.querySelector('[data-mode="coats"]').textContent = tr('modeCoats');
  document.querySelector('[data-mode="capitals"]').textContent = tr('modeCapitals');
  document.querySelector('[data-mode="animals"]').textContent = tr('modeAnimals');
  document.querySelector('[data-mode="mixed"]').hidden = !featureFlags.animals;
  document.querySelector('[data-mode="coats"]').hidden = !featureFlags.coats;
  document.querySelector('[data-mode="capitals"]').hidden = !featureFlags.capitals;
  document.querySelector('[data-mode="animals"]').hidden = !featureFlags.animals;
  document.querySelector('[data-level="easy"]').textContent = tr('levelEasy');
  document.querySelector('[data-level="medium"]').textContent = tr('levelMedium');
  document.querySelector('[data-level="max"]').textContent = tr('levelMax');
  document.querySelector('[data-length="fixed"]').textContent = tr('lengthFixed');
  document.querySelector('[data-length="endless"]').textContent = tr('lengthEndless');
  document.querySelector('.player-board').setAttribute('aria-label', tr('playerBoard'));
}

function isRoundFinished() {
  return view === 'quiz' && round.length > 0 && pos >= round.length;
}

function setChrome() {
  const quiz = view === 'quiz';
  setStaticText();
  $('#eyebrow').textContent = tr(quiz ? 'quizEyebrow' : 'exploreEyebrow');
  $('#title').textContent = tr(quiz ? 'quizTitle' : 'exploreTitle');
  document.querySelector('.topic-modes').hidden = !quiz || (!featureFlags.animals && !featureFlags.coats && !featureFlags.capitals);
  document.querySelector('.level-modes').hidden = !quiz;
  document.querySelector('.length-modes').hidden = !quiz;
  document.querySelector('.player-board').hidden = !isRoundFinished();
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
}

// Собирает до count вопросов из текущих пулов, пропуская уже сыгранные.
function buildQuestions(count, usedKeys = new Set()) {
  const availableFlags = flagPool();
  const availableCoats = coatPool();
  const availableCapitals = capitalPool();
  const availableAnimals = animalPool();
  const availableRegions = [...new Set(availableAnimals.map(animal => animal.region))];
  const activeMode = mode === 'coats' && featureFlags.coats
    ? 'coats'
    : mode === 'capitals' && featureFlags.capitals
      ? 'capitals'
      : featureFlags.animals
        ? mode
        : 'flags';
  mode = activeMode;
  const pool = activeMode === 'flags'
    ? shuffle(availableFlags)
    : activeMode === 'coats'
      ? shuffle(availableCoats)
    : activeMode === 'capitals'
      ? shuffle(availableCapitals)
    : activeMode === 'animals'
      ? shuffle(availableAnimals)
      : mixedPool(availableFlags, availableAnimals);
  const fresh = pool.filter(item => !usedKeys.has(item.key));
  return fresh.slice(0, Math.min(fresh.length, count)).map(question => ({
    ...question,
    options: question.type === 'flag'
      ? flagOptions(question, availableFlags)
      : question.type === 'coat'
        ? coatOptions(question, availableCoats)
      : question.type === 'capital'
        ? capitalOptions(question, availableCapitals)
      : shuffle([question.region, ...shuffle(availableRegions.filter(index => index !== question.region)).slice(0, 3)]),
  }));
}

function start() {
  round = buildQuestions(roundLength());
  pos = 0;
  stats = freshStats();
  statusMessage = '';
  reset();
  render();
}

// Смена сложности, темы или длины посреди раунда не должна стирать набранное:
// сыгранные вопросы и очки остаются, заново собирается только остаток.
function retuneRound() {
  const keep = solved ? pos + 1 : pos;
  if (!keep) {
    start();
    return;
  }
  const kept = round.slice(0, keep);
  round = [...kept, ...buildQuestions(roundLength(), new Set(kept.map(question => question.key)))];
  // текущий вопрос заменён на новый, прежние ошибки и подсказка к нему не относятся
  if (!solved) reset();
  statusMessage = '';
  render();
}

function reset() {
  solved = false;
  hinted = false;
  questionAwarded = false;
  wrong.clear();
}

function render() {
  setChrome();
  renderPlayerBoard();
  if (view === 'explore') {
    renderExplore();
    return;
  }

  const q = round[pos];
  $('#progress').hidden = false;
  $('#game').className = 'game';
  const done = Math.min(pos, round.length);
  const progressPercent = round.length ? Math.round((done / round.length) * 100) : 0;
  $('#progress').innerHTML = `<div class="progress-meta"><span>${tr('clueTag', { current: Math.min(pos + 1, round.length), total: round.length })}</span><span>${done} / ${round.length}</span></div><div class="progress-track" aria-hidden="true"><span class="${done === round.length ? 'done' : ''}" style="width:${progressPercent}%"></span></div>`;

  if (!q) {
    renderFinish();
    return;
  }

  // На простом уровне флаг показывается целиком: там задача — узнать символ,
  // а не разгадать его по обрывку. Герб прячется только на сложном уровне.
  const hideable = q.type === 'flag' ? level !== 'easy' : q.type === 'coat' && level === 'max';
  const masked = hideable && !hinted && !solved;
  const idAnswerType = q.type === 'flag' || q.type === 'coat' || q.type === 'capital';
  const visual = q.type === 'flag'
    ? `<div class="flag-window">${flagShot(q, masked)}</div>`
    : q.type === 'coat'
      ? `<div class="coat-window"><span class="coat-shot${masked ? ` masked masked-${level}` : ''}"><img src="assets/coats/${q.id}.webp" alt="${escapeHtml(solved ? name(q) : tr('coatAltHidden'))}"></span></div>`
    : q.type === 'capital'
      ? `<div class="capital-card"><img src="assets/flags/${q.id}.svg" alt=""><span class="tag">${tr('country')}</span><strong>${escapeHtml(name(q))}</strong></div>`
      : `<span class="animal" aria-hidden="true">${q.emoji}</span><strong>${escapeHtml(name(q))}</strong>`;
  // Карта результата на телефоне не помещается и всё равно не читается:
  // половину стран на ней не разглядеть даже на десктопе.
  const prompt = q.type === 'flag'
    ? (masked ? tr(level === 'max' ? veilPrompts[veilFor(q).kind] : 'flagPartial') : '')
    : q.type === 'coat' ? (masked ? tr('coatPartial') : '') : q.type === 'capital' ? tr('capitalPrompt') : tr('animalPrompt');
  // Подсказка открывает спрятанное. Если прятать было нечего (простой уровень,
  // герб не на сложном), «теперь открыт целиком» было бы неправдой — даём
  // первую букву страны.
  const hint = q.type === 'capital'
    ? tr('capitalHint', { letter: firstLetter(capitalName(q)) })
    : q.type === 'flag' || q.type === 'coat'
      ? (hideable ? tr(q.type === 'flag' ? 'flagHintOpen' : 'coatHintOpen') : tr('countryHint', { letter: firstLetter(name(q)) }))
      : escapeHtml(fact(q));
  const visualNote = solved
    ? (wideScreen() ? '<div class="result-map" id="map"></div>' : '')
    : (prompt ? `<small>${prompt}</small>` : '');
  const solvedNote = q.type === 'flag' ? countryFlagText(q.id) : fact(q);
  const message = solved
    ? `<strong>${tr('solved')}</strong>${solvedNote ? ` ${escapeHtml(solvedNote)}` : ''}`
    : wrong.size
      ? tr('wrong')
      : hinted
        ? hint
        : '';

  $('#game').innerHTML = `
    <div class="visual">${visual}${visualNote}</div>
    <div class="question">
      <span class="tag">${tr('clueTag', { current: pos + 1, total: round.length })}</span>
      <h2>${q.type === 'flag' ? tr('flagQuestion') : q.type === 'coat' ? tr('coatQuestion') : q.type === 'capital' ? tr('capitalQuestion') : tr('animalQuestion')}</h2>
      <div class="choices">${q.options.map(id => choiceButton(q, id)).join('')}</div>
      <p class="message" role="status">${message}</p>
      <div class="actions">${solved ? `<button class="primary" id="next">${pos === round.length - 1 ? tr('finishRound') : tr('next')}</button>` : `<button id="hint">${tr('hint')}</button><button id="reveal">${tr('reveal')}</button>`}</div>
    </div>`;

  document.querySelectorAll('[data-answer]').forEach(button => {
    button.onclick = () => {
      const answer = idAnswerType ? button.dataset.answer : Number(button.dataset.answer);
      if (answer === (idAnswerType ? q.id : q.region)) {
        awardQuestion(false);
        solved = true;
      } else if (!wrong.has(answer)) {
        wrong.add(answer);
        stats.mistakes++;
      }
      render();
    };
  });

  if (solved) {
    $('#next').onclick = () => {
      pos++;
      reset();
      render();
      // Прокрутку намеренно не сбрасываем: панель кнопок закреплена внизу, так
      // что к следующей загадке переходят не сходя с места. Съехавшая шапка
      // здесь дешевле прыжка страницы под пальцем.
    };
    if (wideScreen()) drawResult(q);
    revealSolvedNote();
  } else {
    $('#hint').onclick = () => {
      if (!hinted) stats.hints++;
      hinted = true;
      render();
    };
    $('#reveal').onclick = () => {
      awardQuestion(true);
      solved = true;
      render();
    };
  }
}

// На сложном уровне флаг каждый раз прячется по-своему: одно и то же угловое
// окно ребёнку наскучило. Эффект выбирается один раз на вопрос и хранится в
// нём самом, иначе менялся бы при каждой перерисовке (ошибка, подсказка), и
// два раза подряд один и тот же не выпадает. Каждый эффект открывает около
// четверти флага, «пиксели» — весь флаг, но без мелких деталей.
// Координаты накладок — в единицах флага 100×75.
const flagVeils = ['corner', 'keyhole', 'holes', 'strip', 'pixels'];
const veilPrompts = { corner: 'flagPartial', keyhole: 'veilKeyhole', holes: 'veilHoles', strip: 'veilStrip', pixels: 'veilPixels' };
let lastVeil = null;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function veilFor(q) {
  if (q.veil) return q.veil;
  const kinds = flagVeils.filter(kind => kind !== lastVeil);
  const kind = kinds[Math.floor(Math.random() * kinds.length)];
  lastVeil = kind;
  if (kind === 'corner') {
    // Верхний левый угол не открываем: там у полусотни флагов крыж.
    q.veil = { kind, inset: ['45% 45% 0 0', '45% 0 0 45%', '0 0 45% 45%'][Math.floor(Math.random() * 3)] };
  } else if (kind === 'strip') {
    q.veil = { kind, inset: Math.random() < 0.5 ? stripInset(26, true) : stripInset(30, false) };
  } else if (kind === 'keyhole') {
    q.veil = { kind, x: Math.round(randomBetween(22, 78)), y: Math.round(randomBetween(17, 35)) };
  } else if (kind === 'holes') {
    q.veil = { kind, holes: scatterHoles(6, 9) };
  } else {
    q.veil = { kind };
  }
  return q.veil;
}

function stripInset(size, vertical) {
  const start = Math.round(randomBetween(0, 100 - size));
  const end = 100 - start - size;
  return vertical ? `0 ${end}% 0 ${start}%` : `${start}% 0 ${end}% 0`;
}

function scatterHoles(count, radius) {
  const holes = [];
  for (let attempt = 0; holes.length < count && attempt < 500; attempt++) {
    const x = randomBetween(radius, 100 - radius);
    const y = randomBetween(radius, 75 - radius);
    if (holes.every(([hx, hy]) => Math.hypot(hx - x, hy - y) > radius * 2 + 3)) holes.push([Math.round(x), Math.round(y)]);
  }
  return holes;
}

function flagShot(q, masked) {
  const src = `assets/flags/${q.id}.svg`;
  const alt = escapeHtml(solved ? name(q) : tr('flagAltHidden'));
  if (!masked) return `<span class="flag-shot"><img src="${src}" alt="${alt}"></span>`;
  if (level !== 'max') return `<span class="flag-shot masked masked-${level}"><img src="${src}" alt="${alt}"></span>`;
  const veil = veilFor(q);
  if (veil.kind === 'corner' || veil.kind === 'strip') {
    return `<span class="flag-shot masked"><img src="${src}" alt="${alt}" style="clip-path: inset(${veil.inset})"></span>`;
  }
  // Пиксельные копии собирает tools/gen-pixel-flags.sh. Настоящий флаг
  // остаётся под ними невидимым: он держит размер окна.
  if (veil.kind === 'pixels') {
    return `<span class="flag-shot masked"><img class="veil-hidden" src="${src}" alt=""><img class="veil veil-pixels" src="assets/flags-pixel/${q.id}.png" alt="${alt}"></span>`;
  }
  const openings = veil.kind === 'keyhole'
    ? `<circle cx="${veil.x}" cy="${veil.y}" r="17"/><polygon points="${veil.x - 6},${veil.y + 8} ${veil.x + 6},${veil.y + 8} ${veil.x + 13},${veil.y + 40} ${veil.x - 13},${veil.y + 40}"/>`
    : veil.holes.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9"/>`).join('');
  // Плашка шире окна на 5 единиц со всех сторон: край, совпавший с краем флага,
  // сглаживается, и по нему просвечивала тонкая полоска флага. Лишнее
  // обрезает сам svg.
  return `<span class="flag-shot masked"><img src="${src}" alt="${alt}"><svg class="veil" viewBox="0 0 100 75" preserveAspectRatio="none" aria-hidden="true"><mask id="veil-mask"><rect x="-5" y="-5" width="110" height="85" fill="#fff"/><g fill="#000">${openings}</g></mask><rect x="-5" y="-5" width="110" height="85" fill="#b9d2d7" mask="url(#veil-mask)"/></svg></span>`;
}

function choiceButton(question, id) {
  const idAnswerType = question.type === 'flag' || question.type === 'coat' || question.type === 'capital';
  const correct = idAnswerType ? id === question.id : id === question.region;
  const label = question.type === 'flag'
    ? name(flagById.get(id))
    : question.type === 'coat'
      ? name(coatById.get(id))
    : question.type === 'capital'
      ? capitalName(id)
      : regionName(id);
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
      ${featureFlags.animals ? `<div class="explore-tabs" aria-label="${escapeHtml(tr('exploreTitle'))}">
        <button data-kind="countries" class="${exploreKind === 'countries' ? 'active' : ''}">${tr('countries')}</button>
        <button data-kind="animals" class="${exploreKind === 'animals' ? 'active' : ''}">${tr('animals')}</button>
      </div>` : ''}
      <div class="item-list" aria-label="${escapeHtml(tr('mapLabel'))}">${items.map(listItem).join('')}</div>
    </div>`;

  document.querySelectorAll('[data-kind]').forEach(button => {
    button.onclick = () => {
      exploreKind = button.dataset.kind;
      selectedKey = visibleItems()[0].key;
      exploreScroll = null;
      renderExplore();
    };
  });
  document.querySelectorAll('[data-item]').forEach(button => {
    button.onclick = () => {
      // без прокрутки: карточка просто раскрывается там, где на неё нажали
      selectExploreItem(button.dataset.item);
    };
  });
  document.querySelectorAll('[data-zoom]').forEach(button => {
    const [kind, id] = button.dataset.zoom.split(':');
    button.onclick = () => {
      // Пропорции берём у миниатюры: она уже загружена, а окно должно
      // облегать картинку, а не стоять квадратом с пустотой у широких гербов.
      const thumb = button.querySelector('img');
      openSymbolZoom(kind, id, thumb.naturalWidth / thumb.naturalHeight || (kind === 'flag' ? 4 / 3 : 1));
    };
  });
  drawExplore(current);
  scrollSelectedExploreItem();
}

function listItem(item) {
  const active = item.key === selectedKey;
  const rowId = itemDomId(item.key);
  return `
    <article class="item-row ${active ? 'active' : ''}" id="${rowId}">
      <button type="button" data-item="${escapeHtml(item.key)}" class="${active ? 'active' : ''}" aria-expanded="${active}" ${active ? `aria-controls="${rowId}-detail"` : ''}>
        ${item.type === 'animal' ? `<span aria-hidden="true">${item.emoji}</span>` : `<img src="assets/flags/${item.id}.svg" alt="">`}
        <span>${escapeHtml(name(item))}</span>
      </button>
      ${active ? itemDetail(item, rowId) : ''}
    </article>`;
}

function itemDetail(item, rowId) {
  if (item.type === 'animal') {
    return `
    <div class="item-detail" id="${rowId}-detail">
      <span class="animal-mini" aria-hidden="true">${item.emoji}</span>
      <div>
        <span class="tag">${tr('animal')}</span>
        <h2>${escapeHtml(name(item))}</h2>
        <p>${escapeHtml(regionName(item.region))}. ${escapeHtml(fact(item))}</p>
      </div>
    </div>`;
  }
  // Флаг и герб стоят рядом над текстом, а не колонкой слева: в узком атласе
  // колонка картинки забирала у текста почти половину ширины.
  return `
    <div class="item-detail country-detail" id="${rowId}-detail">
      <div>
        <span class="tag">${tr('country')}</span>
        <h2>${escapeHtml(name(item))}</h2>
      </div>
      <div class="country-symbols">
        <figure>${symbolButton('flag', item)}<figcaption>${tr('flag')}</figcaption></figure>
        ${coatById.has(item.id) ? `<figure>${symbolButton('coat', item)}<figcaption>${tr('coat')}</figcaption></figure>` : ''}
      </div>
      ${countryPanel(item)}
    </div>`;
}

const magnifierIcon = '<svg viewBox="0 0 24 24" width="14" height="14"><circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>';

function symbolSrc(kind, id) {
  return kind === 'flag' ? `assets/flags/${id}.svg` : `assets/coats/${id}.webp`;
}

function symbolButton(kind, item) {
  const label = `${tr(kind === 'flag' ? 'zoomFlag' : 'zoomCoat')}: ${name(item)}`;
  return `<button type="button" class="symbol-zoom" data-zoom="${kind}:${item.id}" aria-label="${escapeHtml(label)}"><img class="symbol-${kind}" src="${symbolSrc(kind, item.id)}" alt=""><span class="zoom-badge" aria-hidden="true">${magnifierIcon}</span></button>`;
}

// В карточке атласа флаг и герб высотой 72–88px, а разглядывать в них есть
// что: мелкие детали гербов, надпись на флаге Бразилии. Окно живёт вне #game:
// перерисовка атласа (пришли данные, сменился язык) его не сносит.
// Закрывается нажатием в любом месте — «нажал, открылось; нажал, закрылось»
// ребёнку понятнее, чем искать крестик.
let zoomOpener = null;

function openSymbolZoom(kind, id, ratio) {
  closeZoom();
  zoomOpener = document.activeElement;
  const label = `${tr(kind)}: ${countryName(id)}`;
  const overlay = document.createElement('div');
  overlay.className = 'zoom';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', label);
  overlay.innerHTML = `
    <figure class="zoom-card">
      <img class="zoom-${kind}" src="${symbolSrc(kind, id)}" alt="${escapeHtml(label)}" style="--ratio: ${Number(ratio).toFixed(4)}">
      <figcaption><span class="tag">${escapeHtml(tr(kind))}</span><strong>${escapeHtml(countryName(id))}</strong></figcaption>
      <button type="button" class="zoom-close" aria-label="${escapeHtml(tr('close'))}">×</button>
    </figure>`;
  overlay.onclick = closeZoom;
  document.body.append(overlay);
  overlay.querySelector('.zoom-close').focus();
  // Векторный герб есть только в сети, в офлайн-кэш он не входит (см.
  // tools/gen-sw.py). Сразу показываем маленький из кэша и подменяем его,
  // когда векторный догрузился; без сети так и остаётся маленький.
  if (kind === 'coat' && navigator.onLine !== false) {
    const vector = new Image();
    vector.onload = () => {
      if (overlay.isConnected) overlay.querySelector('img').src = vector.src;
    };
    vector.src = `assets/coats-svg/${id}.svg`;
  }
}

function closeZoom() {
  const overlay = document.querySelector('.zoom');
  if (!overlay) return;
  overlay.remove();
  if (zoomOpener?.isConnected) zoomOpener.focus();
  zoomOpener = null;
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeZoom();
});

function itemDomId(key) {
  return `atlas-${String(key).replace(/[^a-z0-9_-]/gi, '-')}`;
}

function featureId(feature) {
  return feature?.properties?.id || feature?.id;
}

function selectExploreItem(key, scrollBlock = null) {
  // Перерисовка пересобирает список целиком и обнуляет прокрутку, а раскрытие
  // строки ещё и сдвигает сетку. Поэтому запоминаем, где строка стояла
  // относительно видимой области, и возвращаем её ровно туда же.
  const list = document.querySelector('.item-list');
  const row = document.getElementById(itemDomId(key));
  const keepInPlace = !scrollBlock && list && row;
  // На широком экране список — собственный скролл-контейнер, на узком у него
  // снят max-height, и прокручивается вся страница. Якорь ставим на того, кто реально скроллит.
  const innerScroll = keepInPlace && list.scrollHeight > list.clientHeight + 1;
  const rowTop = keepInPlace ? row.getBoundingClientRect().top : 0;
  const offsetBefore = keepInPlace ? rowTop - list.getBoundingClientRect().top : 0;
  const scrollBefore = list ? list.scrollTop : 0;

  selectedKey = key;
  exploreScroll = scrollBlock ? { block: scrollBlock, behavior: 'smooth' } : null;
  renderExplore();

  if (!keepInPlace) return;
  const nextList = document.querySelector('.item-list');
  const nextRow = document.getElementById(itemDomId(key));
  if (!nextList || !nextRow) return;
  if (!innerScroll) {
    window.scrollTo({ top: window.scrollY + (nextRow.getBoundingClientRect().top - rowTop), behavior: 'auto' });
    return;
  }
  // у списка в CSS scroll-behavior: smooth, из-за чего присваивание scrollTop
  // запускает анимацию вместо мгновенного прыжка и замер сразу после него врёт
  const behavior = nextList.style.scrollBehavior;
  nextList.style.scrollBehavior = 'auto';
  nextList.scrollTop = scrollBefore;
  nextList.scrollTop += (nextRow.getBoundingClientRect().top - nextList.getBoundingClientRect().top) - offsetBefore;
  nextList.style.scrollBehavior = behavior;
}

function scrollSelectedExploreItem() {
  if (!exploreScroll) return;
  const { block, behavior } = exploreScroll;
  exploreScroll = null;
  document.getElementById(itemDomId(selectedKey))?.scrollIntoView({ behavior, block });
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
  const countrySymbol = q.type === 'flag' || q.type === 'coat' || q.type === 'capital';
  const { features, projection, path, svg } = baseMap('#map', countrySymbol ? tr('resultMapLabel', { name: name(q) }) : tr('animalPointNote'));
  svg.selectAll('.land').data(features).join('path').attr('d', path).attr('fill', feature => q.iso && featureId(feature) === q.iso ? '#f4b333' : '#f6faf6').attr('stroke', '#86a5af').attr('stroke-width', 0.4);
  if (q.point) {
    const [x, y] = projection(q.point);
    svg.append('circle').attr('cx', x).attr('cy', y).attr('r', 6).attr('fill', '#ca501b').attr('stroke', 'white').attr('stroke-width', 2);
  }
  $('#map').insertAdjacentHTML('beforeend', `<small>${countrySymbol ? escapeHtml(name(q)) : tr('animalPointNote')}</small>`);
}

function drawExplore(current) {
  const mapItems = flags;
  const itemIsos = new Set(mapItems.map(item => item.iso));
  const { features, projection, path, svg } = baseMap('#exploreMap', tr('mapLabel'));
  svg.selectAll('.land').data(features).join('path')
    .attr('d', path)
    .attr('fill', feature => current.iso === featureId(feature) ? '#f4b333' : itemIsos.has(featureId(feature)) ? '#dff0df' : '#f6faf6')
    .attr('stroke', '#86a5af')
    .attr('stroke-width', 0.4)
    .attr('class', feature => itemIsos.has(featureId(feature)) ? 'map-click land' : 'land')
    .on('click', (_, feature) => {
      const found = mapItems.find(item => item.iso === featureId(feature));
      if (found) {
        selectExploreItem(found.key, 'start');
      }
    });
  mapItems.filter(item => item.point).forEach(item => {
    const [x, y] = projection(item.point);
    svg.append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', current.key === item.key ? 5.5 : 4)
      .attr('fill', current.key === item.key ? '#ca501b' : '#2f7f8a')
      .attr('stroke', 'white')
      .attr('stroke-width', 1.8)
      .attr('class', 'map-click')
      .on('click', () => {
        selectExploreItem(item.key, 'start');
      });
  });
  if (featureFlags.animals) {
    animals.forEach(animal => {
      const [x, y] = projection(animal.point);
      svg.append('circle').attr('cx', x).attr('cy', y).attr('r', current.key === animal.key ? 7 : 5).attr('fill', current.key === animal.key ? '#ca501b' : '#2f7f8a').attr('stroke', 'white').attr('stroke-width', 2).attr('class', 'map-click').on('click', () => {
        selectExploreItem(animal.key, 'start');
      });
    });
  }
  $('#exploreMap').insertAdjacentHTML('beforeend', `<small>${tr(featureFlags.animals ? 'exploreHelpAnimals' : 'exploreHelp')}</small>`);
}

$('#lang').onchange = event => {
  lang = event.target.value;
  saveLang();
  statusMessage = '';
  // список пересортируется под новый язык, и выбранная страна оказывается далеко от прежнего места
  // instant, а не auto: auto означает «взять из CSS», а там scroll-behavior: smooth
  if (view === 'explore') exploreScroll = { block: 'start', behavior: 'instant' };
  render();
};
$('#clearScores').onclick = () => {
  const key = categoryKey();
  scores = scores.filter(entry => categoryKey(entry) !== key);
  saveScores();
  statusMessage = '';
  renderPlayerBoard();
};
document.querySelectorAll('[data-view]').forEach(button => {
  button.onclick = () => {
    view = button.dataset.view;
    render();
  };
});
document.querySelectorAll('[data-level]').forEach(button => {
  button.onclick = () => {
    const changed = level !== button.dataset.level;
    level = button.dataset.level;
    document.querySelectorAll('[data-level]').forEach(item => item.classList.toggle('active', item === button));
    view = 'quiz';
    if (changed) retuneRound(); else render();
  };
});
document.querySelectorAll('[data-length]').forEach(button => {
  button.onclick = () => {
    const changed = lengthMode !== button.dataset.length;
    lengthMode = button.dataset.length;
    document.querySelectorAll('[data-length]').forEach(item => item.classList.toggle('active', item === button));
    view = 'quiz';
    if (changed) retuneRound(); else render();
  };
});
document.querySelectorAll('[data-mode]').forEach(button => {
  button.onclick = () => {
    const availableModes = ['flags'];
    if (featureFlags.coats) availableModes.push('coats');
    if (featureFlags.capitals) availableModes.push('capitals');
    if (featureFlags.animals) availableModes.push('mixed', 'animals');
    if (!availableModes.includes(button.dataset.mode)) return;
    const changed = mode !== button.dataset.mode;
    mode = button.dataset.mode;
    document.querySelectorAll('[data-mode]').forEach(item => item.classList.toggle('active', item === button));
    view = 'quiz';
    if (changed) retuneRound(); else render();
  };
});

start();
flags.forEach(flag => {
  const image = new Image();
  image.src = `assets/flags/${flag.id}.svg`;
});
coats.forEach(coat => {
  const image = new Image();
  image.src = `assets/coats/${coat.id}.webp`;
});

if (document.modelContext?.registerTool) {
  try {
    Promise.resolve(document.modelContext.registerTool({
      name: 'start_geography_round',
      description: 'Start a fresh geography round and replace the current round.',
      inputSchema: {
        type: 'object',
        properties: {
          mode: { type: 'string', enum: ['flags', ...(featureFlags.coats ? ['coats'] : []), ...(featureFlags.capitals ? ['capitals'] : []), ...(featureFlags.animals ? ['mixed', 'animals'] : [])] },
          level: { type: 'string', enum: ['easy', 'medium', 'max'] },
          lengthMode: { type: 'string', enum: ['fixed', 'endless'] },
        },
        required: ['mode'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute(input) {
        const availableModes = ['flags'];
        if (featureFlags.coats) availableModes.push('coats');
        if (featureFlags.capitals) availableModes.push('capitals');
        if (featureFlags.animals) availableModes.push('mixed', 'animals');
        if (!input || !availableModes.includes(input.mode)) throw Error('Invalid mode');
        if (input.level && !['easy', 'medium', 'max'].includes(input.level)) throw Error('Invalid level');
        if (input.lengthMode && !['fixed', 'endless'].includes(input.lengthMode)) throw Error('Invalid length mode');
        if (input.level) document.querySelector(`[data-level="${input.level}"]`).click();
        if (input.lengthMode) document.querySelector(`[data-length="${input.lengthMode}"]`).click();
        document.querySelector(`[data-mode="${input.mode}"]`).click();
        start();
        return { mode, level, lengthMode, questions: round.length };
      },
    })).catch(() => {});
  } catch {}
}
