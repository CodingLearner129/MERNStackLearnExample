import mongoose from "mongoose";
import moment from 'moment';
import db from "./../config/db.js";
import config from '../config/config.js';
import { response } from "../helpers/response.js";
import getMessage from "../helpers/getMessage.js";
import * as modelService from "./model_service.js";

export const getPosts = async (req, model) => {
    try {
        const { page } = req.query;
        const limit = 8;
        const skip = (Number(page) - 1) * limit;
        const total = await db[model].countDocuments({ deleted_at: 0 });
        const getPosts = await modelService.aggregate(db[model], [
            {
                $match: {
                    deleted_at: 0
                },
            },
            {
                $sort: {
                    _id: -1
                }
            },
            { $limit: limit },
            { $skip: skip }
        ], req);
        if (getPosts.length > 0) {
            return response(config.http_status_data_found, {
                status: config.status_success,
                message: await getMessage('common.posts_fetch_success'),
                data: getPosts,
                currentPage: Number(page),
                totalPages: Math.ceil(total / limit)
            });
        } else {
            return response(config.http_status_data_not_found, {
                status: config.status_fail,
                message: await getMessage('common.post_not_found'),
            });
        }
    } catch (error) {
        throw error;
    }
}

export const getPost = async (req, model) => {
    try {
        const { id: _id } = req.params;
        
        const fetchPost = await modelService.getOneById(db[model], { _id }, req);
        if (fetchPost) {
            return response(config.http_status_data_found, {
                status: config.status_success,
                message: await getMessage('common.post_fetch_success'),
                data: fetchPost
            });
        } else {
            return response(config.http_status_data_not_found, {
                status: config.status_fail,
                message: await getMessage('common.post_not_found'),
            });
        }
    } catch (error) {
        throw error;
    }
}

export const getPostsBySearch = async (req, model) => {
    try {
        const { searchQuery, tags } = req.query;
        
        const getPosts = await modelService.getAll(db[model], {
            $or: [
                { title: { $regex: searchQuery, $options: "i" } },
                { tags: { $in: tags.split(',') } }
            ],
            deleted_at: 0
        }, req);
        if (getPosts.length > 0) {
            return response(config.http_status_data_found, {
                status: config.status_success,
                message: await getMessage('common.posts_fetch_success'),
                data: getPosts
            });
        } else {
            return response(config.http_status_data_not_found, {
                status: config.status_fail,
                message: await getMessage('common.post_not_found'),
            });
        }
    } catch (error) {
        throw error;
    }
}

export const createPost = async (req, model) => {
    try {
        const { name, title, message, tags, selectedFile } = req.body;
        const createPost = await modelService.createOne(db[model], {
            name,
            title,
            message,
            tags,
            selectedFile,
            creator: req.userId,
            created_at: moment().unix()
        }, req);
        return response(config.http_status_create_success, {
            status: config.status_success,
            message: await getMessage('common.post_create_success'),
            data: createPost
        });
    } catch (error) {
        throw error;
    }
}

export const updatePost = async (req, model) => {
    try {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return response(config.http_status_content_not_found, {
                status: config.status_fail,
                message: await getMessage('common.post_not_found_id')
            });
        }
        const { creator, title, message, tags, selectedFile } = req.body;
        const updatePost = await modelService.getOneAndUpdate(db[model], { _id }, {
            creator,
            title,
            message,
            tags,
            selectedFile,
            updated_at: moment().unix()
        }, req);
        return response(config.http_status_create_success, {
            status: config.status_success,
            message: await getMessage('common.post_edit_success'),
            data: updatePost
        });
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (req, model) => {
    try {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return response(config.http_status_content_not_found, {
                status: config.status_fail,
                message: await getMessage('common.post_not_found_id')
            });
        }
        const deletePost = await modelService.getOneAndDelete(db[model], { _id }, req);
        return response(config.http_status_create_success, {
            status: config.status_success,
            message: await getMessage('common.post_delete_success'),
        });
    } catch (error) {
        throw error;
    }
}

export const likePost = async (req, model) => {
    try {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return response(config.http_status_content_not_found, {
                status: config.status_fail,
                message: await getMessage('common.post_not_found_id')
            });
        }
        const getPost = await modelService.getOne(db[model], { _id }, req);
        console.log(getPost.likes);
        console.log(String(req.userId));
        const index = getPost.likes.findIndex((id) => id === String(req.userId));
        if (index === -1) {
            getPost.likes.push(req.userId);
        } else {
            getPost.likes = getPost.likes.filter((id) => id !== String(req.userId));
        }
        // const updatePost = await modelService.getOneAndUpdate(db[model], { _id }, {
        //     $inc: { likeCount: 1 }
        // }, req);
        console.log(getPost.likes);
        const updatePost = await modelService.getOneAndUpdate(db[model], { _id }, getPost, req);
        return response(config.http_status_create_success, {
            status: config.status_success,
            message: await getMessage('common.post_edit_success'),
            data: updatePost
        });
    } catch (error) {
        throw error;
    }
}
