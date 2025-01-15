import Templet from "../component/templet";
import loginImg from "../assets/login.png";
function Signup({setlogin}){
  return <div>
  <Templet title="welcome Back" desc1="Build skill for today,tomorrow,beyond" desc2="Education is future proof of career" image={loginImg} formtype="login " setlogin={setlogin}
  ></Templet>
</div>
}
export default Signup;