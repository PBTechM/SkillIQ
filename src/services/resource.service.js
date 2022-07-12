const BaseService = require("./base.service");
let _repository = null;

class ResourceService extends BaseService {
  constructor({ ResourceRepository }) {
    super(ResourceRepository);
    _repository = ResourceRepository;
  }
}

module.exports = ResourceService;
