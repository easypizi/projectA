modules.define(
  "page-index",
  ["i-bem-dom", "BEMHTML", "button"],

  function (provide, bemDom, BEMHTML, Button) {
    provide(
      bemDom.declBlock(this.name, {
        onSetMod: {
          js: {
            inited: function () {
              this._bubble = this.findChildElem("bubble");

              this.current = {
                location: "home",
                scene: 0,
              };

              this.isNewGame = true;
              this.isFinished = false;

              // if LS contains saved data, update this.currenLocation
              // let ls = localStorage;
              // console.log(ls);

              this.data = {
                home: {
                  0: {
                    text: "Эта история началась 9 июня. А может, намного раньше.",
                    typing: true,
                  },
                  1: {
                    text: "Закончилась она вечером, 9 июня. Но как? Это еще предстоит узнать… ",
                    typing: true,
                  },
                  2: {
                    text: "Был хороший, погожий денек",
                    typing: true,
                    background: "room",
                  },
                  3: {
                    text: "Что не свойственно ни петербуржскому лету, ни грядущему празднику",
                    typing: true,
                    background: "room",
                  },
                  4: {
                    text: "Альбина открыла глаза.",
                    background: "room",
                  },
                  5: {
                    text: "И их ослепил пронзительный белый луч.",
                    character: "albina",
                    background: "room",
                  },
                  6: {
                    text: "Это что, солнце?",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "surprise",
                  },
                  7: {
                    text: "Впервые за все время в Питере в мой день рождения. Кажется, день будет роскошным!",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  8: {
                    text: "Нельзя сказать, что она ошибалась…",
                    character: "albina",
                    background: "room",
                  },
                  9: {
                    text: "Любимая, доброе утро! И с днем рождения!",
                    character: "ivan",
                    name: "Ваня",
                    background: "room",
                    emotion: "smile",
                  },
                  10: {
                    text: "В нос ударил цветочный запах.",
                    character: "albina",
                    background: "room",
                  },
                  11: {
                    text: "Дорогой, ты лучше всех! Спасибо!",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "smile",
                  },
                  12: {
                    text: "Альбина зарылась лицом в огромный пушистый букет. Громко чихнула и рассмеялась.",
                    character: "albina",
                    background: "room",
                  },
                  13: {
                    text: "Приятные последствия!",
                    name: "Альбина",
                    character: "albina",
                    background: "room",
                    emotion: "smile",
                  },
                  14: {
                    text: "Муж выглядел уставшим. Это явно были следы не одной бессонной ночи. Кажется, за дни работы над своим последним проектом, она этого не замечала.",
                    character: "albina",
                    background: "room",
                  },
                  15: {
                    text: "Вань, все хорошо? Что-то случилось?",
                    name: "Альбина",
                    character: "albina",
                    background: "room",
                  },
                  16: {
                    text: "Ваня улыбнулся.",
                    character: "ivan",
                    background: "room",
                    emotion: "smile",
                  },
                  17: {
                    text: "Все нормально, не переживай… Есть тут один проектик со сложным клиентом, но он уже почти закончен.",
                    character: "ivan",
                    name: "Ваня",
                    background: "room",
                  },
                  18: {
                    text: "Юсик, а ты где? Иди поздравь маму с днем рождения! Юки-чаааан, ааа вот ты где…",
                    name: "Альбина",
                    character: "albina",
                    background: "room",
                  },
                  19: {
                    text: "Щека у Вани дернулась, а на лице появился страх. В комнату зашел кот... ",
                    character: "ivan",
                    background: "room",
                  },
                  20: {
                    text: "Альбина бросилась к сыну и начала тискать. Кот стойко принял ухаживания матери. Он смотрел прямо ей в глаза, будто хотел что-то сказать. Затем подошел к отцу, понюхал ногу и уставился на него тяжелым многозначительным взглядом.",
                    character: "cat",
                    background: "room",
                  },
                  21: {
                    text: "Эээ… в общем, мне надо в офис, доделать кое-что. К вечеру закончу. С днем рождения, дорогая!",
                    character: "ivan",
                    background: "room",
                    name: "Ваня",
                    emotion: "sad",
                  },
                  22: {
                    text: "Кот поднял брови.",
                    character: "cat",
                    background: "room",
                  },
                  23: {
                    text: "Да иду уже, иду. Надо закончить поскорее, это точно...",
                    character: "ivan",
                    background: "room",
                    name: "Ваня",
                    emotion: "sad",
                  },
                  24: {
                    text: "Это ты с кем?",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "surprise",
                  },
                  25: {
                    text: "Да я сам с собой. Всё, покедова, я ушел.",
                    character: "ivan",
                    background: "room",
                    name: "Ваня",
                  },
                  26: {
                    text: "Кот фыркнул и гордо улегся на стол.",
                    character: "cat",
                    background: "room",
                  },
                  27: {
                    text: "Ну ладно, лежи. Сегодня можно все. И мне тоже!",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  28: {
                    text: "Она приготовила себе большую чашку матчи, размяла пальцы, села за ноут и сделала глоток.",
                    character: "albina",
                    background: "room",
                  },
                  29: {
                    text: "Ммм, хорошо как… Надеюсь и проект пойдет быстрее, господи прости",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  30: {
                    text: "Рабочий день летел незаметно. Сыпались звонки с поздравлениями, приятные сообщения от совершенно неожиданных людей и выполненные задачи — от знакомых. Все казалось Даже клиент был сговорчивым и милым. Кроме Юки-чана.",
                    character: "albina",
                    background: "room",
                    typing: true,
                  },
                  31: {
                    text: "Ну что ты бродишь из угла в угол как тигр в клетке? Ты спать должен. Дать тебе вкусняшку?",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  32: {
                    text: "Кот презрительно мяукнул и выплюнул корм. Сейчас его явно беспокоило совсем другое.",
                    character: "cat",
                    background: "room",
                  },
                  33: {
                    text: "Может тебе мяты дать? Или валерьянки налить?",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  34: {
                    text: "На минуту она прочитала в глазах сына такой укор, что ей стало неловко за свое предложение.",
                    character: "albina",
                    background: "room",
                  },
                  35: {
                    text: "Ну я просто пытаюсь разрядить обстановку! Вот бы знать, что ты думаешь...",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  36: {
                    text: "Раздался звонок в дверь.",
                    background: "room",
                  },
                  37: {
                    text: "Хм... Курьер наверно. Наверняка принёс каких-нибудь вкусняшек...",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "surprise",
                  },
                  38: {
                    text: "Юки пулей бросился к двери. Альбина снова подумала, что на него это не похоже, ведь кот люто ненавидит звонки в дверь.",
                    character: "cat",
                    background: "room",
                  },
                  39: {
                    text: "За дверью действительно стоял курьер из Самоката. Не успела Альбина забрать пакет, как кот кинулся в него и начал яростно там шуршать.",
                    character: "cat",
                    background: "room",
                  },
                  40: {
                    text: "Зая, но там же ничего для тебя нет… Или…",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  41: {
                    text: "Кот выудил из пакета какую-то бумажку и уставился на нее. Потом взвыл, вскочил на стол, пробежался по клавиатуре и убежал в комнату. Оттуда раздалось шуршание. Кажется, кот решил выплеснуть злость на беззащитного Бориса.",
                    character: "cat",
                    background: "room",
                  },
                  42: {
                    text: "Он что ее читал? Или я уже все?",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                  },
                  43: {
                    text: "Она взяла в руки обслюнявленную бумажку. Это оказалась записка, и на ней был всего лишь странный набор знаков",
                    character: "albina",
                    background: "room",
                  },
                  44: {
                    text: "+2ч 😿",
                    background: "room",
                  },
                  45: {
                    text: "Она подошла к ноутбуку, телегу разрывало от сообщений. Альбина застыла в шоке. А затем начала кричать и истерически смеяться. Слезы текли по ее щекам и собирались в маленькие лужицы на полу. Но это были слезы счастья.",
                    character: "albina",
                    background: "room",
                    emotion: "smile",
                  },
                  46: {
                    text: "Юсенька, Боря, клиент забрал все работы без правок. Сказал, что сам все переделает. А ЗНАЧИТ МЫ ЗАКОНЧИЛИ ПРОЕКТ Х НА ТРИ ДНЯ РАНЬШЕ ХАРД ДЕДЛАЙНА. Это лучший подарок на день рождения!!",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "smile",
                  },
                  47: {
                    text: "Юки отвернул голову от Бориса. На секунду ей показалась, что в глазах кота читалась насмешка. Боря тоже не ответил. Только грустно пошевелил обглоданными листьями.",
                    character: "cat",
                    background: "room",
                  },
                  48: {
                    text: "Довольная происходящим, Альбина уже собиралась захлопнуть крышку ноута, как вдруг увидела сообщение, отправленное мужу… от себя.",
                    character: "albina",
                    background: "room",
                    emotion: "surpise",
                  },
                  49: {
                    text: "😾😾🙀",
                    background: "room",
                  },
                  50: {
                    text: "Эм, Юки, твоих лап дело? Хорош носиться по клавиатуре. И перестань мучать Бориса!",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "surpise",
                  },
                  51: {
                    text: "Она напечатала: Сори, это не я, Юки-чан бесится. В ответ пришло: Я знаю",
                    character: "albina",
                    background: "room",
                  },
                  52: {
                    text: "Альбина пожала плечами и поехала в офис.",
                    character: "albina",
                    background: "room",
                  },
                },
                office: {
                  53: {
                    text: "Настроение было отличное. Отовсюду сыпались поздравления и милые подарки, рабочих задач не осталось, а в бутылке игриво плескалось игристое. На входе в БЦ охранник сделал Альбине комплимент, а женщина в магазине-минутке — вручила колу зеро в подарок.",
                    character: "albina",
                    background: "office",
                  },
                  54: {
                    text: "Единственное, что омрачало солнечный настрой — хмурое облачко по имени Юки.",
                    character: "albina",
                    background: "office",
                    emotion: "sad",
                  },
                  55: {
                    text: "Что с ним? Обычно он тупо спит в шкафу все. А сегодня он выглядит очень деловитым, сердитым и расстроенным одновременно. Целая буря эмоций… Надо спросить у Насти, не замечала ли она чего необычного в его поведении в последнее время…",
                    character: "albina",
                    background: "office",
                  },
                  56: {
                    text: "Альбина поднялась на последний этаж в офисе, зашла в свое крыло и...",
                    character: "albina",
                    background: "office",
                  },
                  57: {
                    text: "CENSORED TO NOT BE A SPOILER",
                    typing: true,
                  },
                  58: {
                    text: "Уже стоя внизу, счастливая Альбина внезапно спросила Настю...",
                    character: "albina",
                    background: "office",
                    emotion: "smile",
                  },
                  59: {
                    text: "Слушай, ты не знаешь, что происходит с Юки-чаном?",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                    emotion: "smile",
                  },
                  60: {
                    text: "Настя немного изменилась в лице.",
                    character: "astafa",
                    emotion: "surprise",
                    background: "office",
                  },
                  61: {
                    text: "А что с ним может происходить?",
                    character: "astafa",
                    name: "Настя",
                    background: "office",
                  },
                  62: {
                    text: "Он какой-тот возбужденный в последние дни. Нервничает, бегает по дому, как будто что-то или кого-то ищет. Или ждет.",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                  },
                  63: {
                    text: "Возможно меня, чтобы укусить за ногу?",
                    character: "astafa",
                    name: "Настя",
                    background: "office",
                  },
                  64: {
                    text: "Настя нервно рассмеялась. ",
                    character: "astafa",
                    background: "office",
                    emotion: "smile",
                  },
                  65: {
                    text: "Ну он так свою любовь выражает...",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                  },
                  66: {
                    text: "Ага, любовь. Как сыч следит за каждым твоим шагом...",
                    character: "astafa",
                    name: "Настя",
                    background: "office",
                  },
                  67: {
                    text: "Что?!?",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                    emotion: "surprise",
                  },
                  68: {
                    text: "Что?",
                    character: "astafa",
                    name: "Настя",
                    background: "office",
                  },
                  69: {
                    text: "Вы какие-то все странные… И Юки как будто в этом участвует. Даже случайно как будто отправил Ване сообщение со злыми эмодзи кота ахах",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                  },
                  70: {
                    text: "Настя снова изменилась в лице. ",
                    character: "astafa",
                    background: "office",
                    emotion: "surprised",
                  },
                  71: {
                    text: "Злыми? Там точно не было доброго кота с сердечками в глазах?",
                    character: "astafa",
                    name: "Настя",
                    background: "office",
                    emotion: "surprise",
                  },
                  72: {
                    text: "Насть, он случайно по клавиатуре пробежал, какие сердечки.",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                  },
                  73: {
                    text: "Ладно, мне Саня пишет, хочет увидеться. Хоть один нормальный человек в моем окружении есть... Пойдешь с нами?",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                  },
                  74: {
                    text: "Настя заметно воодушевилась.",
                    character: "astafa",
                    background: "office",
                    emotion: "smile",
                  },
                  75: {
                    text: "Ооо, отличный план! Идите-идите, прогуляйтесь. Мне как раз кое-что сделать надо. Срочно! Позже встретимся.",
                    character: "astafa",
                    name: "Настя",
                    background: "office",
                    emotion: "smile",
                  },
                  76: {
                    text: "Но мы же все закончили?",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                  },
                  77: {
                    text: "Настя только махнула рукой и скрылась за поворотом.",
                    character: "astafa",
                    background: "office",
                  },
                  78: {
                    text: "Куда это она?",
                    character: "albina",
                    name: "Альбина",
                    background: "office",
                  },
                },
                street: {
                  79: {
                    text: "Альбина и Саня шли по улицам залитого солнцем Питера и не могли наговориться. Впервые за много времени времени они почти не обсуждали работу и ничего не предвещало беды. До того, как в воздухе всплыл роковой вопрос...",
                    background: "street",
                  },
                  80: {
                    text: "А как там у тебя с работой? Покажи, какой-нибудь проект!",
                    character: "albina",
                    name: "Альбина",
                    background: "street",
                  },
                  81: {
                    text: "Ой, ну смотри. Вот мой последний брендинг, очень нравится.",
                    character: "sasha",
                    name: "Саня",
                    background: "street",
                  },
                  82: {
                    text: "Саня начала листать сохраненки на телефоне, показывая Альбине свои работы. Альбина одобрительно хмыкала, иногда хлопала подругу по плечу, приговаривая «Красава!», как вдруг... ",
                    character: "albina",
                    background: "street",
                  },
                  83: {
                    text: "Агааа, а это что тут у нас? Скрины из «Клуба романтики»? Я их узнаю из тысячи!",
                    character: "albina",
                    name: "Альбина",
                    background: "street",
                  },
                  84: {
                    text: "Саня попыталась вырвать телефон из руки Альбины.",
                    character: "sasha",
                    background: "street",
                    emotion: "surprise",
                  },
                  85: {
                    text: "Нет, тебе показалось!",
                    character: "sasha",
                    name: "Саня",
                    background: "street",
                    emotion: "surprise",
                  },
                  86: {
                    text: "Альбина оказалась ловчее и продолжила листать фотографии. Саня вяло пыталась отрицать очевидное, понимая, что это бесполезно.",
                    character: "albina",
                    background: "street",
                    emotion: "surprise",
                  },
                  87: {
                    text: "Неет, это точно они. Вот кот из Дракулы, вот еще один… Саня, ну че скрывать-то, все мы...",
                    character: "albina",
                    name: "Альбина",
                    background: "street",
                  },
                  88: {
                    text: "Смех Альбины резко прервался. С фотографии на нее смотрел её котик. Она резко выдохнула.",
                    character: "albina",
                    background: "street",
                    emotion: "surprise",
                  },
                  89: {
                    text: "Не знала, что ты входишь в клуб фанатов Юки-чана…",
                    character: "albina",
                    name: "Альбина",
                    background: "street",
                  },
                  90: {
                    text: "Саня заметно нервничала.",
                    character: "sasha",
                    background: "street",
                    emotion: "surprise",
                  },
                  91: {
                    text: "Он мне всегда нравился! Такой красавец! Вот, сохранила себе на телефон, чтобы любоваться. ",
                    character: "sasha",
                    name: "Саня",
                    background: "street",
                  },
                  92: {
                    text: "В голове Альбины крутилось множество мыслей. Она вспомнила странное поведение Вани с утра. Он был явно расстроен, как будто принял тяжелое решение. Настя реагировала странно, когда разговор зашел о коте и постоянно проверяла телефон. Куда она торопилась? А теперь, Альбина находит фотографии Юки на телефоне у Саши…",
                    character: "albina",
                    background: "street",
                  },
                  93: {
                    text: "Что вы задумали? Что происходит?",
                    character: "albina",
                    name: "Альбина",
                    background: "street",
                    emotion: "angry",
                  },
                  94: {
                    text: "О чем это ты? И отдай телефон, будь добра. ",
                    character: "sasha",
                    name: "Саня",
                    background: "street",
                  },
                  95: {
                    text: "Альбина бешено соображала. Что-то тут нечисто. Что-то не так. Тревога кольнула материнское сердце. Она заметила еще одну деталь.",
                    character: "albina",
                    background: "street",
                    emotion: "surprise",
                  },
                  96: {
                    text: "Это Тик-Ток? Давно ли ты пользуешься Тик-Током?",
                    character: "albina",
                    name: "Альбина",
                    background: "street",
                    emotion: "angry",
                  },
                  97: {
                    text: "Теперь пользуюсь. У меня появилось много новых интересов.",
                    character: "sasha",
                    name: "Саня",
                    background: "street",
                  },
                  98: {
                    text: "И один из них мой кот, правильно?",
                    character: "albina",
                    name: "Альбина",
                    background: "street",
                    emotion: "angry",
                  },
                  99: {
                    text: "Точно. Как же она раньше не поняла. Все сошлось. В груди назревало негодование и обида. Она выронила Cанин телефон и побежала домой, что есть силы.",
                    character: "albina",
                    background: "street",
                    emotion: "angry",
                  },
                  100: {
                    text: "Альбина, постой, ты все неправильно поняла!",
                    character: "sasha",
                    name: "Саня",
                    background: "street",
                    emotion: "surprise",
                  },
                },
                ending: {
                  101: {
                    text: "Ваня все знал, Ваня все знал — стучало в висках. Она пыталась дозвониться мужу, но в ухе звучало лишь «Абонент недоступен».",
                    typing: true,
                  },
                  102: {
                    text: "Она сама подкинула им эту идею. Она сама виновата. Бедный Юсенька. Она должна спасти его. Только бы успеть… ",
                    typing: true,
                  },
                  103: {
                    text: "Альбина ворвалась в квартиру, уставленную цветами и заваленную подарками. Но ничего ее не радовало.",
                    character: "albina",
                    background: "room",
                    emotion: "angry",
                  },
                  104: {
                    text: "Юки-чан, Юсенька, ты где? Выходииии, сынуля, родной…",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "sad",
                  },
                  105: {
                    text: "В ответ — тишина. Она знала, что опоздала. В голове был полный сумбур.",
                    character: "albina",
                    background: "room",
                    emotion: "surprise",
                  },
                  106: {
                    text: "Они украли Юки, пока я была в офисе, и продали моего сына в ТикТок Хаус! И решили сделать это в самый подходящий момент, в мой день рождения. Пока я радуюсь! Как это подло и низко! На что они надеялись? На то, что они превратят моего сына в орудие зарабатывания денег? А он даже сделать ничего не мог, мой бедный, бедный Юсик…",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "angry",
                  },
                  107: {
                    text: "Она услышала звук поворачивающегося ключа. За дверью стояли трое ее друзей… Бывших друзей. ",
                    character: "albina",
                    background: "room",
                  },
                  108: {
                    text: "Как вы могли? Вы предали меня! Вы предали Юки-чана! Вы совсем обезумели от жадности! Почему он, мой единственный сын? Мы могли бы найти другого кота и зарабатывать деньги вместе? Что с вами такое происходит?",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "angry",
                  },
                  109: {
                    text: "Она не могла сдержать слезы, только теперь это были слезы ярости и боли.",
                    character: "albina",
                    background: "room",
                    emotion: "angry",
                  },
                  110: {
                    text: "Дорогая…",
                    character: "ivan",
                    name: "Ваня",
                    background: "room",
                  },
                  111: {
                    text: "Альбина резко повернулась к нему.",
                    character: "albina",
                    background: "room",
                    emotion: "angry",
                  },
                  112: {
                    text: "Не смей меня так называть! Ты продал собственного сына!!! Ты его отец!!! Как ты мог!!!!!",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "angry",
                  },
                  113: {
                    text: "Вдруг раздалось мяуканье. Из-за ног Вани, Сани и Насти вышел Юки-чан.",
                    character: "cat",
                    background: "room",
                  },
                  114: {
                    text: "Юки? Но как… Ты же… теперь… в ТикТок Хаусе… И я смогу видеть тебя только с письменного разрешения продюсеров…",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "surprise",
                  },
                  115: {
                    text: "Юки повелительно мяукнул еще раз. Кожаные мешки склонили головы и почтительно уселись на пол около него. Альбина от неожиданности присела тоже.",
                    character: "cat",
                    background: "room",
                  },
                  116: {
                    text: "Юки кивнул головой Ване. Он взял телефон из рук Альбины и открыл какое-то приложение. Юки не отрываясь смотрел на мать.",
                    character: "cat",
                    background: "room",
                  },
                  117: {
                    text: "Дрожащими руками она забрала телефон обратно. На экране стали появляться буквы. Она начала читать.",
                    character: "albina",
                    background: "room",
                  },
                  118: {
                    text: "Дорогая мама. Если ты читаешь эти строки, значит ты находишься у меня в голове и читаешь мои мысли. Наконец-то это произошло. Ты не представляешь, какая это мука — все понимать, и не мочь ничего ответить. ",
                    background: "room",
                  },
                  119: {
                    text: "Да, на самом деле я умный кот, и все понимаю. Я помню все выпуски Дудя, знаю, что крысы на экране компа не настоящие и даже не закатываю глаза, когда вы смотрите «Четыре свадьбы». Люди правда такие смешные и странные? Иногда мне кажется, что мы, коты, гораздо умнее вас. ",
                    background: "room",
                  },
                  120: {
                    text: "Вернемся к делу. Позволь мне объяснить, что происходит. Я задумал это еще год назад. Мне казалось ужасно несправедливым, что на твой день рождения все вокруг говорят тебе приятные слова, а я нет. Все, что я могу — потереться об твою ногу или лизнуть в щеку.",
                    background: "room",
                  },
                  121: {
                    text: "Поэтому мне пришла в голову гениальная мысль — произвести прибор, который сможет переводить кошачий язык на человеческий. Но у меня лапки. Я знал, что мне нужен человеческий союзник. Поэтому пришлось объяснять идею папе. На то, чтобы он меня понял, понадобилось 11 месяцев (я уже говорил, что люди ужасно непонятливые?)",
                    background: "room",
                  },
                  122: {
                    text: "Пора было приступать к реализации. Для этого пришлось привлечь твоих подруг — Настю, чтобы она смогла придать моим мыслям оформленный вид и Сашу, чтобы она смогла все это красиво визуализировать. ",
                    background: "room",
                  },
                  123: {
                    text: "Что я могу сказать... Работать с людьми — сложно. Они вечно не могли синхронизироваться и постоянно проебывали дедлайны. Пришлось их пинговать и кусать за ноги или за руки. Только после этого они начинали шевелиться. Возможно, иногда я слишком усердствовал. Кажется, теперь Настя меня немного боится.",
                    background: "room",
                  },
                  124: {
                    text: "В общем, сегодня был день сдачи проекта, поэтому я так переживал. Даже злился на папу, особенно, когда он отправил курьером записку, что сдаст проект на 2 часа позже. Я слышал, как ребята обсуждали, что я самый тяжелый клиент за все время их работы. Приятно, люблю быть лучшим во всем. Они хоть медленные, но неплохие. Благодаря им я могу сказать тебе, все что хотел.",
                    background: "room",
                  },
                  125: {
                    text: "Спасибо, что кормишь меня вкусняшками! Мне это очень нравится. Спасибо, что кормишь меня кормом с курицей. Он мне нравится гораздо больше, чем дурацкий корм с лососем. Спасибо, что гладишь меня за ушком. Но можно почаще чесать животик. Даже если кажется, что мне это не нравится, мне это нравится. ",
                    background: "room",
                  },
                  126: {
                    text: "Спасибо, что говоришь мне, какой я красивый. Я и сам это знаю, но мне нравится, когда это говорят другие. Спасибо, что чистишь мне уши и глаза. Мне это не нравится, но сам я дотуда не достаю.",
                    background: "room",
                  },
                  127: {
                    text: "Пожелать тебе хотелось бы, чтобы ты не сгоняла меня со стола и выкинула пылесос. А еще поменьше меняйте носки. Мне нравится нюхать ноги (это лучшее, что есть в людях!). Ради этого я даже готов закрывать глаза на то, что вы меня называете футфетишистом. ",
                    background: "room",
                  },
                  128: {
                    text: "Я знаю, что я приемный, ведь я красивый кот, а вы неказистые люди. Но я безумно этому рад, ведь настоящие родители — не обязательно те, кто родили, а те, кто вырастили и воспитали. Спасибо тебе за заботу и любовь. Я тебя тоже очень люблю, мама!",
                    background: "room",
                  },
                  129: {
                    text: "А, и еще. Если все-таки решите найти мне работу, запомните — лучше я вступлю в ТикТок Хаус, чем буду менеджерить проекты. Если ты присмотришься, то за время разработки у меня появилось три новых седых волоса.",
                    background: "room",
                  },
                  130: {
                    text: "Альбина отвела взгляд от экрана. Напротив нее сидел ее довольный сын и слегка потрепанные от котоменеджерства люди.",
                    character: "cat",
                    background: "room",
                  },
                  131: {
                    text: "Юки-чан, ты был прав! Вот это — лучший подарок на день рождения!",
                    character: "albina",
                    name: "Альбина",
                    background: "room",
                    emotion: "smile",
                  },
                },
              };

              let startButton = this.findChildBlock({
                block: Button,
                modName: "start",
                modVal: true,
              });

              let continueButton = this.findChildBlock({
                block: Button,
                modName: "continue",
                modVal: true,
              });

              let startScreen = this.findChildElem("startScreen");
              let gameScene = this.findChildElem("gameScene");

              startButton._domEvents().on("click", (e) => {
                e.stopPropagation();
                startScreen.delMod("visible");
                gameScene.setMod("visible");
                this._updateScreen();
                this._setNext();
              });

              continueButton._domEvents().on("click", (e) => {
                e.stopPropagation();
                console.log("continue");
              });

              let activeZone = this.findChildElem("gameScene");

              activeZone._domEvents().on("click", () => {
                this._updateScreen();
                this._setNext();
              });

              let backButton = this.findChildElem("back");

              backButton._domEvents().on("click", (e) => {
                e.stopPropagation();
                this._setPrevious();
                this._updateScreen();
              });
            },
          },
        },

        _setNext: function () {
          this.current.scene++;

          if (this.current.scene > 131) {
            this.isFinished = true;
            this.current.scene = 132;
            return;
          }

          if (this.current.scene <= 52) {
            this.current.location = "home";
          } else if (this.current.scene <= 78) {
            this.current.location = "office";
          } else if (this.current.scene <= 100) {
            this.current.location = "street";
          } else if (this.current.scene > 100) {
            this.current.location = "ending";
          }

          this.isFinished = false;
        },

        _setPrevious: function () {
          this.current.scene--;

          if (this.current.scene < 0) {
            this.isNewGame = true;
            this.current.scene = 0;
            return;
          }

          if (this.current.scene <= 52) {
            this.current.location = "home";
          } else if (this.current.scene <= 78) {
            this.current.location = "office";
          } else if (this.current.scene <= 100) {
            this.current.location = "street";
          } else if (this.current.scene > 100) {
            this.current.location = "ending";
          }

          this.isNewGame = false;
        },

        _updateScreen: function () {
          let { location, scene } = this.current;

          let action = this.data[location][scene];

          if (this.isFinished) {
            // finalScene show
            return;
          }

          this._bubble.delMod("animated");

          bemDom.update(
            this._bubble.domElem,
            BEMHTML.apply([
              {
                block: "page-index",
                elem: "bubbleSpeech",
                elemMods: {
                  typing: true,
                },
                content: action.text,
              },
              action.name && {
                block: "page-index",
                elem: "bubbleName",
                content: action.name,
              },
            ])
          );

          setTimeout(() => {
            this._bubble.setMod("animated");
          }, 100);
        },
      })
    );
  }
);
