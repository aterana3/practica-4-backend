"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("@app/config");
function auth(req, res, next) {
    const header = req.headers.authorization;
    const token = header ? header.split(' ')[1] : undefined;
    if (!token) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, config_1.envConfig.JWT_SECRET);
        req.user = {
            _id: payload.id,
            email: payload.email,
            username: payload.username
        };
        next();
    }
    catch (error) {
        res.status(401).json({ error: 'Token inválido o expirado' });
    }
}
//# sourceMappingURL=authMiddleware.js.map