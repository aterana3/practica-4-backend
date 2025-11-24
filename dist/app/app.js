"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("@app/config");
const urls_1 = __importDefault(require("@app/urls"));
const passport_1 = require("@/modules/security/middleware/passport");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: config_1.envConfig.ALLOWED_ORIGINS.split(","),
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, passport_1.initializePassport)());
app.use("/api/", urls_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map