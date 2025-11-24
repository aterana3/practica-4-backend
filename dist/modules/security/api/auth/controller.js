"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_1 = require("@/modules/security/schema/user");
const user_2 = require("@/modules/security/models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("@app/config");
const registerUser = async (req, res) => {
    const parse = user_1.userCreateSchema.safeParse(req.body);
    if (!parse.success) {
        res.status(400).json(parse.error.format());
        return;
    }
    const data = parse.data;
    if (data.password !== data.passwordConfirm) {
        res.status(400).json({ error: "Las contraseñas no coinciden" });
        return;
    }
    const exists = await user_2.UserModel.findOne({ email: data.email });
    if (exists) {
        res.status(409).json({ error: "El email ya existe" });
        return;
    }
    data.password = await bcryptjs_1.default.hash(data.password, config_1.envConfig.PASSWORD_HASH_COST);
    const user = await user_2.UserModel.create(data);
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(201).json({
        message: "Usuario creado exitosamente",
        user: userWithoutPassword
    });
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const parse = user_1.userLoginSchema.safeParse(req.body);
    if (!parse.success) {
        res.status(400).json(parse.error.format());
        return;
    }
    const data = parse.data;
    const user = await user_2.UserModel.findOne({ email: data.email });
    if (!user) {
        res.status(401).json({ error: "Credenciales inválidas" });
        return;
    }
    if (!user.password) {
        res.status(401).json({ error: "Este usuario no tiene contraseña configurada" });
        return;
    }
    const isPasswordValid = await bcryptjs_1.default.compare(data.password, user.password);
    if (!isPasswordValid) {
        res.status(401).json({ error: "Credenciales inválidas" });
        return;
    }
    const token = jsonwebtoken_1.default.sign({
        id: user._id,
        email: user.email,
        username: user.username,
    }, config_1.envConfig.JWT_SECRET, {
        expiresIn: config_1.envConfig.JWT_EXPIRES_IN,
    });
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(200).json({
        message: "Login exitoso",
        token,
        user: userWithoutPassword
    });
};
exports.loginUser = loginUser;
//# sourceMappingURL=controller.js.map