import jwt from "jsonwebtoken";

export const decodeJWT = (token: string) => {
  return jwt.decode(token);
};
