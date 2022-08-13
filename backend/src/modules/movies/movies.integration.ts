import { MoviesController } from "./movies.controller";
import { MoviesRepositories } from "./movies.repository";
import { MoviesService } from "./movies.service";

export const repository = new MoviesRepositories();
const service = new MoviesService(repository);
export const controller = new MoviesController(service);
