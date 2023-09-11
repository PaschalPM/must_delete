import { Router } from "express";
import { allProducts } from "./views.js";
const router = Router();
router.route("/products").get(allProducts);
export default router;
