import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document {
    _id: Types.ObjectId;
    providers: Array<{
        name: string;
        providerId: string;
    }>;
    email: string;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
}

const userSchema = new Schema({
    providers: [
        {
            name: { type: String, required: true },
            providerId: { type: String, required: true }
        }
    ],
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const UserModel = model<IUser>("User", userSchema);