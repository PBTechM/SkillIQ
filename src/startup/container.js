const { createContainer, asClass, asValue, asFunction } = require("awilix");

//#region Config imports
const config = require("../config");
const app = require(".");
//#endregion

//#region Controllers imports
const {
  AssessmentController,
  AuthController,
  QuestionController,
  ResourceController,
  TagController,
  TechnologyController,
  TestController,
  UserController,
} = require("../controllers/");
//#endregion

//#region Services imports
const {
  TestService,
  AssessmentService,
  AuthService,
  CacheService,
  QuestionService,
  ResourceService,
  TagService,
  TechnologyService,
  UserService,
} = require("../services/");
//#endregion

//#region Routes imports
const {
  AssessmentRoutes,
  AuthRoutes,
  QuestionRoutes,
  ResourceRoutes,
  TagRoutes,
  TechnologyRoutes,
  TestRoutes,
  UserRoutes,
} = require("../routes/index.routes");
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
  cache: asClass(CacheService).singleton(),
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

//#region Register Assessment
container
  .register({
    AssessmentService: asClass(AssessmentService).singleton(),
  })
  .register({
    AssessmentController: asClass(AssessmentController).singleton(),
  })
  .register({
    AssessmentRoutes: asFunction(AssessmentRoutes).singleton(),
  });
//#endregion

//#region Register Auth
container
  .register({
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    AuthController: asClass(AuthController).singleton(),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  });
//#endregion

//#region Register Question
container
  .register({
    QuestionService: asClass(QuestionService).singleton(),
  })
  .register({
    QuestionController: asClass(QuestionController).singleton(),
  })
  .register({
    QuestionRoutes: asFunction(QuestionRoutes).singleton(),
  });
//#endregion

//#region Register Resource
container
  .register({
    ResourceService: asClass(ResourceService).singleton(),
  })
  .register({
    ResourceController: asClass(ResourceController).singleton(),
  })
  .register({
    ResourceRoutes: asFunction(ResourceRoutes).singleton(),
  });
//#endregion

//#region Register Tag
container
  .register({
    TagService: asClass(TagService).singleton(),
  })
  .register({
    TagController: asClass(TagController).singleton(),
  })
  .register({
    TagRoutes: asFunction(TagRoutes).singleton(),
  });
//#endregion

//#region Register Technology
container
  .register({
    TechnologyService: asClass(TechnologyService).singleton(),
  })
  .register({
    TechnologyController: asClass(TechnologyController).singleton(),
  })
  .register({
    TechnologyRoutes: asFunction(TechnologyRoutes).singleton(),
  });
//#endregion

//#region Register User
container
  .register({
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserController: asClass(UserController).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
  });
//#endregion

//#region Register Models
container
  .register({
    Assessment: asValue(Assessment),
  })
  .register({
    Question: asValue(Question),
  })
  .register({
    Resource: asValue(Resource),
  })
  .register({
    Tag: asValue(Tag),
  })
  .register({
    Technology: asValue(Technology),
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
