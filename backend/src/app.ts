import "express-async-errors";
import express from "express";
import { routes } from "./routes";
import { GlobalError } from "./middlewares";

export const app = express();

app.use(express.json());
app.use(routes);

app.use(GlobalError);
