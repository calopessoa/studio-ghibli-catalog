import { controller } from "./movies.integration";
import express, { Request, Response } from "express";

export const moviesRoutes = express.Router();

moviesRoutes.get("/", (req: Request, res: Response) =>
  controller.getAll(req, res)
);
