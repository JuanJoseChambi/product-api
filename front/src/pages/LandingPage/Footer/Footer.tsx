
function Footer() {
  return (
    <footer className="w-[90%] mx-auto border-t mt-16 border-neutral-500 bg-redd-500">
        <section className="flex justify-between items-center py-10">
            <section className="w-[50%] font-medium text-sm text-start ">
                <p className="">¡Descubre y aprende con nuestra plataforma para desarrolladores! Accede a nuestra API de código abierto para propósitos educativos. Imágenes y marcas utilizadas son solo con fines educativos.</p>
            </section>
            <ul className="flex justify-center items-center font-light space-x-5 text-sm">
                <li className="cursor-pointer">Donaciones</li>
                <li className="cursor-pointer">Terminos y servicios</li>
                <li className="cursor-pointer">Soporte</li>
            </ul>
        </section>
        <h2 className="w-72 bg-redd-500 mx-auto text-xs font-light py-5">©2023 Product APIㅤ•ㅤPowered by Juan Jose</h2>
    </footer>
  )
}

export default Footer