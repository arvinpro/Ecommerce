"use client";

import { Car, Headset, ShieldCheck, MoveUp } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

function OurServices() {
  const services = [
    { icon: <Car />, title: "FREE AND FAST DELIVERY", dis: "Free Delivery for all orders over Rs 140" },
    { icon: <Headset />, title: "24/7 CUSTOMER SUPPORT", dis: "We are here to help you anytime" },
    { icon: <ShieldCheck />, title: "SECURE PAYMENT", dis: "100% secure payment guarantee" }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((serv, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 p-6  hover:scale-95 transition"         >
         
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white">
                {serv.icon}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{serv.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{serv.dis}</p>
          </div>
        ))}
      </div>
      <div className="cursor-pointer">
         <ScrollLink to="home" smooth={true} duration={500}>
        <MoveUp/>
</ScrollLink>
       
      </div>
    </section>
  );
}

export default OurServices;
