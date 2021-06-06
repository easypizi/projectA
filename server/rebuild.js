var fs = require("fs"),
  path = require("path"),
  _ = require("lodash"),
  tinyLr = require("tiny-lr"),
  notifier = require("node-notifier"),
  make = require("enb").make,
  watch = require("chokidar").watch,
  rootDir = path.join(__dirname, ".."),
  watchOpts = {
    persistent: true,
    ignoreInitial: true,
    ignored: ".**/*.DS_Store"
  };

// get bundles list
var bundlesDir = path.join(rootDir, "bundles/desktop.bundles");
var bundles = fs.readdirSync(bundlesDir).filter(function(file) {
  return fs.statSync(path.join(bundlesDir, file)).isDirectory();
});

// enb make
function rebuild(event, file) {
  console.time("Rebuild: " + file);
  return make()
    .then(function() {
      console.timeEnd("Rebuild: " + file);
      notifier.notify({
        title: "bem-express",
        message: "Build finished"
      });
    })
    .fail(function(err) {
      notifier.notify({
        title: "Build failed",
        message: err
      });
    });
}

var debouncedRebuild = _.debounce(rebuild, 30, {
  leading: true,
  trailing: true
});

process.env.NO_AUTOMAKE ||
  watch(
    [
      path.join(rootDir, "components", "*.blocks", "**"),
      path.join(rootDir, "pages", "**"),
      path.join(rootDir, "design", "*.blocks", "**")
    ].concat(
      bundles.map(function(bundle) {
        return path.join(bundlesDir, bundle, bundle + ".bemdecl.js");
      })
    ),
    watchOpts
  ).on("all", debouncedRebuild);

// livereload
process.env.NO_LIVERELOAD ||
  watch(
    [
      path.join(rootDir, "static", "*", "*.min.*"),
      path.join(bundlesDir, "*", "*.bemtree.js")
    ].concat(
      bundles.map(function(bundle) {
        return path.join(bundlesDir, bundle, bundle + ".bemhtml.js");
      })
    ),
    watchOpts
  ).on("all", function(event, file) {
    tinyLr.changed(file);
  });

module.exports = function(app) {
  if (!app) return;
  app.use(tinyLr.middleware({ app: app, dashboard: true }));
};