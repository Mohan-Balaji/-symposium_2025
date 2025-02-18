import React from "react";
import { motion } from "framer-motion";
import TCard from "./TCard"; // Import TCard component
import Background from "../Background/Background";
import Footer from "../Footer/Footer";
import designx from "../../assets/CardImage/designx.png"
import valorant from "../../assets/CardImage/valorant.png"
import codetastic from "../../assets/CardImage/codetastic.png"
const TCardList = () => {
  const cards1 = [
    { title: "Code Heist", description: "This is an interactive card.", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",url:"codeheist" },
    { title: "Design X", description: "Clean design with animations.", image: designx ,url:"designx" },
    { title: "Code Tastic", description: "Smooth transitions and responsiveness.", image: codetastic,url:"codetastic" },
    { title: "ML Showdown", description: "Interactive elements for better UX.", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",url:"mlshowdown" },
  ];

  const cards2 = [
    { title: "VALORANT", description: "A fun gaming event.", image: valorant,url:"valorant" },
    { title: "GAMEO 2.0", description: "Test your gaming skills!", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg",url:"gameo" },
  ];

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative">
      <Background />

      <div className="flex flex-col items-center justify-center min-h-screen w-full z-10 relative mx-auto px-10 py-10 pb-44 gap-16">

        {/* Technical Events Section */}
        <motion.div
          className="flex flex-col items-center space-y-6 w-full max-w-[80%] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white md:text-5xl font-bold uppercase font-[titleBold] text-2xl eventtext">Technical Events</h2>
          <motion.div 
            className="grid place-items-center items-start grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:justify-between gap-y-7 w-full z-20 p-10 md:rounded-3xl md:shadow-xl md:border md:border-gray-200 md:bg-white/10 md:backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {cards1.map((card, index) => (
              <motion.div
                key={`tech-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TCard img={card.image} title={card.title} description={card.description} url={card.url}/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Non-Technical Events Section */}
        <motion.div
          className="flex flex-col items-center space-y-6 w-full max-w-[80%] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white md:text-5xl font-bold uppercase font-[titleBold] text-2xl eventtext">Non-Technical Events</h2>
          <motion.div 
            className="grid place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:justify-between gap-y-7 w-full z-20 p-10 md:rounded-3xl md:shadow-xl md:border md:border-gray-200 md:bg-white/10 md:backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {cards2.map((card, index) => (
              <motion.div
                key={`non-tech-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TCard img={card.image} title={card.title} description={card.description} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
};

export default TCardList;
