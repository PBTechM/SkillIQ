let _testService = null;

class TestController {
  constructor({ TestService }) {
    _testService = TestService;
  }

  test(req, res) {
    return res.send(_testService.test());
  }
}

module.exports = TestController;
