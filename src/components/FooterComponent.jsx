import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return(
       <div className="bg-black grid grid-cols-3 text-center">
        <div className="flex items-center justify-center">
            <img className=" py-2 h-[5vh] md:h-[8vh]"  src="/logo.png" alt=""/>
        </div>
        <div className="text-white flex justify-center items-center">
            <Link to="https://www.instagram.com/ing.enmultimedia/" className="">
                <button className="text-white text-sm md:text-2xl hover:text-purpleImaginatio">
                <RiInstagramLine />
                </button>
            </Link>
            <Link to="https://www.instagram.com/ing.enmultimedia/" className="">
            <h1 className="text-white text-sm md:text-lg ml-3 hover:text-purpleImaginatio">ing.enmultimedia</h1>
            </Link>
        </div>
        <div className="flex text-xs md:text-lg items-center justify-center text-white">
            <h1>Laura Prieto <br /> & Miguel Cabrera</h1>
        </div>
       </div>
    )
}
export default FooterComponent;