// app/not-found.tsx  (Next.js App Router)
// OR pages/404.tsx for Pages Router

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="text-center max-w-4xl">
    
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-gray-900 tracking-tighter leading-none">
          404 Not Found
        </h1>

 
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          Your visited page not found. You may go home page.
        </p>


        <div className="mt-10 sm:mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 bg-red-600 text-white font-semibold text-base sm:text-lg rounded-md hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}