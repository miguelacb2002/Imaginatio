import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  return (
    <>
    <div className="flex justify-center items-center h-[50vh] md:h-[100vh] bg-purpleImaginatio">
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full md:max-w-[90%]">
        
        <div className="bg-white shadow-lg rounded-lg h-[75vh] md:h-[75vh] flex flex-col items-center justify-center">
          <div className="h-[60%] w-full">
            <Spline scene="https://prod.spline.design/lV6G-u6XzBLiIEg7/scene.splinecode" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4">
            <h1 className="text-2xl font-bold">Nombre 1</h1>
            <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg h-[75vh] md:h-[75vh] flex flex-col items-center justify-center">
          <div className="h-[60%] w-full">
          <Spline scene="https://prod.spline.design/pO1kkFwRI-0hMlxt/scene.splinecode" />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4">
            <h1 className="text-2xl font-bold">Nombre 2</h1>
            <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg h-[75vh] md:h-[75vh] flex flex-col items-center justify-center">
          <div className="h-[60%] w-full">
            <Spline scene="https://prod.spline.design/lV6G-u6XzBLiIEg7/scene.splinecode" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4">
            <h1 className="text-2xl font-bold">Nombre 3</h1>
            <p className="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SplineComponent;