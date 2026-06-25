import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="bg-[#FBF8F3]">
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C59A5C]">
          Lam Thủy Blog
        </p>
        <h1 className="mt-5 text-5xl font-semibold text-[#071D3A] md:text-6xl">
          Nhật ký di sản
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F6670]">
          Khám phá câu chuyện Pháp Lam Huế, cảm hứng thủ công và những giá trị
          văn hóa được gìn giữ trong đời sống hiện đại.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
    </main>
  );
}
