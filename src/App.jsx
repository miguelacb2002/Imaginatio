import HeaderComponent from "./components/HeaderComponent"
import SliderComponent from "./components/SliderComponent";
import SplineComponent from "./components/SplineComponent";
function App() {
  let slides = [
    "/slider_3.jpg",
    "/slider_2.jpg",
    "/slider_1.jpg"
  ]
  return (
    <div className="flex flex-col h-app-container">
      <HeaderComponent />
      <div className="order-1 h-slider-component">
        <SliderComponent slides={slides} />
      </div>
      <div className="order-2 h-spline-component">
        <SplineComponent />
      </div>
    </div>
  )
}

export default App
