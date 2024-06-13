const { Schema, model } = require("mongoose");

const videoSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  video_url: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Video = model("Video", videoSchema);

module.exports = Video;
