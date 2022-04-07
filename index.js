import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./src/routes/routes.js";

import "./src/db/mongo.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server on port ${port}`));