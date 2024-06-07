const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema({
    student_ID: {
        type: Number,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});
const student = mongoose.model('student', studentSchema);
module.exports = student;


//HAS