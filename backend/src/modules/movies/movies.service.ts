import { Movie } from "./movies.entity";
import { MoviesRepositories } from "./movies.repository";

export class MoviesService {
  constructor(private repository: MoviesRepositories) {}
  async getAll(): Promise<Movie[]> {
    return this.repository.getAll();
  }
}
