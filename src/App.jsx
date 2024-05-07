import React, { useRef } from "react";
import HeaderComponent from "./components/HeaderComponent";
import SliderComponent from "./components/SliderComponent";
import SplineComponent from "./components/SplineComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppComponent from "./components/AppComponent";
import FooterComponent from "./components/FooterComponent";
import EventComponent from "./components/EventComponent";

function App() {
  const sliderRef = useRef(null);
  const splineRef = useRef(null);
  const appRef = useRef(null);
  const eventRef = useRef(null)
  const fotRef = useRef(null);
  const slides = ["/slider_1.png", "/slider_2.png", "/slider_3.png","/slider_4.jpg"];

  return (
    <Router>
      <div>
        <HeaderComponent sliderRef={sliderRef} splineRef={splineRef} appRef={appRef} eventRef={eventRef}/>
        <div ref={sliderRef}>
          <SliderComponent slides={slides} />
        </div>
        <div ref={splineRef}>
          <SplineComponent />
        </div>
        <div ref={eventRef}>
          <EventComponent />
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