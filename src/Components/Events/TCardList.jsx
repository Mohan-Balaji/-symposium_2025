import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TCard from "./TCard";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

const TCardList = () => {
  const [refTech, inViewTech] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refNonTech, inViewNonTech] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cards1 = [
    { title: "WIN RAR", description: "This is an interactive card.", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg" },
    { title: "BLIND CODING", description: "Clean design with animations.", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg" },
    { title: "LOGO DESIGNING", description: "Smooth transitions and responsiveness.", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg" },
    { title: "ML-BASED", description: "Interactive elements for better UX.", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg" },
  ];

  const cards2 = [
    { title: "VALORANT", description: "A fun gaming event.", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg" },
    { title: "GAMEO", description: "Test your gaming skills!", image: "https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/7568684162/1597952943.jpg" },
  ];

  return (
    <div className="w-full h-screen overflow-y-auto z-10 relative">
      <Background className="parallax-bg" />
      <div className="flex flex-col items-center justify-center min-h-screen w-full z-10 relative mx-auto px-10 py-10 pb-44 gap-16">
        <motion.div 
          ref={refTech}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewTech ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center space-y-6 w-full max-w-[80%] mx-auto"
        >
          <h2 className="text-white md:text-5xl font-bold uppercase font-[titleBold] text-2xl glow-title">Technical Events</h2>
          <div className="grid place-items-center items-start grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:justify-between gap-y-7 w-full z-20 p-10 md:rounded-3xl md:shadow-xl md:border md:border-gray-200 md:bg-white/10 md:backdrop-blur-lg">
            {cards1.map((card, index) => (
              <motion.div key={`tech-${index}`} whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }} transition={{ duration: 0.3 }}>
                <TCard img={card.image} title={card.title} description={card.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          ref={refNonTech}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewNonTech ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center space-y-6 w-full max-w-[80%] mx-auto"
        >
          <h2 className="text-white md:text-5xl font uppercase font-[titleBold] text-2xl glow-title">Non-Technical Events</h2>
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:justify-between gap-y-7 w-full z-20 p-10 md:rounded-3xl md:shadow-xl md:border md:border-gray-200 md:bg-white/10 md:backdrop-blur-lg">
            {cards2.map((card, index) => (
              <motion.div key={`non-tech-${index}`} whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }} transition={{ duration: 0.3 }}>
                <TCard img={card.image} title={card.title} description={card.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default TCardList;
