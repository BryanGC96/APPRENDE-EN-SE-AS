const mongoose = require('mongoose');
const { Schema } = mongoose;

// Importing the Student and Professor models
const Student = require('./student');
const Professor = require('./professor');

const courseSchema = new Schema({
    course_id: {
        type: Number,
        required: true,
        trim: true
    },
    level: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        minlength: 5
    },
    video_url: {
        type: String,
        required: true
    },
    professors: [professor.Schema],
    students: [student.Schema]
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
