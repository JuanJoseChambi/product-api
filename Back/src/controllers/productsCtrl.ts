import { Request, Response } from "express"
import ProductoApi from "../models/Productos";
import { paginationHandler } from "../handlers/paginationHandler";
import { ProductsData } from "../interfaces/interfaces";


export const allProducts = async (req:Request, res:Response) => {
    const result = await ProductoApi.find({})
    const totalResults = result.length
    res.status(200).json({data: result, TotalResults:totalResults})
    // res.status(200).json(result)
}

export const pageProducts = async (req:Request, res:Response) => {
    const {page} = req.query;
    
    let pageNumber = page ? Number(page) : 1;

    const products = await ProductoApi.find({})
    
    const productsData: ProductsData[] = products.map(product => product.toObject());

    const productsInPage = paginationHandler(productsData, pageNumber)
    const totalResults = productsInPage.length;
    const pages = Math.ceil(products.length / 10);
    res.status(200).json(
        {info: {totalResults:totalResults ,
        pages:pages, 
        nextPage:pageNumber > pages || pageNumber === pages ? null : `http://localhost:3001/api/v1/product/page/?page=${pageNumber < 0 ? pageNumber = 1 : pageNumber+1}`,
        prevPage:pageNumber - 1 === 0 || pageNumber <= 0 ? null : `http://localhost:3001/api/v1/product/page/?page=${pageNumber-1}`
        },
        results: pageNumber !== pages + 1? productsInPage : null}
        )
}

export const filterProducts = async (req:Request, res:Response) => {
    const {name} = req.query;
    const {category} = req.query;
    const {brand} = req.query;

    // res.status(200).json({successCreate: result})
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
