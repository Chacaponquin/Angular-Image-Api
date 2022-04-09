import jwt from "jsonwebtoken";

export const createSendUser = (user) => {
    const { images, username, _id } = user;

    const token = jwt.sign({ _id, username }, process.env.SECRET_WORD);

    return { images, username, token };
};