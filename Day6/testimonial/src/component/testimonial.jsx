import Card from "./card";
import "./testimonial.css";
import { useState } from "react";
function Testimonial({ reviews }) {
 const [index,setindex]=useState(0)

 function leftHandler(){
  if(index-1 <0){
    setindex(reviews.length-1);
  }
  else{
    setindex(index-1);
  }
 }
  function rightHandle(){
    if(index+1 >= reviews.length){
      setindex(0);
    }
    else{
      setindex(index+1);
    }
  }
   
  function surpriseHandle(){
  let numb= Math.floor(Math.random()*reviews.length);
  setindex(numb);
  }
 

  return (
    <>
      <div className="main">
           <Card reviews={reviews[index]}></Card>
        
        <div>
          <button className="next" onClick={leftHandler}>{"<"}</button>
          <button className="next" onClick={rightHandle}>{">"}</button>
        </div>
        <div>
          <button className="butn" onClick={surpriseHandle}>surprise me</button>
        </div>
      </div>
    </>
  );
}
export default Testimonial;
