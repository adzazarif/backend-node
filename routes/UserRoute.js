import express from "express";
import {
    getUser,
    getUserById
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUser);
router.get('/users/:id', getUserById);
export default router;