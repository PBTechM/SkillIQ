const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResourceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  URL: { type: String, required: true },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tag",
      autopopulate: true,
    },
  ],
});

ResourceSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("resource", ResourceSchema);
