import { Request, Response } from "express";
import { ErrorHandler } from "../../utils";
import {
  FirstMoviesService,
  MoviesService,
  SecondMoviesService,
  ThirdMoviesService,
} from "./movies.service";

export class MoviesController {
  constructor(private service: MoviesService) {}
  async getAll(_req: Request, res: Response): Promise<Response> {
    const moviesList = await this.service.getAll();
    return res.status(200).json(moviesList);
  }
}

export class FirstMoviesController {
  constructor(private service: FirstMoviesService) {}
  async getFirstTen(_req: Request, res: Response): Promise<Response> {
    const moviesList = await this.service.getFirstTen();
    return res.status(200).json(moviesList);
  }
}

export class SecondMoviesController {
  constructor(private service: SecondMoviesService) {}
  async getSecondTen(_req: Request, res: Response): Promise<Response> {
    const moviesList = await this.service.getSecondTen();
    return res.status(200).json(moviesList);
  }
}

export class ThirdMoviesController {
  constructor(private service: ThirdMoviesService) {}
  async getFinalThree(_req: Request, res: Response): Promise<Response> {
    const moviesList = await this.service.getFinalThree();
    return res.status(200).json(moviesList);
  }
}
