import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import eventpage from "../../assets/eventpage.jpg";
import Background from "../../Components/Background/Background";

function Codetastic() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
    navigate("/registration");
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-28 text-white z-20">
      <div className="w-full max-w-6xl p-6 border border-white z-20 bg-white/10 backdrop-blur-lg shadow-1xl rounded-2xl mb-20 mt-8 md:mt-12">
        <h1 className="text-4xl md:text-5xl text-center mb-6 ">Codetastic</h1>
        <div className="flex justify-center">
          <img src={eventpage} alt="BLINDBYTES Poster" className="h-auto rounded-lg md:w-xl" />
        </div>

        <div className="text-lg md:text-xl mt-4 text-purple-400 py-5">Description :</div>
        <p className="text-white text-sm md:text-base px-4 py-2 leading-relaxed">
        Codetastic blends coding challenges with fun games, testing technical skills and quick thinking across three unique rounds.
        </p>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Number of Players :</p>
          <p className="text-white text-sm md:text-base px-4 py-2">1</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Duration :</p>
          <p className="text-sm md:text-base px-4 py-2">40 mins</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Cash Prize :</p>
          <p className="text-sm md:text-base px-4 py-2">First Prize - ₹1500</p>
          <p className="text-sm md:text-base px-4 py-2">Second Prize - ₹1000</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">How to Play :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Round 1: Quiz Challenge – Score at least 3 points to qualify.</li>
            <li>Round 2: Cup & Ball Game – Pick two cups with hidden colored balls:</li>
            <ul className="ml-5">
              <li>🔴 Red – 4 min coding time</li>
              <li>🔵 Blue – 5 min coding time</li>
              <li>🟢 Green – 3 min coding time</li>
            </ul>
            <li>Mismatch? Wait 5 sec before retrying.</li>
            <li>Round 3: Surprise on-spot event.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Rules :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Solo entry with own Laptop.</li>
            <li>Allowed languages: C, C++, Java.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Contact Us :</p>
          <ul className="list-none text-sm md:text-base px-4 py-2">
            <li>📞 Ram Ganesh E (Coordinator) - 9150327795</li>
            <li>📞 Lakshmi K (Co-coordinator) - 7358646961</li>
          </ul>
        </div>

        <button
          onClick={handleClick}
          className={`mt-6 bg-purple-500 text-white w-full text-center px-6 py-3 rounded-lg text-lg uppercase font-bold shadow-lg transition-all ${
            isClicked ? "bg-purple-700 scale-85" : "hover:bg-purple-600 hover:scale-102"
          }`}
        >
          Register Now
        </button>
        <Background/>
      </div>
    </div>
  );
}

export default Codetastic;
