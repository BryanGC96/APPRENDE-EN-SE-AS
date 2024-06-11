const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema({
    admin_id: { type: Schema.Types.ObjectId, required: true, unique: true },     
          
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


const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
//HAS
//export