const ScheduleComponent =()=>{
return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[url(/Reticula.png)] bg-cover bg-center">
    <div className=" flex items-center justify-center">
        <img className ="h-[90vh]"src="/cronograma.png" alt="Cronograma" />
    </div>
    <div className="flex items-center justify-center">
        <video  className ="h-[90vh]" src="/ubicacion.mp4" controls >
            Tu navegador no soporta la reproducción de video 
        </video>

    </div>
    </div>
)
}
export default ScheduleComponent