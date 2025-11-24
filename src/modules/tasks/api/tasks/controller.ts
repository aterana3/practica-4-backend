import { Response, Request } from "express";
import { taskCreateSchema, taskUpdateSchema } from "@/modules/tasks/schema/task";
import { TaskModel } from "@/modules/tasks/models/task";

export const createTask = async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ error: "Usuario no autenticado" });
    }

    const parse = taskCreateSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json(parse.error.format());
    }

    const data = parse.data;

    try {
        const task = await TaskModel.create({
            title: data.title,
            description: data.description,
            status: data.status || "pending",
            userId: req.user._id
        });

        res.status(201).json({
            message: "Tarea creada exitosamente",
            task
        });
    } catch (error) {
        res.status(500).json({ error: "Error al crear la tarea" });
    }
};

export const getTasks = async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ error: "Usuario no autenticado" });
    }

    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const tasks = await TaskModel.find({ userId: req.user._id })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await TaskModel.countDocuments({ userId: req.user._id });

        res.status(200).json({
            tasks,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
};

export const getTaskById = async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ error: "Usuario no autenticado" });
    }

    const { id } = req.params;

    try {
        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }

        if (task.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "No tienes permiso para acceder a esta tarea" });
        }

        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la tarea" });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ error: "Usuario no autenticado" });
    }

    const { id } = req.params;

    const parse = taskUpdateSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json(parse.error.format());
    }

    const data = parse.data;

    try {
        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }

        if (task.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "No tienes permiso para modificar esta tarea" });
        }

        if (data.title !== undefined) task.title = data.title;
        if (data.description !== undefined) task.description = data.description;
        if (data.status !== undefined) task.status = data.status;

        await task.save();

        res.status(200).json({
            message: "Tarea actualizada exitosamente",
            task
        });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ error: "Usuario no autenticado" });
    }

    const { id } = req.params;

    try {
        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }

        if (task.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "No tienes permiso para eliminar esta tarea" });
        }

        await TaskModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "Tarea eliminada exitosamente"
        });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};
