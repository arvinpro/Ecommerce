"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TopSellingData from "@/data/top-selling-data";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  image: string;
  actualPrice: number;
  discountPrice?: number;
  rating: number;
  category: string;
  description: string;
}

const ProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("Black");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!id) return;
    const prod = TopSellingData.find((p) => p.id === Number(id));
    setProduct(prod || null);

    if (prod) {
      const related = TopSellingData.filter(
        (p) => p.category === prod.category && p.id !== prod.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cart: (Product & {
      quantity: number;
      color: string;
      size: string;
    })[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = cart.findIndex(
      (p) =>
        p.id === product.id &&
        p.color === selectedColor &&
        p.size === selectedSize
    );
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity,
        color: selectedColor,
        size: selectedSize,
      });
    }

    localStorage.setItem("selectedItem", JSON.stringify(product));
    router.push("/billing");
  };

  if (!product) return <p>Product not found</p>;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-gray-100 flex items-center justify-center p-4 rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-yellow-500 font-medium">
            Rating: {product.rating} ★{" "}
            <span className="text-green-500">In Stock</span>
          </p>
          <p className="text-2xl font-bold text-red-600">
            Rs {product.actualPrice.toLocaleString()}
          </p>
          {product.discountPrice && (
            <p className="line-through text-gray-500">
              Rs {product.discountPrice.toLocaleString()}
            </p>
          )}
          <p className="text-gray-700">{product.description}</p>

          <Separator className="bg-gray-200 h-px my-4" />

          <div className="flex items-center gap-2">
            <span className="font-medium">Color:</span>
            {["Black", "White", "Red", "Blue"].map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 border rounded-full ${
                  selectedColor === color
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-800 border-gray-300"
                } transition`}
              >
                {color}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded-full ${
                  selectedSize === size
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-800 border-gray-300"
                } transition`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 hover:bg-gray-200 transition"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition shadow-md"
          >
            Buy Now
          </button>

          <p className="text-gray-500 text-sm mt-2">
            Free delivery & easy return within 7 days.
          </p>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12 py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
                onClick={() => (window.location.href = `/product/${p.id}`)} // navigate to product page
              >
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-medium line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-red-600 font-bold">
                    Rs {p.actualPrice.toLocaleString()}
                  </p>
                  <p className="text-yellow-500 text-xs">
                    Rating: {p.rating} ★
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
