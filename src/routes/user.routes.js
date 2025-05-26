import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

export const createUserRouter = () => {
    const router = Router();

    router.post("/register-user", registerUser);

    return router;
};
