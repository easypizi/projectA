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
            },
            {
              elem: "character",
            },
            {
              elem: "HUD",
              content: [
                {
                  elem: "back",
                },
                {
                  elem: "bubble",
                  content: [
                    {
                      elem: "bubbleSpeech",
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
