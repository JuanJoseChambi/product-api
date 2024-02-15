import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PALogo from "../../assets/PALogo.png"
import MenuItem from "../MenuItem/MenuItem";


function Nav() {
    const [hoverOption, setHoverOption] = useState<string | null>()

    const {pathname} = useLocation()

    const homeButton = pathname === "/about" || pathname === "/docs" || pathname === "/terms"

  return (
    <nav className="w-[90%] h-[70px] mx-auto flex justify-between  border-b border-neutral-500 items-center bg-greend-500">
        <Link to={"/"}>

            <picture className="w-[80px] h-[80px] flex justify-center items-center bg-redd-500 pointer-events-none select-none">
                <img src={PALogo} alt="PA" className="pointer-events-none select-none"/>
            </picture>

        </Link>
        <ul className="flex justify-center items-center space-x-7 md:space-x-10">
            

            {homeButton ? <MenuItem to={"/"} label="Home" hover={hoverOption} setHover={setHoverOption} /> : null}
            <MenuItem to={"/docs"} label="Docs" hover={hoverOption} setHover={setHoverOption} />
            <MenuItem to={"/about"} label="Acerca de" hover={hoverOption} setHover={setHoverOption} />
        </ul>
    </nav>
  );
}

export default Nav;
