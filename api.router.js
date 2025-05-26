import { Router } from "express";
import { createUserRouter } from "./src/routes/user.routes.js";

export const createAPIRouter = () => {
    const router = Router();

    router.use("/user", createUserRouter());

    return router;
};
