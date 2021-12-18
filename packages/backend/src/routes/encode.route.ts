import express, { Router } from "express";
import validateRequestMiddleware from "../middleware/validateRequest.middleware";
import encodeSchema from "../schemas/encode.schema";
import { encodeJWT } from "../services/encode.service";

const router = Router();

router.post(
  "/",
  encodeSchema,
  validateRequestMiddleware,
  async (req: express.Request, res: express.Response) => {
    const { name } = req.body;

    return res.json({ token: encodeJWT(name) });
  }
);

export default router;
