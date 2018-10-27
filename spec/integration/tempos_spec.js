const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/tempos";

describe("routes : tempos", () => {
  describe("GET /tempos", () => {
    it("should return status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Tempo to Notes");
        done();
      });
    });
  });
});