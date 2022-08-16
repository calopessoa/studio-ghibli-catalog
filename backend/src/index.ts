import { app } from "./app";
import * as dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT, () => console.log("listening on port 3001"));
