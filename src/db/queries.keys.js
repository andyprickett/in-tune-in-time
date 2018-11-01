const Key = require("./models").Key;

module.exports = {
  getAllKeys(callback) {
    return Key.findAll()
    .then((keys) => {
      callback(null, keys);
    })
    .catch((err) => {
      callback(err);
    });
  },
  getKey(id, callback) {
    return Key.findByPk(id)
    .then((key) => {
      callback(null, key);
    })
    .catch((err) => {
      callback(err);
    });
  }
}