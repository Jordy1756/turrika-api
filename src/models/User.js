import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        versionKey: false,
    }
);

export default model("User", UserSchema);
