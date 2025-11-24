"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureGoogleStrategy = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const config_1 = require("@app/config");
const user_1 = require("@/modules/security/models/user");
const configureGoogleStrategy = () => {
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID: config_1.envConfig.GOOGLE_CLIENT_ID,
        clientSecret: config_1.envConfig.GOOGLE_CLIENT_SECRET,
        callbackURL: config_1.envConfig.GOOGLE_CALLBACK_URL,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await user_1.UserModel.findOne({
                "providers.name": "google",
                "providers.providerId": profile.id,
            });
            if (user) {
                return done(null, user);
            }
            const email = profile.emails?.[0]?.value;
            if (email) {
                user = await user_1.UserModel.findOne({ email });
                if (user) {
                    user.providers.push({
                        name: "google",
                        providerId: profile.id,
                    });
                    await user.save();
                    return done(null, user);
                }
            }
            const newUser = await user_1.UserModel.create({
                email: email,
                username: profile.displayName || email?.split("@")[0],
                firstName: profile.name?.givenName || "",
                lastName: profile.name?.familyName || "",
                providers: [
                    {
                        name: "google",
                        providerId: profile.id,
                    },
                ],
            });
            return done(null, newUser);
        }
        catch (error) {
            return done(error, undefined);
        }
    }));
};
exports.configureGoogleStrategy = configureGoogleStrategy;
//# sourceMappingURL=strategy.js.map