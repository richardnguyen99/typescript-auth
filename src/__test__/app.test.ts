/**
 * General loading tests for every page in
 * the application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import request from "supertest";

import app from "../app";

jest.setTimeout(10000);

describe("loading Express app...", () => {
  it("responds to /", (done) => {
    request(app).get("/").expect(200, done);
  });

  it("respond to /signin", (done) => {
    request(app).get("/signin").expect(200, done);
  });

  it("respond to /signup", (done) => {
    request(app).get("/signup").expect(200, done);
  });

  it("404 error handler", (done) => {
    request(app).get("/invalid_url").expect(404, done);
  });
});
