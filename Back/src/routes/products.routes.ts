import { Router } from "express";
import { allProducts, apiBase, deleteProduct, editProduct, filterProducts, idProduct, pageProducts, uploadProduct, } from "../controllers/productsCtrl";

const routerProduct = Router()

routerProduct.get("/", apiBase);
routerProduct.get("/product/all", allProducts);
routerProduct.get("/product/", pageProducts);
routerProduct.get("/product/filter", filterProducts);
routerProduct.get("/product/:id", idProduct);
routerProduct.post("/product/upload", uploadProduct);
routerProduct.patch("/product/edit/:id", editProduct);
routerProduct.delete("/product/delete/:id", deleteProduct);

export default routerProduct