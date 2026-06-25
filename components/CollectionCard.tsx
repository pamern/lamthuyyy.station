import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/data/collections";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      href={`/products?collection=${collection.slug}`}
      className="group relative block w-[280px] h-[180px] overflow-hidden bg-gray-100 md:w-[420px] md:h-[260px] cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <Image
        src={collection.image}
        alt={collection.name}
        fill
        sizes="(max-width: 768px) 280px, 420px"
        quality={70}
        decoding="async"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Dark gradient overlay for elegant readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      {/* Gold Pre-order badge top right */}
      <div className="absolute top-4 right-4 rounded-full border border-[#B58A43]/40 bg-[#B58A43] px-3 py-1 text-[8px] font-bold uppercase tracking-[1.5px] text-white shadow-sm select-none whitespace-nowrap transition-transform duration-300 group-hover:scale-105 md:top-5 md:right-5 md:text-[9px]">
        Pre-order
      </div>

      {/* Info bottom left */}
      <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 transition-transform duration-300 group-hover:translate-x-1">
        <span className="text-[10px] font-semibold uppercase tracking-[3px] text-gray-300 md:text-xs animate-pulse">
          Bộ sưu tập
        </span>
        <h3 className="mt-1 font-serif text-lg font-bold uppercase tracking-[3px] text-white md:text-2xl">
          {collection.name}
        </h3>
      </div>
    </Link>
  );
}
