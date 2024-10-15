import React, { useState } from "react";
import { useTheme } from "../context/ThemeProvider";

export default function Header({ scrollToSection }) {
  const { toggleTheme, darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleMenuItemClick = (id) => {
    console.log("id",id)
    scrollToSection(id);
    setIsOpen(false);
    setIsActive(id);
  };
  return (
    <header className="border-gray-200 z-10 header-color dark:bg-gray-800 dark:border-gray-700 sticky top-0">
      <div className="max-w-screen-xl flex block relative justify-between items-center mx-auto p-4">
        <h1 className="font-bold text-3xl">
          <a
            onClick={() => handleMenuItemClick("banner")}
            className="cursor-pointer"
          >
            Shoon Laat
          </a>
        </h1>
        <div className="block text-right md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 outline-none hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <nav
          className={`w-full md:w-3/4 md:flex md:flex-wrap md:items-center md:justify-end md:relative md:right-unset md:top-unset h-auto absolute right-0 top-16 md:opacity-100 md:visible md:top-0 ${
            isOpen ? "opacity-100 visible h-full" : "opacity-0 invisible h-0"
          }`}
        >
          <div className="w-full top-1 md:bg-inherit header-color md:relative md:left-unset md:right-unset absolute left-0 right-0 block md:w-auto transition-all duration-300 ease-in-out md:opacity-100 md:visible md:h-full">
            <ul className="md:flex block font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li className="py-2 px-4 text-center">
                <a
                  onClick={() => handleMenuItemClick("about")}
                  className={`border-color cursor-pointer ${isActive === "about" ? 'active' : ''}`}
                >
                  Who Am I?
                </a>
              </li>
              <li className="py-2 px-4 text-center">
                <a
                  onClick={() => handleMenuItemClick("projects")}
                  className={`border-color cursor-pointer ${isActive === "projects" ? 'active' : ''}`}
                >
                  Projects
                </a>
              </li>
              <li className="py-2 px-4 text-center">
                <a
                  onClick={() => handleMenuItemClick("contact")}
                  className={`border-color cursor-pointer ${isActive === "contact" ? 'active' : ''}`}
                >
                  Contact
                </a>
              </li>
              <li className="py-2 px-4 text-center">
                <button
                  id="theme-toggle"
                  onClick={toggleTheme}
                  type="button"
                  className="text-gray-500 dark:text-gray-400 focus:outline-none focus:none dark:focus:none rounded-lg text-sm p-2.5"
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className={`fill-white h-5 w-5 ${
                      darkMode ? "block" : "hidden"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className={`fill-white h-5 w-5 ${
                      darkMode ? "hidden" : "block"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
