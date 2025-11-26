"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  Warehouse,
  DollarSign,
  Handbag,
  BadgeIndianRupee,
} from "lucide-react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Truck,
  Headphones,
  ShieldCheck,
} from "lucide-react";

function About() {
  const stats = [
    {
      icon: Warehouse,
      title: "10.5K",
      description: "Sellers active on our site",
    },
    { icon: DollarSign, title: "33K", description: "Monthly Product Sale" },
    {
      icon: Handbag,
      title: "45.5K",
      description: "Customers active in our site",
    },
    {
      icon: BadgeIndianRupee,
      title: "25K",
      description: "Annual gross sale in our site",
    },
  ];

  const staff = [
    {
      image: "/role/image 46.png",
      name: "Tom Cruise",
      role: "Founder & Chairman",
      social: [
        {
          icon: Twitter,
          link: "https://twitter.com/emmawatson",
          label: "Twitter",
        },
        {
          icon: Instagram,
          link: "https://instagram.com/emmawatson",
          label: "Instagram",
        },
        {
          icon: Linkedin,
          link: "https://linkedin.com/in/emmawatson",
          label: "LinkedIn",
        },
      ],
    },

    {
      image: "/role/image 51.png",
      name: "Emma Watson",
      role: "Managing Director",
      social: [
        {
          icon: Twitter,
          link: "https://twitter.com/emmawatson",
          label: "Twitter",
        },
        {
          icon: Instagram,
          link: "https://instagram.com/emmawatson",
          label: "Instagram",
        },
        {
          icon: Linkedin,
          link: "https://linkedin.com/in/emmawatson",
          label: "LinkedIn",
        },
      ],
    },

    {
      image: "/role/image 47.png",
      name: "Will Smith",
      role: "Product Manager",
      social: [
        {
          icon: Twitter,
          link: "https://twitter.com/emmawatson",
          label: "Twitter",
        },
        {
          icon: Instagram,
          link: "https://instagram.com/emmawatson",
          label: "Instagram",
        },
        {
          icon: Linkedin,
          link: "https://linkedin.com/in/emmawatson",
          label: "LinkedIn",
        },
      ],
    },
  ];

  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section className="w-full ">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <span className="text-gray-900 font-medium">About</span>
          </nav>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Our Story
              </h1>
              <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Launched in 2015, Exclusive is South Asia’s premier online
                  shopping marketplace with an active presence in Bangladesh.
                  Supported by a wide range of tailored marketing, data, and
                  service solutions, Exclusive has 10,500 sellers and 300 brands
                  and serves 3 million customers across the region.
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  very fast. We offer a diverse assortment in categories ranging
                  from consumer electronics to fashion.
                </p>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="aspect-w-4 aspect-h-3 lg:aspect-none">
                <Image
                  src="/banner/lady.jpg"
                  alt="Woman shopping - Exclusive marketplace"
                  width={709}
                  height={609}
                  className="rounded-2xl object-cover shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>


          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black mb-4 sm:mb-6 group-hover:bg-gray-900 transition-colors">
                      <Icon
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      {stat.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-gray-600 leading-snug">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/*Staff Cards*/}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {staff.map((member, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden flex flex-col items-center transition-transform hover:scale-[1.02] duration-300"
                  style={{ width: "370px", maxWidth: "100%" }}
                >
                  <div className="w-full h-96 relative bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 370px"
                      priority
                    />
                  </div>

                  <div className="w-full px-6 py-6 text-center ">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{member.role}</p>

                    <div className="flex justify-center gap-5 mt-6">
                      {member.social.map((soc, idx) => {
                        const Icon = soc.icon;
                        return (
                          <a
                            key={idx}
                            href={soc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*Services*/}
          <div className="max-w-7xl mx-auto px-4 m-25">
            <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-16">
              <u>OUR SERVICES</u>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-full bg-gray-200 scale-125 blur-sm" />
                    <div className="relative w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg">
                      <service.icon
                        className="w-10 h-10 text-white"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
