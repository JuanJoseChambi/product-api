import mongoose from "mongoose";

const ProductsApi = new mongoose.Schema({
    name: {
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    brand:{
        type:String
    },
    price: {
        type:Number
    },
    category:{
        type:String
    },
    stock: {
        type:Number
    },
    available_colors:{
        type:[String]
    },
    sizes:{
        type:[String]
    }

}, {timestamps:true, versionKey: false})

const ProductoApi = mongoose.model("productos", ProductsApi)

export default ProductoApi



