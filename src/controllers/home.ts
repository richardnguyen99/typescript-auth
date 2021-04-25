/**
 * Home page
 *
 * @route GET /
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.render("home", {
    pageName: "home",
    title: "Home page"
  })
};

export const about = (req: Request, res: Response) => {
  res.render("about", {
    pageName: "about",
    title: "About page"
  });
};