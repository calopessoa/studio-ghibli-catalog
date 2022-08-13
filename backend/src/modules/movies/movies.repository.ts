import { PrismaClient } from "@prisma/client";
import { moveEmitHelpers } from "typescript";
import { prisma } from "../../prisma";
import { Movie } from "./movies.entity";
import { serialize } from "./movies.helper";

export class MoviesRepositories {
  constructor(private db: PrismaClient = prisma) {}
  async getAll(): Promise<Movie[]> {
    const moviesList = await this.db.movie.findMany({
      select: {
        directorId: false,
        id: true,
        title: true,
        banner: true,
        description: true,
        director: {
          select: {
            name: true,
          },
        },
        MoviesOnProducers: {
          select: {
            producer: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    console.log(moviesList[0]);

    return serialize(moviesList);
  }
}
