const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/notes";

describe("routes : notes", () => {
  describe("GET /notes", () => {
    it("should return status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Note to Tempo");
        done();
      });
    });
  });
});