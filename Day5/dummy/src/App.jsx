import { useEffect, useState } from "react";
function App() {
  const [text,settext] = useState('');

  //variation 1 render evertime
  // useEffect(()=>{
  //   console.log("render complete");
  // });

  //vartiation 2 render one time
  // useEffect(() => {
  //   console.log("render complete");
  // }, []);

  //vartiation 3 render first time and  when dependency change
  // useEffect(() => {
  //   console.log("render complete");
  // }, [text]);

//variation 4 clean up remove and add
  useEffect(() => {
    console.log("listner added");
    return () =>{
      console.log("listner remove");
    }
    
  }, [text]);

  function changeHandle(event) {
    settext(event.target.value);
    console.log(text);
  }

  return (
    <><div>
      <input type="text" onChange={changeHandle}></input>
  
      </div>
    </>
  );
}

export default App;
