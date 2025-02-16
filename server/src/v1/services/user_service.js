import mongoose from "mongoose";
import moment from 'moment';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { promisify } from "util";
import db from "./../config/db.js";
import config from '../config/config.js';
import { response } from "../helpers/response.js";
import getMessage from "../helpers/getMessage.js";
import * as modelService from "./model_service.js";

export const signToken = async (data, expiresIn) => {
    return jwt.sign(data, config.jwt_encryption, { expiresIn });
};

export const verifyToken = async (token) => {
    try {
        return await promisify(jwt.verify)(token, config.jwt_encryption);
    } catch (error) {
        throw error;
    }
};

export const decodeToken = async (token) => {
    try {
        return jwt.decode(token);
    } catch (error) {
        throw error;
    }
};

export const signIn = async (req, model) => {
    try {
        const { email, password } = req.body;
        const existingUser = await modelService.getOne(db[model], { email }, req);
        
        if (!existingUser) {
            return response(config.http_status_data_not_found, {
                status: config.status_fail,
                message: await getMessage('common.sign_in_failed'),
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return response(config.http_status_data_not_found, {
                status: config.status_fail,
                message: await getMessage('common.sign_in_failed'),
            });
        }
        const token = await signToken({ email: existingUser.email, id: existingUser._id }, config.jwt_expiration);
        // const refreshToken = await signToken({ email: existingUser.email, id: existingUser._id }, `${config.jwt_refresh_expiration}d`);
        // const getToken = await redis.get(`user::${getModel._id}`);
        // await redis.set(`blackListed-${getToken}`, 60 * 60 * 24 * config.jwt_refresh_expiration);
        // await redis.set(`user::${getModel._id}`, getModel.accessToken, 60 * 60 * 24 * config.jwt_refresh_expiration);
        // await redis.set(getModel.accessToken, refreshToken, 60 * 60 * 24 * config.jwt_refresh_expiration);
        return response(config.http_status_data_found, {
            status: config.status_success,
            message: await getMessage('common.sign_in_success'),
            data: {
                result: existingUser,
                token
            }
        });
    } catch (error) {
        throw error;
    }
}

export const signUp = async (req, model) => {
    try {
        const { email, password, confirmPassword, firstName, lastName } = req.body;
        const checkUserExist = await modelService.getOne(db[model], { email }, req);
        if (checkUserExist) {
            return response(config.http_status_user_already_exist, {
                status: config.status_fail,
                message: await getMessage('common.user_already_exist'),
            });
        }
        if (password !== confirmPassword) {
            return response(config.http_status_bad_request, {
                status: config.status_fail,
                message: await getMessage('common.password_and_confirm_password_not_match'),
            });
        }
        const hashPassword = await bcrypt.hash(password, config.bcrypt_salt_round);
        const createUser = await modelService.createOne(db[model], {
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            email,
            password: hashPassword,
            created_at: moment().unix()
        }, req);
        const token = await signToken({ email: createUser.email, id: createUser._id }, config.jwt_expiration);
        // const refreshToken = await signToken({ email: createUser.email, id: createUser._id }, `${config.jwt_refresh_expiration}d`);
        // const getToken = await redis.get(`user::${getModel._id}`);
        // await redis.set(`blackListed-${getToken}`, 60 * 60 * 24 * config.jwt_refresh_expiration);
        // await redis.set(`user::${getModel._id}`, getModel.accessToken, 60 * 60 * 24 * config.jwt_refresh_expiration);
        // await redis.set(getModel.accessToken, refreshToken, 60 * 60 * 24 * config.jwt_refresh_expiration);
        return response(config.http_status_create_success, {
            status: config.status_success,
            message: await getMessage('common.post_create_success'),
            data: {
                result: createUser,
                token
            }
        });
    } catch (error) {
        throw error;
    }
}