import React, { useState } from 'react'; 

export default function Header({scrollToSection}){
  const [isOpen, setIsOpen] = useState(false);
  // const [active, setIsactive] = useState(false);
  const handleMenuItemClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

    return(
  <header className="border-gray-200 z-10 header-color dark:bg-gray-800 dark:border-gray-700 sticky top-0">
    <div className="max-w-screen-xl flex block relative justify-between items-center mx-auto p-4">
    <h1 className="font-bold text-3xl"><a onClick={() => handleMenuItemClick('banner')} className="cursor-pointer">Shoon Laat</a></h1>
      <div className ="block text-right md:hidden">
        <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 outline-none hover:text-black-400">
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
    <nav className={`w-full md:w-3/4 md:flex md:flex-wrap md:items-center md:justify-end md:relative md:right-unset md:top-unset h-auto absolute right-0 top-16 md:opacity-100 md:visible md:top-0 ${isOpen ? "opacity-100 visible h-full" : "opacity-0 invisible h-0"}`}>
        <div className="w-full top-1 md:bg-inherit header-color md:relative md:left-unset md:right-unset absolute left-0 right-0 block md:w-auto transition-all duration-300 ease-in-out md:opacity-100 md:visible md:h-full">
          <ul className="md:flex block font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li className="py-2 px-4 text-center">
                <a onClick={() => handleMenuItemClick('about')} className="border-color cursor-pointer">Who Am I?</a>
            </li>
            <li className="py-2 px-4 text-center">
                <a onClick={() => handleMenuItemClick('projects')} className="border-color cursor-pointer">Projects</a>
            </li>
            <li className="py-2 px-4 text-center">
                <a onClick={() => handleMenuItemClick('contact')} className="border-color cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
    </div>
</header>

    )
}