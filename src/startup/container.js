const { createContainer, asClass, asValue, asFunction } = require("awilix");

//#region Config imports
const config = require("../config");
const app = require(".");
//#endregion

//#region Controllers imports
const { TestController } = require("../controllers/");
//#endregion

//#region Services imports
const { TestService } = require("../services/");
//#endregion

//#region Routes imports
const { TestRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
//#endregion

//#region Models imports
const {
  Assessment,
  Question,
  Resource,
  Tag,
  Technology,
  User,
} = require("../models");
//#endregion

//#region Repositories imports
const {
  AssessmentRepository,
  QuestionRepository,
  ResourceRepository,
  TagRepository,
  TechnologyRepository,
  UserRepository,
} = require("../repositories");
//#endregion

//#region Initialization
const container = createContainer();
//#endregion

//#region Register APP
container.register({
  app: asClass(app).singleton(),
  router: asFunction(Routes).singleton(),
  config: asValue(config),
});
//#endregion

//#region Register Test
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

//#region Register Models
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

//#region Register Repositories
container.register({
  AssessmentRepository: asClass(AssessmentRepository).singleton(),
  QuestionRepository: asClass(QuestionRepository).singleton(),
  ResourceRepository: asClass(ResourceRepository).singleton(),
  TagRepository: asClass(TagRepository).singleton(),
  TechnologyRepository: asClass(TechnologyRepository).singleton(),
  UserRepository: asClass(UserRepository).singleton(),
});
//#endregion

module.exports = container;
