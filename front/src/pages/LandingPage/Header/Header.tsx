import { useLocation } from "react-router-dom"

function Header() {
  
  const location = useLocation()

  return (
    <header className="area bg-red-500">
        Header
        <button ></button>
    </header>
  )
}

export default Header