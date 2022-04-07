import User from "../../db/models/User.js";
import { createSendUser } from "../../helpers/userSend.js";
import bcrypt from "bcrypt";

export const checkUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email: email });

        if (userFound) {
            if (await bcrypt.compare(password, userFound.password)) {
                res.json(createSendUser(userFound)).status(200).end();
            } else {
                res.status(400).json({ error: "Usuario no encontrado" }).end();
            }
        } else {
            res.status(400).json({ error: "Usuario no encontrado" }).end();
        }
    } catch (err) {
        res.status(500).json({ error: "Hubo un error" }).end();
    }
};