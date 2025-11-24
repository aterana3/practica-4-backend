"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const urls_1 = __importDefault(require("@modules/security/urls"));
const urls_2 = __importDefault(require("@modules/tasks/urls"));
const authMiddleware_1 = require("@app/middleware/authMiddleware");
const router = (0, express_1.Router)();
router.use('/security', urls_1.default);
router.use('/task', authMiddleware_1.auth, urls_2.default);
exports.default = router;
//# sourceMappingURL=urls.js.map