const BaseService = require("./base.service");
let _repository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _repository = UserRepository;
  }

  async getUserByUsername(username) {
    return await _repository.getUserByUsername(username);
  }
}

module.exports = UserService;
