let mongoose = require('mongoose');
let schema = mongoose.Schema;

module.exports = mongoose.model('user', new schema(
  { userName: { type: String, unique: true }, passphrase: String }));
  