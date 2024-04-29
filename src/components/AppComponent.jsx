const AppComponent = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[90vh] md:h-[90vh] bg-[url(/Ilustracion.png)] bg-cover bg-center">

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-gray-800 bg-opacity-20 backdrop-blur-sm p-8 rounded-lg text-center">
      <h2 className="text-4xl text-roseImaginatio-light font-thin font-neonRave">Multimatio</h2>
      <p className="text-xl text-white font-medium pt-4 pb-8">Únete a LaTa y enfrenta los diferentes retos que el 
      <span className=" font-thin text-cyan-300 font-neonRave"> Imaginatio</span> tiene preparados para ti
      </p>
      <button className=" items-center justify-center text-xl md:text-2xl glitch font-neonRave " data-glitch="PROXIMAMENTE">PROXIMAMENTE</button>
    </div>
  </div>
</div>
  );
};

export default AppComponent;