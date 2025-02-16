import { useState, useEffect } from "react";
// import navimg from "../../assets/avinyaa.png";
import busRoute_PDF from "../../assets/Bus_Routes/rmdbus.pdf";
import "../../assets/fonts/avinyaa.otf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white/10 backdrop-blur-ls border-gray-200 font-[Lato] relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://nextjs-avinya-dkyf.vercel.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-4xl text-gray-200">
            AVINYAA<sup className="align-super text-sm">25</sup>
          </h1>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 borderounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a href="/" className="block py-2 px-3 text-gray-200 rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Home
              </a>
            </li>
            <li>
              <a href="/events" className="block py-2 px-3 text-gray-200 rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Events
              </a>
            </li>
            <li>
              <a href="/registration" className="block py-2 px-3 text-gray-200 rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Register
              </a>
            </li>
            <li>
              <a href={busRoute_PDF} target="_blank" className="block py-2 px-3 text-gray-200 rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Bus Routes
              </a>
            </li>
           
            <li>
              <a href="/contact" className="block py-2 px-3 text-gray-200 rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
