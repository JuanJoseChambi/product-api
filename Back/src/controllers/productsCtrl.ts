import { Request, Response } from "express"
import ProductoApi from "../models/Productos";
import allCreate from "../utils/productsData";


export const allProducts = async (req:Request, res:Response) => {
    const result = await ProductoApi.find({})
    const totalResults = result.length
    res.status(200).json({data: result, TotalResults:totalResults})
}

export const uploadProduct = async (req:Request, res:Response) => {
    const productPost = req.body;

    const result  = await ProductoApi.create(productPost)
    res.status(200).json({successCreate: result})
}

export const deleteProduct = async (req:Request, res:Response) => {
    try {
        const {id} = req.params

        const result = await ProductoApi.findByIdAndDelete(id)
        if (result) {
            res.status(200).json({successDelete: result})
        }else{
            res.status(200).json({successDelete: "Product No Exist"})
        }
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const editProduct = async (req:Request, res:Response) => {
   try {
    const {id} = req.params
    const product = req.body;
    const result = await ProductoApi.findByIdAndUpdate(id, product, {new:true})

    res.status(200).json({successEdit: result})
   } catch (error) {
    res.status(404).json({message: error})
   }
}
