import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

import { toast } from "react-hot-toast";

function Navbar({ islogin, setlogin }) {
  return (
    <div>
      <Link to="/">
        <img src={logo} />
      </Link>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link t="/">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      {!islogin && (
        <Link to="/login">
          <button>Log in</button>
        </Link>
      )}
      {!islogin && (
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      )}
      {islogin && (
        <Link to="/">
          <button
            onClick={() => {
              setlogin(false);
              toast.success("logout");
            }}
          >
            Log out
          </button>
        </Link>
      )}
      {islogin && (
        <Link to="/dashboard">
          <button>Dashboard </button>
        </Link>
      )}
    </div>
  );
}
export default Navbar;
