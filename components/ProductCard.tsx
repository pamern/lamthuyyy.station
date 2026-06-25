import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(product.price);
  
  let priceDisplay = `${formattedPrice}đ`;
  if (product.variants && product.variants.length > 0) {
    const prices = product.variants.map((v) => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    if (minPrice !== maxPrice) {
      const formattedMin = new Intl.NumberFormat("vi-VN").format(minPrice);
      const formattedMax = new Intl.NumberFormat("vi-VN").format(maxPrice);
      priceDisplay = `${formattedMin}đ - ${formattedMax}đ`;
    }
  }

  const badgeStyles: Record<string, string> = {
    new: "bg-[#083B63] text-white",
    "sold-out": "bg-gray-500 text-white",
    "pre-order": "bg-[#B58A43] text-white",
  };

  const badgeLabels: Record<string, string> = {
    new: "MỚI",
    "sold-out": "HẾT HÀNG",
    "pre-order": "PRE-ORDER",
  };

  return (
    <div className="group relative flex flex-col">
      {/* Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square overflow-hidden rounded-xl bg-[#f4f1ef]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, (max-width: 1280px) 28vw, 260px"
          quality={70}
          decoding="async"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeStyles[product.badge]}`}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-1">
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1.5">
            <Star
              size={14}
              className="fill-[#B58A43] text-[#B58A43]"
            />
            <span className="text-sm font-medium text-gray-800">
              {product.rating}
            </span>
            {product.reviewCount && (
              <span className="text-sm text-gray-500">
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Name */}
        <Link
          href={`/products/${product.slug}`}
          className="text-[15px] font-medium leading-snug text-[#083B63] transition-colors hover:text-[#B58A43]"
        >
          {product.name}
        </Link>

        {/* Price + Cart */}
        <div className="mt-1 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#B58A43]">
              {priceDisplay}
            </span>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#083B63] text-white transition-all duration-200 hover:bg-[#B58A43] hover:scale-110"
              aria-label="Thêm vào giỏ hàng"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
          {product.savingsText && (
            <span className="text-[11px] font-semibold text-green-600 tracking-wide mt-0.5">
              {product.savingsText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
