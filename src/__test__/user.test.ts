/**
 * Testing cases specifically for
 * user routes and APIs
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import request from "supertest";
import dotenv from "dotenv";

import { pool } from "../config/postgres";
import app from "../app";

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


  it("Testing with signup", (done) => {
    request(app).post("/signup").send({ data: { username: "testing", password: "testing", email: "testing@testing.com" } }).expect(200, done);
  });
});
