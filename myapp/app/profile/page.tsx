"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

const profileSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(5, "Address is too short"),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && !data.currentPassword) {
        return false;
      }
      if (data.newPassword !== data.confirmPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Passwords don't match or current password is required",
      path: ["confirmPassword"],
    }
  );

type ProfileFormData = z.infer<typeof profileSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      address: "123 Main St, New York",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    toast.success("Profile updated successfully! 🎉", {
      duration: 4000,
      position: "top-right",
      style: {
        background: "#10b981",
        color: "white",
        fontWeight: "500",
      },
      icon: "✅",
    });
    reset({
      ...data,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Toaster />
      <section className="py-12 px-4 sm:px-6 lg:px-8 mt-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Manage My Account
                  </h2>
                  <ul className="space-y-2 text-gray-500">
                    <li className="hover:text-red-500 cursor-pointer transition font-medium">
                      My Profile
                    </li>
                    <li className="hover:text-red-500 cursor-pointer transition">
                      Address Book
                    </li>
                    <li className="hover:text-red-500 cursor-pointer transition">
                      My Payment Options
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-800">
                    My Orders
                  </h2>
                  <ul className="space-y-2 text-gray-500">
                    <li className="hover:text-red-500 cursor-pointer transition">
                      My Returns
                    </li>
                    <li className="hover:text-red-500 cursor-pointer transition">
                      My Cancellations
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    My WishList
                  </h2>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-8">
                  Edit Your Profile
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        {...register("firstName")}
                        type="text"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        {...register("address")}
                        type="text"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                          errors.address ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 max-w-lg">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Password Changes
                    </h3>
                    <div className="space-y-4">
                      <input
                        {...register("currentPassword")}
                        type="password"
                        placeholder="Current Password (leave blank to keep unchanged)"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                      <input
                        {...register("newPassword")}
                        type="password"
                        placeholder="New Password"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                      <input
                        {...register("confirmPassword")}
                        type="password"
                        placeholder="Confirm New Password"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
                          errors.confirmPassword
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-600">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:justify-end pt-6">
                    <button
                      type="button"
                      onClick={() => reset()}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed transition flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Saving...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
