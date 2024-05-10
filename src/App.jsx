import React, { useRef } from "react";
import HeaderComponent from "./components/HeaderComponent";
import SliderComponent from "./components/SliderComponent";
import SplineComponent from "./components/SplineComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppComponent from "./components/AppComponent";
import FooterComponent from "./components/FooterComponent";
import EventComponent from "./components/EventComponent";
import ScheduleComponent from "./components/ScheduleComponent";
import ReactGA from 'react-ga4';


function App() {
  React.useEffect(() => {
    ReactGA.initialize('G-ETK8B1NRQM'); // Reemplaza con tu ID real
  }, []);

  const sliderRef = useRef(null);
  const scheduleRef = useRef(null);
  const splineRef = useRef(null);
  const appRef = useRef(null);
  const eventRef = useRef(null)
  const fotRef = useRef(null);
  const mobileSlides = ["/slider_1.png","/slider_2.png","/slider_3.png","/slider_4.png","/slider_5.png"];
  const slides = ["/slider_1PC.png","slider_2PC.png","slider_3PC.png","slider_4PC.png","slider_5PC.png"];

  return (
    <Router>
      <div>
        <HeaderComponent sliderRef={sliderRef} scheduleRef={scheduleRef} splineRef={splineRef} appRef={appRef} eventRef={eventRef}/>
        <div ref={sliderRef}>
          <SliderComponent slides={slides} mobileSlides={mobileSlides} />
        </div>
        <div ref={scheduleRef}>
          <ScheduleComponent/>
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