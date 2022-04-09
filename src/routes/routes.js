import { Router } from "express";
import { jwtTokenVerify } from "../midelwears/jwtTokenVerify.js";
import { uploadImage } from "../tasks/Images/uploadImage.js";
import { checkUser } from "../tasks/User/checkUser.js";
import { getUserByToken } from "../tasks/User/getUserByToken.js";
import { createUser } from "../tasks/User/newUser.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hola Mundo");
});

router.get("/getUserByToken", jwtTokenVerify, getUserByToken);

router.put("/loginUser", checkUser);

router.post("/newUser", createUser);
router.post("/uploadImage", jwtTokenVerify, uploadImage);

export default router;