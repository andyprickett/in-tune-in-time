const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/keys";

describe("routes : keys", () => {
  describe("GET /keys", () => {
    it("should return status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Key to Notes");
        done();
      });
    });
  });
});