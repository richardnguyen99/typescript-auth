/**
 * Main configurations for Express application
 * This is the script to run the application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import path from "path";
import express, { Express } from "express";
import session from "express-session";
import PgSession from "connect-pg-simple";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";
import dotenv from "dotenv";
import passport from "passport";

import * as homeController from "./controllers/home";
import * as userController from "./controllers/user";
import config from "./config";

dotenv.config({
  path: typeof process.env.TESTING !== "undefined" ? ".env.test" : ".env",
});

// Create app server with Express
const app: Express = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("env", process.env.NODE_ENV);
app.set("views", path.join(__dirname, "../dist", "public", "views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET || "typescript-auth-secret-key-test",
  store: new (PgSession(session))(),
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  morgan(process.env.NODE_ENV === "production" ? "combined" : "dev", {
    stream: new config.winston.LoggerStream(),
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, "public")));

/** General pages */
app.get("/", homeController.index);
app.get("/about", homeController.about);

/** User pages */
app.get("/signin", userController.getSignin);
app.post("/signin", userController.postSignin);
app.get("/signup", userController.getSignup);
app.post("/signup", userController.postSignup);
app.get("/logout", userController.logout);
app.get("/user/:username", userController.getUser);

export default app;
