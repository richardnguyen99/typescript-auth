/**
 * Main configurations for Express application
 * This is the script to run the application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import path from "path";
import express, { Express } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";

import * as homeController from "./controllers/home";
import * as userController from "./controllers/user";
import config from "./config";

// Create app server with Express
const app: Express = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("env", process.env.NODE_ENV);
app.set("views", process.env.NODE_ENV === "production" ? path.join(__dirname, "public", "views") : path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(
  morgan(process.env.NODE_ENV === "production" ? "combined" : "dev", {
    stream: new config.winston.LoggerStream(),
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/** General pages */
app.get("/", homeController.index);
app.get("/about", homeController.about);

/** User pages */
app.get("/signin", userController.getSignin);
app.post("/signin", userController.postSignin);

export default app;
