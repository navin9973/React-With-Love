import { filterData, apiUrl } from "./data";
import Navbar from "./Navbar";
import Filter from "./filter";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./cards";
import Spinner from "./spinner"; 
import { toast } from "react-toastify";
function App() {
  const [courses, setCourse] = useState(null);
  const [loarding, setloarding] = useState(true);
  async function fetchData() {
    setloarding(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // console.log(output);
      
      setCourse(output.data);
    } catch (error) {
      toast.error("something wrong");
    }
    setloarding(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>
      <div>
        {loarding?(<Spinner></Spinner>):(<Cards courses={courses}></Cards>)}
      </div>
    </>
  );
}

export default App;
