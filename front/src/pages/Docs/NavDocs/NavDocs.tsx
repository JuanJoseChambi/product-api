
function NavDocs() {
  return (
    <nav className="mdl:border-r mdl:sticky mdl:top-0 bg-bluee-500 mdl:border-neutral-500">

      <ul className="hidden mdl:block mdl:w-[260px] mdl:h-screen mdl:px-7 mdl:pt-28 bg-blude-500 mdl:space-y-10">

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
          <a href="">Filtrar Productos</a>
        </li>

      </ul>

    </nav>
  )
}

export default NavDocs