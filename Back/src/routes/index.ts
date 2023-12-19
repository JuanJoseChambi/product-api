import { Router } from "express";
import routerProduct from "./products/products";

const router = Router()

router.use("/api/product", routerProduct)

export default router;