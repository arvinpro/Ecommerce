"use client";

import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
    >
      <ChevronLeft className="w-6 h-6 text-black" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
    >
      <ChevronRightIcon className="w-6 h-6 text-black" />
    </button>
  );
}

export default function HeroSection() {
  const navLinks = [
    { name: "Woman’s Fashion", href: "/", hasArrow: true },
    { name: "Men’s Fashion", href: "/", hasArrow: true },
    { name: "Electronics", href: "/" },
    { name: "Home & Lifestyle", href: "/" },
    { name: "Medicine", href: "/" },
    { name: "Sports & Outdoor", href: "/" },
    { name: "Baby’s & Toys", href: "/" },
    { name: "Groceries & Pets", href: "/" },
    { name: "Health & Beauty", href: "/" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div className="pb-8">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-400 rounded-full hover:bg-black transition-all duration-300" />
    ),
  };

  return (
    <section id="home" className="my-8 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

  
        <div className="lg:col-span-3">
          <nav className="space-y-4 pr-8 border-r border-gray-300 h-full ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between group text-gray-800 hover:text-red-400 font-medium text-sm lg:text-base transition-all duration-200 py-1.5"
              >
                <span>{link.name}</span>
                {link.hasArrow && (
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-black transition" />
                )}
              </Link>
            ))}
          </nav>
        </div>

   
        <div className="lg:col-span-9 relative">
          <Slider {...settings}>
            <div>
              <Link href={"/"}>
              <Image
                src="/banner/bn1.jpg"
                alt="Summer Collection"
                width={1200}
                height={480}
                className="w-full h-auto object-cover shadow-lg"
                priority
              />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
              <Image
                src="/banner/bn2.jpg"
                alt="New Arrivals"
                width={1200}
                height={480}
                className="w-full h-auto  object-cover shadow-lg"
                priority
              />
              </Link>
            </div>
            <div>
             <Link href={"/"}>
              <Image
                src="/banner/bn3.jpg"
                alt="Flash Sale"
                width={1200}
                height={480}
                className="w-full h-auto object-cover shadow-lg"
                priority
              />
             </Link>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}