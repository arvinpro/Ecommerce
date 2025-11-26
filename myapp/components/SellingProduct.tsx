"use client";

import { useRef, useState, useEffect } from "react";
import TopSellingData from "@/data/top-selling-data";
import Image from "next/image";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface SellingProductProps {
  category: string | null;
}
function SellingProduct({ category }: SellingProductProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  //for category
  const categoryFilteredData = category
    ? TopSellingData.filter((p) => p.category === category)
    : TopSellingData;

 
  const visibleData = showAll ? categoryFilteredData : categoryFilteredData.slice(0, 5);

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
            This Month
          </h3>
        </div>

     
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            Best Selling Products
          </h1>
          <button onClick={()=>setShowAll(!showAll)} className="px-8 py-3.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition shadow-md hover:shadow-lg">
            {showAll?"Show Less":"View All"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {visibleData.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
     
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                 <Link href={`/product/${product.id}`}>
                  <Image src={product.image} alt={product.title} fill className="object-contain cursor-pointer" />
                </Link>
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button className="p-2.5 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:scale-110 transition">
                    <Heart className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-2.5 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:scale-110 transition">
                    <Eye className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

          
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/90 backdrop-blur-sm">
                  <button className="w-full py-3.5 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-black transition">
      
                    Add To Cart
                  </button>
                </div>
              </div>

          
              <div className="p-4 space-y-2">
                <h3 className="font-medium text-gray-800 text-sm line-clamp-2 leading-tight">
                  {product.title}
                </h3>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg font-bold text-red-600">
                    Rs {product.actualPrice.toLocaleString()}
                  </span>
                  {product.discountPrice && (
                    <del className="text-sm text-gray-500">
                      Rs {product.discountPrice.toLocaleString()}
                    </del>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(product.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.rating})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SellingProduct;