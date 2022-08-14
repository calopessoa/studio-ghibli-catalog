import {
  controller,
  controller1,
  controller2,
  controller3,
} from "./movies.integration";
import express, { Request, Response } from "express";

export const moviesRoutes = express.Router();

moviesRoutes.get("/", (req: Request, res: Response) =>
  controller.getAll(req, res)
);

moviesRoutes.get("/first", (req: Request, res: Response) =>
  controller1.getFirstTen(req, res)
);

moviesRoutes.get("/second", (req: Request, res: Response) =>
  controller2.getSecondTen(req, res)
);

moviesRoutes.get("/third", (req: Request, res: Response) =>
  controller3.getFinalThree(req, res)
);
// End-point que consulta 50 filmes, extrai as informações de título, banner, descrição, diretor e produtor e salva no banco de dados da aplicação.

// End-point de consulta com paginação de 10 em 10 a todos os filmes que estão no nosso banco de dados.
