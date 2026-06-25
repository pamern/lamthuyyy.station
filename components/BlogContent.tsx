import type { BlogContentBlock } from "@/data/blogs";

interface BlogContentProps {
  content: BlogContentBlock[];
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        {content.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="mb-5 mt-12 text-3xl font-semibold text-[#071D3A]"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="my-10 border-l-4 border-[#C59A5C] bg-[#FBF8F3] px-6 py-5 text-xl italic leading-9 text-[#071D3A] "
              >
                “{block.text}”
              </blockquote>
            );
          }

          return (
            <p
              key={index}
              className="whitespace-pre-line text-justify mb-6 text-lg leading-9 text-[#4F5662]"
            >
              {block.text}
            </p>
          );
        })}
      </div>
    </section>
  );
}
