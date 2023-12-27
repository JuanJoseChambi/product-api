
function Header() {

  return (
    <header className="">
      
      <nav className="area w-full h-[50px] flex justify-between border-b border-neutral-500 items-center bg-greend-500">
        <h2>PA</h2>
        <ul className="flex justify-center items-center space-x-10">
          <li>Docs</li>
          <li>About</li>
        </ul>
      </nav>

      <section className="area w-full flex flex-col justify-center items-center bg-redd-500">
        <article className="relative flex justify-center items-center text-9xl  tracking-widest py-10">
          <h2 className="absolute text-[200px] font-semibold text-neutral-500 -z-10 blur-sm">P.A</h2>
          <h2 className="font-medium">Product Api</h2>
        </article>
        <h1 className="font-light">Desarrollado con fines de practica para desarrolladores y el uso de codigo abierto.</h1>
      </section>

    </header>
  )
}

export default Header