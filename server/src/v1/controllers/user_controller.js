import config from "../config/config.js";
import { logMessage } from "../helpers/logger.js";
import * as userService from "../services/user_service.js";
import getMessage from "../helpers/getMessage.js";

export const signIn = async (req, res) => {
    try {
        const result = await userService.signIn(req, 'user');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}

export const signUp = async (req, res) => {
    try {
        const result = await userService.signUp(req, 'user');
        res.status(result.status).send(result.send);
    } catch (error) {
        logMessage(error, req);
        res.status(config.http_status_server_error).send({
            status: config.status_fail,
            message: await getMessage('common.something_went_wrong')
        });
    }
}