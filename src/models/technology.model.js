const mongoose = require("mongoose");
const { Schema } = mongoose;

const TechnologySchema = new Schema({
  name: { type: String, required: true },
  logoURL: { type: String, required: true },
  assessment: {
    type: Schema.Types.ObjectId,
    ref: "assessment",
    autopopulate: true,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tag",
      autopopulate: true,
    },
  ],
});

TechnologySchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("technology", TechnologySchema);
