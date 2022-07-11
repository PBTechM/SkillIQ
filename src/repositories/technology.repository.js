const BaseRepository = require("./base.repository");
let _technology = null;

class TechnologyRepository extends BaseRepository {
  constructor({ Technology }) {
    super(Technology);
    _technology = Technology;
  }
}

module.exports = TechnologyRepository;
