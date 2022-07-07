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

const container = createContainer();

//#region Registers
container.register({
  app: asClass(app).singleton(),
  router: asFunction(Routes).singleton(),
  config: asValue(config),
});

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

module.exports = container;
