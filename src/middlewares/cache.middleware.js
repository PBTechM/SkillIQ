const { CACHE_KEY } = require("../config");

module.exports = function (cache) {
  return (req, res, next) => {
    const key = CACHE_KEY + (req.origin || req.url);
    cacheBody = cache.get(key);

    if (cacheBody) {
      return res.send(JSON.parse(cacheBody));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        cache.set(key, body);
        res.sendResponse(body);
      };
      next();
    }
  };
};
