let _service = null;

class AssessmentController {
  constructor({ AssessmentService }) {
    _service = AssessmentService;
  }

  async get(req, res) {
    const { assessmentId } = req.params;
    const assessment = await _service.get(assessmentId);
    return res.send(assessment);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const assessments = await _service.getAll(pageSize, pageNum);
    return res.send(assessments);
  }

  async create(req, res) {
    // TODO
  }

  async update(req, res) {
    const { body } = req;
    const { assessmentId } = req.params;
    const updatedAssessment = await _service.update(assessmentId, body);
    return res.send(updatedAssessment);
  }

  async delete(req, res) {
    const { assessmentId } = req.params;
    const deletedAssessment = await _service.delete(assessmentId);
    return res.send(deletedAssessment);
  }
}

module.exports = AssessmentController;
