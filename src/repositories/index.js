const AssessmentRepository = require("./assessment.repository");
const QuestionRepository = require("./question.repository");
const ResourceRepository = require("./resource.repository");
const TagRepository = require("./tag.repository");
const TechnologyRepository = require("./technology.repository");
const UserRepository = require("./user.repository");

module.exports = {
  AssessmentRepository: AssessmentRepository,
  QuestionRepository: QuestionRepository,
  ResourceRepository: ResourceRepository,
  TagRepository: TagRepository,
  TechnologyRepository: TechnologyRepository,
  UserRepository: UserRepository,
};
