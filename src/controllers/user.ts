/**
 * Controller for user authentication pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";

import config from "../config";

/**
 * Login page
 *
 * @route GET /login
 */
export const getSignin = (req: Request, res: Response): void => {
  res.status(200).render("signin", {
    title: "Sign in",
    pageName: "signin",
  });
};

/**
 * Sign up page
 *
 * @route GET /signup
 */
export const getSignup = (req: Request, res: Response): void => {
  res.status(200).render("signup", {
    title: "Sign up",
    pageName: "signup",
  });
};

/**
 * Login API
 *
 * @route POST /signin
 */
export const postSignin = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  const postgres = config.postgres;


  const query = "SELECT * FROM users WHERE email = $1";

  postgres.pool.query(query, [data.email], (err, response) => {
    if (err)
      res.status(401).send({ message: err });
    else {
      if (response.rowCount === 1) {
        if (bcrypt.compareSync(data.password, response.rows[0].password)) {
          res.status(200).send({ message: "Logged in success", data: { ...response.rows[0] } });
        } else {
          res.status(401).send({ message: "Logged failed. Incorrect email or password" });
        }
      } else {
        res.status(401).send({ message: "Logged failed. Incorrect email or password" });
      }
    }
  });
};

/**
 * Sign up API
 *
 * @route POST /signup
 */
export const postSignup = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  const postgres = config.postgres;

  await body("username", "Username cannot be empty").isLength({ min: 1 }).run(req);
  await body("email", "Email is invalid").isEmail().run(req);
  await body("password", "Password is invalid")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*)(+=._-])/, "i").run(req);

  const result = validationResult(req);

  if (!result.isEmpty()) {
    const errors: Record<string, string> = {};
    result.array().forEach(error => {
      errors[error.param] = error.msg;
    });

    res.status(400).send({ msg: "Some fields are invalid. Please check the above errors!", errors });
  } else {
    const checkUserExistingQuery = "SELECT * FROM users WHERE email = $1 or username = $2";
    const createUserQuery = `
    INSERT INTO users(
      username,
      email,
      password,
      created_on,
      last_modified,
      last_login
    ) VALUES ( $1, $2, $3, $4, $5, $6)
  `;

    postgres.pool.query(checkUserExistingQuery, [data.email, data.username], (error, response) => {
      if (error) {
        throw error;
      }

      if (response.rowCount > 0) {

        res.status(409).send({ msg: "Username or email is already registered", });
      } else {
        const hashedPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(12));

        postgres.pool.query(createUserQuery, [
          data.username,
          data.email,
          hashedPassword,
          new Date(Date.now()).toLocaleString(),
          new Date(Date.now()).toLocaleString(),
          new Date(Date.now()).toLocaleString()
        ]);

        res.status(201).send({ msg: "Sign up successfully" });
      }
    });
  }
};

/**
 * User page
 *
 * @route GET /user/:username
 */
export const getUser = async (req: Request, res: Response): Promise<void> => {
  const params = req.params;
  const postgres = config.postgres;

  const query = "SELECT * FROM users";

  postgres.pool.query(query, (err, response) => {
    if (err) {
      throw err;
    }

  });
};
