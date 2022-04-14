import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
    .connect(
        `mongodb+srv://${process.env.MONOG_PASS}@cluster0.zdvnn.mongodb.net/Angular-Image-Api?retryWrites=true&w=majority`
    )
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));