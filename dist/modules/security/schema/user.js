"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdateSchema = exports.userLoginSchema = exports.userCreateSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(32),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).max(32),
    firstName: zod_1.z.string().min(3).max(32),
    lastName: zod_1.z.string().min(3).max(32),
});
exports.userCreateSchema = exports.userSchema.pick({
    username: true,
    email: true,
    password: true,
    firstName: true,
    lastName: true,
}).and(zod_1.z.object({
    passwordConfirm: zod_1.z.string().min(8).max(32),
}));
exports.userLoginSchema = exports.userSchema.pick({
    email: true,
    password: true,
});
exports.userUpdateSchema = exports.userSchema.pick({
    username: true,
    email: true,
    firstName: true,
    lastName: true,
}).partial().and(zod_1.z.object({
    verifyPassword: zod_1.z.string().min(8).max(32),
}));
//# sourceMappingURL=user.js.map