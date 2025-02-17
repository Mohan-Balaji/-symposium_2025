import { useState, useEffect, useCallback } from "react";

export default function CountDown() {
  const targetDate = new Date("2025-03-17T10:00:00").getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
      <div className="flex flex-wrap justify-center gap-10 sm:gap-30 text-center text-yellow-400">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <div key={index} className="sm:p-4 p-2 w-20 sm:w-40 ">
            <p className="text-6xl sm:text-8xl font-[timer]  text-white  animate-pulse">
              {Object.values(timeLeft)[index]}
            </p>
            <span className="text-xs sm:text-sm ">{label}</span>
          </div>
        ))}
      </div>
  );
}