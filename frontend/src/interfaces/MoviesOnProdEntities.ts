export interface MoviesOnProducers {
  movieId: string;
  producerId: string;
}

export interface Movies {
  id: string;
  title: string;
  banner: string;
  description: string;
  director: string;
}

export interface Director {
  id: string;
  name: string;
}

export interface Producer {
  id: string;
  name: string;
}
