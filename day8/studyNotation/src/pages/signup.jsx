import Templet from "../component/templet";
import signupImg from "../assets/signup.png";
function Signup({ setlogin }) {
  return (
    <div>
      <Templet
        title="join the milions learning to code with stuidyNotation for free "
        desc1="Build skill for today,tomorrow,beyond"
        desc2="Education is future proof of career"
        image={signupImg}
        form="signup"
        setlogin={setlogin}
      ></Templet>
    </div>
  );
}
export default Signup;
