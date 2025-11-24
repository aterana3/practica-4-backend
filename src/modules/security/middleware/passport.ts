import passport from "passport";
import { configureOAuthStrategies } from "@/modules/security/api/oauth";

export const initializePassport = () => {
    configureOAuthStrategies();
    return passport.initialize();
};

export default passport;
