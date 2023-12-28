import { Route, Routes } from "react-router-dom"
import ControlApi from "./pages/ControlApi/ControlApi"
import LandingPage from "./pages/LandingPage/LandingPage"
import Docs from "./pages/Docs/Docs"
import Nav from "./components/Nav/Nav"

function App() {

  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/inicio" element={<LandingPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/documentacion" element={<Docs/>}/>
        <Route path="/control" element={<ControlApi/>}/>
      </Routes>
    </>
  )
}

export default App
