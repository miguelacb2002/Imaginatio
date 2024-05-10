import { useState, useEffect } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

const SliderComponent = ({ slides, mobileSlides, interval = 5000 }) => {
  const [esMovil, setEsMovil] = useState(window.innerWidth <= 768); 

  const manejarCambioDeTamaño = () => {
    setEsMovil(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", manejarCambioDeTamaño);
    return () => window.removeEventListener("resize", manejarCambioDeTamaño);
  }, []);

  let [actual, setActual] = useState(0);

  const diapositivaAnterior = () => {
    if (actual === 0) {
      setActual(esMovil ? mobileSlides.length - 1 : slides.length - 1);
    } else {
      setActual(actual - 1);
    }
  };

  const siguienteDiapositiva = () => {
    if (actual === (esMovil ? mobileSlides.length - 1 : slides.length - 1)) {
      setActual(0);
    } else {
      setActual(actual + 1);
    }
  };

  useEffect(() => {
    let temporizador = null;

    const cambioAutomatico = () => {
      setActual((anteriorActual) =>
        anteriorActual === (esMovil ? mobileSlides.length - 1 : slides.length - 1) ? 0 : anteriorActual + 1
      );
    };

    temporizador = setInterval(cambioAutomatico, interval);

    return () => clearInterval(temporizador);
  }, [slides.length, mobileSlides.length, interval, esMovil]);


  const mostrarDiapositivas = esMovil ? mobileSlides : slides;

  return (
    <div className="overflow-hidden h-[90vh] md:h-[90vh] relative text-center bg-[url(/Reticula.png)] bg-cover bg-center ">
      
      <div className={`flex items-center transition ease-out duration-40 translate-x-`} style={{ transform: `translateX(-${actual * 100}%)` }}>
        {mostrarDiapositivas.map((s, index) => (
          <div key={index} className="relative w-full flex-shrink-0 sm:pt-[5vh] sm:px-[4vh] px-[2vh] h-[85vh] sm:h-[80vh]">
            <img src={s} alt={`Diapositiva ${index}`} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-1/2 -translate-y-1/2 left-5 text-white text-6xl sm:text-8xl">
              <button onClick={diapositivaAnterior}>
                <RiArrowDropLeftLine />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-5 text-white text-6xl sm:text-8xl">
              <button onClick={siguienteDiapositiva}>
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
