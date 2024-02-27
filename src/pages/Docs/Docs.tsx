import NavDocs from "./NavDocs/NavDocs"
import MainDocs from "./MainDocs/MainDocs"
import { useEffect, useRef, useState } from "react";
import Loading from "../../components/Loading/Loading";

function Docs() {
  const [loaderTime, setLoaderTime] = useState<boolean>(false)
  const restRef = useRef<HTMLDivElement>(null);
  const allRef = useRef<HTMLDivElement>(null);
  const searchByIdRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaderTime(true);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full bg-redd-500 flex justify-center mdl:justify-end items-start">
        <NavDocs restRef={restRef} allRef={allRef} searchByIdRef={searchByIdRef} paginationRef={paginationRef} filterRef={filterRef}/>
        <MainDocs restRef={restRef} allRef={allRef} searchByIdRef={searchByIdRef} paginationRef={paginationRef} filterRef={filterRef}/>
        <Loading fadeSwitch={loaderTime} timeFade={300}/>  

    </div>
  )
}

export default Docs