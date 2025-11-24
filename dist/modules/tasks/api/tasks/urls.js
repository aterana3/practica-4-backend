"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("@/modules/tasks/api/tasks/controller");
const router = (0, express_1.Router)();
router.post('/', controller_1.createTask);
router.get('/', controller_1.getTasks);
router.get('/:id', controller_1.getTaskById);
router.put('/:id', controller_1.updateTask);
router.delete('/:id', controller_1.deleteTask);
exports.default = router;
//# sourceMappingURL=urls.js.map