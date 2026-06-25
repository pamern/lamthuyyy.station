import { notFound } from "next/navigation";
import BlogContent from "@/components/BlogContent";
import BlogDetailHero from "@/components/BlogDetailHero";
import RelatedBlogs from "@/components/RelatedBlogs";
import { blogs } from "@/data/blogs";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <BlogDetailHero blog={blog} />
      <BlogContent content={blog.content} />
      <RelatedBlogs currentBlog={blog} />
    </main>
  );
}
