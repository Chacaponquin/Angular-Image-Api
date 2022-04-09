import User from "../../db/models/User.js";
import { createSendUser } from "../../helpers/userSend.js";

export const getUserByToken = async(req, res) => {
    const { user } = req;

    try {
        const userFound = await User.findOne({ _id: user._id }).populate("images");

        if (userFound) {
            res.json(createSendUser(userFound)).status(204).end();
        } else {
            res.status(400).json({ error: "Usuario no encontrado" }).end();
        }
    } catch (error) {
        res.status(500).json({ error: "Hubo un error" }).end();
    }
};