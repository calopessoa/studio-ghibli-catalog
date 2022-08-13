import express from "express";
import * as dotenv from "dotenv";
import { routes } from "./routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log("listening on port 3000"));
