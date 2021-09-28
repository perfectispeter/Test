const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    display_name: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // the data must be a array of objectID !!!
    // bookmarked_events: {
    //   type: [mongoose.Schema.Types.ObjectId],
    // },
    bookmarked_events: {
        type: String,
    },
    // public_profile: {
    //   type: String,
    //   required: true,
    // },
    contact_email: {
        type: String,
    },
    contact_phone: {
        type: Number,
    },
    description: {
        type: String,
    },
    visible: {
        type: Boolean,
        default: false,
    },
});

module.exports = User = mongoose.model("user", UserSchema);