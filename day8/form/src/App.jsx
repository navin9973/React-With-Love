import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
function App() {
  const [formData, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    pin: "",
    comment: false,
    condidate: false,
    offer: false,
    notification: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submiteHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <><div className="form-group">
      <br />
      <h2 >Student Registration Form</h2>
      <br />
      <form onSubmit={submiteHandler} >
        <label htmlFor="first" className="form-label">First Name</label>
        <br />
        <input
          type="text"
          placeholder="first name"
          name="firstname"
          onChange={changeHandler}
          value={formData.firstname}
          id="first"
          className="form-control"
        />
        <br />
        
        <label htmlFor="last" className="form-label">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="last name"
          name="lastname"
          value={formData.lastname}
          onChange={changeHandler}
          id="last"
           className="form-control"
        />
        <br />
      
        <label htmlFor="emai" className="form-label">Email address</label>
        <br />
        <input
          type="email"
          placeholder="enter your mail"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          id="emai"
           className="form-control"
        />
        <br />
       
        <label htmlFor="count" className="form-label">Country</label>
        <br />
        <select
        
          name="country"
          id="country"
          onChange={changeHandler}
          value={formData.country}
           className="form-control"
        >
          <option value="" selected >Select Your Country</option>
          <option value="India">India</option>
          <option value="chaina">chaina</option>
          <option value="USA">USA</option>
          <option value="canada">canada</option>
          <option value="Nepal">Nepal</option>
        </select>
        <br />
       
        <label htmlFor="" className="form-label">Street Address</label>
        <br />
        <input
          type="text"
          name="street"
          id="street"
          placeholder="street address"
          value={formData.street}
          onChange={changeHandler}
           className="form-control"
        />
        <br />
        <label htmlFor="city" className="form-label">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="enter city"
          value={formData.city}
          onChange={changeHandler}
           className="form-control"
        />
        <br />
     
        <label htmlFor="state" className="form-label">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="enter your state"
          value={formData.state}
          onChange={changeHandler}
           className="form-control"
        />
        <br />
        
        <label htmlFor="pin" className="form-label">Pin Code</label>
        <br />
        <input
          type="text"
          name="pin"
          id="pin"
          placeholder="844501"
          value={formData.pin}
          onChange={changeHandler}
           className="form-control"
        />
        <fieldset>
          <legend>By Email</legend>
          <input
          type="checkbox"
          name="comment"
          id="comment"
          onChange={changeHandler}
          checked={formData.comment}
          className="form-check-input"
          
        />
        <label htmlFor="comment" className="form-check-label">
          COMMENT
          
        </label>
        <p>get notified when someone posts a comment on a posting</p>
        
        
        <input
          type="checkbox"
          name="condidate"
          id="condidate"
          onChange={changeHandler}
          checked={formData.condidate}
          className="form-check-input"
        />
        <label htmlFor="condidate" className="form-check-label">
          CONDIDATES 
          
        </label>
        <p>get notified when someone condidate applies for a job</p>
        <input
          type="checkbox"
          name="offer"
          id="offer"
          onChange={changeHandler}
          checked={formData.offer}
          className="form-check-input"
        />
        <label htmlFor="offer" className="form-check-label">
          OFFER 
         
        </label>
        <p> get notified when someone accepts or reject an offer</p>
        </fieldset>
        
        
        <fieldset>
          <legend>Push Notification </legend>
          <p> These are delivered via SMS to your mobile
          phone</p>

          <input
          type="radio"
          name="notification"
          id="everything"
          onChange={changeHandler}
          value="everything"
          className="form-check-input"
        />
        <label htmlFor="everything" className="form-check-label">Everything</label>
        <br />
        <br />
        <input
          type="radio"
          name="notification"
          id="same"
          onChange={changeHandler}
          value="same as mail"
          className="form-check-input"
        />
        <label htmlFor="same" className="form-check-label">Same as Mail</label>
        <br />
        <br />
        <input
          type="radio"
          name="notification"
          id="push"
          onChange={changeHandler}
          value="no push button"
          className="form-check-input"
        />
        <label htmlFor="push" className="form-check-label"> No Push Button</label>
        <br />
        <br />
        </fieldset>
       
       
        <button className="btn btn-primary">Save</button>
      </form>
      </div>
    </>
  );
}

export default App;
