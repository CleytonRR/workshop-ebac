const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  sinopse: String
});

module.exports = mongoose.model("Movie", schema);