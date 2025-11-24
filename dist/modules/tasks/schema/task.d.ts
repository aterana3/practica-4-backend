import { z } from "zod";
export declare const taskSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        pending: "pending";
        "in-progress": "in-progress";
        completed: "completed";
    }>>;
    userId: z.ZodString;
}, z.core.$strip>;
export declare const taskCreateSchema: z.ZodObject<{
    description: z.ZodString;
    title: z.ZodString;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        pending: "pending";
        "in-progress": "in-progress";
        completed: "completed";
    }>>>;
}, z.core.$strip>;
export type TaskCreateType = z.infer<typeof taskCreateSchema>;
export declare const taskUpdateSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        pending: "pending";
        "in-progress": "in-progress";
        completed: "completed";
    }>>>;
}, z.core.$strip>;
export type TaskUpdateType = z.infer<typeof taskUpdateSchema>;
//# sourceMappingURL=task.d.ts.map