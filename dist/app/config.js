"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
exports.envConfig = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "http://localhost:3000",
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/",
    PASSWORD_HASH_COST: parseInt(process.env.PASSWORD_HASH_COST || '10', 10),
    JWT_SECRET: (process.env.JWT_SECRET || "your-secret-key-change-in-production"),
    JWT_EXPIRES_IN: (process.env.JWT_EXPIRES_IN || "7d"),
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:3000/auth/google/callback",
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000"
};
//# sourceMappingURL=config.js.map