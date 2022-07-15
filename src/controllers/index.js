const AssessmentController = require("./assessment.controller");
const AuthController = require("./auth.controller");
const QuestionController = require("./question.controller");
const ResourceController = require("./resource.controller");
const TagController = require("./tag.controller");
const TechnologyController = require("./technology.controller");
const TestController = require("./test.controller");
const UserController = require("./user.controller");

module.exports = {
  TestController: TestController,
  AssessmentController: AssessmentController,
  AuthController: AuthController,
  QuestionController: QuestionController,
  ResourceController: ResourceController,
  TagController: TagController,
  TechnologyController: TechnologyController,
  UserController: UserController,
};
