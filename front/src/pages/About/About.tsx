import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading"

function About() {
  const [loaderTime, setLoaderTime] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaderTime(true);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
        <main className="w-[90%] mx-auto m-h-auto">
            <section className="space-y-10 py-10">

                <article className="space-y-3">
                    <h2 className="font-bold text-xl tracking-wider text-neutral-700">¿Quien eres?</h2>
                    <p className="font-light text-sm">Soy Juan, un desarrollador Fullstack apasionado por crear experiencias web significativas. Disfruto desarrollando sitios web y siempre busco que tengan un propósito claro y útil. Mi interés también se extiende al crecimiento personal a través del aprendizaje continuo en el campo de la programación.</p>
                </article>

                <article className="space-y-3">
                    <h2 className="font-bold text-xl tracking-wider text-neutral-700">¿Por que Product Api?</h2>
                    <p className="font-light text-sm">Product API es un sitio web diseñado para prácticas de desarrollo, ofreciendo una API de productos con formato similar al de plataformas de comercio electrónico. Su enfoque es brindar una herramienta valiosa para quienes se forman en desarrollo y desean practicar en áreas como billeteras virtuales, seguridad y autenticación entre otras.</p>
                </article>

                <article className="space-y-3">
                    <h2 className="font-bold text-xl tracking-wider text-neutral-700">¿Cuáles son las características de esta API?</h2>
                    <p className="font-light text-sm">Ofrezco funcionalidades como la obtención de información de productos, filtrando por categorías, paginacion, entre otras, pero como se creo a modo de practica no esta completo pero funciona para la practica como ya se menciono.</p>
                </article>

                <article className="space-y-3">
                    <h2 className="font-bold text-xl tracking-wider text-neutral-700">¿Derechos de Autor?</h2>
                    <p className="font-light text-sm">Product API se ha creado con fines educativos y prácticos, permitiendo un uso libre. Los datos e imágenes no tienen derechos de propiedad y pertenecen a sus respectivos propietarios.</p>
                </article>

                {/* <div className="w-full h-[30px] flex flex-col justify-center space-x-5 items-center bg-redd-500">
                    <p className="font-bold text-xl tracking-wider text-neutral-700">Buscame en :</p>
                    <div>
                        <i className='text-3xl bx bxl-github'></i> <i className='text-3xl bx bxl-linkedin-square' ></i>
                    </div>
                </div> */}

            </section>
        </main>
        <Loading fadeSwitch={loaderTime} timeFade={300}/>  
        
    </>
  )
}

export default About