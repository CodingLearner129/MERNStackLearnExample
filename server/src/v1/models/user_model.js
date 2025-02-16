import mongoose from "mongoose";

// create schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: ""
    },
    lastName: {
        type: String,
        trim: true,
        default: ""
    },
    name: {
        type: String,
        trim: true,
        default: ""
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        default: ""
    },
    password: {
        type: String,
        trim: true,
        default: ""
    },
    confirmPassword: {
        type: String,
        trim: true,
        default: ""
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
const user = mongoose.model("user", userSchema); //where "user" is model name which is used for relationship

export { user };