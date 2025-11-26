import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, SendHorizonal } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="bg-linear-to-r from-[#0f172a] to-black py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          

          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">Exclusive</h1>
            <p className="text-xl font-medium">Subscribe</p>
            <p className="text-sm md:text-base opacity-90">Get 10% off your first order</p>
            
            <div className="relative max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 pr-12 py-3 bg-transparent border border-white/30 rounded placeholder-gray-400 focus:outline-none focus:border-white transition text-sm md:text-base"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2">
                <SendHorizonal className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

        
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">Support</h2>
            <div className="space-y-2 text-sm md:text-base opacity-90">
              <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>


          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">Account</h2>
            <ul className="space-y-2 text-sm md:text-base opacity-90">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

   
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">Quick Link</h2>
            <ul className="space-y-2 text-sm md:text-base opacity-90">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

   
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold">Download App</h2>
            <p className="text-xs md:text-sm text-gray-400">Save $3 with App New User Only</p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Image
                src="/logo/qrr.png"
                alt="QR Code"
                width={90}
                height={100}
                className="shrink-0"
              />
              <div className="space-y-3">
                <Image
                  src="/logo/png1.png"
                  alt="Google Play"
                  width={110}
                  height={40}
                  className="border border-gray-700 rounded"
                />
                <Image
                  src="/logo/png2.png"
                  alt="App Store"
                  width={110}
                  height={40}
                  className="border border-gray-700 rounded"
                />
              </div>
            </div>

            <div className="flex gap-6 mt-6">
              <a href="#" className="hover:text-pink-400 transition"><Facebook size={24} /></a>
              <a href="#" className="hover:text-pink-400 transition"><Instagram size={24} /></a>
              <a href="#" className="hover:text-pink-400 transition"><Twitter size={24} /></a>
              <a href="#" className="hover:text-pink-400 transition"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="bg-black/90 py-6 text-center text-gray-400 text-sm border-t border-gray-800">
        <p>&copy; Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;