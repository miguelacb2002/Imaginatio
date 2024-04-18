import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  return (
    <div className='h-[190vh] md:h-[90vh] lg:h-[90vh] bg-slate-600'>
    <h1 className="text-white text-2xl md:text-4xl  py-10 md:pt-[5vh] text-center">CONTENIDO</h1>
  
  <div className=' flex justify-center '>  
    <div className='grid grid-cols-1 md:grid-cols-3  gap-60 md:gap-3 px-[2vh] md:px-10'>

    <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
        <Spline scene="https://prod.spline.design/pO1kkFwRI-0hMlxt/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-semibold mb-2">Nombre</h2>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi voluptatibus laudantium, nemo fugiat perferendis porro officia veritatis sit architecto delectus! Non delectus quibusdam ut modi sequi aliquid, iusto expedita.</p>
        </div>
      </div>
      <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
        <Spline scene="https://prod.spline.design/pO1kkFwRI-0hMlxt/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-semibold mb-2">Nombre</h2>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi voluptatibus laudantium, nemo fugiat perferendis porro officia veritatis sit architecto delectus! Non delectus quibusdam ut modi sequi aliquid, iusto expedita.</p>
        </div>
      </div>
      <div className='h-[30vh] md:h-[40vh] w-full  rounded-lg '>
        <Spline scene="https://prod.spline.design/pO1kkFwRI-0hMlxt/scene.splinecode" />
        <div className="p-4 border shadow-lg bg-white rounded-b-lg rounded-br-lg">
          <h2 className="text-xl font-semibold mb-2">Nombre</h2>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi voluptatibus laudantium, nemo fugiat perferendis porro officia veritatis sit architecto delectus! Non delectus quibusdam ut modi sequi aliquid, iusto expedita.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default SplineComponent;