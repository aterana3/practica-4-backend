import { Schema } from "mongoose";
export declare const TaskModel: import("mongoose").Model<{
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        description: string;
        title: string;
        status: "pending" | "in-progress" | "completed";
        userId: import("mongoose").Types.ObjectId;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        description: string;
        title: string;
        status: "pending" | "in-progress" | "completed";
        userId: import("mongoose").Types.ObjectId;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: import("mongoose").Types.ObjectId;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=task.d.ts.map