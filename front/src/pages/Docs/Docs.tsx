import NavDocs from "./NavDocs/NavDocs"
import MainDocs from "./MainDocs/MainDocs"
import { useRef } from "react";

function Docs() {

  const restRef = useRef<HTMLDivElement>(null);
  const allRef = useRef<HTMLDivElement>(null);
  const searchByIdRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)


  return (
    <div className="w-full bg-redd-500 flex justify-center mdl:justify-end items-start">
        <NavDocs restRef={restRef} allRef={allRef} searchByIdRef={searchByIdRef} paginationRef={paginationRef} filterRef={filterRef}/>
        <MainDocs restRef={restRef} allRef={allRef} searchByIdRef={searchByIdRef} paginationRef={paginationRef} filterRef={filterRef}/>
    </div>
  )
}

export default Docs