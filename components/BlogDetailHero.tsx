import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/data/blogs";

interface BlogDetailHeroProps {
  blog: Blog;
}

export default function BlogDetailHero({ blog }: BlogDetailHeroProps) {
  return (
    <section className="bg-[#FBF8F3]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12">
        <Link
          href="/blog"
          className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#C59A5C] transition hover:text-[#071D3A]"
        >
          ← Quay lại Blog
        </Link>

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C59A5C]">
            {blog.category}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#071D3A] md:text-6xl">
            {blog.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F6670]">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#7C746A]">
            <span>{blog.date}</span>
            <span aria-hidden="true">·</span>
            <span>{blog.author}</span>
            <span aria-hidden="true">·</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        <div className="relative mt-14 h-[320px] overflow-hidden rounded-[2rem] border border-[#E9DECF] bg-white md:h-[520px]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
