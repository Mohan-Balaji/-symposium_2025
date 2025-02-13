import React from "react";
import Card from "./TCard";

const TCardList = () => {
  const cards = [
    {
      title: "3D Hover Card",
      description: "This is an interactive card with a cool hover effect.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "Stylish UI",
      description: "Clean design with animations and user-friendly features.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "Modern Design",
      description: "Built with smooth transitions and responsiveness.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "3D Hover Card",
      description: "This is an interactive card with a cool hover effect.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "Stylish UI",
      description: "Clean design with animations and user-friendly features.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
    {
      title: "Modern Design",
      description: "Built with smooth transitions and responsiveness.",
      image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-8xl font-bold text-center mb-6 animate-rotaanimate-bouncete text-amber-600">Technical Event</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default TCardList;
