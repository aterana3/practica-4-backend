"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePassport = void 0;
const passport_1 = __importDefault(require("passport"));
const oauth_1 = require("@/modules/security/api/oauth");
const initializePassport = () => {
    (0, oauth_1.configureOAuthStrategies)();
    return passport_1.default.initialize();
};
exports.initializePassport = initializePassport;
exports.default = passport_1.default;
//# sourceMappingURL=passport.js.map