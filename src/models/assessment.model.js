const mongoose = require("mongoose");
const { Schema } = mongoose;

const AssessmentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: Number, default: 1800 },
  questions: [
   {
    type: Schema.Types.ObjectId,
    ref: "question",
    autopopulate: true,
   }
  ],
});

AssessmentSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model('assessment', AssessmentSchema)