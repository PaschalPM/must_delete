import { Router } from "express";
import { allUsers } from "./views.js";

const router = Router();

router.route("/users").get(allUsers);
export default router
