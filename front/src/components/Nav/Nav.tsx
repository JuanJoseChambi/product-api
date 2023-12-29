import { Link, useLocation } from "react-router-dom";
function Nav() {

    const {pathname} = useLocation()

    const homeButton = pathname === "/about" || pathname === "/docs" || pathname === "/terms"

  return (
    <nav className="w-[90%] h-[70px] mx-auto flex justify-between  border-b border-neutral-500 items-center bg-greend-500">
        <Link to={"/"}>
            <h2 className="cursor-pointer">PA</h2>
        </Link>
        <ul className="flex justify-center items-center space-x-10">
            {homeButton ? <Link to={"/"}>
                <li className="cursor-pointer">Home</li>
            </Link> : null}
            <Link to={"/docs"}>
                <li className="cursor-pointer">Docs</li>
            </Link>
            <Link to={"/about"}>
                <li className="cursor-pointer">About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
