import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";

const eventNames = {
  "1": "Code Heist",
  "2": "Blind Coding",
  "3": "Logo Designing",
  "4": "ML-Based",
  "5": "VALORANT",
  "6": "GAMEO",
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
  const eventId = searchParams.get("event") || "1";

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative">
    <div className="flex flex-col items-center min-h-screen w-full z-10 relative mx-auto ">
    <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/mnt/data/image.png')" }}
      >

  <div>
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6 ">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-white/20 text-center w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">🎉 Registration Successful!</h2>
        <p className="text-lg mb-4">
          You have successfully registered for <strong>{eventNames[eventId]}</strong>.
        </p>
        
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
          
          <a 
            href={whatsappLinks[eventId]} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 underline break-all"
          >
            {whatsappLinks[eventId]}
          </a>
        </div>

        <button 
          onClick={() => navigate("/")} 
          className="mt-4 bg-blue-500 w-full py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
    </div>
     </div>
  );
}
