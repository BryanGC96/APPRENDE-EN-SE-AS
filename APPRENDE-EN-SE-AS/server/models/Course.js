const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
  },
  description: { type: String },
  video_url: { type: String },
  studentEnrolled: { type: String },
});

const Course = model("Course", courseSchema);

module.exports = Course;
