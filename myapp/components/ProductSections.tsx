"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Cpu,
  ShoppingBag,
  Shirt,
  Zap,
} from "lucide-react";

const categories = [
  { name: "Phones", icon: Smartphone },
  { name: "Computers", icon: Monitor },
  { name: "SmartWatch", icon: Watch },
  { name: "Camera", icon: Camera },
  { name: "Headphones", icon: Headphones },
  { name: "Gaming", icon: Cpu },
  { name: "Bags", icon: ShoppingBag },
  { name: "Jackets", icon: Shirt },
  { name: "Shoes", icon: Zap },
];

interface CategoryProps {
  onCategorySelect: (category: string) => void;
}
export default function ProductSections({ onCategorySelect }: CategoryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false, // We hide default arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8">
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
            className={`text-xl font-bold text-red-500  tracking-wider transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Categories
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            Browse By Category
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 border border-gray-200 transition-all hover:scale-110"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 border border-gray-200 transition-all hover:scale-110"
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings} className="mt-19">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="px-2"
                onClick={() => onCategorySelect(cat.name)}
              >
                <div className="group cursor-pointer text-center">
                  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:bg-red-400 text-white">
                    <div className="p-4 bg-gray-100 rounded-full mb-4 group-hover:bg-red-50 transition-colors">
                      <Icon className="w-8 h-8 text-gray-700 group-hover:text-red-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-white">
                      {cat.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}