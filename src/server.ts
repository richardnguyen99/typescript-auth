/**
 * Configuration and running scripts for Express
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import errorhandler from "errorhandler";

import app from "./app";

if (process.env.NODE_ENV === "development") {
  app.use(errorhandler());
}

const server = app.listen(app.get("port"), () => {
  console.log(
    "App is running at %d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;
