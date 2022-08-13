import { Request, Response } from "express";
import { MoviesService } from "./movies.service";

export class MoviesController {
  constructor(private service: MoviesService) {}
  async getAll(_req: Request, res: Response): Promise<Response> {
    console.log("cheguei");

    const moviesList = await this.service.getAll();
    return res.status(200).json(moviesList);
  }
}
