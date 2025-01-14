
import{useState} from "react";
import './App.css';


function App() {
  const [res,setRes]=useState(0);
  function subhandler(){
    setRes(res -1);
  }
  function addhandler(){
    setRes(res+1);
  }
  function reset(){
    setRes(0);
  }

  return (
    <div className="App">
      <h2 className="heading">Increament and Decreament</h2>
      <div className='middle'>
        <div className="btn" onClick={subhandler}>-</div>
        <div className="btn" >{res}</div>
        <div className="btn" onClick={addhandler}>+</div>
      </div>
    <button className="footer" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
