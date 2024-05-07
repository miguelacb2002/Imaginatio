import Spline from '@splinetool/react-spline';
const SplineComponent = () => {
  
  return (
    <div className=' usm:h-[150vh] msm:h-[130vh] sm2:h-[140vh] lg:h-[90vh] bg-gradient-to-r from-roseImaginatio-light to-roseImaginatio-dark pb-96'>
    <h1 className="text-white text-4xl md:text-4xl  py-10 md:pt-[5vh] text-center font-neonRave">charlas</h1>
  
  <div className=' flex justify-center '>  
    <div className='grid grid-cols-1 md:grid-cols-2  gap-64 md:gap-3 px-[2vh] md:px-10'>

    <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
  <Spline scene="https://prod.spline.design/9IzpX7kcvJsv4W-f/scene.splinecode" />
    <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
      <h2 className="text-xl font-neonRave mb-2">StreamLine Studios</h2>
      <p className="text-gray-600 text-sm ">
      Desde el año 2001, StreamLine moldea el futuro de los videojuegos, combinando años de experiencia con una visión fresca y diversa.
      ¿Quieres iniciar tu viaje en la industria de los videojuegos?
      ¡No pierdas esta oportunidad única de convertir tu pasión en tu profesión!
      <br /><br />
      <span className='text-xs text-gray-500'>Modelo por Daniel Luengas</span>
      </p>
    </div>
  </div>
  <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
<Spline scene="https://prod.spline.design/SOzSCtn2fSv4JFsy/scene.splinecode" />
    <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg ">
      <h2 className="text-xl font-neonRave mb-2">Womenize</h2>
      <p className="text-gray-600 text-sm ">
      Womenize Latam es el punto de encuentro ideal para mujeres destacadas que buscan visibilidad, inspiración y empoderamiento en la industria latinoamericana de los videojuegos. ¡No te pierdas la oportunidad de ser parte de este movimiento inspirador!
      <br /><br />
      <span className='text-xs text-gray-500'>Modelo por Sebastian Paez</span>
      </p>
    </div>
  </div>
  </div>

      
    </div>
  </div>

  
  );
};

export default SplineComponent;