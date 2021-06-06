block("page-index").content()(() => {
  return [
    {
      elem: "body",
      content: [
        {
          elem: "startScreen",
          elemMods: {
            visible: true,
          },
          content: [
            {
              elem: "title",
              content: "Полная Котавасия",
            },
            {
              elem: "controls",
              content: [
                {
                  block: "button",
                  mods: {
                    start: true,
                  },
                  text: "Начать",
                },
                {
                  block: "button",
                  mods: {
                    continue: true,
                  },
                  text: "Продолжить",
                },
              ],
            },
          ],
        },
        {
          elem: "gameScene",
          content: [
            {
              elem: "background",
              elemMods: {
                room: true,
                bathroom: false,
                office: false,
                street: false,
              },
            },
            {
              elem: "character",
              elemMods: {
                albina: true,
                cat: false,
                ivan: false,
                astafa: false,

                sasha: false,
                sad: false,
                surprise: false,
                angry: false,
                smile: false,

                right: true,
                left: false,
              },
            },
            {
              elem: "HUD",
              content: [
                {
                  elem: "back",
                  content: "назад",
                },
                {
                  elem: "bubble",
                  content: [
                    {
                      elem: "bubbleName",
                      content: "",
                    },
                    {
                      elem: "bubbleSpeech",
                      content: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
});
