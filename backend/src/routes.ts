import { moviesRoutes } from "./modules/movies/movies.routes";
import express from "express";

export const routes = express.Router();
routes.use("/movies", moviesRoutes);
routes.use("/movies/first", moviesRoutes);
routes.use("/movies/second", moviesRoutes);
routes.use("/movies/third", moviesRoutes);
