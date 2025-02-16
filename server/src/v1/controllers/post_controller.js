import config from "../config/config.js";
import { logMessage } from "../helpers/logger.js";
import * as postService from "../services/post_service.js";
import getMessage from "../helpers/getMessage.js";

export const getPosts = async (req, res) => {
    try {
        const result = await postService.getPosts(req, 'post');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}

export const getPost = async (req, res) => {
    try {
        const result = await postService.getPost(req, 'post');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}

export const getPostsBySearch = async (req, res) => {
    try {
        const result = await postService.getPostsBySearch(req, 'post');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}

export const createPost = async (req, res) => {
    try {
        const result = await postService.createPost(req, 'post');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}

export const updatePost = async (req, res) => {
    try {
        const result = await postService.updatePost(req, 'post');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}

export const deletePost = async (req, res) => {
    try {
        const result = await postService.deletePost(req, 'post');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}

export const likePost = async (req, res) => {
    try {
        const result = await postService.likePost(req, 'post');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}