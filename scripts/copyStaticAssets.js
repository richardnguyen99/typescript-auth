const shelljs = require("shelljs");

shelljs.cp("-R", "src/public/ts/lib", "dist/public/js/");
shelljs.cp("-R", "src/public/assets", "dist/public/");
// shelljs.cp("-R", "src/public/fonts/", "dist/public/");
// shelljs.cp("-R", "src/public/webfonts/", "dist/public/");
