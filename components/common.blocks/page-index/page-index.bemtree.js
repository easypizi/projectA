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
              elem: "cat",
              content: [
                {
                  html: '<div class="cat"><div class="ear ear--left"></div><div class="ear ear--right"></div><div class="face"><div class="eye eye--left"><div class="eye-pupil"></div></div><div class="eye eye--right"><div class="eye-pupil"></div></div><div class="muzzle"></div></div></div>',
                },
              ],
            },
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
          elemMods: {
            visible: false,
          },
          content: [
            {
              elem: "background",
              elemMods: {
                room: true,
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

                invert: false,
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
                      elem: "bubbleSpeech",
                      elemMods: {
                        typing: false,
                      },
                      content: "",
                    },
                    {
                      elem: "bubbleName",
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
