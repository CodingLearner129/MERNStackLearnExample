import mongoose from "mongoose";

// create schema 
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: ""
    },
    message: {
        type: String,
        trim: true,
        default: ""
    },
    name: {
        type: String,
        trim: true,
        default: ""
    },
    creator: {
        type: String,
        trim: true,
        default: ""
    },
    tags: [
        {
            type: String,
            trim: true,
            default: ""
        }
    ],
    selectedFile: {
        type: String,
        trim: true,
        default: ""
    },
    likes: {
        type: [String],
        default: []
    },
    likeCount: {
        type: Number,
        default: 0
    },
    userLikeCount: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Number,
        default: 0
    },
    updated_at: {
        type: Number,
        default: 0
    },
    deleted_at: {
        type: Number,
        default: 0
    },
}, {
    timestamps: false
});

// create model
const post = mongoose.model("post", postSchema); //where "user" is model name which is used for relationship

export { post };