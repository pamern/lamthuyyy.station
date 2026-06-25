import Link from "next/link";
import Image from "next/image";
import { Mail, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const footerLinks = [
  { title: "Trang chủ", href: "/" },
  { title: "Sản phẩm", href: "/products" },
  { title: "Bộ sưu tập", href: "/collections" },
  { title: "DIY Kit", href: "/diy-kit" },
  { title: "Blog", href: "/blog" },
  { title: "Về chúng tôi", href: "/about" },
];

const serviceLinks = [
  { title: "Giao hàng", href: "#" },
  { title: "Đổi trả", href: "#" },
  { title: "Bảo quản sản phẩm", href: "#" },
  { title: "Gói quà tặng", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="LAM THỦY"
                width={48}
                height={48}
              />

              <h2 className="text-2xl font-bold tracking-[3px]">LAM THỦY</h2>
            </div>

            <p className="mt-4 leading-7 text-gray-400">
              Trạm Di Sản Đương Đại.
            </p>

            <p className="mt-2 text-gray-500">Nghệ thuật trong tầm tay.</p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#B58A43] hover:text-[#B58A43]"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#B58A43] hover:text-[#B58A43]"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-[#B58A43] hover:text-[#B58A43]"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wider text-white">
              Liên kết
            </h3>

            <ul className="space-y-3 text-gray-400">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#B58A43]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wider text-white">
              Dịch vụ
            </h3>

            <ul className="space-y-3 text-gray-400">
              {serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#B58A43]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wider text-white">
              Bản tin
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Nhận thông tin mới nhất về di sản & nghệ thuật.
            </p>

            <div className="flex h-11 overflow-hidden rounded-full border border-gray-700 bg-[#1B1B1B]">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 bg-transparent px-5 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button className="flex w-12 items-center justify-center bg-[#083B63] text-white transition-colors hover:bg-[#B58A43]">
                <Send size={18} />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3 text-gray-400">
              <Mail size={18} />
              <span className="text-sm">hello@lamthuy.vn</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5">
        <p className="text-center text-sm text-gray-500">
          © 2026 LAM THỦY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
