import jwt from "jsonwebtoken";
import User from "../../db/models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const createUser = async(req, res) => {
    const { username, password, email } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        password: hashPassword,
        email,
    });

    newUser
        .save()
        .then(() => {
            const { images, username, _id } = newUser;

            const token = jwt.sign({ _id, username }, process.env.SECRET_WORD);

            res
                .json({
                    images,
                    username,
                    token,
                })
                .status(204)
                .end();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Hubo un error" }).end();
        });
};