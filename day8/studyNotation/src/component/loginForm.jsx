import { useState } from "react";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import{Link} from"react-router-dom"
function LoginForm() {
  const [formData, setFrom] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setPassword] = useState(false);

  function ChangeHandler(event) {
    const { value, name } = event.target;
    setFrom((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form action="">
      <label htmlFor="email">
        {" "}
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
      <span onClick={setPassword((prev)=>!prev)}>
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