export default function Newsletter() {
  return (
    <section className="bg-[#f4f1ef] px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-wide text-[#083B63] md:text-4xl">
          Nhận thông tin về các mẫu thiết kế mới nhất
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600">
          Chúng tôi trân trọng gửi đến bạn những câu chuyện về di sản và những
          bộ sưu tập hữu hạn mỗi tháng.
        </p>

        <form className="mx-auto mt-6 flex h-11 max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white">
          <input
            type="email"
            placeholder="Email của bạn"
            className="flex-1 px-5 text-gray-700 outline-none placeholder:text-gray-500"
          />

          <button
            type="submit"
            className="w-40 bg-[#083B63] text-sm font-medium uppercase tracking-[3px] text-white transition-colors hover:bg-[#B58A43]"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
}
