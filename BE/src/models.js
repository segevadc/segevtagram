const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    author: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: "",
    },
    url: {
        type: String,
        default: "",
    },
    time: {
        type: String,
        default: "",
    }
});

const postModel = mongoose.model("Post", PostSchema);
module.exports = postModel
