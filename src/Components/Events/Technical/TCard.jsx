import React from "react";

const TCard = ({ title, description, image }) => {
  return (
    <div className="w-full sm:w-100 p-6 sm:p-4 bg-white/60 backdrop-blur-lg rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={image} />
      <div className="px-6 py-4 sm:px-4">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TCard;
