"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function NewArrival() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const arrival = [
    {
      image: "/arrival/playstation.png",
      title: "Play Station 5",
      dis: "Black and White version of the PS5 coming out on sale.",
    },
    {
      image: "/arrival/women.png",
      title: "Women's Collections",
      dis: "Featured woman collections that give you another vibe.",
    },
    {
      image: "/arrival/speaker.png",
      title: "Speaker",
      dis: "Amazon wireless speaker.",
    },
    {
      image: "/arrival/perfume.png",
      title: "Perfume",
      dis: "GUCCI INTENSE OUD EDP.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-5 h-10 bg-red-500 rounded transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          />
          <h3
            className={`text-sm sm:text-base font-bold text-red-500 tracking-wider transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Featured
          </h3>
        </div>


        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            New Arrivals
          </h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-[570px_auto_auto] md:grid-rows-2 gap-6 p-6 lg:p-8 max-w-[1400px] mx-auto">
     
          {arrival[0] && (
            <div className="row-span-2 w-full md:w-[570px] h-[500px] md:h-[600px] bg-black relative overflow-hidden">
              <Image
                src={arrival[0].image}
                alt={arrival[0].title}
                fill
                className="object-cover duration-100 hover:scale-110 transition"
              />
              <div className="absolute bottom-4 left-4 text-white space-y-2">
                <h3 className="font-semibold text-2xl">{arrival[0].title}</h3>
                <p className="text-sm">{arrival[0].dis}</p>
                <button className="text-xl"><u>Shop Now</u></button>
              </div>
            </div>
          )}

  
          {arrival[1] && (
            <div className="col-span-1 md:col-span-2 w-full md:w-[600px] h-[280px] md:h-[284px] bg-black relative overflow-hidden">
              <Image
                src={arrival[1].image}
                alt={arrival[1].title}
                fill
                className="object-cover duration-100 hover:scale-110 transition"
              />
                <div className="absolute bottom-4 left-4 text-white space-y-2">
                <h3 className="font-semibold text-2xl">{arrival[1].title}</h3>
                <p className="text-sm">{arrival[1].dis}</p>
                <button className="text-xl"><u>Shop Now</u></button>
              </div>
            </div>
          )}


          {arrival[2] && (
            <div className="w-full md:w-[284px] h-[280px] bg-black relative overflow-hidden">
              <Image
                src={arrival[2].image}
                alt={arrival[2].title}
                fill
                className="object-cover duration-100 hover:scale-110 transition"
              />
              <div className="absolute bottom-4 left-4 text-white space-y-2">
                <h3 className="font-semibold text-2xl">{arrival[2].title}</h3>
                <p className="text-sm">{arrival[2].dis}</p>
                <button className="text-xl"><u>Shop Now</u></button>
              </div>
            </div>
          )}
          

        
          {arrival[3] && (
            <div className="w-full md:w-[284px] h-[280px] bg-black relative  overflow-hidden mr-5">
              <Image
                src={arrival[3].image}
                alt={arrival[3].title}
                fill
                className="object-cover duration-100 hover:scale-110 transition"
              />
               <div className="absolute bottom-4 left-4 text-white space-y-2">
                <h3 className="font-semibold text-2xl">{arrival[3].title}</h3>
                <p className="text-sm">{arrival[3].dis}</p>
                <button className="text-xl"><u>Shop Now</u></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
