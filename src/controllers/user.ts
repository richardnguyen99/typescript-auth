/**
 * Controller for user authentication pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Request, Response } from "express";

import config from "../config";

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
 * @route POST /signin
 */
export const postSignin =(req: Request, res: Response): void => {
  const data = req.body.data;
  const postgres = config.postgres;

  const query = "SELECT * FROM user_account WHERE email = $1";

  postgres.pool.query(query, [data.email], (err, response) => {
    if (err)
      res.send({ message: err});
    else {
      if (response.rowCount === 1) {
        res.send({ message: "Logged success", data: { email: response.rows[0]}});
      } else {
        res.send({ message: "Logged failed. Incorrect email"});
      }
    }
  });
};

/**
 * User page
 *
 * @route GET /user/:username
 */
export const getUser = async (req: Request, res: Response): Promise<void> => {
  const params = req.params;
  const postgres = config.postgres;

  const query = "SELECT * FROM user_account";

  postgres.pool.query(query, (err, response) => {
    if (err) {
      throw err;
    }

    console.log(response);
  });
};
