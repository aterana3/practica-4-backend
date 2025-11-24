"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskUpdateSchema = exports.taskCreateSchema = exports.taskSchema = void 0;
const zod_1 = require("zod");
exports.taskSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "El título es requerido").max(100, "El título no puede exceder 100 caracteres"),
    description: zod_1.z.string().min(1, "La descripción es requerida").max(500, "La descripción no puede exceder 500 caracteres"),
    status: zod_1.z.enum(["pending", "in-progress", "completed"]).default("pending"),
    userId: zod_1.z.string().min(1, "El ID de usuario es requerido"),
});
exports.taskCreateSchema = exports.taskSchema.pick({
    title: true,
    description: true,
    status: true,
}).partial({
    status: true,
});
exports.taskUpdateSchema = exports.taskSchema.pick({
    title: true,
    description: true,
    status: true,
}).partial();
//# sourceMappingURL=task.js.map