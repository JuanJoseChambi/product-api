import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="w-[90%] h-[70px] mx-auto flex justify-between border-b border-neutral-500 items-center bg-greend-500">
        <Link to={"/"}>
            <h2 className="cursor-pointer">PA</h2>
        </Link>
        <ul className="flex justify-center items-center space-x-10">
            <Link to={"/documentacion"}>
                <li className="cursor-pointer">Docs</li>
            </Link>
            <Link to={"/sobre"}>
                <li className="cursor-pointer">About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
