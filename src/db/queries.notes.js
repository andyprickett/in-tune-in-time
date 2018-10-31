const Note = require("./models").Note;

module.exports = {
  getAllNotes(callback) {
    return Note.findAll()
    .then((notes) => {
      callback(null, notes);
    })
    .catch((err) => {
      callback(err);
    });
  },
  getNote(id, callback) {
    return Note.findByPk(id)
    .then((note) => {
      callback(null, note);
    })
    .catch((err) => {
      callback(err);
    });
  }
}