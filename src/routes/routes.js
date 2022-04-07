import { Router } from "express";
import { checkUser } from "../tasks/User/checkUser.js";
import { createUser } from "../tasks/User/newUser.js";

const router = Router();

router.get("/", (req, res) => res.send("Hola Mundo"));

router.put("/checkUser", checkUser);

router.post("/newUser", createUser);

export default router;