import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Docs from "./pages/Docs/Docs"
import Nav from "./components/Nav/Nav"
import Footer from "./pages/LandingPage/Footer/Footer"
import About from "./pages/About/About"
import Terms from "./pages/Terms/Terms"
import ControlApi from "./pages/ControlApi/ControlApi"

function App() {

  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/docs" element={<Docs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/control" element={<ControlApi/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App

