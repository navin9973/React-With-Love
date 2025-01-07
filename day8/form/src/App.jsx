import { useState } from "react";

function App() {
  const [formData, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    street: "",
    city: "",
  });
  console.log(formData);

  function changeHandler(event) {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <form>
        <label htmlFor="first">First Name</label>
        <br />
        <input
          type="text"
          placeholder="first name"
          name="firstname"
          onChange={changeHandler}
          value={formData.firstname}
          id="first"
        />
        <br />
        <br />
        <label htmlFor="last">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="last name"
          name="lastname"
          value={formData.lastname}
          onChange={changeHandler}
          id="last"
        />
        <br />
        <br />
        <label htmlFor="emai">Email address</label>
        <br />
        <input
          type="email"
          placeholder="enter your mail"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          id="emai"
        />
        <br />
        <br />
        <label htmlFor="count">Country</label>
        <br />
       <select name="country" id="country">
        <option value="">India</option>
        <option value="">chaina</option>
        <option value="">USA</option>
        <option value="">canada</option>
        <option value="">Nepal</option>
       </select>
        <br />
        <br />
        <label htmlFor="">Street Address</label>
        <br />
        <input
          type="text"
          name="street"
          id="street"
          placeholder="street address"
          value={formData.street}
        />
        <br />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="enter city"
          value={formData.city}
          onChange={changeHandler}
        />
        <br /><br /><label htmlFor="state">State</label><br />
        <input type="text" name="state" id="state"placeholder="enter your state" value={formData.state} onChange={changeHandler} />
        <br /><br /><label htmlFor="pin">Pin Code</label><br />
        <input type="text" name="pin" id="pin" placeholder="844501"  value={formData.pin} onChange={changeHandler}/>
        <h3>By Email</h3>
      
        <input type="checkbox" name="" id="comment" />
        <label htmlFor="comment">comment <br />
        get notified when someone posts a comment on a posting
        </label><br /><br />
        <input type="checkbox" name="" id="condidate" />
        <label htmlFor="condidate">condidates <br />
        get notified when someone condidate applies for a job
        </label>
        <br /><br />
        <input type="checkbox" name="" id="offer" />
        <label htmlFor="offer">offers <br />
        get notified when someone accepts or reject an offer
        </label>

      </form>
    </>
  );
}

export default App;
