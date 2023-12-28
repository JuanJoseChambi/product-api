import { ProductsData } from "../interfaces/interfaces";

export function paginationHandler (products:ProductsData[], page:number):ProductsData[] {
    
    const productForPage = 20;
    let productsInPage = [];
    const indexEnd = productForPage * Number(page);
    const indexStart = indexEnd - productForPage;
    productsInPage = products.slice(indexStart, indexEnd)
    
    return productsInPage
}