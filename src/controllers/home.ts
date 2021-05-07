/**
 * Main controller for general pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Request, Response } from "express";

/**
 * Home page
 *
 * @route GET /
 */
export const index = (req: Request, res: Response): void => {
  res.status(200).render("home", {
    pageName: "home",
    title: "Home page",
  });
};

/**
 * About page
 *
 * @route GET /about
 */
export const about = (req: Request, res: Response): void => {
  res.status(200).render("about", {
    pageName: "about",
    title: "About page",
  });
};
