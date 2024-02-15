import { Link } from "react-router-dom"

function Header() {

  return (
    <header className="">

      <section className="area w-full flex flex-col justify-center items-center py-5 bg-redd-500">
        <article className="relative flex justify-center items-center text-center text-7xl md:text-9xl  tracking-widest pt-36 ">
          <h2 className="absolute text-[200px] font-semibold text-[#18181894] -z-10 blur-sm">P.A</h2>
          <h2 className="font-medium">Product Api</h2>
        </article>
        <h1 className="font-light pb-20 md:pb-20 pt-10"> Conéctate, Aprende, Practica</h1>
        <Link to={"/docs"}>
          <button className="bg-white text-black mb-16 py-2 px-4 rounded-2xl font-light border-2 border-primaryColorViolet shadow-lg shadow-neutral-400">ir a Documentacion</button>
        </Link>
        
      </section>

    </header>
  )
}

export default Header