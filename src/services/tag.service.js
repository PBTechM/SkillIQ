const BaseService = require("./base.service");
let _repository = null;

class TagService extends BaseService {
  constructor({ TagRepository }) {
    super(TagRepository);
    _repository = TagRepository;
  }
}

module.exports = TagService;
