import Spline from '@splinetool/react-spline';
const EventComponent = () => {
  return (
    <div className=' usm:h-[150vh] msm:h-[130vh] sm2:h-[140vh] lg:h-[90vh] bg-gradient-to-r from-roseImaginatio-light to-roseImaginatio-dark pb-96'>
    <h1 className="text-white text-4xl md:text-4xl  py-10 md:pt-[5vh] text-center font-neonRave">ACTIVIDADES</h1>
  
  <div className=' flex justify-center '>  
    <div className='grid grid-cols-1 md:grid-cols-2  gap-72 md:gap-3 px-[2vh] md:px-10'>

    <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
      <Spline scene="https://prod.spline.design/2um0fpf0gpzff8OE/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
        <h2 className="text-xl flex justify-between font-neonRave mb-2">Cyberpunk <br /> Race  <span className='text-sm font-serif text-roseImaginatio-dark font-bold'>Interactua con el modelo</span></h2>
          <p className="text-gray-600 text-sm ">
          ¡Prepárate para una experiencia electrizante en Cyberpunk Race!
        En nuestra feria de proyectos te invitamos a modelar tu propio auto siguiendo la tematica y ponerlo a prueba en una carrera llena de adrenalina.
        No te pierdas la oportunidad de vivir una experiencia cyberpunk inolvidable.
          <br /><br />
          <span className='text-xs text-gray-500'>Modelo por Danny Berchello</span>
          </p>
        </div>
      </div>
      <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
      <Spline scene="https://prod.spline.design/pO1kkFwRI-0hMlxt/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
        <h2 className="text-xl flex justify-between font-neonRave mb-2">Samurai <br />Band  <span className='text-sm font-serif text-roseImaginatio-dark font-bold'>Interactua con el modelo</span></h2>
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
      
    </div>
  </div>
  </div>
  
  );
};

export default EventComponent;