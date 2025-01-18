import { useState } from "react";
// import { FaRegEye,FaRegEyeSlash } from "react-icons/fa"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import{toast} from "react-hot-toast"

import{Link, useNavigate} from"react-router-dom"
function LoginForm({setlogin}) {
  const [formData, setFrom] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setPassword] = useState(false);

  const navigate=useNavigate();

  function ChangeHandler(event) {
    // const { value, name } = event.target;
    setFrom((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
   event.preventDefault();
   navigate("/dashboard");
   setlogin(true)
   toast.success("loged in")
  }


  return (
    <form onSubmit={submitHandler} >
      <label htmlFor="email">    
        Email address <sup>*</sup>
      </label>
      <br />
      <input
        type="email"
        id="email"
        placeholder="enter email address"
        name="email"
        onChange={ChangeHandler}
        value={formData.email}
        required
      />
      <br />
      <br />
      <label htmlFor="password">
        Password <sup>*</sup>
      </label>
      <br />
      <input
        type={showPassword?"text":"password"}
        placeholder="enter your password"
        id="password"
        name="password"
        onChange={ChangeHandler}
        value={formData.password}
        required
      />
      <span onClick={()=>setPassword((prev)=>!prev)}>
        {showPassword?(<FaRegEye></FaRegEye>):(<FaRegEyeSlash></FaRegEyeSlash> )}
      </span>
      <br />
      <Link to="#"
      ><p>Forget Password</p></Link>
      <br />

      <button>Sign in</button>
    </form>
  );
}
export default LoginForm;