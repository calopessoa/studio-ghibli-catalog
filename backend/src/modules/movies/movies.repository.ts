import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma";
import { Movie } from "./movies.entity";
import { serialize } from "./movies.helper";

export class MoviesRepositories {
  constructor(private db: PrismaClient = prisma) {}
  async getAll(): Promise<Movie[]> {
    const moviesList: any = await this.db.movie.findMany({
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
    return serialize(moviesList);
  }
}

export class MoviesFirstPage {
  constructor(private db: PrismaClient = prisma) {}
  async getFirstTen(): Promise<Movie[]> {
    const moviesList: any = await this.db.movie.findMany({
      skip: 0,
      take: 10,
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
    return serialize(moviesList);
  }
}

export class MoviesSecondPage {
  constructor(private db: PrismaClient = prisma) {}
  async getSecondTen(): Promise<Movie[]> {
    const moviesList: any = await this.db.movie.findMany({
      skip: 10,
      take: 10,
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
    return serialize(moviesList);
  }
}

export class MoviesThirdPage {
  constructor(private db: PrismaClient = prisma) {}
  async getFinalThree(): Promise<Movie[]> {
    const moviesList: any = await this.db.movie.findMany({
      skip: 20,
      take: 2,
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
    return serialize(moviesList);
  }
}
