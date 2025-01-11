import { useNavigate } from "react-router-dom";

function Support(){
  const navigate=useNavigate();
  function changeHandler(){
navigate("/labs ")
  }
  function backHandler(){
    navigate(-1)
  }
  return <div> <div>
  this is support page
 </div>
 <button onClick={changeHandler}>move to lab page</button>
 <button onClick={backHandler}>Go back</button>
 </div>
}

export default Support;