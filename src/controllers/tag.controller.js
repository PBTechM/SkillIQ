let _service = null;

class TagController {
  constructor({ TagService }) {
    _service = TagService;
  }

  async get(req, res) {
    const { tagId } = req.params;
    const tag = await _service.get(tagId);
    return res.send(tag);
  }

  async getAll(_, res) {
    const tags = await _service.getAll();
    return res.send(tags);
  }

  async create(req, res) {
    // TODO
  }

  async update(req, res) {
    const { body } = req;
    const { tagId } = req.params;
    const updatedTag = await _service.update(tagId, body);
    return res.send(updatedTag);
  }

  async delete(req, res) {
    const { tagId } = req.params;
    const deletedTag = await _service.delete(tagId);
    return res.send(deletedTag);
  }
}

module.exports = TagController;
