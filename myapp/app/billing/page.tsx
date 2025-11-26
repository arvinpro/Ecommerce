"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

interface CartItem {
  id: number;
  title: string;
  image: string;
  actualPrice: number;
  quantity: number;
  color: string;
  size: string;
}



const BillingPage = () => {
  const [item, setItem] = useState<CartItem | null>(null);

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("selectedItem") || "null");
    setItem(selected);
  }, []);

  if (!item)
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        No product selected.
      </div>
    );

  const shopTotal = item.actualPrice * item.quantity;
  const shipping = 50;
  const total = shopTotal + shipping;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        

        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Billing Details</h1>

          <form className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label className="font-medium">First Name*</label>
              <input type="text" className="bg-gray-100 p-3 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Company Name</label>
              <input type="text" className="bg-gray-100 p-3 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Street Address*</label>
              <input type="text" className="bg-gray-100 p-3 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Town / City*</label>
              <input type="text" className="bg-gray-100 p-3 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Apartment (optional)</label>
              <input type="text" className="bg-gray-100 p-3 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Email Address*</label>
              <input type="email" className="bg-gray-100 p-3 rounded-md" />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo" className="text-sm">
                Save this information for next time
              </label>
            </div>
          </form>
        </div>

   
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>

          <div className="flex flex-col gap-4">
     
            <div className="flex items-center gap-4 border-b pb-2">
              <div className="w-16 h-16 relative">
                <Image src={item.image} alt={item.title} fill className="object-contain rounded" />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 text-xs">
                  Color: {item.color}, Size: {item.size}
                </p>
                <p className="text-red-600 font-bold">
                  Rs {item.actualPrice} × {item.quantity}
                </p>
              </div>
            </div>

       
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Shop Total:</span>
                <span>Rs {shopTotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Rs {shipping}</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>Rs {total}</span>
              </div>
            </div>

       
            <div className="mt-4 flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> Bank Transfer
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> Cash on Delivery
              </label>
            </div>

       
            <div className="mt-4 flex gap-2">
              <input type="text" placeholder="Coupon code" className="flex-1 p-2 border rounded-md" />
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Apply
              </button>
            </div>

  
            <button onClick={()=>toast.success("Order is Placed!")} className="w-full mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingPage;
