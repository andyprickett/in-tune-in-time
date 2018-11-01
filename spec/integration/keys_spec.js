const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/keys";

const sequelize = require("../../src/db/models/index").sequelize;
const Key = require("../../src/db/models").Key;
const Note = require("../../src/db/models").Note;

describe("routes : keys", () => {

  beforeEach((done) => {
    this.key;
    this.note;
    sequelize.sync({force: true}).then((res) => {
    
      Key.create({
        name: "C",
        notes: ["C"]
      })
      .then((key) => {
        this.key = key;

        Note.create({
          name: "C",
          frequency: 32.703
        })
        .then((note) => {
          this.note = note;

          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  describe("GET /keys", () => {
    it("should return status code 200 and all keys", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Key to Notes");
        expect(body).toContain("C");
        done();
      });
    });
  });

  describe("GET /keys/:id", () => {
    it("should render a view with the selected key", (done) => {
      request.get(`${base}/${this.key.id}`, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Key to Notes");
        expect(body).toContain("Notes for C:");
        done();
      });
    });
  });

});