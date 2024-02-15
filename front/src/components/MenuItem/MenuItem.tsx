import { Link } from "react-router-dom";


interface MenuItemProp {
    to:string;
    label:string;
    hover:string | null | undefined;
    setHover: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

function MenuItem({to, label, hover, setHover} : MenuItemProp) {
  return (
    <Link to={to}>
        <li className="cursor-pointer" onMouseEnter={() => setHover(label)} onMouseLeave={() => setHover(null)}>{label}
            <div className={`${hover === label ? "w-full" : "w-0"} h-[1px] bg-primaryColorViolet transition-[width] duration-500`}></div>
        </li>
    </Link>
  )
}

export default MenuItem