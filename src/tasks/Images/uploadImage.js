import Image from "../../db/models/Image.js";
import User from "../../db/models/User.js";
import { uploadImageCloudinary } from "../../helpers/uploadImageCoudinary.js";
import { createSendUser } from "../../helpers/userSend.js";
import fs from "fs-extra";

export const uploadImage = (req, res) => {
    const { user } = req;
    const { image } = req.files;

    User.findById(user._id)
        .populate("images")
        .then(async(user) => {
            if (user) {
                try {
                    const result = await uploadImageCloudinary(image.tempFilePath);

                    await fs.remove(image.tempFilePath);

                    const newImage = new Image({
                        url: result.url,
                    });

                    await newImage.save();

                    user.images.push(newImage._id);

                    await user.save();

                    const userUpdated = await User.findById(user._id).populate("images");

                    res.json(createSendUser(userUpdated)).status(204).end();
                } catch (error) {
                    res
                        .status(500)
                        .json({ error: "Hubo un error en la subida de la imagen" })
                        .end();
                }
            } else {
                res.status(400).json({ error: "Usuario no encontrado" }).end();
            }
        })
        .catch(() => {
            res.status(400).json({ error: "Usuario no encontrado" }).end();
        });
};