import React from "react";
import TCard from "./TCard"; // Import TCard component
import Background from "../Background/Background";

const TCardList = () => {
  const cards1 = [
    {
      title: "WIN RAR",
      description: "This is an interactive card with a cool hover effect.",
      image:
        "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "BLIND CODING",
      description: "Clean design with animations and user-friendly features.",
      image:
        "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "LOGO DESIGNING",
      description: "Built with smooth transitions and responsiveness.",
      image:
        "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "ML-BASED",
      description: "Includes interactive elements for better UX.",
      image:
        "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
  ];

  const cards2 = [
    {
      title: "VALORANT",
      description: "This is an interactive card with a cool hover effect.",
      image:
        "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "GAMEO",
      description: "Clean design with animations and user-friendly features.",
      image:
        "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
  ];

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative">
      <Background />

      <div className="flex flex-col items-center justify-center min-h-screen w-full z-10 relative mx-auto px-12 py-20 pb-44 space-y-12">
        
        {/* Technical Events Section */}
        <div className="flex flex-col items-center space-y-6 max-w-6xl w-full">
          <h2 className="text-white text-8xl font-bold uppercase Remaing font-[Remaining]">Technical Events</h2>
          <div className="grid grid-cols-2 gap-8 max-w-5xl z-20 rounded-3xl shadow-xl border border-gray-200 bg-white/10 backdrop-blur-lg p-8">
            {cards1.map((card, index) => (
              <TCard key={`tech-${index}`} img={card.image} title={card.title} description={card.description} />
            ))}
          </div>
        </div>

        {/* Non-Technical Events Section */}
        <div className="flex flex-col items-center space-y-6 max-w-6xl w-full">
          <h2 className="text-white text-8xl font-bold uppercase font-[Remaining]">Non-Technical Events</h2>
          <div className="grid grid-cols-2 gap-8 max-w-5xl z-20 rounded-3xl shadow-xl border border-gray-200 bg-white/10 backdrop-blur-lg p-8">
            {cards2.map((card, index) => (
              <TCard key={`non-tech-${index}`} img={card.image} title={card.title} description={card.description} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TCardList;
