"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureOAuthStrategies = void 0;
const strategy_1 = require("./google/strategy");
const configureOAuthStrategies = () => {
    (0, strategy_1.configureGoogleStrategy)();
};
exports.configureOAuthStrategies = configureOAuthStrategies;
//# sourceMappingURL=index.js.map