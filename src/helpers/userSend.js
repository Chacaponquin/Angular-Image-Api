import jwt from "jsonwebtoken";

export const createSendUser = (user) => {
    const { image, username, _id } = user;

    const token = jwt.sign({ _id, username }, process.env.SECRET_WORD);

    return { image, username, token };
};