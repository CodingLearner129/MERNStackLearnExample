import express from 'express';
import {authenticationMiddleware} from "./../middlewares/auth_middleware.js";
import * as postController from "../controllers/post_controller.js";

const router = express.Router();

router.get("/search", [], postController.getPostsBySearch);
router.get("/", [], postController.getPosts);
router.get("/:id", [], postController.getPost);

router.use((req, res, next) => authenticationMiddleware(req, res, next, 'user'));

router.post("/", [], postController.createPost);
router.patch("/:id", [], postController.updatePost);
router.delete("/:id", [], postController.deletePost);
router.patch("/:id/likePost", [], postController.likePost);

export { router };