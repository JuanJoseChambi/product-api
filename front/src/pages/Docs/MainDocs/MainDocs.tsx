import CodeTextRequest from "../../../components/CodeTextRequest/CodeTextRequest"
import CodeTextResult from "../../../components/CodeTextResult/CodeTextResult"
import LiSectionsDocs from "../../../components/LiSectionsDocs/LiSectionsDocs";
import Table from "../../../components/Table/Table"

interface MainDocsProps {
  restRef:React.RefObject<HTMLDivElement>;
  allRef:React.RefObject<HTMLDivElement>;
  searchByIdRef:React.RefObject<HTMLDivElement>;
  paginationRef:React.RefObject<HTMLDivElement>;
  filterRef:React.RefObject<HTMLDivElement>;
}

function MainDocs({restRef,allRef,searchByIdRef,paginationRef,filterRef}:MainDocsProps) {
  return (
    <main className="w-[95%] mdl:w-full min-h-screen bg-redd-500 py-10">
      <article className="w-full mdl:max-w-[960px] mx-auto bg-greend-500">
        <h2 className="text-[2.2rem] text-neutral-700 font-bold pb-16">Documentacion</h2>

        <ul className="space-y-16">

          <LiSectionsDocs title="Introduccion">
            <p>Esta documentacion te ayudara a familiarizarte con la api de Productos, mostrando los direfentes resursos y distintas consultas que existen</p>
          </LiSectionsDocs>

          <LiSectionsDocs refSection={restRef} title="REST">
            <p> Url Base : <a className="border-b-2 border-violet-600" href="http://localhost:3001/api/v1" target="_blank">http://localhost:3001/api/v1</a></p>
            <p>La URL Base proporciona detalles sobre todos los recursos disponibles en la API. Cada solicitud, sin excepción, pasa a través de este punto de entrada. Todas las respuestas proporcionarán datos en el formato JSON a través del método GET </p>
            
            <CodeTextRequest url="http://localhost:3001/api/v1" request="GET"/>

            <pre className="code">
              <code>
                <span className="corchete">{'{'}</span>
                <span className="text-pinkCode">  "products":</span><span className="text-greenCode">"http://localhost:3001/api/v1/product"</span>
                <span className="corchete">{'}'}</span>
              </code>
            </pre>
            <p>Actualmente estos son los recursos disponibles:</p>
            <li className="list-disc ml-5">Products: Este recurso se utiliza para recuperar información sobre todos los productos</li>
          </LiSectionsDocs>

          <LiSectionsDocs refSection={allRef} title="Todos los productos">
          <p>La obtencion de todos los productos de la api es en la ruta: <a className="border-b-2 border-violet-600" target="_blank" href="http://localhost:3001/api/v1/product/all">http://localhost:3001/api/v1/product/all</a></p>

          <CodeTextRequest url="http://localhost:3001/api/v1/product/all" request="GET"/>

          <pre className="code">
            <code>
              <span className="corchete">{'{'}</span>
              <span className="text-pinkCode">"TotalResults": </span><span className="text-orangeCode">60,</span><br />
              <CodeTextResult obect={false}/>
              <span className="corchete">{'}'}</span>
            </code>
          </pre>
          </LiSectionsDocs>

          <LiSectionsDocs refSection={searchByIdRef} title="Buscar por Id">
            <p>Puede obtener un solo producto al agregar el ID como parámetro: <a className="border-b-2 border-violet-600" target="_blank" href="http://localhost:3001/api/v1/product/6586177c054c7b7c9fee808d">http://localhost:3001/api/v1/product/:id</a> </p>
            <CodeTextRequest url="http://localhost:3001/api/v1/product/6586177c054c7b7c9fee808c" request="GET"/>
            <pre className="code">
              <code>
                <span className="corchete">{'{'}</span>
                <CodeTextResult obect />
                <span className="corchete">{'}'}</span>
              </code>
            </pre>
          </LiSectionsDocs>

          <LiSectionsDocs refSection={paginationRef} title="Paginacion">
            <p>La api viene con uan paginacion de todos los productos en el cual estan paginados hasta 20 productos por paginacion, y en la respuesta de la peticion viene un objeto info el cual cuenta con la siguiente informacion:</p>
            <Table 
              header={["Clave","Tipo","Descripcion"]} 
              body={[
                ["TotalResults","Number","Muestra la cantidad de productos que existen en esa pagina"],
                ["pages","Number","Muestra la cantidad de paginas que existen"],
                ["currentPage","Number","Muestra la paginacion en la nos encontramos"],
                ["nextPage","String","Muestra la url de la siguiente paginacion y cuando no exista mas este es null"],
                ["prevPage","String","Muestra la url de la anterior paginacion y cuando no exista mas este es null"],
                ]}/>
              <CodeTextRequest url="http://localhost:3001/api/v1/product/?page=1" request="GET"/>
              <pre className="code">
              <code>
                <span className="corchete">{'{'}</span>
                  <span className="text-pinkCode">"info": </span><span className="text-grayCode">{`{`}</span><br />
                  <span className="text-pinkCode">   "totalResults":</span><span className="text-greenCode">20,</span><br />
                  <span className="text-pinkCode">   "pages":</span><span className="text-greenCode">4,</span><br />
                  <span className="text-pinkCode">   "currentPage":</span><span className="text-greenCode">1,</span><br />
                  <span className="text-pinkCode">   "nextPage":</span><span className="text-orangeCode">"http://localhost:3001/api/v1/product/?page=2",</span><br />
                  <span className="text-pinkCode">   "TotalResults":</span><span className="text-blueCode">null</span><br />
                  <span className="text-grayCode">  {`}`},</span><br />
                  <CodeTextResult/>
                <span className="corchete">{'}'}</span>
              </code>
            </pre>
          </LiSectionsDocs>

          <LiSectionsDocs refSection={filterRef} title="Filtrar Productos">
            <p>Puede también aplicar filtros a la URL mediante la incorporación de parámetros de consulta adicionales. Para iniciar la filtración, simplemente añada un después del signo de interrogación (?). En caso de que desee concatenar múltiples filtros en una misma solicitud, utilice (&) después de cada consulta.</p>
            <p>Parametros Disponibles:</p>
            <Table header={["Parametro", "Descripcion"]}
            body={[
              ["name", "Name devuelve todo aquel que coincida con el nombre del producto"],
              ["brand", "Brand devuelve todos los productos que sean de esa Marca"],
              ["category", "Category devuelve todos los productos de determinada categoria, como ropa deportiva, bicicletas, etc"],
              ["type", "Type devuelve todos los productos que sean de un tipo en especifico, como ropa, electronica, deportes y juegos, etc"],
              
            ]}/>

            <p>Por ejemplo si se quiere buscar por nombre y marca se haria de la siguiente manera para filtrar solo las remeras de adidas:</p>
            <CodeTextRequest request="GET" url="http://localhost:3001/api/v1/product/filter/?name=camiseta&brand=adidas"/>
            <pre className="code">
              <code>
                <span className="corchete">{'{'}</span>
                <span className="text-pinkCode">"TotalResults": </span><span className="text-orangeCode">1,</span><br />
                <CodeTextResult custom
                id="6586177c054c7b7c9fee808d" 
                name="Camiseta de Algodón Adidas Essential"
                image="camiseta"
                description="Camiseta de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Adidas."
                brand="Adidas"
                price="29.99"
                category="Ropa"
                type="Ropa"
                stock="80"
                />
                <span className="corchete">{'}'}</span>
              </code>
            </pre>
          </LiSectionsDocs>

        </ul>
      </article>
    </main>
  )
}

export default MainDocs