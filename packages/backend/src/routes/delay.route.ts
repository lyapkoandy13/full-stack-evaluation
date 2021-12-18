import express, { Router } from "express";
import validateRequestMiddleware from "../middleware/validateRequest.middleware";
import delaySchema from "../schemas/delay.schema";
import { delaySeconds } from "../services/delay.service";

const router = Router();

router.post(
  "/",
  delaySchema,
  validateRequestMiddleware,
  async (req: express.Request, res: express.Response) => {
    const { delay } = req.body;

    await delaySeconds(delay);

    return res.send("times up!");
  }
);

export default router;
