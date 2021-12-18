import { body } from "express-validator";

const encodeSchema = [body("name").exists({ checkFalsy: true })];
export default encodeSchema;
