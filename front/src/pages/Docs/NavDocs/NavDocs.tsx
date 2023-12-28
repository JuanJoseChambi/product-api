
function NavDocs() {
  return (
    <nav className="border-r fixed top-0 left-0 border-neutral-500">

      <ul className="w-[260px] h-screen px-7 pt-28 bg-blude-500 space-y-10">

        <li className="text-lg font-light flex flex-col justify-center items-start space-y-3">
          <h2 className="font-semibold text-xl">Introduccion</h2>
          <a href="" className="">REST</a>
          {/* <a href="" className="">GraphQL</a> */}
        </li>

        <li className="text-lg font-light flex flex-col justify-center items-start space-y-3">
          <h2 className="font-semibold text-xl">Productos</h2>
          <a href="">Todos</a>
          <a href="">Buscar ID</a>
          <a href="">Paginacion</a>
          <a href="">Buscar Nombre</a>
          <a href="">Buscar Caracteristica</a>
          <a href="">Buscar Marca</a>
          <a href="">Buscar Tipo</a>
        </li>

      </ul>

    </nav>
  )
}

export default NavDocs