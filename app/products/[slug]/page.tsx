"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import {
  Star,
  Minus,
  Plus,
  Heart,
  ShoppingCart,
  Truck,
  RefreshCw,
  ShieldCheck,
  Info,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle,
  X,
} from "lucide-react";
import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

// Next.js 16 uses `params` as a Promise in dynamic route pages
export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap the params promise using React.use()
  const { slug } = require("react").use(params);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}

function ProductDetailContent({
  product,
}: {
  product: (typeof products)[number];
}) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("story");
  const [activeImage, setActiveImage] = useState(0);

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  );

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleAddToCart = (redirect: boolean) => {
    if (typeof window === "undefined") return;
    const cartDataStr = localStorage.getItem("lamthuy_cart");
    let cart = [];
    if (cartDataStr) {
      try {
        cart = JSON.parse(cartDataStr);
      } catch (e) {
        cart = [];
      }
    }

    const variantName = selectedVariant ? selectedVariant.name : "Tiêu chuẩn";
    const itemPrice = selectedVariant ? selectedVariant.price : product.price;

    const existingIndex = cart.findIndex(
      (item: any) => item.productId === product.id && item.variant === variantName
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        productId: product.id,
        variant: variantName,
        quantity: quantity,
      });
    }

    localStorage.setItem("lamthuy_cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    if (redirect) {
      router.push("/cart");
    } else {
      setIsCartModalOpen(true);
      setTimeout(() => {
        setIsCartModalOpen(false);
      }, 3000);
    }
  };

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(currentPrice);

  const gallery = product.gallery || [product.image];

  // Related products from same collection
  const relatedProducts = products
    .filter(
      (p) =>
        p.collectionSlug === product.collectionSlug && p.id !== product.id
    )
    .slice(0, 4);

  const tabs = [
    { id: "story", label: "Câu chuyện văn hoá" },
    { id: "specs", label: "Thông số chi tiết" },
    { id: "reviews", label: `Đánh giá (${product.reviewCount || 0})` },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ===== BREADCRUMB ===== */}
      <nav className="border-b border-gray-100 px-8 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-[#083B63]">
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/products"
            className="transition-colors hover:text-[#083B63]"
          >
            Sản phẩm
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-400">{product.collection}</span>
          <ChevronRight size={14} />
          <span className="font-medium text-[#083B63]">{product.name}</span>
        </div>
      </nav>

      {/* ===== PRODUCT SECTION ===== */}
      <section className="px-8 py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="hidden flex-col gap-3 md:flex">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      activeImage === idx
                        ? "border-[#083B63] shadow-md"
                        : "border-gray-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative flex-1 aspect-square overflow-hidden rounded-2xl bg-[#f4f1ef] group/image">
                <Image
                  src={gallery[activeImage]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                
                {/* Navigation arrows */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#083B63] shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 cursor-pointer z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setActiveImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#083B63] shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 cursor-pointer z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      activeImage === idx
                        ? "border-[#083B63] shadow-md"
                        : "border-gray-200 opacity-60"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} mobile view ${idx + 1}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Collection badge */}
            <span className="inline-block rounded-full bg-[#f4f1ef] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#083B63]">
              Thuộc BST: {product.collection}
            </span>

            {/* Name */}
            <h1 className="mt-4 font-serif text-2xl font-bold text-[#083B63] md:text-3xl">
              {product.name} – Pháp Lam Cung Đình
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={`${
                        star <= Math.floor(product.rating!)
                          ? "fill-[#B58A43] text-[#B58A43]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  ({product.rating})
                </span>
                <span className="text-sm text-gray-500">
                  · {product.reviewCount} đánh giá
                </span>
              </div>
            )}

            {/* Price */}
            <p className="mt-5 text-3xl font-bold text-[#B58A43]">
              {formattedPrice}đ
            </p>

            {product.savingsText && (
              <p className="mt-1 text-sm font-semibold text-green-600">
                {product.savingsText}
              </p>
            )}

            {/* Variants Selector */}
            {product.variants && (
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  LỰA CHỌN PHIÊN BẢN
                </span>
                <div className="mt-2 relative">
                  <select
                    value={selectedVariant?.name}
                    onChange={(e) => {
                      const variant = product.variants?.find(
                        (v) => v.name === e.target.value
                      );
                      if (variant) {
                        setSelectedVariant(variant);
                        const varName = variant.name.toLowerCase();
                        let targetKeyword = "";
                        if (varName.includes("móc khóa") || varName.includes("moc khoa")) {
                          targetKeyword = "mockhoa";
                        } else if (varName.includes("treo áo") || varName.includes("cài áo") || varName.includes("caiao") || varName.includes("treo ao")) {
                          targetKeyword = "caiao";
                        } else if (varName.includes("bookmark")) {
                          targetKeyword = "bookmark";
                        } else if (varName.includes("combo") || varName.includes("trọn bộ")) {
                          targetKeyword = "collection";
                        } else if (varName.includes("nguyên vật liệu") || varName.includes("diy")) {
                          targetKeyword = "diykit";
                        }
                        
                        if (targetKeyword) {
                          const matchedIdx = gallery.findIndex((img) =>
                            img.toLowerCase().includes(targetKeyword)
                          );
                          if (matchedIdx !== -1) {
                            setActiveImage(matchedIdx);
                          }
                        }
                      }
                    }}
                    className="h-11 w-full rounded-lg border border-gray-200 px-4 pr-10 text-sm text-gray-700 bg-white outline-none transition-colors focus:border-[#083B63] appearance-none cursor-pointer"
                  >
                    {product.variants.map((v) => (
                      <option key={v.name} value={v.name}>
                        {v.name} — {new Intl.NumberFormat("vi-VN").format(v.price)}đ
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-sm font-medium text-gray-700">
                SỐ LƯỢNG
              </span>
              <div className="mt-2 flex items-center gap-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-l-lg border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
                >
                  <Minus size={16} />
                </button>
                <span className="flex h-11 w-14 items-center justify-center border-y border-gray-200 text-sm font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-r-lg border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Pre-order notice */}
            {product.status === "pre-order" && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-50 px-5 py-3 border border-amber-200">
                <Info size={18} className="mt-0.5 flex-shrink-0 text-amber-600" />
                <p className="text-sm leading-relaxed text-amber-800">
                  <span className="font-semibold">Lưu ý:</span> Sản phẩm
                  Pre-order yêu cầu thanh toán chuyển khoản trước 100% để xác
                  nhận đơn hàng.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => handleAddToCart(true)}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#083B63] text-sm font-semibold text-white transition-all hover:bg-[#0a4d80] hover:shadow-lg cursor-pointer"
              >
                Mua ngay
              </button>

              <button
                onClick={() => handleAddToCart(false)}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#083B63] text-sm font-semibold text-[#083B63] transition-all hover:bg-[#083B63] hover:text-white cursor-pointer"
              >
                <ShoppingCart size={16} />
                Thêm vào giỏ hàng
              </button>

              <button className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-200 text-gray-400 transition-all hover:border-red-300 hover:text-red-500">
                <Heart size={18} />
              </button>
            </div>

            {/* Commitments */}
            <div className="mt-8 space-y-3 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={18} className="flex-shrink-0 text-green-600" />
                <span>Sẵn sàng giao ngay</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck size={18} className="flex-shrink-0 text-[#083B63]" />
                <span>Miễn phí vận chuyển cho đơn hàng từ 349đ</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <RefreshCw size={18} className="flex-shrink-0 text-[#B58A43]" />
                <span>Đổi trả trong vòng 7 ngày</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <section className="border-t border-gray-100 px-8 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          {/* Tab Headers */}
          <div className="flex gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#083B63] text-[#083B63]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8 max-w-3xl">
            {activeTab === "story" && (
              <div className="space-y-4 text-base leading-7 text-gray-700">
                {product.description?.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}

                <blockquote className="mt-8 border-l-4 border-[#B58A43] pl-6 font-serif text-lg italic leading-relaxed text-[#083B63]">
                  &ldquo;Chúng tôi không chỉ bán một món phụ kiện, chúng tôi
                  đang kể lại một chương lịch sử bị lãng quên.&rdquo;
                </blockquote>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <span className="text-gray-500">Chất liệu</span>
                    <p className="mt-1 font-medium text-[#083B63]">
                      Men Pháp Lam trên kim loại
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <span className="text-gray-500">Kỹ thuật</span>
                    <p className="mt-1 font-medium text-[#083B63]">
                      Vẽ tay, nung thủ công
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <span className="text-gray-500">Xuất xứ</span>
                    <p className="mt-1 font-medium text-[#083B63]">Huế, Việt Nam</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <span className="text-gray-500">Bảo hành</span>
                    <p className="mt-1 font-medium text-[#083B63]">6 tháng</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="space-y-6">
                  {[
                    {
                      name: "Nguyễn Minh Anh",
                      rating: 5,
                      comment: "Sản phẩm rất đẹp và tinh xảo. Đóng gói cẩn thận, giao hàng nhanh. Sẽ mua thêm làm quà tặng.",
                      date: "15/06/2026",
                    },
                    {
                      name: "Trần Hải Đăng",
                      rating: 5,
                      comment: "Chất lượng tuyệt vời, màu men rất đẹp và bền. Nghệ nhân rất tài hoa!",
                      date: "10/06/2026",
                    },
                    {
                      name: "Lê Thùy Dương",
                      rating: 4,
                      comment: "Sản phẩm đẹp, rất hợp làm quà tặng. Hy vọng sẽ có thêm nhiều mẫu mới.",
                      date: "02/06/2026",
                    },
                    {
                      name: "Phan Hoàng Nam",
                      rating: 5,
                      comment: "Sản phẩm Pháp Lam Huế tuyệt đẹp! Tinh xảo từ đường nét cẩn men đến màu sắc cung đình cổ điển.",
                      date: "28/05/2026",
                    },
                    {
                      name: "Đỗ Thị Kim Oanh",
                      rating: 5,
                      comment: "Mua bộ DIY Kit cho con gái trải nghiệm rất bổ ích. Gói hàng đầy đủ phụ kiện vẽ men và nung men rất thích.",
                      date: "25/05/2026",
                    },
                    {
                      name: "Vũ Bảo Long",
                      rating: 5,
                      comment: "Sản phẩm cực kỳ đáng đồng tiền. Đóng gói hộp quà sang trọng bằng chất liệu truyền thống phù hợp đem tặng.",
                      date: "20/05/2026",
                    },
                    {
                      name: "Phạm Hữu Đạt",
                      rating: 5,
                      comment: "Rất thích triết lý di sản đương đại của tiệm. Vừa gìn giữ tinh hoa truyền thống Huế vừa mang tính ứng dụng cao.",
                      date: "15/05/2026",
                    },
                    {
                      name: "Trịnh Mỹ Duyên",
                      rating: 4,
                      comment: "Màu men Pháp Lam ngoài đời còn đẹp hơn trên ảnh, ánh sáng bắt màu lung linh lắm. Tư vấn viên nhiệt tình hỗ trợ pre-order.",
                      date: "08/05/2026",
                    }
                  ].slice(0, visibleReviews).map((review, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              size={14}
                              className={
                                s <= review.rating
                                  ? "fill-[#B58A43] text-[#B58A43]"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                          {review.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {review.date}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>

                {visibleReviews < 8 && (
                  <div className="pt-4 text-center">
                    <button
                      onClick={() => setVisibleReviews((prev) => Math.min(prev + 3, 8))}
                      className="inline-flex h-11 items-center justify-center rounded-full border border-[#083B63] px-6 text-xs font-semibold text-[#083B63] transition-colors hover:bg-[#083B63] hover:text-white cursor-pointer"
                    >
                      Xem thêm đánh giá
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 px-8 py-14">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-[#083B63]">
                Cùng Bộ Sưu Tập
              </h2>
              <Link
                href="/products"
                className="text-sm font-medium text-[#B58A43] transition-colors hover:text-[#083B63]"
              >
                Xem tất cả
              </Link>
            </div>

            <div className="mt-10">
              <ProductGrid products={relatedProducts} columns={4} />
            </div>
          </div>
        </section>
      )}

      {/* ===== ADD TO CART SUCCESS TOAST ===== */}
      {isCartModalOpen && (
        <div className="fixed top-24 right-8 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3 rounded-xl border border-green-150 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white font-bold text-[10px] select-none">
              ✓
            </span>
            <span className="text-sm font-semibold text-[#083B63]">
              Đã thêm vào giỏ hàng thành công!
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
