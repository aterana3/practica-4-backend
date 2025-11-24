import { Router } from "express";
import passport from "passport";
import { googleCallback } from "./controller";
import { envConfig } from "@app/config";

const router: Router = Router();

router.get(
    "/",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: `${envConfig.FRONTEND_URL}/signIn?error=auth_failed`,
    }),
    googleCallback
);

router.get("/failure", (req, res) => {
    res.redirect(`${envConfig.FRONTEND_URL}/signIn?error=auth_failed`);
});

export default router;
