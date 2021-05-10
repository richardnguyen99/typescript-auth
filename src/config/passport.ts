/**
 * Configurations for PassportJS
 *
 * @use import "./passport";
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";

import * as postgres from "./postgres";

const LocalStrategy = passportLocal.Strategy;

// @ts-nocheck
passport.serializeUser((req: any, user: any, done: (arg0: any, arg1: any) => void) => {
  return done(undefined, user);
});

// @ts-nocheck
passport.deserializeUser((user: any, done) => {
  const query = "SELECT * FROM users where id = $1";

  postgres.pool.query(query, [user.id], (err, res) => {
    return done(err, res.rows[0]);
  });
});

passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {

  const query = "SELECT * FROM users WHERE email = $1";

  postgres.pool.query(query, [email], (err, response) => {
    if (err)
      return done(err);
    else {
      if (response.rowCount === 1) {
        if (bcrypt.compareSync(password, response.rows[0].password)) {
          return done(undefined, { email, username: response.rows[0].username, id: response.rows[0].id }, { message: "Logged in success" });
        } else {
          return done(undefined, false, { message: "Logged failed. Incorrect email or password" });
        }
      } else {
        return done(undefined, false, { message: "Logged failed. Incorrect email or password" });
      }
    }
  });
}));
