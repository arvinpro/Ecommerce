"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Eye, ShoppingCart } from "lucide-react";
import FlashSalesData from "@/data/flash-sales-data";
import Image from "next/image";

function FlashSales() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);



  // SECTION ANIMATION
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

  // SLIDER NAVIGATION
  const slideLeft = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(
      ".product-card"
    ) as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(
      ".product-card"
    ) as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  // COUNTDOWN TIMER
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    endDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  

  return (
    <section ref={sectionRef} className="w-full px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-5 h-10 bg-red-500 rounded transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          />
          <h3
            className={`text-base sm:text-lg font-bold text-red-500 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Today's
          </h3>
        </div>

       
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10 flex-1">
          
            <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 whitespace-nowrap">
              Flash Sales
            </h1>

          
            <div className="flex items-center gap-4 sm:gap-6">
              {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => {
                const value = Object.values(timeLeft)[i];
                const isLast = i === 3;

                return (
                  <div key={unit} className="flex items-center gap-3 sm:gap-4">
                   
                    <div className="text-center leading-none">
                      <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">
                        {unit}
                      </p>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        {String(value).padStart(2, "0")}
                      </div>
                    </div>

                  
                    {!isLast && (
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-thin text-red-500 select-none">
                        :
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>


          {!viewAll && (
            <div className="hidden sm:flex gap-2">
              <button
                onClick={slideLeft}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={slideRight}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

 
        {!viewAll ? (
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4 snap-x snap-mandatory sm:snap-none"
            >
              {FlashSalesData.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="product-card shrink-0 w-[calc(85vw-2rem)] sm:w-[260px] md:w-[280px] snap-start"
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-4 sm:hidden">
              <button
                onClick={slideLeft}
                className="p-2.5 bg-gray-200 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={slideRight}
                className="p-2.5 bg-gray-200 rounded-full"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {FlashSalesData.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}


        <div className="flex justify-center mt-10">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="px-8 py-3.5 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition text-sm sm:text-base"
          >
            {viewAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default FlashSales;


const ProductCard = ({ item }: any) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

      <div className="relative aspect-4/5 w-full bg-gray-100 overflow-hidden">
  <Image
      src={item.image}
      alt="image"
      fill
      className="object-contain"
    />


  
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs sm:text-sm font-bold px-2.5 py-1 rounded">
          -{item.discountPercent}%
        </div>

  
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>


        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/90 backdrop-blur">
          <button onClick={()=>onclick} className="w-full py-3 text-white font-medium text-sm hover:bg-black transition">
            Add To Cart
          </button>
        </div>
      </div>

  
      <div className="p-3 space-y-1">
        <h3 className="font-medium text-gray-800 text-sm line-clamp-2">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-lg font-bold text-red-600">
            Rs {item.price.toLocaleString()}
          </span>
          <del className="text-xs text-gray-500">
            Rs {item.priceBeforeDiscount.toLocaleString()}
          </del>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex text-yellow-500 text-xs">★★★★★</div>
          <span className="text-gray-600">({item.rating})</span>
        </div>
      </div>
    </div>
  );
};
