"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const user_1 = require("@/modules/security/schema/user");
const user_2 = require("@/modules/security/models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const updateUser = async (req, res) => {
    const parse = user_1.userUpdateSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json(parse.error.format());
    }
    const data = parse.data;
    const user = await user_2.UserModel.findOne({ email: data.email });
    if (!user) {
        return res.status(404).json({ error: "El usuario no existe" });
    }
    if (!user.password) {
        return res.status(400).json({ error: "Este usuario no tiene contraseña configurada" });
    }
    const isPasswordValid = await bcryptjs_1.default.compare(data.verifyPassword, user.password ?? "");
    if (!isPasswordValid) {
        return res.status(400).json({ error: "La contraseña actual es incorrecta" });
    }
    user.username = data.username || user.username;
    user.firstName = data.firstName || user.firstName;
    user.lastName = data.lastName || user.lastName;
    await user.save();
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(200).json({
        message: "Usuario actualizado exitosamente",
        user: userWithoutPassword,
    });
};
exports.updateUser = updateUser;
//# sourceMappingURL=controller.js.map