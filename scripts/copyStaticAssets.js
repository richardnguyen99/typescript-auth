const shelljs = require("shelljs");

shelljs.cp("-R", "src/public/ts/lib", "dist/public/js/");
