import React, { useRef } from "react";
import HeaderComponent from "./components/HeaderComponent";
import SliderComponent from "./components/SliderComponent";
import SplineComponent from "./components/SplineComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppComponent from "./components/AppComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const sliderRef = useRef(null);
  const splineRef = useRef(null);
  const appRef = useRef(null);
  const fotRef = useRef(null);
  const slides = ["/slider_1.jpg", "/slider_2.jpg", "/slider_3.jpg","/slider_4.jpg","/slider_5.jpg"];

  return (
    <Router>
      <div>
        <HeaderComponent sliderRef={sliderRef} splineRef={splineRef} appRef={appRef}/>
        <div ref={sliderRef}>
          <SliderComponent slides={slides} />
        </div>
        <div ref={splineRef}>
          <SplineComponent />
        </div>
        <div ref={appRef}>
          <AppComponent/>
        </div>
        <div ref={fotRef}>
          <FooterComponent/>
        </div>
      </div>
    </Router>
  );
}

export default App;