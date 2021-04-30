const fs = require("fs");
const shelljs = require("shelljs");

shelljs.cp("-R", "src/public/ts/lib", "dist/public/js/");
shelljs.cp("-R", "src/public/assets", "dist/public/");
// shelljs.cp("-R", "src/public/fonts/", "dist/public/");
// shelljs.cp("-R", "src/public/webfonts/", "dist/public/");

if (process.env.NODE_ENV === "production") {
  shelljs.cp("-R", "views/components", "dist/public/views/");

  const manifest = require("../dist/public/manifest.json");
  Object.keys(manifest).forEach((key) => {
    if (/\.js$/.test(key)) {
      Object.defineProperty(manifest, "/js/" + key, Object.getOwnPropertyDescriptor(manifest, key));
      delete manifest[key];
    }
    if (/\.css$/.test(key)) {
      Object.defineProperty(manifest, "/css/" + key, Object.getOwnPropertyDescriptor(manifest, key));
      delete manifest[key];
    }
  });

  fs.writeFile("dist/public/manifest.json", JSON.stringify(manifest), function (error) {
    if (error) {
      throw error;
    }

    console.log("Manifest has been updated!");
    console.log(manifest);
  });
}
