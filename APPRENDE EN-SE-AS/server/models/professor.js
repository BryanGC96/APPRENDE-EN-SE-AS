const mongoose = require('mongoose');

const { Schema } = mongoose;

const professorSchema = new Schema({
    professor_id: {
        type: Number,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique:true,
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


const Professor = mongoose.model('Professor', professorSchema);
module.exports = Professor;
//HASH
//export