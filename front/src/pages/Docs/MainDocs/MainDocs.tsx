
function MainDocs() {
  return (
    <main className="w-[90%] h-screen bg-redd-500 py-10">
      <article className="max-w-[960px] mx-auto bg-greend-500">
        <h2 className="text-[2rem] font-bold pb-16">Documentacion</h2>

        <ul className="space-y-16">
          <li className="space-y-2 font-light">
            <h2 className="text-[25px] font-bold ">Introduccion</h2>
            <p>Esta documentacion te ayudara a familiarizarte con la api de Productos, mostrando los direfentes resursos y distintas consultas que existen</p>
          </li>

          <li className="space-y-2 font-light">
            <h2 className="text-[25px] font-bold ">REST</h2>
            <p> Url Base : <a className="border-b-2 border-violet-600" href="http://localhost:3001/api/v1" target="_blank">http://localhost:3001/api/v1</a>
            </p>
            <p>La URL Base proporciona detalles sobre todos los recursos disponibles en la API. Cada solicitud, sin excepción, pasa a través de este punto de entrada. Todas las respuestas proporcionarán datos en el formato JSON a través del método GET </p>
            <pre className="code ">
              <code className=" space-x-2">
                <span className="text-greenCode font-bold">GET</span>
                <span className="text-grayCode font-bold">http://localhost:3001/api/v1</span>
              </code>
            </pre>
            <pre className="code">
              <code>
                <span className="corchete">{'{'}</span>
                <span className="text-pinkCode">  "products":</span><span className="text-greenCode">http://localhost:3001/api/v1</span>
                <span className="corchete">{'}'}</span>
              </code>
            </pre>
            <p>Actualmente existen un recursos disponible:</p>
            <li className="list-disc ml-5">Products: Este recurso se utiliza para recuperar información sobre todos los productos</li>
          </li>

          <li className="space-y-2 font-light">
            <h2 className="text-[25px] font-bold ">Todos los productos</h2>
            <p>La obtencion de todos los productos de la pai es en la ruta: <a className="border-b-2 border-violet-600" target="_blank" href="http://localhost:3001/api/v1/product/all">http://localhost:3001/api/v1/product/all</a></p>
            <pre className="code">
              <code>
                <span className="corchete">{'{'}</span>
                <span>"TotalResults":</span><span>61</span>
                <span className="corchete">{'}'}</span>
              </code>
            </pre>


          </li>
        </ul>


        

        

      </article>
    </main>
  )
}

export default MainDocs