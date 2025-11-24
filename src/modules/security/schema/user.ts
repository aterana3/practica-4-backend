import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(3).max(32),
    email: z.string().email(),
    password: z.string().min(8).max(32),
    firstName: z.string().min(3).max(32),
    lastName: z.string().min(3).max(32),
});

export const userCreateSchema = userSchema.pick({
    username: true,
    email: true,
    password: true,
    firstName: true,
    lastName: true,
}).and(z.object({
    passwordConfirm: z.string().min(8).max(32),
}));

export type UserCreateType = z.infer<typeof userCreateSchema>;

export const userLoginSchema = userSchema.pick({
    email: true,
    password: true,
});

export type UserLoginType = z.infer<typeof userLoginSchema>;

export const userUpdateSchema = userSchema.pick({
    username: true,
    email: true,
    firstName: true,
    lastName: true,
}).partial().and(
    z.object({
        verifyPassword: z.string().min(8).max(32),
    })
);

export type UserUpdateType = z.infer<typeof userUpdateSchema>;
