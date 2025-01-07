
/**@format */
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    photoUrl: {
        type: String,
        require: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;