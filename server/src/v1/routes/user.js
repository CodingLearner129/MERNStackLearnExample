import express from 'express';
import * as userController from "../controllers/user_controller.js";

const router = express.Router();

router.post("/signIn", [], userController.signIn);
router.post("/signUp", [], userController.signUp);

export { router };