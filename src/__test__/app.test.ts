import request from "supertest";

import app from "../app";

describe("loading Express app...", () => {
  it("responds to /", (done) => {
    request(app).get("/").expect(response => console.log(response)).expect(200, done);
  });

  it("404 error handler", (done) => {
    request(app).get("/invalid_url").expect(404, done);
  });
});
