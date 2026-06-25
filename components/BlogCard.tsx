import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#E9DECF] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/blog/${blog.slug}`}
        className="relative block h-64 overflow-hidden"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-[#071D3A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
          {blog.category}
        </span>
      </Link>

      <div className="p-6">
        <p className="text-sm font-medium text-[#7C746A]">
          {blog.date} · {blog.readTime}
        </p>

        <h2 className="mt-3 text-2xl font-semibold leading-snug text-[#071D3A]">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h2>

        <p className="mt-4 line-clamp-3 leading-7 text-[#5F6670]">
          {blog.excerpt}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#C59A5C] transition hover:text-[#071D3A]"
        >
          Đọc tiếp
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
