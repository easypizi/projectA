modules.define(
  "page-index",
  ["i-bem-dom", "BEMHTML", "jquery"],

  function (provide, bemDom, BEMHTML, $) {
    provide(
      bemDom.declBlock(this.name, {
        onSetMod: {
          js: {
            inited: function () {
              console.log("yo");
            },
          },
        },

        // _getVideo: function (number) {
        //   let video = {
        //     1: "https://youtu.be/L-nPqbJAHzo",
        //     2: "https://youtu.be/8kSZTl7u74s",
        //     5: "https://youtu.be/juexh4ZNziQ",
        //     6: "https://youtu.be/JmCbnzoCmU8",
        //     7: "https://youtu.be/RxR37gHUCBA",
        //   };

        //   return video[number];
        // },
      })
    );
  }
);
