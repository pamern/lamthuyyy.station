interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-4xl font-bold tracking-tight text-[#0D3B66] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 text-base leading-7 text-gray-500 ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
