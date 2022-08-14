import "express-async-errors";
import express from "express";
import { routes } from "./routes";
import { GlobalError } from "./middlewares";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(GlobalError);
