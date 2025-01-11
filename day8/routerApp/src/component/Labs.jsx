import { useNavigate } from "react-router-dom";

function Lab(){
  const navigate=useNavigate();
  function ClickHandler(){
    navigate("/about")
  }
  function backHandler(){
    navigate(-1)
  }
  return <div> <div>
  this is lab page
 </div>
<button onClick={ClickHandler}>move to about page</button>
<button onClick={backHandler}>Go back</button>
</div>
}
export default Lab;