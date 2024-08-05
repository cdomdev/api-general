import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

}, {
    timestamps: true,
    versionKey: false,
})


const User = mongoose.model('Users', UsersSchema);

module.exports = User;