import { PrismaClient } from "@prisma/client";
import {
  ghibliDirectors,
  ghibliMovies,
  ghibliMoviesOnProducers,
  ghibliProducers,
} from "./data";

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    ghibliDirectors.map(async (director) => {
      await prisma.director.create({
        data: {
          id: director.id,
          name: director.director,
        },
      });
    })
  );
  await Promise.all(
    ghibliProducers.map(async (producer) => {
      await prisma.producer.create({
        data: {
          id: producer.id,
          name: producer.producer,
        },
      });
    })
  );
  await Promise.all(
    ghibliMovies.map(async (film) => {
      await prisma.movie.create({
        data: {
          id: film.id,
          title: film.title,
          banner: film.movie_banner,
          description: film.description,
          directorId: film.directorId,
        },
      });
    })
  );
  await Promise.all(
    ghibliMoviesOnProducers.map(async (element) => {
      await prisma.moviesOnProducers.create({
        data: {
          movieId: element.movieId,
          producerId: element.producerId,
        },
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
