"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("@app/config");
const connectDatabase = async () => {
    try {
        await mongoose_1.default.connect(config_1.envConfig.MONGO_URL);
        console.log('✅ MongoDB connected successfully');
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
mongoose_1.default.connection.on('disconnected', () => {
    console.log('⚠️  MongoDB disconnected');
});
mongoose_1.default.connection.on('error', (error) => {
    console.error('❌ MongoDB error:', error);
});
process.on('SIGINT', async () => {
    await mongoose_1.default.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
});
//# sourceMappingURL=database.js.map