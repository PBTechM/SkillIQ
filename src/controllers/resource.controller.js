let _service = null;

class ResourceController {
  constructor({ ResourceService }) {
    _service = ResourceService;
  }

  async get(req, res) {
    const { resourceId } = req.params;
    const resource = await _service.get(resourceId);
    return res.send(resource);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const resources = await _service.getAll(pageSize, pageNum);
    return res.send(resources);
  }

  async create(req, res) {
    // TODO
  }

  async update(req, res) {
    const { body } = req;
    const { resourceId } = req.params;
    const updatedResource = await _service.update(resourceId, body);
    return res.send(updatedResource);
  }

  async delete(req, res) {
    const { resourceId } = req.params;
    const deletedResource = await _service.delete(resourceId);
    return res.send(deletedResource);
  }
}

module.exports = ResourceController;
