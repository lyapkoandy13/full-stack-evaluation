import { check } from "express-validator";
import { decodeJWT } from "../services/decode.service";

const decodeSchema = [
  check("token")
    .exists({ checkFalsy: true })
    .custom((value) => decodeJWT(value))
    .withMessage("Should be JWT token"),
];
export default decodeSchema;
