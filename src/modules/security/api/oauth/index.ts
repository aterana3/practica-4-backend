import { configureGoogleStrategy } from "./google/strategy";

export const configureOAuthStrategies = () => {
    configureGoogleStrategy();
};
