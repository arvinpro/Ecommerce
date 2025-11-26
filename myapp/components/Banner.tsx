"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function Banner() {
  const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black  overflow-hidden relative flex flex-col lg:flex-row items-center justify-between min-h-[500px] lg:h-[550px] p-8 lg:p-12 gap-10 lg:gap-0">
          <div className="text-white space-y-6 lg:space-y-8 max-w-lg text-center lg:text-left z-10">
            <p className="text-green-400 font-bold text-lg tracking-wider">Categories</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Enhance Your<br />Music Experience
            </h1>

            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: minutes, label: "Minutes" },
                { value: seconds, label: "Seconds" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-black">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs text-gray-600 font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <button className="cursor-pointer h-14 px-10 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-green-500/25 transform hover:-translate-y-1">
              Buy Now!
            </button>
          </div>


          <div className="relative flex justify-center items-center z-10">
            <div className="absolute inset-0 -m-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative group cursor-pointer">
              <Image
                alt="Premium Speaker"
                src="/logo/speaker.png"
                width={590}
                height={420}
                className="w-[280px] sm:w-[400px] lg:w-[550px] xl:w-[590px] h-auto object-contain 
                           transition-all duration-500 ease-out 
                           group-hover:scale-110 
                           drop-shadow-2xl"
                priority
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;