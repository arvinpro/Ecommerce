"use client";
import { Phone, Mail,ChevronRight, Home } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import toast from "react-hot-toast";

function Contact() {

 
  return (
    <>
    {/* Breadcrumb */}
      <section className="w-full ">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
          <nav className="flex items-center space-x-2 text-sm sm:text-base">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <ChevronRight className="w-4 h-4 text-gray-400" />

            <span className="text-gray-900 font-medium">Contact</span>
          </nav>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:py-16 lg:py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className=" shadow-xl p-6 sm:p-8 h-full min-h-[400px] flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex gap-4 flex-col ">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center rounded-full bg-red-500 text-white">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base sm:text-lg">
                      We are available 24/7, 7 days a week.
                    </p>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                      Phone:{" "}
                      <span className="font-semibold">+8801611112222</span>
                    </p>
                  </div>
                </div>

                <Separator className="bg-gray-200 h-px" />

                <div className="flex flex-col  gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 nshrink-0 flex items-center justify-center rounded-full bg-red-500 text-white">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base sm:text-lg">
                      Fill out our form and we will contact you within 24 hours.
                    </p>
                    <div className="mt-2 space-y-1 text-sm sm:text-base text-gray-600">
                      <p>
                        Email:{" "}
                        <span className="font-semibold">
                          customer@exclusive.com
                        </span>
                      </p>
                      <p>
                        Email:{" "}
                        <span className="font-semibold">
                          support@exclusive.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" shadow-xl p-6 sm:p-8 h-full min-h-[400px]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-gray-100  outline-none focus:ring-2 focus:ring-red-500 transition placeholder-gray-500 text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    required
                    className="w-full px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-red-500 transition placeholder-gray-500 text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone *"
                    required
                    className="w-full px-4 py-3 bg-gray-100 s outline-none focus:ring-2 focus:ring-red-500 transition placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 bg-gray-100  outline-none resize-none focus:ring-2 focus:ring-red-500 transition placeholder-gray-500 text-sm sm:text-base"
                ></textarea>

                <div className="flex justify-end">
                  <button
                  onClick={()=>toast.success("Message sent sucessfully!")}
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-md transition duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
