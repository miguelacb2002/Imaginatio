const ScheduleComponent =()=>{
return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-roseImaginatio-light to-roseImaginatio-dark">
    <div className=" flex items-center justify-center">
        <img className ="h-[90vh]"src="/cronograma.png" alt="Cronograma" />
    </div>
    <div className="flex items-center justify-center">
        <video  className ="h-[90vh]" src="/ubicacion.mp4" controls autoPlay >
            Tu navegador no soporta la reproducción de video 
        </video>

    </div>
    </div>
)
}
export default ScheduleComponent