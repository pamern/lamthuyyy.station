"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, UserRound } from "lucide-react";

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
    title: "Bộ sưu tập",
    href: "/collections",
  },
  {
    title: "DIY Kit",
    href: "/diy-kit",
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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* LOGO */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-[3px] text-[#083B63]"
        >
          LAM THỦY
        </Link>

        {/* MENU */}

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

        <div className="flex items-center gap-5">
          <div className="hidden md:flex h-11 w-[250px] items-center rounded-full border border-gray-300 px-5">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="flex-1 bg-transparent text-base text-gray-700 placeholder:text-gray-500 outline-none"
            />

            <Search size={24} strokeWidth={2.5} className="text-gray-700" />
          </div>

          <Link
            href="/cart"
            className="text-gray-700 relative transition hover:text-[#B58A43]"
          >
            <ShoppingCart size={22} strokeWidth={2.4} />

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
              2
            </span>
          </Link>

          <button className="text-gray-700 transition hover:text-[#B58A43]">
            <UserRound size={22} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </header>
  );
}
