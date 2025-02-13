const Card = () => {
  return (
    <div className="relative h-72 w-80 border-2 border-[rgba(75,30,133,0.5)] rounded-2xl bg-gradient-to-br from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white font-nunito p-6 flex flex-col gap-4 backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover:animate-pulse"></div>
      
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
        <div className="w-2 h-2 rounded-full bg-purple-300/30"></div>
        <div className="w-2 h-2 rounded-full bg-purple-300/10"></div>
      </div>
      
      <div className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px] space-y-3">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
          Heading
        </h1>
        <p className="text-sm text-purple-100/90 leading-relaxed font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni.
        </p>
      </div>
      
      <button className="relative h-fit w-fit px-6 py-2 mt-2 border border-purple-300/30 rounded-full flex items-center gap-2 overflow-hidden group hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <p className="relative z-10 font-medium tracking-wide">Explore Now</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
      
      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover:animate-pulse"></div>
    </div>
  );
};

export default Card;
