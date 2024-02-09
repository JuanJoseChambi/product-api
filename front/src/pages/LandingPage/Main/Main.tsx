import { useEffect, useState } from "react"
import CardLandingPage from "../../../components/CardLandingPage/CardLandingPage"
const {VITE_SRV} = import.meta.env
function Main() {

  const [products,setProducts] = useState([])

  async function handlerInfoCards() {
    try {
      const response = await fetch(`${VITE_SRV}/product/all`);
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
  
      const data = await response.json();

      const nineProduct = data.results.slice(0,9)
      
      setProducts(nineProduct)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    
    handlerInfoCards()
    
  }, [])
  
  // console.log(products);
  return (
    <main>
        <section className="w-[90%] mx-auto flex flex-wrap justify-evenly items-center pb-20 bg-redd-500">

            {products.map((product, i) => (
              <CardLandingPage key={i} product={product} />
            ))}
            

        </section>
    </main>
  )
}

export default Main