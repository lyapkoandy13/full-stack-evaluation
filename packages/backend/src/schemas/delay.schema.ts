import { body } from "express-validator";

const delaySchema = [body("delay", "Should have numeric value").isNumeric()];
export default delaySchema;
