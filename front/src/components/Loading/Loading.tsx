import { useEffect, useRef } from "react"
import PALogo from "../../assets/PALogo.png"

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
    <div className={`fixed flex flex-col justify-center items-center top-0 w-full h-full bg-[#fdfdfd]  ${fadeSwitch ? `opacity-0 overflow-y-visible` : "opacity-100 overflow-hidden"} transition-[transform_opacity_display] duration-700`} ref={LoadingRef}>
        <i className='text-4xl text-primaryColorViolet  mb-2 bx bx-loader-alt bx-spin' ></i>
        <h3>{text}</h3>

        <picture className="w-[80px] h-[80px] absolute bottom-0  flex justify-center items-center bg-redd-500 pointer-events-none select-none bg-redd-500">
          <img src={PALogo} alt="PA" className="pointer-events-none select-none"/>
        </picture>

    </div>
  )
}
                // HACER QUE APAREZACE EL SCROLLL DE NUEVO
export default Loading