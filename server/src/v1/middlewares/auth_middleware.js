import * as modelService from "./../services/model_service.js";
import { verifyToken, decodeToken } from "./../services/user_service.js";
import getMessage from './../helpers/getMessage.js';
import { logMessage } from "./../helpers/logger.js";
// import * as redis from './../helpers/redis.js';
import db from "../config/db.js";
import config from "../config/config.js";

export const authenticationMiddleware = async (req, res, next, model) => {
    try {
        // const token = req.headers['x-access-token'];
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(config.http_status_auth_fail).send({
                status: config.status_fail,
                message: await getMessage('auth.no_token_provided'),
            });
        }
        const isCustomAuth = token.length < 500;
        if (token && isCustomAuth) {
            const decoded = await verifyToken(token);
            req.userId = decoded?.id;
        } else {
            const decoded = await decodeToken(token);            
            req.userId = decoded?.sub;
        }
        next();
        // if (!token) {
        //     return res.status(config.http_status_auth_fail).send({
        //         status: config.status_fail,
        //         message: await getMessage('auth.no_token_provided'),
        //     });
        // } else {
        //     if (await redis.get(`blackListed-${token}`)) {
        //         return res.status(config.http_status_auth_fail).send({
        //             status: config.status_fail,
        //             message: await getMessage('auth.session_expired'),
        //         });
        //     } else {
        //         const decoded = await verifyToken(token);
        //         const getModel = await modelService.getOneById(db[model], decoded.id, req);
        //         if (getModel != null) {
        //             if (getModel.blocked_at > 0) {
        //                 return res.status(config.http_status_auth_fail).send({
        //                     status: config.status_fail,
        //                     message: await getMessage('auth.account_blocked'),
        //                 });
        //             } else if (getModel.deleted_at > 0) {
        //                 return res.status(config.http_status_auth_fail).send({
        //                     status: config.status_fail,
        //                     message: await getMessage('auth.account_deleted'),
        //                 });
        //             } else {
        //                 req.user = getModel;
        //                 next();
        //             }
        //         } else {
        //             return res.status(config.http_status_auth_fail).send({
        //                 status: config.status_fail,
        //                 message: await getMessage('auth.account_not_exist'),
        //             });
        //         }
        //     }
        // }
    } catch (error) {
        logMessage(error, req);
        return res.status(config.http_status_auth_fail).send({
            status: config.status_fail,
            message: await getMessage('auth.session_expired'),
        });
    }
}