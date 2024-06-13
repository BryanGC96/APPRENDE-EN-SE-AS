const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    courseCategory: {
      type: String,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    subscribers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

courseSchema.virtual("subscriberCount").get(function () {
  return this.students.length;
});

const Course = model("Course", courseSchema);

module.exports = Course;
