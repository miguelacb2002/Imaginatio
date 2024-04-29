import { useState, useEffect } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

const SliderComponent = ({ slides, interval = 5000 }) => {
  let [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };


  useEffect(() => {
    let timerId = null;

    const autoSlide = () => {
      setCurrent((prevCurrent) => (prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1));
    };

    timerId = setInterval(autoSlide, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [slides.length, interval]); 

  return (
    <div className="overflow-hidden h-[90vh] md:h-[90vh] relative text-center bg-gradient-to-l from-roseImaginatio-light to-roseImaginatio-dark ">
      <h1 className="text-white text-4xl md:text-4xl py-3 md:pt-10 font-neonRave">IMAGINATIO</h1>
      <div className={`flex items-center transition ease-out duration-40 translate-x-`} style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((s, index) => (
          <div key={index} className="relative w-full flex-shrink-0 sm:pt-[5vh] sm:px-[4vh] px-[2vh] h-[80vh] sm:h-[70vh]">
            <img src={s} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-1/2 -translate-y-1/2 left-5 text-white text-6xl sm:text-8xl">
              <button onClick={previousSlide}>
                <RiArrowDropLeftLine />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-5 text-white text-6xl sm:text-8xl">
              <button onClick={nextSlide}>
                <RiArrowDropRightLine />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
