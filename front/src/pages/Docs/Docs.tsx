import NavDocs from "./NavDocs/NavDocs"
import MainDocs from "./MainDocs/MainDocs"
import { useRef } from "react";
// import Loading from "../../components/Loading/Loading";

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
        {/* <Loading fadeSwitch={true} timeFade={200}/>   */}

    </div>
  )
}

export default Docs