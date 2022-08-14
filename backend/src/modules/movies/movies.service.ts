import { Movie } from "./movies.entity";
import {
  MoviesFirstPage,
  MoviesRepositories,
  MoviesSecondPage,
  MoviesThirdPage,
} from "./movies.repository";

export class MoviesService {
  constructor(private repository: MoviesRepositories) {}
  async getAll(): Promise<Movie[]> {
    return this.repository.getAll();
  }
}

export class FirstMoviesService {
  constructor(private repository: MoviesFirstPage) {}
  async getFirstTen(): Promise<Movie[]> {
    return this.repository.getFirstTen();
  }
}

export class SecondMoviesService {
  constructor(private repository: MoviesSecondPage) {}
  async getSecondTen(): Promise<Movie[]> {
    return this.repository.getSecondTen();
  }
}

export class ThirdMoviesService {
  constructor(private repository: MoviesThirdPage) {}
  async getFinalThree(): Promise<Movie[]> {
    return this.repository.getFinalThree();
  }
}
