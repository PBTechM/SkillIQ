class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.findById(id);
  }

  async getAll(pageSize = 0, pageNum = 0) {
    if (pageSize && pageNum) {
      const skips = pageSize * (pageNum - 1);
      return await this.model.find().skip(skips).limit(pageSize);
    }
    return await this.model.find();
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
