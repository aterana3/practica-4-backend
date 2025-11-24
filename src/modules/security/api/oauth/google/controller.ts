import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { envConfig } from "@app/config";

export const googleCallback = (req: Request, res: Response) => {
    try {
        const user = req.user as any;

        if (!user) {
            return res.status(401).json({ error: "Autenticación fallida" });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                username: user.username,
            },
            envConfig.JWT_SECRET,
            {
                expiresIn: envConfig.JWT_EXPIRES_IN,
            } as any
        );

        const { password, ...userWithoutPassword } = user.toObject();

        const frontendUrl = `${envConfig.FRONTEND_URL}/google-callback`;
        const redirectUrl = `${frontendUrl}?token=${token}&user=${encodeURIComponent(
            JSON.stringify(userWithoutPassword)
        )}`;

        res.redirect(redirectUrl);
    } catch (error) {
        console.error("Error en Google callback:", error);
        res.redirect(`${envConfig.FRONTEND_URL}/signIn?error=auth_failed`);
    }
};
