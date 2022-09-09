import express, { Request, Response, Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { IAdmin, IMerchant, IUser } from "../interfaces";
import { AppConfig } from "../config";
import { MerchantService } from "../services/merchant.service";
import { AdminService } from "../services/admin.service";

const authRouter: Router = express.Router();
authRouter.use(express.json());

authRouter.get("/test", (req, res, next) => {
  res.json({ hello: "world" });
});

authRouter.post(
  "/merchantsignup",
  passport.authenticate("merchantsignup", { session: false }),
  async (req: Request, res: Response, next) => {
    let user: IMerchant = (req as any).user;
    const body = { _id: user._id, email: user.email, type: "merchant" };
    const token = jwt.sign({ user: body }, AppConfig.jwtSalt);
    return res.json({ user, token });
  }
);

authRouter.post("/merchantlogin", async (req, res, next) => {
  passport.authenticate("merchantlogin", async (err, user, info) => {
    try {
      if (err || !user) {
        return next(info?.message ? info.message : "An error occurred.");
      }
      (req as any).login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const body = { _id: user._id, email: user.email, type: "merchant" };
        const token = jwt.sign({ user: body }, AppConfig.jwtSalt);
        return res.json({ user, token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

authRouter.post(
  "/adminsignup",
  passport.authenticate("adminsignup", { session: false }),
  async (req: Request, res: Response, next) => {
    let admin: IAdmin = (req as any).user;
    const body = { _id: admin._id, email: admin.email, type: "admin" };
    const token = jwt.sign({ user: body }, AppConfig.jwtSalt);
    return res.json({ admin, token });
  }
);

authRouter.post("/adminlogin", async (req, res, next) => {
  passport.authenticate("adminlogin", async (err, admin, info) => {
    try {
      if (err || !admin) {
        return next(info?.message ? info.message : "An error occurred.");
      }
      (req as any).login(admin, { session: false }, async (error) => {
        if (error) return next(error);
        const body = { _id: admin._id, email: admin.email, type: "admin" };
        const token = jwt.sign({ user: body }, AppConfig.jwtSalt);
        return res.json({ admin, token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

authRouter.post(
  "/verifyMJwt",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (req.user && (req.user as any)._id) {
      const merchant: IMerchant = await MerchantService.get((req.user as any)._id);
      if (merchant) {
        res.status(200).json({ merchant });
      } else res.status(500).json({ error: `Failed to fetch merchant` });
    } else res.status(500).json({ error: `Failed to fetch merchant` });
  }
);

authRouter.post(
  "/verifyAJwt",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (req.user && (req.user as any)._id) {
      const admin: IAdmin = await AdminService.get((req.user as any)._id);
      if (admin) {
        res.status(200).json({ admin });
      } else res.status(500).json({ error: `Failed to fetch admin` });
    } else res.status(500).json({ error: `Failed to fetch admin` });
  }
);

authRouter.post(
  "/usersignup",
  passport.authenticate("usersignup", { session: false }),
  async (req: Request, res: Response, next) => {
    let user: IUser = (req as any).user;
    const body = { _id: user._id, email: user.email, type: "user" };
    const token = jwt.sign({ user: body }, AppConfig.jwtSalt);
    return res.json({ user, token });
  }
);

export { authRouter };
