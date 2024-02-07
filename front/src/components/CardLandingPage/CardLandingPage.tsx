import { Products } from "../../interfaces/interfaces";

interface CardLandingPageProp {
  product:Products
}

function CardLandingPage({product}:CardLandingPageProp) {
  return (
    <article className="min-h-[350px] max-h-[350px] px-4 py-4 basis-[300px] my-10 mx-[2px] relative flex flex-col justify-evenly items-center shadow-[0px_15px_30px_0px_#D7D7D7] bg-white">

        {/* <article className="w-[30px] h-[70px] rounded-[0px_0px_15px_15px] absolute top-0 right-3 bg-violet-500 "></article> */}
        
        <picture className="w-full h-[150px] flex justify-center items-center overflow-hidden bg-blued-500">
              <img className="w-[50%] object-cover" src={product.image} alt="Image Not Found" ></img>
          </picture>
        <section className="w-full flex justify-between items-center">
            <h3 className="font-medium text-lg">{product.name}</h3>
            <h3 className="text-xs font-light">{product.brand}</h3>
        </section>
        <p className="font-light text-xs line leading-4">{product.description}</p>
        <h3 className="w-full text-sm font-medium py-3">Precio: {product.price} $</h3>
        <section className="w-full bg-redd-500 flex justify-start items-center">
            <i className='text-xl pr-2 bx bx-cart-add'></i>
            <button className="flex justify-around items-center bg-[#AA3EFF] text-xs py-2 px-3 rounded-[0px_8px_8px_0px] text-white font-light">Agregar al Carrito</button>
        </section>

    </article>
  );
}

export default CardLandingPage;
