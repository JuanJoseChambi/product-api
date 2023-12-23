import { useEffect, useState } from "react"
import { Products } from "../../interfaces/interfaces"

interface PageInfo {
  totalResults: number;
  pages: number;
  currentPage: number;
  nextPage: string | null;
  prevPage: string | null;
}

interface PaginationProducts {
  info:PageInfo
  results:Products[]
}
interface allProducts {
  TotalResults:number;
  data:Products[]
}

function ControlApi() {

    
  const [paginationProducts, setPaginationProducts] = useState<PaginationProducts | null>()
  const [allProducts, setAllProducts] = useState<Products[] | null>()
  // const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
  
    // async function productsData () {
    //   await fetch("http://localhost:3001/api/v1/product/all")
    //     .then(async (response) =>  {
    //       if (!response.ok) {
    //         throw new Error(`Error de red: ${response.status}`)
    //       }
    //       const data = await response.json()
    //       console.log(data);
          
    //       setProducts(data.data)
    //     })
    //     .catch(err => console.log(err))
    // }
  
    // productsData()

    async function productsData () {
      await fetch(`http://localhost:3001/api/v1/product/?page=1`)
        .then(async (response) =>  {
          if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`)
          }
          const data = await response.json()
          // console.log(data);
          setAllProducts(null)
          setPaginationProducts(data)
        })
        .catch(err => console.log(err))
    }
  
    productsData()
    
  }, [])

  // function handlerEditProduct (id:string, editProduct:string | number) {

  // }

  async function handlerPagination(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
  
      const data: PaginationProducts = await response.json();
      setAllProducts(null)
      setPaginationProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handlerAllProducts() {
    try {
      const response = await fetch("http://localhost:3001/api/v1/product/all");
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
  
      const data: allProducts = await response.json();

      console.log(data);
      
      setPaginationProducts(null)
      setAllProducts(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // const firstProduct = products.filter(product => product._id === "658207cccedcef91d4cd5d7b")

  
  return (
    <header className="flex flex-col justify-center items-center  bg-[#e2e0e0]">

    {/* {products?.map((product, i) => (
        <section key={product._id} className="w-[95%] h-[50px] flex flex-row justify-evenly items-center space-x-3 p-2 m-2 border-y border-neutral-400 bg-[#fff]">
            <p>{i+1}</p>
            <picture className="w-[100px] flex justify-center items-center bg-bluee-500">
                <img className="w-[50px]" src={product.image} alt="Image" ></img>
            </picture>

            <h1 key={product._id} className="font-regualr text-sm">{product.name} | {product.stock}</h1> 

            <p className="text-sm font-light">{product.description}</p>
 
            <p className="flex justify-center items-center text-xs font-light">{product.brand} | {product.category}</p>
            
            <span className="flex justify-start items-center text-xs font-light">{product.sizes.map((size) => (<p key={size} className="mx-1">{size}</p>))}</span>
            <span className="flex justify-start items-center text-xs font-light">{product.available_colors.map((color) => (<p key={color} className="mx-1">{color}</p>))}</span>
            
            <p className="font-light text-xs">Price:{product.price}</p>
        </section>
      ))} */}

      <section className="flex flex-col justify-center items-center ">
        <section className="flex justify-center items-center space-x-10">
          <button onClick={() => handlerPagination("http://localhost:3001/api/v1/product/?page=1")}>Paginacion de Productos</button>
          <button onClick={() => handlerPagination(paginationProducts?.info.prevPage ?? "")} className="">Anterior</button>
          <h1 className="text-xl font-semibold">{paginationProducts?.info.currentPage}</h1>
          <button onClick={() => handlerPagination(paginationProducts?.info.nextPage ?? "")} className="">Siguiente</button>
          <button onClick={handlerAllProducts}>Todos Los Productos</button>
        </section>


        <section className="flex justify-center items-center space-x-1">
          <form>
            <label>Filtrar por Nombre</label>
            <input type="text" placeholder="Producto" />
          </form>
          <form>
            <label>Filtrar por Categoria</label>
            <input type="text" placeholder="Producto" />
          </form>
          <form>
            <label>Filtrar por Tipo</label>
            <input type="text" placeholder="Producto" />
          </form>
          <form>
            <label>Filtrar por Marca</label>
            <input type="text" placeholder="Producto" />
          </form>

        </section>

      </section>

      <section className="min-h-screen w-full flex flex-wrap justify-center items-start">
      {paginationProducts ? paginationProducts?.results?.map((product, i) => (
        <section key={product._id} className="w-[300px] h-[400px] flex flex-col justify-evenly items-start p-2 m-2 bg-redd-500">
          <picture className="w-full h-[150px] flex justify-center items-center bg-blue-500">
              <img className="w-[250px]" src="Image Not Found" alt={product.description} ></img>
          </picture>
          <h1 key={product._id} className="font-semibold text-xl">{product.name} | {product.stock}</h1>

          <p className="flex justify-start items-center text-xs font-light">{product.brand} | {product.category}</p>

          <p className="text-sm font-light">{product.description}</p>

          <p className="text-sm font-light">{product.type}</p>

          <span className="flex justify-start items-center text-xs font-light">{product.sizes.map((size) => (<p key={size} className="mx-1">{size}</p>))} | {product.available_colors.map((color) => (<p key={color} className="mx-1">{color}</p>))}</span>

          <p className="font-medium text-xm">Price : {product.price} | Card {i+1}</p>
        </section>
      )):null}

      {allProducts ? allProducts?.map((product, i) => (
        <section key={product._id} className="w-[300px] h-[400px] flex flex-col justify-evenly items-start p-2 m-2 bg-redd-500">
          <picture className="w-full h-[150px] flex justify-center items-center bg-blue-500">
              <img className="w-[250px]" src="Image Not Found" alt={product.description} ></img>
          </picture>
          <h1 key={product._id} className="font-semibold text-xl">{product.name} | {product.stock}</h1>

          <p className="flex justify-start items-center text-xs font-light">{product.brand} | {product.category}</p>

          <p className="text-sm font-light">{product.description}</p>

          <p className="text-sm font-light">{product.type}</p>

          <span className="flex justify-start items-center text-xs font-light">{product.sizes.map((size) => (<p key={size} className="mx-1">{size}</p>))} | {product.available_colors.map((color) => (<p key={color} className="mx-1">{color}</p>))}</span>

          <p className="font-medium text-xm">Price : {product.price} | Card {i+1}</p>
        </section>
      )):null}





      </section>
    </header>
  )
}

export default ControlApi
