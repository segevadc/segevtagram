const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    id: {
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

const CommentSchema = new mongoose.Schema({
    postId: {
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
    avatarUrl: {
        type: String,
        default: "",
    },
    time: {
        type: String,
        default: "",
    }
});

const postModel = mongoose.model("Post", PostSchema, "posts");
const commentModel = mongoose.model("Comment", CommentSchema, "comments");
module.exports = {
    postModel: postModel,
    commentModel: commentModel
}