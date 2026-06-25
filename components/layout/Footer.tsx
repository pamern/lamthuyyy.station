import Link from "next/link";
import Image from "next/image";
import { Mail, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const footerLinks = [
  { title: "Trang chủ", href: "/" },
  { title: "Sản phẩm", href: "/products" },
  { title: "Blog", href: "/blog" },
  { title: "Về chúng tôi", href: "/about" },
];

const serviceLinks = [
  { title: "Giao hàng", href: "/services/giao-hang" },
  { title: "Đổi trả", href: "/services/doi-tra" },
  { title: "Bảo quản sản phẩm", href: "/services/bao-quan" },
  { title: "Gói quà tặng", href: "/services/qua-tang" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/brand/logo.png"
                alt="LAM THỦY"
                width={48}
                height={48}
              />

              <h2 className="font-serif text-2xl font-bold tracking-[3px]">LAM THỦY</h2>
            </div>

            <p className="mt-4 leading-7 text-gray-400">
              Trạm Di Sản Đương Đại.
            </p>

            <p className="mt-2 text-gray-500">Nghệ thuật trong tầm tay.</p>

            <div className="mt-6 flex gap-4 text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#B58A43]"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#B58A43]"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#B58A43]"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
            </div>
            
            <div className="mt-5 flex items-center gap-3 text-gray-400">
              <Mail size={18} />
              <a
                href="mailto:lamthuy.station@gmail.com"
                className="text-sm transition-colors hover:text-[#B58A43]"
              >
                lamthuy.station@gmail.com
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
