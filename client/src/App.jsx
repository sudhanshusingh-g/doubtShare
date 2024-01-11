import { Outlet } from "react-router-dom"
import Navbar from "./components/Header/Navbar"


function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
