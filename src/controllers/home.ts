/**
 * Home page
 *
 * @route GET /
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.render("home", {
    title: "Home page"
  })
};
