const AppComponent = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[90vh] md:h-[90vh] bg-[url(/Ilustracion.png)] bg-cover bg-center">

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-lg text-center">
      <h2 className="text-2xl font-neonRave">Multimatio</h2>
      <p>Realizado por:
        david, Juliana, camilo, natalia
      </p>
      <button className="flex items-center justify-center text-xl md:text-2xl glitch font-neonRave" data-glitch="Download">DOWNLOAD</button>
    </div>
  </div>
</div>
  );
};

export default AppComponent;