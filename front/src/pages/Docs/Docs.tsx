import Header from "./NavDocs/NavDocs"
import MainDocs from "./MainDocs/MainDocs"

function Docs() {
  return (
    <div className="w-full bg-redd-500 flex justify-center mdl:justify-end items-start">
        <Header/>
        <MainDocs/>
    </div>
  )
}

export default Docs