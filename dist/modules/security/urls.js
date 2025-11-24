"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const urls_1 = __importDefault(require("@modules/security/api/auth/urls"));
const urls_2 = __importDefault(require("@modules/security/api/user/urls"));
const urls_3 = __importDefault(require("@modules/security/api/oauth/google/urls"));
const router = (0, express_1.Router)();
router.use('/auth', urls_1.default);
router.use('/user', urls_2.default);
router.use('/auth/google', urls_3.default);
exports.default = router;
//# sourceMappingURL=urls.js.map