let _service = null;

class AuthController {
  constructor({ AuthService }) {
    _service = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const createdUser = await _service.signUp(body);
    return res.status(201).send(createdUser);
  }

  async signIn(req, res) {
    const { body } = req;
    const token = await _service.signIn(body);
    return res.send(token);
  }
}

module.exports = AuthController;
