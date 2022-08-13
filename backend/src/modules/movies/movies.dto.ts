export interface MovieResponseDTO {
  id: string;
  title: string;
  banner: string;
  description: string;
  director: { name: string };
  MoviesOnProducers: { producer: { name: string } }[];
}
