import React, {useState} from "react"
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
const HeaderComponent=()=>{
    const [showMenu, setShowMenu] = useState(false)
    return(
        <header class="flex items-center justify-between xl:justify-start w-full bg-blueImaginatio-light p-4 px-8 h-[10vh] z-50 relative">
        <div class="xl:w-1/6 text-center text-white h-full xl:px-0 md:px-[2vh] sm:px-0">
          <img class="h-full object-contain" src="/logo.png" alt="" />
        </div>
        <nav class={`fixed bg-blueImaginatio-light xl:bg-blueImaginatio-light w-[80%] md:w[30%] xl:w-full h-full 
        ${showMenu ? "left-0":"-left-full"} 
            top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 text-white z-50 md:text-3xl`}>
          <a className=" hover:text-blue-900 text-xl md:text-2xl" href="#">HOME</a>
          <a className=" hover:text-blue-900 text-xl md:text-2xl"href="#">CONTENT</a>
          <a className=" hover:text-blue-900 text-xl md:text-2xl"href="#">APP</a>
        </nav>
        <button style={{ color: 'white' }} onClick={()=> setShowMenu(!showMenu)} class="xl:hidden text-2xl md:text-3xl p-2">
          {showMenu? <RiCloseLine />:<RiMenuLine />}
        </button>
      </header>
    )
}
export default HeaderComponent 
