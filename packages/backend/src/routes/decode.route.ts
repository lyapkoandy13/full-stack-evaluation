import express, { Router } from "express";
import validateRequestMiddleware from "../middleware/validateRequest.middleware";
import decodeSchema from "../schemas/decode.schema";
import { decodeJWT } from "../services/decode.service";

const router = Router();

router.post(
  "/",
  decodeSchema,
  validateRequestMiddleware,
  async (req: express.Request, res: express.Response) => {
    const { token } = req.body;

    return res.json(decodeJWT(token));
  }
);

export default router;
