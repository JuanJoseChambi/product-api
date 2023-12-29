import { EditProduct } from "../interfaces/interfaces";
import ProductoApi from "../models/Productos";

export async function editProductHandler (id:string, productEdit:EditProduct) {
    try {
        const product = await ProductoApi.findById(id);
    
        if (!product) {
            return "Producto Inexistente";
        }
    
        productEdit.image ? (product.image = productEdit.image) : null;
        productEdit.name ? (product.name = productEdit.name) : null;
        productEdit.description ? (product.description = productEdit.description) : null;
        productEdit.brand ? (product.brand = productEdit.brand) : null;
        productEdit.price ? (product.price = productEdit.price) : null;
        productEdit.category ? (product.category = productEdit.category) : null;
        productEdit.type ? (product.type = productEdit.type) : null;
        productEdit.stock ? (product.stock = productEdit.stock) : null;
        productEdit.availeble_colors ? (product.available_colors = productEdit.availeble_colors) : null;
        productEdit.sizes ? (product.sizes = productEdit.sizes) : null;
    
        await product.save();
        return product;
      } catch (error) {
        throw error; // Lanzar el error para que sea manejado en el bloque catch del controlador
      }
}   