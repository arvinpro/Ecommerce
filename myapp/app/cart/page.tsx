'use client';
import { Suspense } from "react";
import CartPage from "@/components/Carts"

function page() {
  return (
    <Suspense fallback={<p>Loading cart...</p>}>
      <CartPage />
    </Suspense>
  );
}

export default page