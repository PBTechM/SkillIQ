const BaseRepository = require("./base.repository");
let _tag = null;

class TagRepository extends BaseRepository {
  constructor({ Tag }) {
    super(Tag);
    _tag = Tag;
  }
}

module.exports = TagRepository;
