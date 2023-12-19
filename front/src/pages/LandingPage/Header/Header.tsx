import { useEffect, useState } from "react"

interface Products {
  _id:string;
  name: string
  image: string
  description:string
  brand: string
  price:  number
  category: string
  stock: number
  available_colors: string[]
  sizes: string[]
}

function Header() {

  const [products, setProducts] = useState<Products[]>([])

useEffect(() => {

  async function productsData () {
    await fetch("http://localhost:3001/api/v1/product/all")
      .then(async (response) =>  {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`)
        }
        const data = await response.json()
        setProducts(data.data)
      })
      .catch(err => console.log(err))
  }

  productsData()
  
}, [])
console.log(products);

  return (
    <header className="area bg-red-0">
        Header
      {/* {products?.map((product) => (
        <h1 key={product._id}>{product.name}</h1>
      ))} */}
    </header>
  )
}

export default Header