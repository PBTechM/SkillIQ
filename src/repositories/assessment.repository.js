const BaseRepository = require("./base.repository");
let _assessment = null;

class AssessmentRepository extends BaseRepository {
  constructor({ Assessment }) {
    super(Assessment);
    _assessment = Assessment;
  }
}

module.exports = AssessmentRepository;
