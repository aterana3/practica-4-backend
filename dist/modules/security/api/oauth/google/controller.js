"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleCallback = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("@app/config");
const googleCallback = (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ error: "Autenticación fallida" });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
            email: user.email,
            username: user.username,
        }, config_1.envConfig.JWT_SECRET, {
            expiresIn: config_1.envConfig.JWT_EXPIRES_IN,
        });
        const { password, ...userWithoutPassword } = user.toObject();
        const frontendUrl = `${config_1.envConfig.FRONTEND_URL}/google-callback`;
        const redirectUrl = `${frontendUrl}?token=${token}&user=${encodeURIComponent(JSON.stringify(userWithoutPassword))}`;
        res.redirect(redirectUrl);
    }
    catch (error) {
        console.error("Error en Google callback:", error);
        res.redirect(`${config_1.envConfig.FRONTEND_URL}/signIn?error=auth_failed`);
    }
};
exports.googleCallback = googleCallback;
//# sourceMappingURL=controller.js.map