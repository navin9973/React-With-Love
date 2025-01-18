import Frameimage from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./loginForm";
function Templet({ title, desc1, desc2, image, form, setlogin }) {
  // console.log(formtype);
  
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
      </p>
      {form === "signup" ? (
        <SignupForm setlogin={setlogin}></SignupForm>
      ) : (
        <LoginForm setlogin={setlogin} ></LoginForm>
      )}
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
  );
}
export default Templet;
