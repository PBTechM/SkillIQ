const BaseRepository = require("./base.repository");
let _resource = null;

class ResourceRepository extends BaseRepository {
  constructor({ Resource }) {
    super(Resource);
    _resource = Resource;
  }
}

module.exports = ResourceRepository;
