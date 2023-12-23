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