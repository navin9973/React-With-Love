import {Routes,Route} from "react-router-dom"
import './App.css'
import Navbar from "./component/navbar"
import Home from "./pages/home"
import { useState } from "react"
import Dashboard from "./pages/dashboard"

function App() {
const [islogin,setlogin]=useState(false)

  return (
   <>
   <div>
    <Navbar islogin={islogin} setlogin={setlogin}></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/contact" element={<Home></Home>}></Route>
    </Routes>
    
   </div>
    </>
  )
}

export default App;
