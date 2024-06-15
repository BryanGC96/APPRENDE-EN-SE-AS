const db = require("../config/connection");
const { Course, User, Video } = require("../models");
const courseSeeds = require("./courseSeed");
const videoSeeds = require("./videoSeed");
const userSeeds = require("./userSeed");

db.once("open", async () => {
  await db.dropCollection("courses");
  await db.dropCollection("videos");
  await db.dropCollection("users");

  const courseData = await Course.create(courseSeeds);
  console.log("Courses inserted");

  const videoDataMap = {}; // Map to store videos grouped by category

  // Group video seeds by category for efficient lookup
  videoSeeds.forEach(video => {
    if (!videoDataMap[video.category]) {
      videoDataMap[video.category] = [];
    }
    videoDataMap[video.category].push(video);
  });

  for (let i = 0; i < courseData.length; i++) {
    const courseCategory = courseData[i].courseCategory;
    const videosForCategory = videoDataMap[courseCategory];

    if (videosForCategory) {
      const createdVideos = await Video.create(videosForCategory);
      const videoIds = createdVideos.map(video => video._id);

      const updatedCourse = await Course.findByIdAndUpdate(
        { _id: courseData[i]._id },
        { $addToSet: { videos: { $each: videoIds } } },
        { new: true }
      );

      console.log(`Videos inserted for course: ${updatedCourse.title}`);
    }
  }

  // Insert user data
  const createdUsers = await User.create(userSeeds);
  console.log("Users inserted");

  process.exit(0);
});
