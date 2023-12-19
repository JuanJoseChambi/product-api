import { Router } from "express";
import { allProducts, deleteProduct, editProduct, uploadProduct, } from "../../controllers/productsCtrl";

const routerProduct = Router()

routerProduct.get("/all", allProducts)
routerProduct.post("/upload", uploadProduct)
routerProduct.delete("/:id", deleteProduct)
routerProduct.patch("/:id", editProduct)

export default routerProduct