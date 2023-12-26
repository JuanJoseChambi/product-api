import { Products } from "../../interfaces/interfaces"

interface ArrayMap {
    array: Products[];
}

function Cards({array}:ArrayMap) {
  return (
    <>
    {Array.isArray(array) ? array.map((product, i) => (
        <section key={product._id} className="w-[300px] h-[400px] flex flex-col justify-evenly items-start p-2 m-2 bg-redd-500">
          <picture className="w-full h-[150px] flex justify-center items-center bg-blue-500">
              <img className="w-[250px]" src="Image Not Found" alt="Image Not Found" ></img>
          </picture>
          <h1 key={product._id} className="font-semibold text-xl">{product.name} | {product.stock}</h1>

          <p className="flex justify-start items-center text-xs font-light">M:{product.brand} | C:{product.category} | T:{product.type}</p>

          <p className="text-sm font-light">{product.description}</p>

          <span className="flex justify-start items-center text-xs font-light">{product.sizes.map((size) => (<p key={size} className="mx-1">{size}</p>))} | {product.available_colors.map((color) => (<p key={color} className="mx-1">{color}</p>))}</span>

          <p className="font-medium text-xm">Price : {product.price} | Card {i+1}</p>
        </section>
      )):null}
    </>
  )
}

export default Cards