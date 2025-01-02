import Testimonial from "./component/testimonial";
import reviews from "./data";
import "./App.css";
function App() {
  return (
    <><div className="testi">
      <div className="head">
        <div>OUR TESTIMONIALS</div>
        <div className="space"></div>
      </div>
      <div >
        <Testimonial reviews={reviews}></Testimonial>
      </div>
      </div>
    </>
  );
}

export default App;
