import { Router } from "express";
import { allProducts, deleteProduct, editProduct, filterProducts, pageProducts, uploadProduct, } from "../controllers/productsCtrl";

const routerProduct = Router()

routerProduct.get("/all", allProducts);
routerProduct.get("/", pageProducts);
routerProduct.get("/filter", filterProducts);
routerProduct.post("/upload", uploadProduct);
routerProduct.patch("/edit/:id", editProduct);
routerProduct.delete("/delete/:id", deleteProduct);

export default routerProduct