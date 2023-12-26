import { useEffect, useState } from "react"
import { Products } from "../../interfaces/interfaces"
import Cards from "../../components/Cards/Cards";

interface PageInfo {
  totalResults: number;
  pages: number;
  currentPage: number;
  nextPage: string | null;
  prevPage: string | null;
}

export interface PaginationProducts {
  info:PageInfo
  results:Products[]
}
interface allProducts {
  TotalResults:number;
  data:Products[]
}
export interface FilterProducts {
  totalResults:number;
  results:Products[]
}

interface ValueInputs {
  name:string | null;
  category:string | null;
  type:string | null;
  brand:string | null;
}

function ControlApi() {

    
  const [paginationProducts, setPaginationProducts] = useState<PaginationProducts | null>()
  const [allProducts, setAllProducts] = useState<Products[] | null>()
  const [filterProducts, setFilterProducts] = useState<FilterProducts | null>()
  const [valueInputs, setValueInputs] = useState<ValueInputs>({
    name:null,
    category:null,
    type:null,
    brand:null
  })


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
      // console.log(data);
      
      setPaginationProducts(null)
      setAllProducts(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handlerFilterProducts() {
    try {
      if (!valueInputs.name && !valueInputs.brand && !valueInputs.category && !valueInputs.type) return null;
      
      let params:string[] = [];
      let paramsMany = "";
      let paramsOne = "";

      const arrayValue = Object.keys(valueInputs).map((key) => ({
        key: key as keyof ValueInputs,
        value: valueInputs[key as keyof ValueInputs]        
      }));
      
      // console.log(arrayValue);

      arrayValue.forEach((param) => {
        if (param.value) {
          const valueParam = `${param.key}=${param.value}`
          params.push(valueParam)
        }
      })

      if (params.length > 0) {
        paramsMany = params.join("&")
      }else{
        paramsOne = params.join("")
      }

      // console.log(paramsOne);
      // console.log(paramsMany);

      const response = await fetch(`http://localhost:3001/api/v1/product/filter/?${paramsOne ? paramsOne : paramsMany}`)
  
      const data: FilterProducts = await response.json();
      
      setPaginationProducts(null)
      setAllProducts(null)
      setFilterProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="flex flex-col justify-center items-center  bg-[#e2e0e0]">

      <section className="flex flex-col justify-center items-center space-y-5">
        <section className="flex justify-center items-center space-x-10">
          <button onClick={() => handlerPagination("http://localhost:3001/api/v1/product/?page=1")}>Paginacion de Productos</button>
          <button onClick={() => handlerPagination(paginationProducts?.info.prevPage ?? "")} className="">Anterior</button>
          <h1 className="text-xl font-semibold">{paginationProducts?.info.currentPage}</h1>
          <button onClick={() => handlerPagination(paginationProducts?.info.nextPage ?? "")} className="">Siguiente</button>
          <button onClick={handlerAllProducts}>Todos Los Productos</button>
        </section>


        <section className="flex justify-center items-center space-x-5">
          <form className="w-[200px] bg-redd-500">
            <label>Filtrar por Nombre</label>
            <input type="text" onChange={(e) => setValueInputs({...valueInputs ,name: e.target.value})} placeholder="Producto" />
          </form>
          <form className="w-[200px] bg-redd-500">
            <label>Filtrar por Categoria</label>
            <input type="text" onChange={(e) => setValueInputs({...valueInputs ,category: e.target.value})} placeholder="Producto" />
          </form>
          <form className="w-[200px] bg-redd-500">
            <label>Filtrar por Tipo</label>
            <input type="text" onChange={(e) => setValueInputs({...valueInputs ,type: e.target.value})} placeholder="Producto" />
          </form>
          <form className="w-[200px] bg-redd-500">
            <label>Filtrar por Marca</label>
            <input type="text" onChange={(e) => setValueInputs({...valueInputs ,brand: e.target.value})} placeholder="Producto" />
          </form>

        </section>
        <button onClick={handlerFilterProducts} className="py-2 px-5 bg-black text-white rounded-xl ">Filtrar</button>

      </section>

      <section className="min-h-screen w-full flex flex-wrap justify-center items-start">

      <Cards array={paginationProducts?.results || allProducts || filterProducts?.results || []} />

      </section>
    </header>
  )
}

export default ControlApi

