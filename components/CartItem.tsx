import Image from "next/image";

interface CartItemProps {
  image: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
}

export default function CartItem({
  image,
  name,
  variant,
  price,
  quantity,
}: CartItemProps) {
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(price);

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
      {/* Image */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#f4f1ef]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#083B63] leading-snug">
          {name}
        </h4>
        <p className="mt-0.5 text-xs text-gray-500">
          Phân loại: {variant}
        </p>
        {quantity > 1 && (
          <p className="mt-0.5 text-xs text-gray-500">SL: {quantity}</p>
        )}
        <p className="mt-1 text-sm font-bold text-[#B58A43]">
          {formattedPrice}đ
        </p>
      </div>
    </div>
  );
}
