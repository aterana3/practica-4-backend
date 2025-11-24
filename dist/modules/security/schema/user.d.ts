import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, z.core.$strip>;
export declare const userCreateSchema: z.ZodIntersection<z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    passwordConfirm: z.ZodString;
}, z.core.$strip>>;
export type UserCreateType = z.infer<typeof userCreateSchema>;
export declare const userLoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type UserLoginType = z.infer<typeof userLoginSchema>;
export declare const userUpdateSchema: z.ZodIntersection<z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    verifyPassword: z.ZodString;
}, z.core.$strip>>;
export type UserUpdateType = z.infer<typeof userUpdateSchema>;
//# sourceMappingURL=user.d.ts.map