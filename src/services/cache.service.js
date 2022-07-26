const NodeCache = require("node-cache");
const { CacheTimeHelper } = require("../helpers");
let _cache = new NodeCache({ stdTTL: CacheTimeHelper.ONE_HOUR });;

class CacheService {
  set(key, value) {
    return _cache.set(key, value)
  }

  get(key) {
    return _cache.get(key);
  }
}

module.exports = CacheService;
