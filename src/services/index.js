const AssessmentService = require("./assessment.service");
const AuthService = require("./auth.service");
const CacheService = require("./cache.service");
const QuestionService = require("./question.service");
const ResourceService = require("./resource.service");
const TagService = require("./tag.service");
const TechnologyService = require("./technology.service");
const TestService = require("./test.service");
const UserService = require("./user.service");

module.exports = {
  TestService: TestService,
  AssessmentService: AssessmentService,
  CacheService: CacheService,
  QuestionService: QuestionService,
  ResourceService: ResourceService,
  TagService: TagService,
  TechnologyService: TechnologyService,
  UserService: UserService,
  AuthService: AuthService,
};
