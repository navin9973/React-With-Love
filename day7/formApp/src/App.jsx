import { useState } from "react";
function App() {
  const [formData, setform] = useState({
    firstName: "",
    LastName: "",
    email: "",
    text: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  // console.log(formData);

  function changeHandler(event) {
    setform((prevFormData) => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("printing full Data of the form");
    console.log(formData);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="FirstName"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Lastname"
          onChange={changeHandler}
          name="LastName"
          value={formData.LastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="enter your mail here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          name="text"
          placeholder="comments"
          onChange={changeHandler}
          value={formData.text}
        ></textarea>
        <br />
        <br />
        <label htmlFor="isVisible">Am i visible</label>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <br />
        <br />
        <fieldset>
          <legend>Mode</legend>
          <label htmlFor="mode">online-mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            id="mode"
            // checked={formData.mode==="online-mode"}
          />
          <label htmlFor="mode1">offline-mode</label>
          <input
            type="radio"
            name="mode"
            id="mode1"
            value="offline-mode"
            onChange={changeHandler}
            // checked={formData.mode==="offline-mode"}
          />
        </fieldset>
        <label htmlFor="favCar">select your fav car </label>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scarpoi">scarpio</option>
          <option value="fortuner">fortuner</option>
          <option value="bmw">bmw</option>
          <option value="frari">frari</option>
        </select>
        <br />
        <br />
        {/* <input type="submit" value="submit" />  */}{" "}
        {/*aise v button de shate h*/}
        <button>submit</button>
      </form>
    </>
  );
}

export default App;
