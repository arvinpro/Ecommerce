"use client";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  emailOrPhone: z
    .string()
    .min(1, "Email or phone is required")
    .refine(
      (val) =>
        /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(val) || /^\d{10}$/.test(val),
      "Enter a valid email or 10-digit phone number"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and number"
    ),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });


  const onSubmit = async (data: SignupFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Account created:", data);
    toast.success("Account Created Successfully!")
    reset();
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">


          <div className="hidden lg:block">
            <Image
              src="/login/loginimg.png"
              alt={isLogin ? "Welcome back" : "Create an account"}
              width={700}
              height={800}
              className="object-cover "
              priority
            />
          </div>

     
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="p-8 ">

           
              {!isLogin && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                      Create an account
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">Enter your details below</p>
                  </div>

      
                  <div>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-red-500 outline-none transition-all text-lg"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                
                  <div>
                    <input
                      {...register("emailOrPhone")}
                      type="text"
                      placeholder="Email or Phone Number"
                      className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-red-500 outline-none transition-all text-lg"
                    />
                    {errors.emailOrPhone && (
                      <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone.message}</p>
                    )}
                  </div>


                  <div>
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-red-500 outline-none transition-all text-lg"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                  </div>


                  <div className="space-y-4 mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white font-semibold py-4 rounded-lg transition duration-200 shadow-md text-lg flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Creating Account...
                        </span>
                      ) : (
                        "Create Account"
                      )}
                    </button>

                    <button
                      type="button"
                      className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 rounded-lg border-2 border-gray-300 flex items-center justify-center gap-3 transition duration-200 shadow-sm"
                    >
                      <span className="material-icons text-red-500 text-2xl"><FaGoogle/></span>
                      <span>Sign up with Google</span>
                    </button>
                  </div>

                  <div className="mt-8 text-center text-gray-600">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-red-500 font-medium hover:underline"
                    >
                      Log in
                    </button>
                  </div>
                </form>
              )}

   
              {isLogin && (
                <form className="space-y-6">
                  <div className="mb-10 space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                      Login in to Exclusive
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">Enter your details below</p>
                  </div>

                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-red-500 outline-none transition-all text-lg"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-red-500 outline-none transition-all text-lg"
                  />

                  <div className="text-right mb-6">
                    <Link href="#" onClick={()=>toast.success("Email verification is sent!")} className="text-sm text-red-500 hover:underline">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="space-y-4">
                    <button onClick={()=>toast.success("Login Successfully!")} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-lg transition duration-200 shadow-md text-lg">
                      Log In
                    </button>
                    <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 rounded-lg border-2 border-gray-300 flex items-center justify-center gap-3 transition shadow-sm">
                      <span className="material-icons text-red-500 text-2xl"><FaGoogle/></span>
                      Continue with Google
                    </button>
                  </div>

                  <div className="mt-8 text-center text-gray-600">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-red-500 font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}