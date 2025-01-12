import Frameimage from "../assets/frame.png"
function Templet({title,desc1,desc2,image,formtype,setlogin}){
  return <div>
  <h1>{title}</h1>
  <p>
    <span>{desc1}</span>
    <span>{desc2}</span>
  </p>
  {formtype===signup?(<SignupForm></SignupForm>):(<LoginForm></LoginForm>)}
  <div>
    <div></div>
    <div>or</div>
    <div></div>
  </div>
  <button>Sign up With Google</button>

  <div>
    <img src={Frameimage} alt="frame" />
    <img src={image} alt="student" />
  </div>

  </div>
}
export default Templet;