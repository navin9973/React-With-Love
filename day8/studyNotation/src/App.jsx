import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./pages/home";
import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
function App() {
  const [islogin, setlogin] = useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar islogin={islogin} setlogin={setlogin}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login setlogin={setlogin} />}></Route>
          <Route
            path="/signup"
            element={<Signup setlogin={setlogin}></Signup>}
          ></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
