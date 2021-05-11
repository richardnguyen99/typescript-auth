/**
 * Testing cases specifically for
 * user routes and APIs
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import request from "supertest";

import { pool } from "../config/postgres";
import app from "../app";

jest.setTimeout(30000);

describe("Testing user routes and APIs ...", () => {
  beforeAll(() => {
    console.log("LOADING CONFIGURATION & VARIABLES ...");
  });

  afterAll(() => {
    console.log("DELETING ROWS AFTER TESTING ...");

    const DeleteRowsQuery = "DELETE FROM users;";

    pool.query(DeleteRowsQuery, (error, response) => {
      if (error)
        throw error;
    });
  });


  it("SIGNUP: invalid password", (done) => {
    request(app).post("/signup").send({ username: "testing", password: "testing", email: "testing@testing.com" }).expect(400, done);
  });

  it("SIGNUP: invalid email", (done) => {
    request(app).post("/signup").send({ username: "testing", password: "Testing@123", email: "testing@testing" }).expect(400, done);
  });

  it("SIGNUP: valid email", (done) => {
    request(app).post("/signup").send({ username: "testing", password: "Testing@123", email: "testing@testing.com" }).expect(201, done);
  });

  it("SIGNIN: invalid password", (done) => {
    request(app).post("/signin").send({ password: "testing", email: "testing@testing.com" }).expect(401, done);
  });

  it("SIGNIN: invalid email", (done) => {
    request(app).post("/signin").send({ password: "Testing@123", email: "testing@testing" }).expect(401, done);
  });

  it("SIGNIN: valid email", (done) => {
    request(app).post("/signin").send({ password: "Testing@123", email: "testing@testing.com" }).expect(200, done);
  });
});
