import 'dotenv/config';
import app from "@app/app";
import { envConfig } from "@app/config";
import { connectDatabase } from "@app/database";

const PORT = envConfig.PORT;

const startServer = async () => {
    try {
        await connectDatabase();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();