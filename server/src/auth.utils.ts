import * as bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTstrategy, ExtractJwt as ExtractJWT } from "passport-jwt";
import { collections } from "./db.service";
import { AppConfig } from "./config";
import { EMerchantStatus, IAdmin, IMerchant, IUser } from "./interfaces";
import { MerchantService } from "./services/merchant.service";
import { AdminService } from "./services/admin.service";
import { userService } from "./services/user.service";

const HASHPREFIX: string = `$2b$10$`;

class CAuthUtils {
  async generateHashPassword(plainTextPassword: string): Promise<string> {
    const saltRounds = 10;
    let salt: string = await bcrypt.genSalt(saltRounds);
    let hash: string = await bcrypt.hash(plainTextPassword, salt);
    hash = hash.slice(HASHPREFIX.length, hash.length);
    return hash;
  }

  async compareHash(plainTextPassword: string, storedSecret: string): Promise<boolean> {
    return await bcrypt.compare(plainTextPassword, `${HASHPREFIX}${storedSecret}`);
  }

  passportMiddlewares() {
    passport.use(
      "merchantsignup",
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
          try {
            let base64Password = password;
            let plainTextPassword: string = Buffer.from(base64Password, "base64").toString();
            let hashPassword = await this.generateHashPassword(plainTextPassword);
            let newMerchant: IMerchant = {
              _id: null,
              email: email,
              secret: hashPassword,
              status: EMerchantStatus.InActive,
              isEmailVerified: false,
              createdAt: Date.now(),
            };
            newMerchant = await MerchantService.create(newMerchant);
            return done(null, newMerchant);
          } catch (error) {
            done(error);
          }
        }
      )
    );
    passport.use(
      "merchantlogin",
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
          try {
            let base64Password = password;
            let plainTextPassword: string = Buffer.from(base64Password, "base64").toString(
              "utf-8"
            );
            const user: IMerchant = (await collections.merchants.findOne({
              email,
            })) as IMerchant;
            if (!user) {
              return done(null, null, { message: "Invalid Email" });
            }
            if (!this.compareHash(plainTextPassword, user.secret)) {
              return done(null, null, { message: "Invalid Password" });
            }
            return done(null, user, { message: "Logged in Successfully" });
          } catch (error) {
            return done(error);
          }
        }
      )
    );

    passport.use(
      "usersignup",
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
          try {
            let base64Password = password;
            let plainTextPassword: string = Buffer.from(base64Password, "base64").toString();
            let hashPassword = await this.generateHashPassword(plainTextPassword);
            let newMerchant: IUser = {
              _id: null,
              email: email,
              secret: hashPassword,
              isEmailVerified: false,
              createdAt: Date.now(),
            };
            newMerchant = await userService.create(newMerchant);
            return done(null, newMerchant);
          } catch (error) {
            done(error);
          }
        }
      )
    );
    passport.use(
      "userlogin",
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
          try {
            let base64Password = password;
            let plainTextPassword: string = Buffer.from(base64Password, "base64").toString(
              "utf-8"
            );
            const user: IUser = (await collections.users.findOne({
              email,
            })) as IUser;
            if (!user) {
              return done(null, null, { message: "Invalid Email" });
            }
            if (!this.compareHash(plainTextPassword, user.secret)) {
              return done(null, null, { message: "Invalid Password" });
            }
            return done(null, user, { message: "Logged in Successfully" });
          } catch (error) {
            return done(error);
          }
        }
      )
    );

    passport.use(
      "adminsignup",
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
          try {
            let base64Password = password;
            let plainTextPassword: string = Buffer.from(base64Password, "base64").toString();
            let hashPassword = await this.generateHashPassword(plainTextPassword);
            let admin: IAdmin = {
              _id: null,
              email: email,
              name: "Admin",
              secret: hashPassword,
              createdAt: Date.now(),
            };
            admin = await AdminService.create(admin);
            return done(null, admin);
          } catch (error) {
            done(error);
          }
        }
      )
    );
    passport.use(
      "adminlogin",
      new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
          try {
            let base64Password = password;
            let plainTextPassword: string = Buffer.from(base64Password, "base64").toString(
              "utf-8"
            );
            const admin: IAdmin = (await collections.admins.findOne({ email })) as IMerchant;
            if (!admin) {
              return done(null, null, { message: "Invalid Email" });
            }
            if (!this.compareHash(plainTextPassword, admin.secret)) {
              return done(null, null, { message: "Invalid Password" });
            }
            return done(null, admin, { message: "Logged in Successfully" });
          } catch (error) {
            return done(error);
          }
        }
      )
    );
    passport.use(
      new JWTstrategy(
        {
          secretOrKey: AppConfig.jwtSalt,
          jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        },
        async (token, done) => {
          try {
            return done(null, token.user);
          } catch (error) {
            done(error);
          }
        }
      )
    );
  }
}

export let AuthUtils: CAuthUtils = new CAuthUtils();
