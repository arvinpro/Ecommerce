"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Heart,
  ShoppingCart,
  Search,
  Menu,
  X,
  UserRound,
} from "lucide-react";
import { redirect, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const pathname = usePathname();
  const hideIcons = pathname === "/login";

  const updateCartCount = () => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) return setCartCount(0);

    const cart = JSON.parse(localStorage.getItem(`cart_${cartId}`) || "[]");
    const total = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    );
    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount();
    const handleStorage = () => updateCartCount();
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [updateCartCount]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/login" },
  ];

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50">
      <div className="bg-black text-white py-3 text-center text-sm ">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-4">
          <p className="font-medium">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link href="/" className="font-bold underline">
              Shop Now
            </Link>
          </p>
          <div className="relative flex items-center gap-1">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium"
            >
              {language}
              <ChevronDown className="w-4 h-4" />
            </button>

            {langOpen && (
              <div className="absolute top-6 left-0 mt-1 w-28 bg-gray-600 border  rounded-md shadow-lg z-50">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setLanguage("English");
                    setLangOpen(false);
                  }}
                >
                  English
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setLanguage("Nepali");
                    setLangOpen(false);
                  }}
                >
                  Nepali
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Exclusive
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-700 font-medium text-base after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-56 lg:w-72 pl-4 pr-10 py-2.5 bg-gray-100 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {!hideIcons && (
                <>
                  <button className="relative cursor-pointer">
                    <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 transition" />
                  </button>
                  <button
                    onClick={() => redirect("/cart")}
                    className="relative cursor-pointer"
                  >
                    <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </button>
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="relative cursor-pointer"
                  >
                    <UserRound className="w-6 h-6 text-gray-700 hover:text-red-500 transition" />
                  </button>

                  {menuOpen && (
                    <div className="absolute right-15 top-25 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        Manage my Account
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        My Orders
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        My Cancellations
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        My Reviews
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </>
              )}

              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-4 pr-10 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-gray-700 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
