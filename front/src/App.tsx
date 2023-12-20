import { Route, Routes } from "react-router-dom"
import ControlApi from "./pages/ControlApi/ControlApi"
import LandingPage from "./pages/LandingPage/LandingPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/control" element={<ControlApi/>}/>
      </Routes>
    </>
  )
}

export default App
