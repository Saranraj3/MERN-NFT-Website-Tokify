const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
}, {
    timestamps: true
})


const UserModel = new mongoose.model('User', UserSchema);

export default UserModel;
