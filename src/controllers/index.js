const AssessmentController = require("./assessment.controller");
const QuestionController = require("./question.controller");
const ResourceController = require("./resource.controller");
const TestController = require("./test.controller");

module.exports = {
  TestController: TestController,
  AssessmentController: AssessmentController,
  QuestionController: QuestionController,
  ResourceController: ResourceController,
};
