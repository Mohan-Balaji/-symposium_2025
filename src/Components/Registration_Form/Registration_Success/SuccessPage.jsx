import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";

const eventNames = {
  "1": "Code Heist",
  "2": "Codetastic",
  "3": "DesignX",
  "4": "ML Showdown",
  "5": "VALORANT",
  "6": "GAMEO 2.0",
};

const whatsappLinks = {
  "1": "https://chat.whatsapp.com/Jmup91uysqWL7YzdMxvHhd",
  "2": "https://chat.whatsapp.com/event2",
  "3": "https://chat.whatsapp.com/BtUSCnhW5xvDaN4A9cO0VN",
  "4": "https://chat.whatsapp.com/LAveuuImGEOEPjjGgKyAC5",
  "5": "https://chat.whatsapp.com/Gm9AeQd6qDLHH4Dh7tYXCq",
  "6": "https://chat.whatsapp.com/HIreB8b8ZBwCOvzFFZO2xT",
};

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  // Debugging: Log URL to check if event ID is correct
  console.log("URL Search Params:", location.search);

  // Extract the event ID
  let eventId = searchParams.get("event");

  // Validate event ID and provide a default
  if (!eventId || !eventNames[eventId]) {
    console.warn("Invalid or missing event ID:", eventId);
    eventId = "1"; // Default to Code Heist if event ID is invalid
  }

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative text-white">
      <div className="flex flex-col items-center min-h-screen w-full z-10 relative mx-auto">
        {/* Background */}
        <div className="bg-cover bg-center w-full h-full absolute top-0 left-0" style={{ backgroundImage: "url('/mnt/data/image.png')" }}></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-white/20 text-center w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4">🎉 Registration Successful!</h2>
            <p className="text-lg mb-4">
              You have successfully registered for <strong>{eventNames[eventId]}</strong>.
            </p>

            {/* WhatsApp Group Section */}
            <div className="mb-4">
              <p className="text-xl text-emerald-300 mb-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  width="30"
                  height="30"
                  className="inline-block"
                />
                <strong> Join WhatsApp Group:</strong>
              </p>
              <a href={whatsappLinks[eventId]} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline break-all">
                {whatsappLinks[eventId]}
              </a>
            </div>

            {/* Back to Home Button */}
            <button onClick={() => navigate("/")} className="mt-4 bg-blue-500 w-full py-2 rounded-lg hover:bg-blue-600 transition">
              Back to Home
            </button>
          </div>
        </div>

        {/* Fancy Thank You Card */}
        {/* <div className="card mt-10">
          <div className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
            <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
              <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">Thank You</p>
              <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">It’s so nice that you had the time to view this idea</p>
              <p className="font-serif text-[10px] sm:text-[12px] text-gray-700">Wishing you a fantastic day ahead!</p>
              <p className="font-sans text-[10px] text-gray-700 pt-5">SMOOKYDEV</p>
            </div>
            <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold 
              [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] 
              group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
              SMKY
            </button>
            <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full 
              [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
            <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
            <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
            <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
          </div>
        </div> */}

        <div className="w-full py-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
