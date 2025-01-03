

import { useState } from "react"
function App() {
 const [formData,setform]=useState({firstName:"",LastName:"",email:""})
 console.log(formData);
 
 function changeHandler(event){
   setform(prevFormData=>{
    return{
      ...prevFormData,
      [event.target.name]:event.target.value,
    }
   });
 }
  return (
    <>
    <form >
      <input type="text" placeholder="FirstName" onChange={changeHandler} name="firstName" value={formData.firstName}/>
<br /><br />
      <input type="text" placeholder="Lastname" onChange={changeHandler} name="LastName" value={formData.LastName}/>
      <br /><br />
      <input type="email" placeholder="enter your mail here"  onChange={changeHandler} name="email" value={formData.email}/>
    </form>

   
       
    </>
  )
}

export default App
