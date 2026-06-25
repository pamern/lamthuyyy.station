import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import CollectionCard from "@/components/CollectionCard";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <section className="relative overflow-hidden">
        {/* Background decorative image */}
        <div className="absolute inset-0">
          <Image
            src="/brand/coverpage.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-8 py-28 md:py-36 lg:py-44">
          <span className="mb-4 text-sm font-medium uppercase tracking-[4px] text-[#B58A43]">
            Di sản đương đại
          </span>

          <h1 className="max-w-lg font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Nghệ thuật
            <br />
            trong tầm tay
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-gray-300">
            Pháp lam Huế – Từ cung đình vào cuộc sống. Khám phá và
            được đắm mình vào di sản đương đại của Huế để tìm lại sự
            chậm rãi và cân bằng.
          </p>

          <Link
            href="/products"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#B58A43] px-8 py-4 text-sm font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-[#c9a05c] hover:gap-5 hover:shadow-lg"
          >
            Khám phá ngay
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ===== COLLECTIONS SECTION ===== */}
      <section className="bg-white px-8 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-[#083B63] md:text-3xl">
              BỘ SƯU TẬP
            </h2>
            <Link
              href="/products"
              className="text-sm font-medium text-[#B58A43] transition-colors hover:text-[#083B63]"
            >
              Xem tất cả
            </Link>
          </div>

          {/* Infinite Marquee of Collections */}
          <div className="relative mt-12 overflow-hidden py-4">
            {/* Left and right fade overlays for luxury aesthetic */}
            <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none md:w-32" />
            <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:w-32" />
            
            <div className="animate-marquee flex gap-12 md:gap-20">
              {/* Duplicate collections 4 times to ensure seamless infinite scroll */}
              {[...collections, ...collections, ...collections, ...collections].map((collection, index) => (
                <div
                  key={`${collection.id}-${index}`}
                  className="inline-block flex-shrink-0"
                >
                  <CollectionCard collection={collection} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY CARDS SECTION ===== */}
      <section className="bg-[#f9f8f6] px-8 py-4">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {/* Móc khóa */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/products/huongnguyet/moc_khoa/mockhoaxanh.png"
              alt="Móc khóa"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl font-bold text-white">
                Móc khóa
              </h3>
              <Link
                href="/products?category=Móc khóa"
                className="mt-3 inline-block rounded-full border border-white/50 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-white hover:text-[#083B63]"
              >
                Khám phá
              </Link>
            </div>
          </div>

          {/* Treo áo */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/products/huongnguyet/cai_ao/caiaoxanh.png"
              alt="Treo áo"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl font-bold text-white">
                Treo áo
              </h3>
              <Link
                href="/products?category=Treo áo"
                className="mt-3 inline-block rounded-full border border-white/50 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-white hover:text-[#083B63]"
              >
                Khám phá
              </Link>
            </div>
          </div>

          {/* Bookmark */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/products/huongnguyet/bookmart/bookmarkxanh.png"
              alt="Bookmark"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl font-bold text-white">
                Bookmark
              </h3>
              <Link
                href="/products?category=Bookmark"
                className="mt-3 inline-block rounded-full border border-white/50 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-white hover:text-[#083B63]"
              >
                Khám phá
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIY KIT BLOCK ===== */}
      <section className="bg-[#f9f8f6] px-8 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/products/DIYKit.png"
                alt="DIY Kit"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-[#083B63] p-10 md:p-14">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#B58A43]">
                Trải nghiệm DIY
              </span>

              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                Tự tay tạo nên
                <br />
                di sản của chính mình
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-300">
                Bộ DIY Kit từ Lam Thủy mang đến cho bạn cơ hội trải
                nghiệm trọn vẹn kỹ thuật Pháp Lam cổ xưa. Với nguyên
                liệu và hướng dẫn để bạn trải nghiệm quá trình sáng
                tạo thủ công – biến mỗi khoảnh khắc thành di sản
                Pháp Lam một cách trọn vẹn.
              </p>

              <Link
                href="/products?category=DIY Kit"
                className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-[2px] text-white transition-all hover:border-[#B58A43] hover:bg-[#B58A43]"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="bg-white px-8 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-2xl font-bold uppercase tracking-[4px] text-[#083B63] md:text-3xl">
            Tinh hoa thủ công
          </h2>

          <div className="mt-12">
            <ProductGrid products={featuredProducts} columns={4} />
          </div>
        </div>
      </section>
    </main>
  );
}
