import { useEffect, useRef } from "react"

interface LoadingProp {
    fadeSwitch:boolean | number;
    timeFade?:number;
    text?:string
}

function Loading({fadeSwitch, timeFade = 500, text = "Cargando"}:LoadingProp) {
    const LoadingRef = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
        if (fadeSwitch) {
          const timeoutId = setTimeout(() => {
            if (LoadingRef.current) {
              LoadingRef.current.classList.add("opacity-0", "hidden");
            }
          }, timeFade);
    
          return () => {
            clearTimeout(timeoutId);
          };
        } else {
          if (LoadingRef.current) {
            LoadingRef.current.classList.remove("opacity-0", "hidden");
          }
        }
      }, [fadeSwitch]);

  return (
    <div className={`fixed flex flex-col justify-center items-center top-0 w-full h-screen bg-[#fdfdfd]  ${fadeSwitch ? `opacity-0 overflow-y-visible` : "opacity-100 overflow-hidden"} transition-[transform_opacity_display] duration-700`} ref={LoadingRef}>
        <i className='text-4xl mb-2 bx bx-loader-alt bx-spin' ></i>
        <h3>{text}</h3>
    </div>
  )
}
                // HACER QUE APAREZACE EL SCROLLL DE NUEVO
export default Loading