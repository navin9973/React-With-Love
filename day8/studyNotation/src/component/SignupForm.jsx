import { useState } from "react";
import { FaRegEye,FaRegEyeSlash } from "react-icons/cg";

function SignupForm() {
  const [formData, setform] = useState({
    firstname: "",lastname:"",email:"",Password:"",confirm:""
  });

  const[showPassword,setPassword]=useState(false)
  function ChangeHandler(event) {
    const [name, value] = event.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <div>
        <button>student</button>
        <button>instructor</button>
      </div>
      <form action="">
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
          type={showPassword?("text"):("password")}
          name="password"
          id="password"
          placeholder="enter password"
          value={FormData.Password}
          onChange={ChangeHandler}
        />
        <span onClick={setPassword((prev)=>!prev)}>
          {showPassword?(<FaRegEye></FaRegEye>):(<FaRegEyeSlash></FaRegEyeSlash> )}
        </span>
        <label htmlFor="confirm">
          <p>
             confirm password<sup>*</sup>
          </p>
        </label>
        <input
          required
          type={showPassword?("text"):("password")}
          name="confirm"
          id="confirm"
          placeholder="confirm password"
          value={FormData.confirm}
          onChange={ChangeHandler}
        />
        <span onClick={setPassword((prev)=>!prev)}>
          {showPassword?(<FaRegEye></FaRegEye>):(<FaRegEyeSlash></FaRegEyeSlash> )}
        </span>
        </div>
        <button>Create Account</button>
        
      </form>
    </div>
  );
}
export default SignupForm;
