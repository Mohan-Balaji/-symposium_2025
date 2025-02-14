import React from "react";
import Card from "./TCard";
import Background from "../../Background/Background";

const TCardList = () => {
  const cards1 = [
    {
      title: "WIN RAR",
      description: "This is an interactive card with a cool hover effect.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "BLIND CODING",
      description: "Clean design with animations and user-friendly features.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "LOGO DESIGNING",
      description: "Built with smooth transitions and responsiveness.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "ML-BASED",
      description: "Includes interactive elements for better UX.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    }
  ];

    const cards2 = [
      {
        title: "VALORANT",
        description: "This is an interactive card with a cool hover effect.",
        image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
      },
      {
        title: "GAMEO",
        description: "Clean design with animations and user-friendly features.",
        image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
      },
    ];

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative">
      <Background />
      <div className="mt-12 mb-32 relative">
        <div className="relative container mx-auto px-12 py-20 pb-44 rounded-4xl shadow-xl border border-gray-200 bg-white/10 backdrop-blur-lg font-[Lato] z-50 overflow-hidden">
          {/* Bottom Curve */}
          <div className="absolute bottom-[-50px] left-0 w-full h-20 bg-white/10 rounded-t-full"></div>

          <h1 className="text-8xl font-bold text-center mb-6 text-white">
           Technical Event
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards1.map((cards1, index) => (
              <Card key={index} {...cards1} />
            ))}
          </div>

          <h1 className="text-8xl font-bold text-center mt-32 mb-6  text-white">
            NON Technical Event
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards2.map((cards2, index) => (
              <Card key={index} {...cards2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCardList;
