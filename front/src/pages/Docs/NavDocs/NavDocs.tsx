import { useState } from "react";

interface NavDocsProps {
  restRef:React.RefObject<HTMLDivElement>;
  allRef:React.RefObject<HTMLDivElement>;
  searchByIdRef:React.RefObject<HTMLDivElement>;
  paginationRef:React.RefObject<HTMLDivElement>;
  filterRef:React.RefObject<HTMLDivElement>;
}


function NavDocs({restRef,allRef,searchByIdRef,paginationRef,filterRef}:NavDocsProps) {
  const [hoverOption, setHoverOption] = useState<number | null>()
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="mdl:border-r mdl:sticky mdl:top-0 bg-bluee-500 mdl:border-neutral-500">

      <ul className="hidden mdl:block mdl:w-[245px] mdl:h-screen mdl:px-7 mdl:pt-28 bg-blude-500 mdl:space-y-10">

        <li className="text-lg font-light flex flex-col justify-center items-start space-y-3">
          <h2 className="font-semibold text-xl">Introduccion</h2>
          <a href="" onClick={(e) => scrollToSection(restRef,e)} className="">REST</a>
        </li>

        <li className="text-lg font-light flex flex-col justify-center items-start space-y-3">
          <h2 className="font-semibold text-xl">Productos</h2>

          {[{text:"Todos",ref:allRef},{text:"Buscar ID",ref:searchByIdRef}, {text:"Paginacion",ref:paginationRef}, {text:"Filtrar Productos",ref:filterRef}].map((option, i) => (
            <>
              <a href="#" onClick={(e) => scrollToSection(option.ref, e)} onMouseEnter={() => setHoverOption(i+1)} onMouseLeave={() => setHoverOption(null)}>
                {option.text}
              <div className={`${hoverOption === i+1 ? "w-full" : "w-0"} h-[2px] bg-primaryColorViolet transition-[width] duration-500`}></div>
              </a>
              
            </>
          ))}

        </li>

      </ul>

    </nav>
  )
}

export default NavDocs