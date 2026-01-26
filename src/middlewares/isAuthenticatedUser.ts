import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function IsAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: "Usuario nao autorizado" });
  }

  const [, token] = authToken.split(" ");

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: "JWT secret not configured" });
  }

  try {
    const decoded = jwt.verify(token, secret) as Payload;

    req.userId = decoded.sub;

    return next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
