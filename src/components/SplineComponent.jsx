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
          <p className="text-gray-600">Lorem hora:</p>
        </div>
      </div>
      <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
      <Spline scene="https://prod.spline.design/pO1kkFwRI-0hMlxt/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-neonRave mb-2">Samurai Band</h2>
          <p className="text-gray-600">lorem hora:</p>
        </div>
      </div>
      <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
      <Spline scene="https://prod.spline.design/9IzpX7kcvJsv4W-f/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-neonRave mb-2">StreamLine Studios</h2>
          <p className="text-gray-600 "><span className='text-xs'>modelo por Daniel cortes</span><br />
          Womenize es una 
          </p>
        </div>
      </div>
      <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
      <Spline scene="https://prod.spline.design/2um0fpf0gpzff8OE/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-neonRave mb-2">Cyberpunk-Race</h2>
          <p className="text-gray-600 ">Lorem hora:</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default SplineComponent;