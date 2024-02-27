import { Link } from "react-router-dom"
import PALogo from "../../../assets/PALogo.png"

function Header() {

  return (
    <header className="">

      <section className="area w-full flex flex-col justify-center items-center py-5 bg-redd-500">
        <section className="w-full relative flex justify-between items-center flex-col lg:flex-row text-center bg-greendd-500">

          <section className="flex justify-center items-center flex-col space-y-10 order-2 lg:order-1">

            <article className="flex justify-center items-center flex-col space-y-5 ">
              <h2 className="font-light text-6xl sm:text-7xl tracking-widest textDegrade"><b className="font-semibold">P</b>RODUCT <b className="font-semibold">A</b>PI</h2>
              <h1 className="text-xs font-light text-pretty bg-redd-500 w-[80%] tracking-widest">Descubre la simplicidad de nuestra API de productos: potencia tus habilidades de   desarrollo con una experiencia práctica y sin complicaciones. 
              <br/><br/> 
              <b className=" text-xs tracking-[8px]"> Conéctate, Aprende, Practica</b>
              </h1>
            </article>


            <Link to={"/docs"} className="bg-redd-500 flex">
              <button className="bg-white text-black text-sm mt-0 py-2 px-4 rounded-xl font-light border-2 border-primaryColorViolet shadow-lg shadow-neutral-400">ir a Documentacion</button>
            </Link>

          </section>

          <picture className="w-[65%] lg:w-[700px] flex justify-center items-center h-auto drop-shadow-[9px_9px_5px_#8e8e8e] bg-redd-500 order-1 lg:order-2 select-none pointer-events-none">
            <img src={PALogo} alt="Product Api Logo" />
          </picture>

        </section>
        
      </section>

    </header>
  )
}

export default Header



          {/* <h2 className="absolute text-[200px] font-semibold text-[#18181894] -z-10 blur-sm">P.A</h2> */}
