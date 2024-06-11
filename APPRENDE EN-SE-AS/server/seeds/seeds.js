const mongoose = require('mongoose');
const User = require('../models/user');
const Course = require('../models/course');
const Admin = require('../models/admin');
const userData = require('./userData.json');
const courseData = require('./courseData.json');
const adminData = require('./adminsData.json');

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/signLanguageDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await mongoose.connection.db.dropDatabase();

    await User.insertMany(userData);
    await Course.insertMany(courseData);
    await Admin.insertMany(adminData);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
