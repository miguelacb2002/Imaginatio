import React, { useRef } from "react";
import HeaderComponent from "./components/HeaderComponent";
import SliderComponent from "./components/SliderComponent";
import SplineComponent from "./components/SplineComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const sliderRef = useRef(null);
  const splineRef = useRef(null);
  const slides = ["/slider_3.jpg", "/slider_2.jpg", "/slider_1.jpg"];

  return (
    <Router>
      <div>
        <HeaderComponent sliderRef={sliderRef} splineRef={splineRef} />
        <div ref={sliderRef}>
          <SliderComponent slides={slides} />
        </div>
        <div ref={splineRef}>
          <SplineComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;