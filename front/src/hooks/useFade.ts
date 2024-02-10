import { useEffect } from "react";

export function useFade (ref: null | React.RefObject<HTMLDivElement>, off: boolean | number, styleFade:string = "y") {

  useEffect(() => {
    function callback(entries: IntersectionObserverEntry[]) {
        
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && !off && entry.target) {
                
                let style:string;

                if (styleFade === "y" && !off) {
                    style = "opacity-100 translate-y-0";
                } else if (styleFade === "x" && !off) {
                    style = "opacity-100 translate-x-0";
                } else {
                    return; // Salir si no hay un estilo válido
                }

                const classNameToAdd = style.split(" ");
                classNameToAdd.forEach(className => {
                    if (entry.target) {
                        entry.target.classList.remove("opacity-0")
                        entry.target.classList.add(className);
                    }
                    });
            }else if (off && entry.target){
                entry.target.classList.remove("opacity-100")
                entry.target.classList.add("opacity-0")

                setTimeout(() => {  
                if (entry.target) entry.target.classList.add("hidden")
                }
                , 500)
            }
            
        });
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    const observador = new IntersectionObserver(callback, options);
    if (ref?.current) {
        observador.observe(ref.current);
    }

    // Cleanup the observer on component unmount
    return () => {
        observador.disconnect();
    };
  }, [off]);
}
