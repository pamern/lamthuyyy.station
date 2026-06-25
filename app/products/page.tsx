"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import ProductGrid from "@/components/ProductGrid";
import { filterProducts } from "@/utils/productFilters";

const categoryFilters = [
  "Tất cả",
  "Móc khóa",
  "Treo áo",
  "Bookmark",
  "Bộ sản phẩm",
  "DIY Kit",
];

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white py-20 text-center text-gray-500">Đang tải sản phẩm...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const collectionParam = searchParams.get("collection");
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [priceRange, setPriceRange] = useState<string>("Tất cả");
  const [sortBy, setSortBy] = useState<string>("default");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Sync parameters if URL changes
  useEffect(() => {
    if (searchParam) {
      setSearchQuery(searchParam);
    } else {
      setSearchQuery("");
    }
  }, [searchParam]);

  useEffect(() => {
    if (collectionParam) {
      setSelectedCollections([collectionParam]);
    } else {
      setSelectedCollections([]);
    }
  }, [collectionParam]);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("Tất cả");
    }
  }, [categoryParam]);

  // Categories list in sidebar
  const categoriesList = [
    "Móc khóa",
    "Treo áo",
    "Bookmark",
    "Bộ sản phẩm",
    "DIY Kit",
  ];

  // Toggle category checklist in sidebar
  const handleCategoryToggle = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory("Tất cả");
    } else {
      setActiveCategory(category);
    }
    setCurrentPage(1);
  };

  // Toggle collection checklist in sidebar
  const handleCollectionToggle = (slug: string) => {
    setSelectedCollections((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
    setCurrentPage(1);
  };

  // Toggle status checklist in sidebar
  const handleStatusToggle = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
    setCurrentPage(1);
  };

  // Calculate filtered products using the reusable filter utility
  const filteredProducts = filterProducts(products, {
    searchQuery,
    category: activeCategory,
    collections: selectedCollections,
    maxPrice,
    priceRange,
    statuses: selectedStatuses,
    sortBy,
  });

  // Pagination config
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <section className="bg-[#f4f1ef] px-8 pb-10 pt-12 md:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl font-bold text-[#083B63] md:text-4xl">
            Pháp Lam &amp; Nghệ Thuật Sống Chậm
          </h1>

          {/* Search Bar */}
          <div className="mx-auto mt-8 flex h-14 max-w-2xl items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <input
              type="text"
              placeholder="Bạn đang tìm món quà gì?"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 px-6 text-base text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button className="flex h-full w-14 items-center justify-center text-gray-500 transition-colors hover:text-[#083B63]">
              <Search size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY PILLS ===== */}
      <section className="border-b border-gray-200 px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <div className="flex flex-wrap items-center gap-2">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#083B63] text-white shadow-sm"
                    : "border border-gray-200 text-gray-600 hover:border-[#083B63] hover:text-[#083B63]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">

            {/* Sắp Xếp Dropdown */}
            <div className="relative hidden items-center gap-2 md:flex">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Sắp xếp</span>
              <button
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="flex items-center gap-1 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-[#083B63] bg-white cursor-pointer"
              >
                {sortBy === "default"
                  ? "Mặc định"
                  : sortBy === "price-asc"
                  ? "Giá: Thấp đến Cao"
                  : "Giá: Cao đến Thấp"}
                <ChevronDown size={16} />
              </button>

              {isSortDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 rounded-lg border border-gray-150 bg-white p-2 shadow-lg z-20">
                  {[
                    { id: "default", label: "Mặc định" },
                    { id: "price-asc", label: "Giá: Thấp đến Cao" },
                    { id: "price-desc", label: "Giá: Cao đến Thấp" },
                  ].map((sortOption) => (
                    <button
                      key={sortOption.id}
                      onClick={() => {
                        setSortBy(sortOption.id);
                        setIsSortDropdownOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded cursor-pointer ${
                        sortBy === sortOption.id
                          ? "font-semibold text-[#083B63] bg-gray-50"
                          : "text-gray-700"
                      }`}
                    >
                      {sortOption.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="px-8 py-10">
        <div className="mx-auto flex max-w-7xl gap-10">
          {/* Sidebar Filter */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            {/* Danh mục */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#083B63]">
                Danh mục
              </h3>
              <div className="space-y-3">
                {categoriesList.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition-colors hover:text-[#083B63]"
                  >
                    <input
                      type="checkbox"
                      checked={activeCategory === item}
                      onChange={() => handleCategoryToggle(item)}
                      className="h-4 w-4 rounded border-gray-300 accent-[#083B63]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Khoảng giá */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#083B63]">
                Khoảng giá
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0đ</span>
                  <span className="font-semibold text-[#B58A43]">
                    Dưới {new Intl.NumberFormat("vi-VN").format(maxPrice)}đ
                  </span>
                </div>
                <input
                  type="range"
                  min="150000"
                  max="1000000"
                  step="50000"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="h-2 w-full cursor-pointer rounded-lg bg-gray-200 accent-[#B58A43]"
                />
              </div>
            </div>

            {/* Bộ sưu tập */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#083B63]">
                Bộ sưu tập
              </h3>
              <div className="space-y-3">
                {collections.map((col) => (
                  <label
                    key={col.id}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition-colors hover:text-[#083B63]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCollections.includes(col.slug)}
                      onChange={() => handleCollectionToggle(col.slug)}
                      className="h-4 w-4 rounded border-gray-300 accent-[#083B63]"
                    />
                    {col.name}
                  </label>
                ))}
              </div>
            </div>

            {/* Trạng thái */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#083B63]">
                Trạng thái
              </h3>
              <div className="space-y-3">
                {["Pre-order", "Còn hàng"].map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition-colors hover:text-[#083B63]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes(item)}
                      onChange={() => handleStatusToggle(item)}
                      className="h-4 w-4 rounded border-gray-300 accent-[#083B63]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {paginatedProducts.length > 0 ? (
              <ProductGrid products={paginatedProducts} columns={3} />
            ) : (
              <div className="py-20 text-center text-gray-500">
                Không tìm thấy sản phẩm phù hợp với bộ lọc hiện tại.
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#083B63] disabled:opacity-50"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => {
                  const page = idx + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
                        currentPage === page
                          ? "bg-[#083B63] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#083B63] disabled:opacity-50"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
