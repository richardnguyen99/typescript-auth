/**
 * Controller for user authentication pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Request, Response } from "express";

/**
 * Login page
 *
 * @route GET /login
 */
export const getLogin = (req: Request, res: Response): void => {
  res.render("login", {
    title: "Login",
    pageName: "login",
  });
};

/**
 * Login API
 *
 * @route POST /login
 */
export const postLogin = async (req: Request, res: Response): Promise<void> => {
  res.send({ msg: "Logged in "});
};
