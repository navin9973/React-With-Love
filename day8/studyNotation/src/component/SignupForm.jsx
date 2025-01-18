import { useState } from "react";
// import { FaRegEye,FaRegEyeSlash } from "react-icons/cg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function SignupForm({ setlogin }) {
  const [formData, setform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    
  });




  const [visible, setvisible] = useState(false);
  function toogle() {
    setvisible((prev) => !prev);
  }
  const navigate = useNavigate();
  const [showPassword, setPassword] = useState(false);
  function ChangeHandler(event) {
    const { name, value } = event.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function SubmitHandler(event) {
    event.preventDefault()
   console.log(formData);
   




    if (formData.password != formData.confirm) {
      toast.error("password do not match")
      return
    }
    setlogin(true);
    toast.success("account created");
    navigate("/dashboard");
  }
  return (
    <div>
      <div>
        <button>student</button>
        <button>instructor</button>
      </div>
      <form onSubmit={SubmitHandler}>
        {/* first and last name */}
        <div>
          <label htmlFor="firstname">
            <p>
              First Name <sup>*</sup>
            </p>
          </label>
          <input
            required
            type="text"
            name="firstname"
            id="firstname"
            placeholder="enter first name"
            value={FormData.firstname}
            onChange={ChangeHandler}
            
          />
          <label htmlFor="lastname">
            <p>
              Last name <sup>*</sup>
            </p>
          </label>
          <input
            required
            type="text"
            name="lastname"
            id="lastname"
            placeholder="enter last name"
            value={FormData.lastname}
            onChange={ChangeHandler}
          />
        </div>
        {/* email address */}

        <label htmlFor="email">
          <p>
            Email address <sup>*</sup>
          </p>
        </label>
        <input
          required
          type="text"
          name="email"
          id="email"
          placeholder="enter email address"
          value={FormData.email}
          onChange={ChangeHandler}
        />
        <div>
          <label htmlFor="password">
            <p>
              Create Password <sup>*</sup>
            </p>
          </label>
          <input
            required
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="enter password"
            value={FormData.password}
            onChange={ChangeHandler}
          />
          <span onClick={toogle}>
            {visible ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}
          </span>
          <label htmlFor="confirm">
            <p>
              confirm password<sup>*</sup>
            </p>
          </label>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="confirm"
            id="confirm"
            placeholder="confirm password"
            value={FormData.confirm}
            onChange={ChangeHandler}
          />
          <span onClick={() => setPassword((prev) => !prev)}>
            {showPassword ? (
              <FaRegEye></FaRegEye>
            ) : (
              <FaRegEyeSlash></FaRegEyeSlash>
            )}
          </span>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}
export default SignupForm;
