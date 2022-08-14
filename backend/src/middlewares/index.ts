import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils";

export function GlobalError(
  err: ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ErrorHandler) {
    return res.status(err.status).json({ message: err.message });
  } else {
    return res.status(500).json({ message: "Something went wrong" });
  }
}
