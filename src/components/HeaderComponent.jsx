import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import "../glitch.css";

const HeaderComponent = ({ sliderRef, splineRef, appRef }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 flex items-center justify-between xl:justify-start w-full bg-purpleImaginatio p-4 px-8 h-[10vh] z-50 ">
      <div className="xl:w-1/6 text-center text-white h-full xl:px-0 md:px-[2vh] sm:px-0">
        <img className="h-full object-contain" src="/logo.png" alt="" />
      </div>
      <nav
        className={`fixed bg-purpleImaginatio xl:bg-purpleImaginatio w-[80%] md:w[30%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-end gap-10 transition-all duration-500 text-white z-50 md:text-3xl`}
      >
        <Link
          className=" text-xl md:text-2xl glitch " data-glitch="Home"
          to="/Home"
          onClick={() => handleNavClick(sliderRef)}
        >
          HOME
        </Link>
        <Link
          className=" text-xl md:text-2xl glitch " data-glitch="spline"
          to="/spline"  
          onClick={() => {
            handleNavClick(splineRef);
          }}
        >
          SPLINE
        </Link>
        <Link
          className=" text-xl md:text-2xl glitch " data-glitch="app"
          to="/app"  
          onClick={() => handleNavClick(appRef)}
        >
          APP
        </Link>
      </nav>
      <button
        style={{ color: "white" }}
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl md:text-3xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenuLine />}
      </button>
    </header>
  );
};

export default HeaderComponent;
