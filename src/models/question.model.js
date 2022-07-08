const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  text: { type: String, required: true },
  answer: { type: Number, required: true },
  options: [
    {
      number: { type: Number, required: true },
      text: { type: Number, required: true },
    },
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tag",
      autopopulate: true,
    },
  ],
});

QuestionSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("question", QuestionSchema);
