
function CardLandingPage() {
  return (
    <article className="max-h-[350px] px-4 py-2 basis-[300px] my-10 mx-[2px] relative flex flex-col justify-start items-center shadow-[0px_15px_30px_0px_#A6A6A6] bg-white">

        <article className="w-[30px] h-[70px] rounded-[0px_0px_15px_15px] absolute top-0 right-3 bg-violet-500 ">
            
        </article>
        <picture className="w-[170px] flex justify-center items-center overflow-hidden bg-red-500">
            <img className="w-full" src="https://i.pinimg.com/originals/e3/83/71/e3837107fd127dbc5d066d9d45c3eca1.jpg" alt=""/>
        </picture>
        <section className="w-full flex justify-between items-center">
            <h3 className="font-medium text-lg">Florero</h3>
            <h3 className="text-xs font-light">Floristery</h3>
        </section>
        <p className="font-light text-xs line leading-4">Decoracion de Flores para centros de mesa y hogaers, con flores artificiales y cero contaminacion</p>
        <h3 className="w-full text-sm font-medium py-3">Precio: 89,99 $</h3>
        <section className="w-full bg-redd-500 flex justify-start items-center">
            <i className='text-xl pr-2 bx bx-cart-add'></i>
            <button className="flex justify-around items-center bg-[#AA3EFF] text-xs py-2 px-3 rounded-[0px_8px_8px_0px] text-white font-light">Agregar al Carrito</button>
        </section>

    </article>
  );
}

export default CardLandingPage;
