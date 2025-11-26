'use client';

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FlashSales from "@/components/FlashSales";
import ProductSections from "@/components/ProductSections";
import SellingProduct from "@/components/SellingProduct";
import Banner from "@/components/Banner";
import OurProducts from "@/components/OurProducts";
import NewArrival from "@/components/NewArrival";
import OurServices from "@/components/OurServices";
import { useState } from "react";
import { string } from "zod";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div>
     <HeroSection/>
     <FlashSales/>
     <ProductSections onCategorySelect={setSelectedCategory}/>
     <SellingProduct category={selectedCategory}/>
     <Banner/>
     <OurProducts category={selectedCategory}/>
     <NewArrival/>
     <OurServices/>
    </div>
  );
}
