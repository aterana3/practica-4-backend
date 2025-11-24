import passport from "passport";
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from "passport-google-oauth20";
import { envConfig } from "@app/config";
import { UserModel } from "@/modules/security/models/user";

export const configureGoogleStrategy = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: envConfig.GOOGLE_CLIENT_ID,
                clientSecret: envConfig.GOOGLE_CLIENT_SECRET,
                callbackURL: envConfig.GOOGLE_CALLBACK_URL,
            },
            async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
                try {
                    let user = await UserModel.findOne({
                        "providers.name": "google",
                        "providers.providerId": profile.id,
                    });

                    if (user) {
                        return done(null, user);
                    }

                    const email = profile.emails?.[0]?.value;
                    if (email) {
                        user = await UserModel.findOne({ email });

                        if (user) {
                            user.providers.push({
                                name: "google",
                                providerId: profile.id,
                            });
                            await user.save();
                            return done(null, user);
                        }
                    }

                    const newUser = await UserModel.create({
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
                } catch (error) {
                    return done(error as Error, undefined);
                }
            }
        )
    );
};
