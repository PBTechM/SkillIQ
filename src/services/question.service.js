const BaseService = require("./base.service");
let _repository = null;

class QuestionService extends BaseService {
  constructor({ QuestionRepository }) {
    super(QuestionRepository);
    _repository = QuestionRepository;
  }
}

module.exports = QuestionService;
