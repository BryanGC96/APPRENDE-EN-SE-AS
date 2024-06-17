const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://admin:zGkLSr1gCVbBTch4@cluster0.gcld6b2.mongodb.net/apprende_en_se_as"
);

module.exports = mongoose.connection;