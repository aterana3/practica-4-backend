"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("@/modules/security/api/auth/controller");
const router = (0, express_1.Router)();
router.post('/register', controller_1.registerUser);
router.post('/login', controller_1.loginUser);
exports.default = router;
//# sourceMappingURL=urls.js.map