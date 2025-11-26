"use client";

import { useEffect, useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
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

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const searchParams = useSearchParams();
  const cartId = searchParams.get("cartId");
  
  const router = useRouter();

  //select items lai billing ma redirect gareko xa
  const handleCheckout = (item: CartItem) => {
  localStorage.setItem("selectedItem", JSON.stringify(item));
  toast.success("Redirecting to checkout...");
  router.push("/billing");
};

  useEffect(() => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) return;
    const items = JSON.parse(localStorage.getItem(`cart_${cartId}`) || "[]");
    setCartItems(items);
  }, []);
 

  const handleQuantityChange = (id: number, delta: number) => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) return;

    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });

    setCartItems(updated);
    localStorage.setItem(`cart_${cartId}`, JSON.stringify(updated));
  };

  const handleRemove = (id: number) => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) return;

    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem(`cart_${cartId}`, JSON.stringify(updated));
  };

  const shopTotal = cartItems.reduce((acc, item) => acc + item.actualPrice * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 50 : 0;
  const total = shopTotal + shipping;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header Row */}
        <div className="hidden md:flex h-[72px] items-center justify-around bg-gray-50 shadow-xs px-4 font-medium">
          <p className="w-1/4 text-left">Products</p>
          <p className="w-1/6 text-center">Price</p>
          <p className="w-1/6 text-center">Quantity</p>
          <p className="w-1/6 text-center">Subtotal</p>
          <p className="w-1/6 text-center">Action</p>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-around gap-4 border-b py-4 px-2">
              <div className="flex items-center gap-4 w-full md:w-1/4">
                <div className="relative w-16 h-16">
                  <Image src={item.image} alt={item.title} fill className="object-contain rounded" />
                </div>
                <div>
                  <h1 className="font-medium">{item.title}</h1>
                  <p className="text-gray-500 text-sm">Color: {item.color}, Size: {item.size}</p>
                </div>
              </div>

              <p className="w-full md:w-1/6 text-center">Rs {item.actualPrice}</p>

              <div className="w-full md:w-1/6 flex items-center justify-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              <p className="w-full md:w-1/6 text-center">Rs {item.actualPrice * item.quantity}</p>

              <button
                onClick={() => handleRemove(item.id)}
                className="w-full md:w-1/6 text-center text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border-2 p-2 rounded-md"
            />
            <button className="bg-red-400 px-4 py-2 rounded text-white font-semibold hover:scale-105 transition">
              Apply Coupon
            </button>
          </div>

          <div className="border-2 p-4 space-y-4 w-full md:w-1/3">
            <h1 className="text-xl font-semibold">Cart Total</h1>
            <p>Shop Total: Rs {shopTotal}</p>
            <Separator className="bg-gray-200 h-px" />
            <p>Shipping: Rs {shipping}</p>
            <Separator className="bg-gray-200 h-px" />
            <p>Total: Rs {total}</p>
            <button
        onClick={() => handleCheckout(cartItems[0])}
              className="bg-red-400 w-full py-2 rounded text-white font-semibold hover:scale-105 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => router.push("/")}
            className="bg-gray-700 p-3 rounded text-white font-semibold hover:scale-105 transition w-full md:w-auto"
          >
            Return to Shop
          </button>
          <button
            onClick={() => setCartItems(cartItems)} // optional: refresh cart
            className="bg-red-400 p-3 rounded text-white font-semibold hover:scale-105 transition w-full md:w-auto"
          >
            Update Cart
          </button>
        </div>
      </div>
    </section>
  );
}
