const BaseService = require("./base.service");
let _repository = null;

class AssessmentService extends BaseService {
  constructor({ AssessmentRepository }) {
    super(AssessmentRepository);
    _repository = AssessmentRepository;
  }
}

module.exports = AssessmentService;
