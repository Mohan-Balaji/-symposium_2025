import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import eventpage from "../../assets/eventpage.jpg";
import Background from "../../Components/Background/Background";

function DesignX() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150); // Reset after 150ms
    navigate("/registration");
    // window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-28 text-white z-20">
      <div className="w-full max-w-6xl p-6 border border-white z-20 bg-white/10 backdrop-blur-lg shadow-1xl rounded-2xl mb-20 mt-8 md:mt-12">
        <h1 className="text-4xl md:text-5xl text-center mb-6 ">UI/UX & Logo Design Challenge</h1>
        <div className="flex justify-center">
          <img src={eventpage} alt="Design Challenge Poster" className="h-auto rounded-lg md:w-xl" />
        </div>

        <div className="text-lg md:text-xl mt-4 text-purple-400 py-5">Description :</div>
        <p className="text-white text-sm md:text-base px-4 py-2 leading-relaxed">
          Unleash your creativity in the UI/UX & Logo Design Challenge! Transform real-world problems into stunning designs, craft seamless user experiences, and create impactful logos. Show off your skills, impress the experts, and claim your victory!
        </p>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Number of Players :</p>
          <p className="text-white text-sm md:text-base px-4 py-2">Each team must have 2 to 3 members</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Duration :</p>
          <p className="text-sm md:text-base px-4 py-2">1 hour 10 minutes</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Cash Prize :</p>
          <p className="text-sm md:text-base px-4 py-2">Winner: ₹1500</p>
          <p className="text-sm md:text-base px-4 py-2">Runner-up: ₹1000</p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Challenge Format :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Round 1 - Logo Concept (15 mins): Design a logo with a creative twist.</li>
            <li>Round 2 - UI/UX Wireframe (55 mins): Develop a web interface aligned with the logo.</li>
            <li>Round 3 - Pitch Off: Present the final design and explain the creative choices.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Rules and Regulations :</p>
          <ul className="list-disc list-inside text-sm md:text-base px-4 py-2">
            <li>Each team must have 2-3 members and complete all rounds within 1 hour 10 minutes.</li>
            <li>All designs must be original—no plagiarism, AI-generated designs, or pre-made templates. External assistance is not allowed.</li>
            <li>Designs must align with the provided challenge theme and creative twist.</li>
            <li>Each team must pitch their design in the final round, explaining their choices.</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-purple-400">Contact Us :</p>
          <ul className="list-none text-sm md:text-base px-4 py-2">
            <li>📞 Janani (Coordinator) - 9003179479</li>
            <li>📞 Shakthi Sundaram (Co-coordinator) - 6383602288</li>
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
        <Background />
      </div>
    </div>
  );
}

export default DesignX;
