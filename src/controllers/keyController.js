const keyQueries = require("../db/queries.keys.js");
const Note = require("../db/models").Note;

const adjustNoteNameForKey = (key, note) => {
  let noteNameAdjusted = note.name;
  if (key.name === "G" ||
      key.name === "D" ||
      key.name === "A" ||
      key.name === "E" ||
      key.name === "B") {
    switch (note.name) {
    case "Gb":
      noteNameAdjusted = "F#";
      break;
    case "Ab":
      noteNameAdjusted = "G#";
      break;
    case "Bb":
      noteNameAdjusted = "A#";
      break;
    case "Db":
      noteNameAdjusted = "C#";
      break;
    case "Eb":
      noteNameAdjusted = "D#";
    }
  }
  return noteNameAdjusted;
};

const calculatedTempo = (frequency) => {
  let tempo = frequency * 60;
  while (tempo > 120) {
    tempo = tempo / 2;
  }
  return tempo.toFixed(3);
};

module.exports = {
  index(req, res, next) {
    keyQueries.getAllKeys((err, keys) => {
      if (err) {
        res.redirect(500, "static/index");
      } else {
        res.render("keys/index", {keys});
      }
    });
  },
  show(req, res, next) {
    keyQueries.getKey(req.params.id, (err, key) => {
      if (err || key === null) {
        res.redirect(404, "/");
      } else {
        const getNoteTempos = async (key) => {
          const promiseArray = key.notes.map(async (note) => {
            const noteRecord = await Note.findOne({ where: {name: note} });
            return noteRecord;
          });
          const notesObjectsArray = await Promise.all(promiseArray);
          key.notes = notesObjectsArray.map((noteObject) => {
            return {
              name: adjustNoteNameForKey(key, noteObject),
              tempo: calculatedTempo(noteObject.frequency)
            }
          });
          res.render("keys/show", {key});
        }
        getNoteTempos(key);
      }
    });
  }
}