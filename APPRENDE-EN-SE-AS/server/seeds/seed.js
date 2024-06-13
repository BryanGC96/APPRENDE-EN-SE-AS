const db = require("../config/connection");
const { Course, User, Video } = require("../models");
const courseSeeds = require("./courseSeed");
const videoSeeds = require("./videoSeed");

db.once("open", async () => {
  await db.dropCollection("courses");
  await db.dropCollection("videos");
  await db.dropCollection("users");

  const courseData = await Course.create(courseSeeds);
  console.log("Courses inserted");

  for (let i = 0; i < courseData.length; i++) {
    for (let j = 0; j < videoSeeds.length; j++) {
      if (videoSeeds[j].category === courseData[i].courseCategory) {
        const videoData = await Video.create(videoSeeds[j]);

        const updatedCourse = await Course.findByIdAndUpdate(
          { _id: courseData[i]._id },
          { $addToSet: { videos: videoData._id } }
        );
      }
    }
  }

  console.log("videos inserted");

  // console.log("users inserted");
  process.exit(0);
});
