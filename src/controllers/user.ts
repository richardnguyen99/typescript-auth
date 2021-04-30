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
export const getSignin = (req: Request, res: Response): void => {
  res.render("signin", {
    title: "Sign in",
    pageName: "signin",
  });
};

/**
 * Login API
 *
 * @route POST /login
 */
export const postSignin = async (req: Request, res: Response): Promise<void> => {
  res.send({ msg: "Signed in"});
};
