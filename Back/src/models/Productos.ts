import mongoose from "mongoose";

const ProductsApi = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:String
    },
    price: {
        type:Number,
        required:true
    },
    category:{
        type:String
    },
    type:{
        type:String,
        required:true
    },
    stock: {
        type:Number,
        required:true
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



