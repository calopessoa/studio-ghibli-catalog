import { MoviesController } from "./movies.controller";
import { MoviesRepositories } from "./movies.repository";
import { MoviesService } from "./movies.service";

const respository = new MoviesRepositories();
const service = new MoviesService(respository);
export const controller = new MoviesController(service);
