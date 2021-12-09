const User = require("../model/User")

module.exports = {
  async create(data) {
    await User.create({...data})
  },

  async show(id) {
    return await User.exists({
      _id: id
    });
  }
}