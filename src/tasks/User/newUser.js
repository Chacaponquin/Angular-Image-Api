import jwt from "jsonwebtoken";
import User from "../../db/models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { createSendUser } from "../../helpers/userSend.js";

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
            res.json(createSendUser(newUser)).status(204).end();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err }).end();
        });
};