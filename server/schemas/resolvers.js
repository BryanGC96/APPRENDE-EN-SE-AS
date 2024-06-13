const { User, Course, Video } = require("../models");
const { singToken, AuthenticationError, signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find();
    // },
    // user: async (parent, { userID }) => {
    //   return User.findOne({ _id: userID });
    // },
    courses: async () => {
      return Course.find().populate("videos");
    },
    course: async (parent, { courseId }) => {
      return Course.findOne({ _id: courseId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    addCourse: async (parent, args, context) => {
      if (context.user) {
        const courseData = await Course.findOneAndUpdate(
          { _id: args.courseId },
          { $push: { subscribers: context.user._id } },
          { new: true }
        );

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { courses: args.courseId } },
          { new: true }
        );

        return updatedUser;
      }
      throw AuthenticationError;
    },
  },
};
module.exports = resolvers;
