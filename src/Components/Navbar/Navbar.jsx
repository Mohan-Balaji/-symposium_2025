import { useState, useEffect } from "react";
import navimg from "../../assets/avinyaa.png";
import busRoute_PDF from "../../assets/Bus_Routes/rmdbus.pdf";
import cursorImg from "../../assets/cur.png";
import cursorNavImg from "../../assets/nav_cur.png"; // Image for navbar cursor

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cursor = document.createElement("img");
    cursor.classList.add("ufo");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const updateCursor = () => {
      cursor.src = isHoveringNav ? cursorNavImg : cursorImg;
    };

    document.addEventListener("mousemove", moveCursor);
    updateCursor();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, [isHoveringNav]);

  return (
    <nav 
      className="bg-white bg-opacity-75 border-gray-200 dark:bg-gray-900"
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => setIsHoveringNav(false)}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://nextjs-avinya-dkyf.vercel.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={navimg} className="h-8" alt="Avinyaa" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-purple-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Events
              </a>
            </li>
            <li>
              <a href={busRoute_PDF} target="_blank" className="block py-2 px-3 text-white rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Bus Routes
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
