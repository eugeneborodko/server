const { User } = require('./../models/models')

class UserController {
  async create(req, res) {
    const { email, password, role } = req.body
    const user = await User.create({ email, password, role })
    return res.json(user)
  }

  async getAll(req, res) {
    const users = await User.findAll()
    return res.json(users)
  }

  async getOne(req, res) {
    const { id } = req.params
    const user = await User.findOne({
      where: { id },
    })
    return res.json(user)
  }
}

module.exports = new UserController()
