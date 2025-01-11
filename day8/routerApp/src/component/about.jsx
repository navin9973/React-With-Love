import { useNavigate } from "react-router-dom";

function About(){
  const navigate=useNavigate();
  function clickHandler(){
   navigate("/support")
  }
  function backHandler(){
    navigate(-1)
  }
  return  <div>
  <div>
   this is about page
  </div>
  <button onClick={clickHandler}>move to support page</button>
  <button onClick={backHandler}>Go back</button>
  </div>
}

export default About;