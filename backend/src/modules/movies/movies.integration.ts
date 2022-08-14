import {
  FirstMoviesController,
  MoviesController,
  SecondMoviesController,
  ThirdMoviesController,
} from "./movies.controller";
import {
  MoviesFirstPage,
  MoviesRepositories,
  MoviesSecondPage,
  MoviesThirdPage,
} from "./movies.repository";
import {
  FirstMoviesService,
  MoviesService,
  SecondMoviesService,
  ThirdMoviesService,
} from "./movies.service";

export const repository = new MoviesRepositories();
const service = new MoviesService(repository);
export const controller = new MoviesController(service);

export const repository1 = new MoviesFirstPage();
const service1 = new FirstMoviesService(repository1);
export const controller1 = new FirstMoviesController(service1);

export const repository2 = new MoviesSecondPage();
const service2 = new SecondMoviesService(repository2);
export const controller2 = new SecondMoviesController(service2);

export const repository3 = new MoviesThirdPage();
const service3 = new ThirdMoviesService(repository3);
export const controller3 = new ThirdMoviesController(service3);
