import Spline from '@splinetool/react-spline';
const SplineComponent = () => {
  return (
    <div className=' usm:h-[280vh] msm:h-[255vh] sm2:h-[270vh] lg:h-[90vh] bg-gradient-to-r from-roseImaginatio-light to-roseImaginatio-dark pb-96'>
    <h1 className="text-white text-2xl md:text-4xl  py-10 md:pt-[5vh] text-center font-neonRave">CONTENIDO</h1>
  
  <div className=' flex justify-center '>  
    <div className='grid grid-cols-1 md:grid-cols-4  gap-64 md:gap-3 px-[2vh] md:px-10'>

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
      <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
      <Spline scene="https://prod.spline.design/pO1kkFwRI-0hMlxt/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-neonRave mb-2">Samurai Band</h2>
          <p className="text-gray-600 text-sm ">
          ¿Eres fanático del anime y te apasiona la música?
          No te pierdas de nuestra banda invitada ¡Samurai Band!
          nuestro concierto  te llevara un mundo de épicas batallas y aventuras.
          Disfruta de un repertorio compuesto por los openings más representativos del mundo del anime.
          <br /><br />
          <span className='text-xs text-gray-500'>Modelo por Diego Cortes</span>
          </p>
        </div>
      </div>
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
      <Spline scene="https://prod.spline.design/2um0fpf0gpzff8OE/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-neonRave mb-2">Cyberpunk-Race</h2>
          <p className="text-gray-600 text-sm ">
          ¡Prepárate para una experiencia electrizante en Cyberpunk Race!
        En nuestra feria de proyectos te invitamos a modelar tu propio auto siguiendo la tematica y ponerlo a prueba en una carrera llena de adrenalina.
        No te pierdas la oportunidad de vivir una experiencia cyberpunk inolvidable.
          <br /><br />
          <span className='text-xs text-gray-500'>Modelo por Danny Berchello</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default SplineComponent;