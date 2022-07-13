let _service = null;

class UserController {
  constructor({ UserService }) {
    _service = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _service.get(userId);
    return res.send(user);
  }

  async getAll(_, res) {
    const users = await _service.getAll();
    return res.send(users);
  }

  async create(req, res) {
    // TODO
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const updatedUser = await _service.update(userId, body);
    return res.send(updatedUser);
  }

  async delete(req, res) {
    const { userId } = req.params;
    const deletedUser = await _service.delete(userId);
    return res.send(deletedUser);
  }
}

module.exports = UserController;
