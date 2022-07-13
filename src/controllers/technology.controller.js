let _service = null;

class TechnologyController {
  constructor({ TechnologyService }) {
    _service = TechnologyService;
  }

  async get(req, res) {
    const { technologyId } = req.params;
    const technology = await _service.get(technologyId);
    return res.send(technology);
  }

  async getAll(_, res) {
    const technology = await _service.getAll();
    return res.send(technology);
  }

  async create(req, res) {
    // TODO
  }

  async update(req, res) {
    const { body } = req;
    const { technologyId } = req.params;
    const updatedTechnology = await _service.update(technologyId, body);
    return res.send(updatedTechnology);
  }

  async delete(req, res) {
    const { technologyId } = req.params;
    const deletedTechnology = await _service.delete(technologyId);
    return res.send(deletedTechnology);
  }
}

module.exports = TechnologyController;
