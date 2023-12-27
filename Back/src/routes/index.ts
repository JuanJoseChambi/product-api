import { Router } from "express";
import routerProduct from "./products.routes";

const router = Router()

router.use("/v1", routerProduct)

export default router;