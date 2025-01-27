import express  from "express";
import { createPost, deletedPost, getPost, getPostById, updatedPost } from "../controllers/PostController.js";

const router = express.Router();

router.get('/post', getPost);
router.get('/post/:id', getPostById);
router.post('/post', createPost);
router.patch('/post/:id', updatedPost);
router.delete('/post/:id', deletedPost);
export default router;
