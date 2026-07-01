import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import type { Blog } from "@/data/blogs";
import { blogs } from "@/data/blogs";

interface RelatedBlogsProps {
  currentBlog: Blog;
}

export default function RelatedBlogs({ currentBlog }: RelatedBlogsProps) {
  const relatedBlogs = blogs
    .filter((blog) => blog.slug !== currentBlog.slug)
    .slice(0, 3);

  return (
    <section className="bg-[#FBF8F3] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C59A5C]">
              Khám phá thêm
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#071D3A]">
              Bài viết tiếp theo
            </h2>
          </div>

          <Link
            href="/blog"
            className="w-fit rounded-full border border-[#071D3A] px-6 py-3 text-sm font-semibold text-[#071D3A] transition hover:bg-[#071D3A] hover:text-white"
          >
            Xem tất cả
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
