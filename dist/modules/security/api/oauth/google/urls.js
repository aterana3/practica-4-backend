"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const controller_1 = require("./controller");
const config_1 = require("@app/config");
const router = (0, express_1.Router)();
router.get("/", passport_1.default.authenticate("google", {
    scope: ["profile", "email"],
}));
router.get("/callback", passport_1.default.authenticate("google", {
    session: false,
    failureRedirect: `${config_1.envConfig.FRONTEND_URL}/signIn?error=auth_failed`,
}), controller_1.googleCallback);
router.get("/failure", (req, res) => {
    res.redirect(`${config_1.envConfig.FRONTEND_URL}/signIn?error=auth_failed`);
});
exports.default = router;
//# sourceMappingURL=urls.js.map