import jwt from "jsonwebtoken";

export const jwtTokenVerify = (req, res, next) => {
    const { authentication } = req.headers;

    if (authentication) {
        const userToken = authentication.substring(7);

        try {
            const user = jwt.verify(userToken, process.env.SECRET_WORD);

            if (user) {
                req.user = user;
                next();
            } else {
                res.status(400).json({ error: "Token Invalido" }).end();
            }
        } catch (error) {
            res.status(500).json({ error: "Token Invalido" }).end();
        }
    } else {
        res.status(401).json({ error: "Debe tener un token para acceder" }).end();
    }
};