
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  cpf: String,
  name: String
});

module.exports = mongoose.model("User", schema);