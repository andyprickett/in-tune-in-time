const noteQueries = require("../db/queries.notes.js");

function calculatedTempo(frequency) {
  let tempo = frequency * 60;
  while (tempo > 120) {
    tempo = tempo / 2;
  }
  return tempo.toFixed(3);
}

module.exports = {
  index(req, res, next) {
    noteQueries.getAllNotes((err, notes) => {
      if (err) {
        res.redirect(500, "static/index");
      } else {
        res.render("notes/index", {notes});
      }
    });
  },
  show(req, res, next) {
    noteQueries.getNote(req.params.id, (err, note) => {
      if (err || note === null) {
        res.redirect(404, "/");
      } else {
        note.tempo = calculatedTempo(note.frequency);;
        res.render("notes/show", {note});
      }
    });
  }
}