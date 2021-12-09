const Movie = require("../model/Movie")

module.exports = {
  async create(data) {
    await Movie.create({...data})
  }
}