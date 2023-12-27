// import React from "react";

function CardLandingPage() {
  return (
    <article className="h-[350px] px-4 py-2 basis-[300px] my-10 flex flex-col justify-start items-center shadow-[0px_15px_30px_0px_#A6A6A6] bg-white">
      <picture className="w-[170px] flex justify-center items-center overflow-hidden bg-red-500">
        <img className="w-full" src="https://i.pinimg.com/originals/e3/83/71/e3837107fd127dbc5d066d9d45c3eca1.jpg" alt=""/>
      </picture>
      <section className="w-full flex justify-between items-center">
        <h3 className="font-medium text-lg">Florero</h3>
        <h3 className="text-xs font-light">Floristery</h3>
      </section>
      <p className="font-light text-xs line leading-4">Decoracion de Flores para centros de mesa y hogaers, con flores artificiales y cero contaminacion</p>
      <h3 className="w-full text-sm font-medium py-3">Precio: 89,99 $</h3>
      <button className="bg-[#AA3EFF] text-xs py-2 px-3 rounded-lg text-white font-light">Agregar al Carrito</button>
    </article>
  );
}

export default CardLandingPage;
