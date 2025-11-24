import { Document, Types } from "mongoose";
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
export declare const UserModel: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any, IUser>;
//# sourceMappingURL=user.d.ts.map