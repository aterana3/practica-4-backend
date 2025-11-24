import { z } from "zod";

export const taskSchema = z.object({
    title: z.string().min(1, "El título es requerido").max(100, "El título no puede exceder 100 caracteres"),
    description: z.string().min(1, "La descripción es requerida").max(500, "La descripción no puede exceder 500 caracteres"),
    status: z.enum(["pending", "in-progress", "completed"]).default("pending"),
    userId: z.string().min(1, "El ID de usuario es requerido"),
});

export const taskCreateSchema = taskSchema.pick({
    title: true,
    description: true,
    status: true,
}).partial({
    status: true,
});

export type TaskCreateType = z.infer<typeof taskCreateSchema>;

export const taskUpdateSchema = taskSchema.pick({
    title: true,
    description: true,
    status: true,
}).partial();

export type TaskUpdateType = z.infer<typeof taskUpdateSchema>;
