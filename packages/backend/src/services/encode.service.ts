import jwt from "jsonwebtoken";

export const encodeJWT = (name: string) => {
  return jwt.sign({ name }, process.env.JWT_SECRET || "some_secret", {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};
