import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ValueCard from "@/components/ValueCard";
import { aboutValues, craftImages, timelineItems } from "@/data/about"; 
export default function AboutPage() {
  return (
    <main className="bg-[#F8F6F3] text-[#1F2933]">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex rounded-full bg-[#EAF1F8] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#003B6F]">
            • Since 2024
          </span>

          <h1 className="mt-6 max-w-xl font-serif text-3xl font-bold leading-tight text-[#1F2933] sm:text-4xl md:text-5xl lg:text-6xl">
            Gói ghém tinh hoa Pháp Lam vào nhịp sống mới.
          </h1>

          <div className="mt-8 h-1 w-20 bg-[#003B6F]" />

          <blockquote className="mt-8 border-l-4 border-[#003B6F] pl-5 italic leading-7 text-gray-600">
            “Lam Thủy không chỉ là một thương hiệu, mà là một trạm dừng chân nơi
            những mảnh vỡ của lịch sử được hàn gắn bằng hơi thở đương đại.”
          </blockquote>

          <p className="mt-6 max-w-xl leading-7 text-gray-600">
            Khởi nguồn từ lòng trắc ẩn với những giá trị xưa cũ đang dần bị lãng
            quên, chúng tôi bắt đầu hành trình tìm lại vẻ đẹp rực rỡ của nghệ
            thuật Pháp Lam Huế, biến chúng thành những vật phẩm tinh tế trong
            không gian sống hiện đại.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-[320px] overflow-hidden rounded-lg shadow-2xl sm:h-[420px] lg:h-[520px]">
            <Image
              src="/images/about/about-hero.png"
              alt="Nghệ nhân chế tác Pháp Lam"
              fill
              sizes="(max-width: 1024px) 92vw, 48vw"
              quality={70}
              className="object-cover"
              preload
            />
          </div>

          <div className="absolute -bottom-5 left-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-center text-[11px] font-bold uppercase leading-5 text-[#003B6F] shadow-xl sm:-left-8 sm:h-28 sm:w-28 sm:text-xs">
            Kỹ nghệ <br /> 200 năm
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative grid gap-4 sm:grid-cols-[1.5fr_0.8fr] sm:gap-5">
            <div className="relative h-[320px] overflow-hidden rounded-lg shadow-xl sm:h-[520px]">
              <Image
                src="/images/about/founder.png"
                alt="Founder Lam Thủy"
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 58vw, 38vw"
                quality={70}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 sm:pt-28">
              <div className="absolute left-[55%] top-[-25px] hidden rounded-full bg-[#003B6F] px-6 py-4 text-sm text-white shadow-lg sm:block">
                Thảo Lam
              </div>

              <div className="relative h-48 overflow-hidden rounded-md shadow-lg sm:h-44">
                <Image
                  src="/images/about/craft-2.png"
                  alt="Chi tiết chế tác"
                  fill
                  sizes="(max-width: 640px) 92vw, 28vw"
                  quality={70}
                  className="object-cover"
                />
              </div>

              <div className="relative h-48 overflow-hidden rounded-md shadow-lg sm:h-44">
                <Image
                  src="/images/about/craft-3.png"
                  alt="Men màu Pháp Lam"
                  fill
                  sizes="(max-width: 640px) 92vw, 28vw"
                  quality={70}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#003B6F] md:text-4xl">
              Người kể chuyện bằng <br /> men lam
            </h2>

            <p className="mt-8 leading-7 text-gray-600">
              Sinh ra và lớn lên trong lòng cố đô Huế, tôi chứng kiến những bức
              hoành phi, đôi liễn Pháp Lam lặng lẽ phai màu theo thời gian. Là
              một người trẻ thuộc thế hệ Z, tôi tự hỏi: Làm sao để “đánh thức”
              vẻ đẹp kiêu sa này, đưa nó thoát khỏi những bức tường thành cổ
              kính để bước vào cuộc sống năng động hôm nay?
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Lam Thủy ra đời từ chính khát khao đó. Mỗi sản phẩm là một cuộc
              đối thoại giữa kỹ thuật tráng men truyền thống và ngôn ngữ thiết
              kế tối giản, tinh tế.
            </p>

            <p className="mt-10 text-2xl italic text-[#5A7FA3] md:text-3xl">Thảo Lam</p>

            <Link
              href="/blog"
              className="mt-8 inline-flex w-full justify-center bg-[#003B6F] px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#002B50] sm:w-auto sm:px-8 sm:text-sm"
            >
              Theo dõi hành trình của chúng tôi
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hành Trình Di Sản"
            description="Từ khát khao cá nhân đến một “trạm di sản” đương đại."
          />

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[#003B6F] md:block" />

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div className="rounded-sm bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold text-[#003B6F]">
                      {item.date}
                    </p>
                    <h3 className="mt-2 font-bold text-[#1F2933]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  <span className="absolute left-1/2 top-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#003B6F] text-white md:flex">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ba Trụ Cột Tâm Hồn"
            description="Giá trị cốt lõi dẫn lối Lam Thủy trong từng nhịp đập sáng tạo."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutValues.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT GALLERY */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            title="Cận Cảnh Sự Tỉ Mỉ"
            description="Vẻ đẹp thực sự của Pháp Lam nằm ở những chi tiết siêu nhỏ, nơi màu sắc hòa quyện và ranh giới giữa kim loại và men trở nên mờ ảo."
          />

          <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-2">
            <div className="relative h-[320px] overflow-hidden rounded-md sm:h-[460px] lg:h-[580px]">
              <Image
                src={craftImages[0].src}
                alt={craftImages[0].alt}
                fill
                sizes="(max-width: 1024px) 92vw, 48vw"
                quality={70}
                className="object-cover"
              />
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                {craftImages.slice(1, 3).map((image) => (
                  <div
                    key={image.src}
                    className="relative h-52 overflow-hidden rounded-md sm:h-64"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 44vw, 24vw"
                      quality={70}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="relative h-56 overflow-hidden rounded-md sm:h-72">
                <Image
                  src={craftImages[3].src}
                  alt={craftImages[3].alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 48vw"
                  quality={70}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
