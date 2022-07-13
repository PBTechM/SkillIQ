let _service = null;

class QuestionController {
  constructor({ QuestionService }) {
    _service = QuestionService;
  }

  async get(req, res) {
    const { questionId } = req.params;
    const question = await _service.get(questionId);
    return res.send(question);
  }

  async getAll(_, res) {
    const questions = await _service.getAll();
    return res.send(questions);
  }

  async create(req, res) {
    // TODO
  }

  async update(req, res) {
    const { body } = req;
    const { questionId } = req.params;
    const updatedQuestion = await _service.update(questionId, body);
    return res.send(updatedQuestion);
  }

  async delete(req, res) {
    const { questionId } = req.params;
    const deletedQuestion = await _service.delete(questionId);
    return res.send(deletedQuestion);
  }
}

module.exports = QuestionController;
