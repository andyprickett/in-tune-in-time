const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/notes";

const sequelize = require("../../src/db/models/index").sequelize;
const Note = require("../../src/db/models").Note;

describe("routes : notes", () => {

  beforeEach((done) => {
    this.note;
    sequelize.sync({force: true}).then((res) => {
    
      Note.create({
        name: "C",
        frequency: 32.703
      })
      .then((note) => {
        this.note = note;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  describe("GET /notes", () => {
    it("should return status code 200 and all notes", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Note to Tempo");
        expect(body).toContain("C");
        done();
      });
    });
  });

  describe("GET /notes/:id", () => {
    it("should render a view with the selected note", (done) => {
      request.get(`${base}/${this.note.id}`, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Note to Tempo");
        expect(body).toContain("Tempo for C:");
        done();
      });
    });
  });

});
