import { Request } from "express";
import { validateTokenService } from "../services/auth/validate-token-service";

export const getUserFromToken = (req: Request) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return { valid: false, error: "Token not provided" };
  }

  const token = authHeader.split(" ")[1];
  const validation = validateTokenService(token);

  if (!validation.valid) {
    return { valid: false, error: "Invalid or expired token" };
  }

  const user = validation.decoded as { id: number; email: string };
  return { valid: true, user };
};
