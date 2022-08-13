import { MovieResponseDTO } from "./movies.dto";
import { Movie } from "./movies.entity";

export function serialize(movies: MovieResponseDTO[]): Movie[] {
  return movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      banner: movie.banner,
      description: movie.description,
      director: movie.director.name,
      producers: movie.MoviesOnProducers.map((m) => m.producer.name),
    };
  });
}
