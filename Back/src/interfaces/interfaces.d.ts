export interface ProductsData {
    _id: string ;
    name: string;
    image: string;
    description:string;
    brand: string;
    price:  number;
    category: string;
    stock: number;
    available_colors: string[];
    sizes: string[];
    createdAt:Date;
    updatedAt:Date;
}

export interface EditProduct {
    name?:string;
    image?:string;
    description?:string;
    brand?:string;
    price?:number;
    category?:string;
    type?:string;
    stock?:number | null;
    availeble_colors?:string[];
    sizes?:string[]
}