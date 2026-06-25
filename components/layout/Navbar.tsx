"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, ShoppingCart, UserRound, Menu, X } from "lucide-react";
import { products } from "@/data/products";

const menus = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Sản phẩm",
    href: "/products",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Về chúng tôi",
    href: "/about",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const filteredSuggestions = products
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 5);

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/products");
    }
    setMobileSearch(false);
    setMobileOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileSearch(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateCount = () => {
        const cartDataStr = localStorage.getItem("lamthuy_cart");
        if (cartDataStr) {
          try {
            const cart = JSON.parse(cartDataStr);
            const totalQty = cart.reduce(
              (sum: number, item: any) => sum + (item.quantity || 0),
              0
            );
            setCartCount(totalQty);
          } catch (e) {
            setCartCount(0);
          }
        } else {
          setCartCount(0);
        }
      };

      updateCount();
      window.addEventListener("cartUpdated", updateCount);
      return () => window.removeEventListener("cartUpdated", updateCount);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-[3px] text-[#083B63] sm:text-2xl"
        >
          LAM THỦY
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">
          {menus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[16px] transition-all duration-200

              ${
                pathname === item.href
                  ? "font-semibold text-[#083B63]"
                  : "text-gray-700 hover:text-[#B58A43]"
              }
              
              `}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Desktop search */}
          <div className="hidden md:flex h-11 w-[240px] items-center rounded-full border border-gray-300 px-5 relative z-50 lg:w-[280px]">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit();
                  setShowSuggestions(false);
                }
              }}
              className="flex-1 bg-transparent text-xs text-gray-700 placeholder:text-gray-500 outline-none"
            />

            <button
              onClick={() => {
                handleSearchSubmit();
                setShowSuggestions(false);
              }}
              className="text-gray-700 hover:text-[#083B63] transition-colors cursor-pointer"
              aria-label="Submit search"
            >
              <Search size={18} strokeWidth={2.5} />
            </button>

            {/* Suggestions Dropdown */}
            {showSuggestions &&
              searchQuery.trim() !== "" &&
              filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-md p-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {filteredSuggestions.map((item) => (
                    <Link
                      key={item.id}
                      href={`/products/${item.slug}`}
                      onClick={() => {
                        setSearchQuery("");
                        setShowSuggestions(false);
                      }}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 group cursor-pointer"
                    >
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded bg-[#f4f1ef]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="40px"
                          quality={60}
                          decoding="async"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#083B63] group-hover:text-[#B58A43] truncate transition-colors">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium">
                          {item.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
          </div>

          {/* Mobile search icon */}
          <button
            className="md:hidden text-gray-700 hover:text-[#083B63] transition-colors"
            onClick={() => setMobileSearch((v) => !v)}
            aria-label="Tìm kiếm"
          >
            <Search size={20} strokeWidth={2.5} />
          </button>

          <Link
            href="/cart"
            className="text-gray-700 relative transition hover:text-[#B58A43]"
          >
            <ShoppingCart size={20} strokeWidth={2.4} className="sm:hidden" />
            <ShoppingCart size={22} strokeWidth={2.4} className="hidden sm:block" />

            {cartCount > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-2
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-[#C59A45]
                text-[11px]
                font-semibold
                text-white
              "
              >
                {cartCount}
              </span>
            )}
          </Link>

          <button className="hidden sm:block text-gray-700 transition hover:text-[#B58A43]">
            <UserRound size={22} strokeWidth={2.4} />
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#083B63] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      {mobileSearch && (
        <div className="md:hidden border-t border-gray-100 px-4 py-3">
          <div className="flex h-11 items-center rounded-full border border-gray-300 px-4">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              autoFocus
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearchSubmit();
              }}
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-500 outline-none"
            />
            <button
              onClick={handleSearchSubmit}
              className="text-gray-700 hover:text-[#083B63]"
              aria-label="Tìm kiếm"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white">
          <nav className="flex flex-col divide-y divide-gray-100">
            {menus.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-5 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#083B63] font-semibold bg-[#f4f1ef]"
                    : "text-gray-700 hover:text-[#B58A43] hover:bg-gray-50"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="px-6 pt-6">
            <button className="flex w-full items-center gap-3 text-gray-700 hover:text-[#B58A43] transition-colors">
              <UserRound size={20} />
              <span className="text-base font-medium">Tài khoản</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
