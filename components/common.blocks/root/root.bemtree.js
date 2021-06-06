block("root").replace()(function () {
  var ctx = this.ctx,
    data = (this.data = ctx.data),
    bundle = data.bundle || "desktop",
    lang = data.lang || "en";

  if (ctx.context) return ctx.context;

  let time = Date.now();

  return {
    block: "page",
    title: data.title,
    favicon: "favicon.ico",
    lang: lang,
    styles: [
      {
        elem: "css",
        url: "assets/css/" + bundle + "/" + bundle + ".min.css?t=" + time,
      },
    ],
    scripts: [
      {
        elem: "js",
        url: "assets/js/" + bundle + "/" + bundle + "." + lang + ".min.js",
        attrs: { async: true },
      },
      {
        elem: "js",
        attrs: { async: true },
        url: "vendor/jquery.js",
      },
    ],
    head: [
      {
        elem: "meta",
        attrs: {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      },
      {
        elem: "meta",
        attrs: {
          "http-equip": "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
      },
    ],
    mods: {
      theme: "plus",
      view: data.view,
    },
  };
});
