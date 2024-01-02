
interface NavDocsProps {
  restRef:React.RefObject<HTMLDivElement>;
  allRef:React.RefObject<HTMLDivElement>;
  searchByIdRef:React.RefObject<HTMLDivElement>;
  paginationRef:React.RefObject<HTMLDivElement>;
  filterRef:React.RefObject<HTMLDivElement>;
}


function NavDocs({restRef,allRef,searchByIdRef,paginationRef,filterRef}:NavDocsProps) {

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="mdl:border-r mdl:sticky mdl:top-0 bg-bluee-500 mdl:border-neutral-500">

      <ul className="hidden mdl:block mdl:w-[260px] mdl:h-screen mdl:px-7 mdl:pt-28 bg-blude-500 mdl:space-y-10">

        <li className="text-lg font-light flex flex-col justify-center items-start space-y-3">
          <h2 className="font-semibold text-xl">Introduccion</h2>
          <a href="" onClick={(e) => scrollToSection(restRef,e)} className="">REST</a>
        </li>

        <li className="text-lg font-light flex flex-col justify-center items-start space-y-3">
          <h2 className="font-semibold text-xl">Productos</h2>
          <a href="#" onClick={(e) => scrollToSection(allRef, e)}>Todos</a>
          <a href="#" onClick={(e) => scrollToSection(searchByIdRef, e)}>Buscar ID</a>
          <a href="#" onClick={(e) => scrollToSection(paginationRef, e)}>Paginacion</a>
          <a href="#" onClick={(e) => scrollToSection(filterRef, e)}>Filtrar Productos</a>
        </li>

      </ul>

    </nav>
  )
}

export default NavDocs