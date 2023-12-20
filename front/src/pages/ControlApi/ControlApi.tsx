import { useEffect, useState } from "react"
import { Products } from "../../interfaces/interfaces"

function ControlApi() {

    
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

  function handlerEditProduct (id:string, editProduct:string | number) {

  }

  return (
    <header className="flex flex-wrap justify-center items-center">
    {products?.map((product) => (
        <section key={product._id} className="w-[300px] h-[400px] flex flex-col justify-evenly items-start p-2 m-2 bg-redd-500">
            <picture className="w-full h-[150px] flex justify-center items-center bg-blue-500">
                <img className="w-[250px]" src={product.image} alt={product.description} ></img>
            </picture>
            <h1 key={product._id} className="font-semibold text-xl">{product.name} | {product.stock}</h1>

            <p className="flex justify-start items-center text-xs font-light">{product.brand} | {product.category}</p>
 
            <p className="text-sm font-light">{product.description}</p>
            
            <span className="flex justify-start items-center text-xs font-light">{product.sizes.map((size) => (<p key={size} className="mx-1">{size}</p>))} | {product.available_colors.map((color) => (<p key={color} className="mx-1">{color}</p>))}</span>
            
            <p className="font-medium text-xm">Price : {product.price}</p>
        </section>
      ))}
    </header>
  )
}

export default ControlApi