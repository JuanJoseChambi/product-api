export interface Products {
    _id:string;
    name: string
    image: string
    description:string
    brand: string
    price:  number
    category: string
    type:string
    stock: number
    available_colors: string[]
    sizes: string[]
    createdAt:Date;
    updatedAt:Date;
  }

export interface EditProductState {
    name?:string | null;
    image?:string | null;
    description?:string | null;
    brand?:string | null;
    price?:number | null;
    category?:string | null;
    type?:string | null;
    stock?:number | null;
    availeble_colors?:string[] | null;
    sizes?:string[] | null
}