import express, { Express } from "express";
import cors from "cors";
import { envConfig } from "@app/config";
import urls from "@app/urls";
import { initializePassport } from "@/modules/security/middleware/passport";
import morgan from "morgan";

const app: Express = express();

app.use(morgan("dev"));

app.use(cors({
    origin: envConfig.ALLOWED_ORIGINS.split(","),
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());

app.use(initializePassport());

app.use("/api/", urls);

export default app;
