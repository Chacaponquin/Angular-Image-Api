import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const hola =
    "mongodb+srv://Chacaponquin:<password>@cluster0.zdvnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
    .connect(
        "mongodb+srv://Chacaponquin:<password>@cluster0.zdvnn.mongodb.net/Angular-Image-Api?retryWrites=true&w=majority", {
            /*dbName: "Angular-Image-Api",
             *w: "majority",
             *retryWrites: true,
             *user: "Chacaponquin",
             *pass: process.env.MONGO_PASS,*/
        }
    )
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));