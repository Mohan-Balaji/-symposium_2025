import React from "react";

const TCard = ({ title, description, image }) => {
  return (
    <div className="z-20">
      <div className="w-full sm:w-[350px] lg:w-[400px] p-8 sm:p-6 bg-white/60 backdrop-blur-lg rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Enlarged Image */}
        <img className="w-full h-60 sm:h-48 object-cover rounded-t-lg" alt="Card Image" src={image} />
        
        <div className="px-6 py-6 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2">{description}</p>
          
          <div className="flex justify-between items-center mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;
