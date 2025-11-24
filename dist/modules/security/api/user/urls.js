"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("@/modules/security/api/user/controller");
const router = (0, express_1.Router)();
router.post('/update', controller_1.updateUser);
exports.default = router;
//# sourceMappingURL=urls.js.map