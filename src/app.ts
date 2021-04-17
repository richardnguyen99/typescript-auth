/**
 * Main configurations for Express application
 * This is the script to run the application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import path from "path";
import express, { Express, Request, Response } from "express";

// Create app server with Express
const app: Express = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
  res.render("home");
});

export default app;
