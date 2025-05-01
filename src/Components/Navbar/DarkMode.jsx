import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import { FaCloudMoon } from "react-icons/fa";

import DarkButton from "../../assets/website/dark-mode-button.png";
import { IoPartlySunny } from "react-icons/io5";


const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light"); 
    }
  }, [theme]);

  return (
    <div className="relative">
      <div className={`text-[30px] text-yellow-300 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <IoPartlySunny />
      </div>
      <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`text-[30px] dark:text-white cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}>
        <FaCloudMoon  />
      </div>
    </div>
  );
};

export default DarkMode;
