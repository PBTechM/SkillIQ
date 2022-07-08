const mongoose = require("mongoose");
const { Schema } = mongoose;

const TagSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  technologies: [
    {
        type: Schema.Types.ObjectId,
        ref: "technology",
        autopopulate: true,
    },
  ],
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: "resource",
      autopopulate: true,
    },
  ],
  questions: [
    {
        type: Schema.Types.ObjectId,
        ref: "question",
        autopopulate: true,
    }
  ]
});

TagSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("tag", TagSchema);
