import User from "../models/User.js";
import { ConflictError } from "../utils/errorHandler.js";

export const registerUser = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser)
            throw new ConflictError("Correo en uso", "Ya existe una cuenta registrada con este correo electrónico");

        const user = await User.create({ email });

        return res.status(201).json(user);
    } catch (error) {
        throw error;
    }
};
