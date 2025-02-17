import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mlevent.css";
import eventpage from "../../assets/eventpage.jpg";
import Background from "../../Components/Background/Background";

function Mlshowdown() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150); // Reset after 150ms
    navigate("/registration");
    window.location.reload();
   
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-28 text-white z-20">
      <div className="w-full max-w-6xl p-6 border border-white z-20 bg-white/10 backdrop-blur-lg shadow-1xl rounded-2xl mb-20 mt-8 md:mt-12">
        <h1 className="text-4xl md:text-5xl text-center mb-6 ">ML SHOWDOWN</h1>
        <div className="flex justify-center">
          <img src={eventpage} alt="ML Showdown Poster" className="h-auto rounded-lg md:w-xl" />
        </div>

        <div className="text-lg md:text-xl mt-4 text-purple-400 py-5">Description :</div>
        <p className="text-white text-sm md:text-base px-4 py-2 leading-relaxed">
          In this high-stakes Machine Learning challenge, teams will be provided with a dataset and must develop a model to achieve the highest accuracy. Along the way, a rapid-fire quiz will test participants’ ML knowledge, offering bonus points that can make all the difference. The team with the highest combined score wins!
        </p>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Number of Players :</p>
          <p className="text-white text-sm md:text-base px-4 py-2">Each team must have 2 to 3 members</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Duration :</p>
          <p className="text-sm md:text-base px-4 py-2">1 hour (45 minutes for model building + 15 minutes for the rapid-fire quiz).</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Cash Prize :</p>
          <p className="text-sm md:text-base px-4 py-2">First Prize - 1500</p>
          <p className="text-sm md:text-base px-4 py-2">Second Prize - 1000</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">How to Play :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Teams will receive a dataset and must build a Machine Learning model to achieve the best accuracy.</li>
            <li>The challenge includes a rapid-fire quiz with ML-related questions.</li>
            <li>Correct quiz answers will earn bonus points, giving teams an edge.</li>
            <li>At the end of the challenge, model accuracy and quiz performance will determine the winners.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Rules :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Teams must consist of 2 to 3 members.</li>
            <li>Any programming language or ML framework can be used.</li>
            <li>The challenge must be completed within the given time limit.</li>
            <li>No copying of the code is allowed.</li>
            <li>The team coordinators will decide the final results.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Scoring :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Model Accuracy: 70% of the total score.</li>
            <li>Quiz Performance: 30% of the total score.</li>
            <li>The team with the highest combined score (accuracy + quiz points) wins.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Contact Us :</p>
          <ul className="list-none text-sm md:text-base px-4 py-2">
            <li>📞 Jayasri (Coordinator) - 6380085033</li>
            <li>📞 Kabilesh (Co-coordinator) - 9176782009</li>
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
    </div>
  );
}

export default Mlshowdown;
