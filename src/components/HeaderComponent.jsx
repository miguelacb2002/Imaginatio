import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import "../glitch.css";

const HeaderComponent = ({ sliderRef, scheduleRef, splineRef, appRef, eventRef }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Ref to hold the menu element

  // Handle click outside the menu on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]); // Dependency array ensures the effect runs only when menuRef changes

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    // Close menu after clicking a navigation link on mobile
    if (window.innerWidth <= 768) { // Adjust breakpoint as needed
      setShowMenu(false);
    }
  };

  return (
    <header
      className="sticky top-0 flex items-center justify-between xl:justify-start w-full bg-purpleImaginatio p-4 px-8 h-[10vh] z-50 "
    >
      <div className="xl:w-1/6 text-center text-white h-full xl:px-0 md:px-[2vh] sm:px-0">
        <img className="h-full object-contain" src="/logo.png" alt="" />
      </div>
      <nav
        className={`fixed bg-purpleImaginatio xl:bg-purpleImaginatio w-[80%] md:w[30%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-end gap-10 transition-all duration-500 text-white z-50 md:text-3xl`}
        ref={menuRef} // Assign the ref to the menu element
      >
        <Link
          className=" text-xl md:text-2xl glitch lg:hidden"
          data-glitch="INICIO"
          to="/Home"
          onClick={() => handleNavClick(sliderRef)}
        >
          INICIO
        </Link>
        <Link
          className=" text-xl md:text-2xl glitch "
          data-glitch="CRONOGRAMA"
          to="/schedule"
          onClick={() => {
            handleNavClick(scheduleRef);
          }}
        >
          CRONOGRAMA
        </Link>
        <Link
          className=" text-xl md:text-2xl glitch "
          data-glitch="CHARLAS"
          to="/CHARLAS"
          onClick={() => {
            handleNavClick(splineRef);
          }}
        >
          CHARLAS
        </Link>
        <Link
          className=" text-xl md:text-2xl glitch "
          data-glitch="ACTIVIDADES"
          to="/spline"
          onClick={() => {
            handleNavClick(eventRef);
          }}
        >
          ACTIVIDADES
        </Link>
        <Link
          className=" text-xl md:text-2xl glitch "
          data-glitch="app"
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
