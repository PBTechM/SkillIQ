const { createContainer, asClass, asValue, asFunction } = require("awilix");

//#region Config
const config = require("../config");
const app = require(".");
//#endregion

//#region Controllers
const { TestController } = require("../controllers/");
//#endregion

//#region Services
const { TestService } = require("../services/");
//#endregion

//#region Routes
const { TestRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
//#endregion

//#region Models
const {
  Assessment,
  Question,
  Resource,
  Tag,
  Technology,
  User,
} = require("../models");
//#endregion

//#region Initialization
const container = createContainer();
//#endregion

//#region Registers APP
container.register({
  app: asClass(app).singleton(),
  router: asFunction(Routes).singleton(),
  config: asValue(config),
});
//#endregion

//#region Registers Test
container
  .register({
    TestService: asClass(TestService).singleton(),
  })
  .register({
    TestController: asClass(TestController.bind(TestController)).singleton(),
  })
  .register({
    TestRoutes: asFunction(TestRoutes).singleton(),
  });
//#endregion

//#region Registers Models
container
  .register({
    User: asValue(Assessment),
  })
  .register({
    User: asValue(Question),
  })
  .register({
    User: asValue(Resource),
  })
  .register({
    User: asValue(Tag),
  })
  .register({
    User: asValue(Technology),
  })
  .register({
    User: asValue(User),
  });
//#endregion
module.exports = container;
