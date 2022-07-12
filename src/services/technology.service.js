const BaseService = require("./base.service");
let _repository = null;

class TechnologyService extends BaseService {
  constructor({ TechnologyRepository }) {
    super(TechnologyRepository);
    _repository = TechnologyRepository;
  }
}

module.exports = TechnologyService;
