import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eventpage from "../../assets/eventpage.jpg";
import Background from "../../Components/Background/Background";

function CodeHeist() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
    navigate("/registration");
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-28 text-white z-20">
      <div className="w-full max-w-6xl p-6 border border-white z-20 bg-white/10 backdrop-blur-lg shadow-1xl  rounded-2xl mb-20 mt-8 md:mt-12">
        <h1 className="text-4xl md:text-5xl text-center mb-6 ">CODE HEIST</h1>
        <div className="flex justify-center">
  <img
    src={eventpage}
    alt="Code Heist Poster"
    className="h-auto rounded-lg md:w-xl"
  />
</div>


        <div className="text-lg md:text-xl mt-4 text-purple-400 py-5">Description :</div>
        <p className="text-white text-sm md:text-base px-4 py-2 leading-relaxed">
          In this exciting coding challenge, participants will be given three programming questions that contain logical or syntactical errors. Their task is to debug the code and determine the correct output for each question. The final outputs will form a password that unlocks a hidden file. Inside the file, participants will find an image-based puzzle containing a technical word. The first to decipher and submit the correct word wins!
        </p>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Number of Players :</p>
          <p className="text-white text-sm md:text-base px-4 py-2">1</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Duration :</p>
          <p className="text-sm md:text-base px-4 py-2">30 mins</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Cash Prize :</p>
          <p className="text-sm md:text-base px-4 py-2">First Prize - 1500</p>
          <p className="text-sm md:text-base px-4 py-2">Second Prize - 1000</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">How to Play :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Each participant will receive three coding questions containing errors.</li>
            <li>Debug each question to find the correct output.</li>
            <li>Each correct output will serve as a password for a corresponding file.</li>
            <li>Open each file using the respective password.</li>
            <li>Each file will contain an image representing part of a technical word.</li>
            <li>Combine the clues from all three images to determine the final word.</li>
            <li>Submit your answer. The fastest participant wins!</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Rules :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Only one participant per entry.</li>
            <li>Participants can use C, Java, or Python.</li>
            <li>The first participant to find the correct answer wins.</li>
            <li>The challenge must be completed within the time limit.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Contact Us :</p>
          <ul className="list-none text-sm md:text-base px-4 py-2">
            <li>📞 Dharshini (Coordinator) - 7200234813</li>
            <li>📞 ArulRaj (Co-coordinator) - 7904009208</li>
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
      </div>
      <Background/>
    </div>
  );
}

export default CodeHeist;
