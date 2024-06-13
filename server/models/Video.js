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
  comments: [
    {
      commentText: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Video = model("Video", videoSchema);

module.exports = Video;
