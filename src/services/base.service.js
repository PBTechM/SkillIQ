class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Id must be sent";
      throw error;
    }

    const currentEntity = await this.repository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "Entity does not found";
      throw error;
    }

    return currentEntity;
  }

  async getAll(pageSize = 0, pageNum = 0) {
    return await this.repository.getAll(pageSize, pageNum);
  }

  async create(entity) {
    if (!entity) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    return await this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Id must be sent";
      throw error;
    }
    if (!entity) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    return await this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Id must be sent";
      throw error;
    }

    return await this.repository.delete(id);
  }
}

module.exports = BaseService;
