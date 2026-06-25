export default function Newsletter() {
  return (
    <section className="bg-[#f4f1ef] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-2xl font-bold tracking-wide text-[#083B63] sm:text-3xl md:text-4xl">
          Nhận thông tin về các mẫu thiết kế mới nhất
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
          Chúng tôi trân trọng gửi đến bạn những câu chuyện về di sản và những
          bộ sưu tập hữu hạn mỗi tháng.
        </p>

        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:h-11 sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-lg sm:border sm:border-gray-200 sm:bg-white">
          <input
            type="email"
            placeholder="Email của bạn"
            className="h-11 flex-1 rounded-lg border border-gray-200 bg-white px-5 text-gray-700 outline-none placeholder:text-gray-500 sm:h-auto sm:rounded-none sm:border-0"
          />

          <button
            type="submit"
            className="h-11 w-full rounded-lg bg-[#083B63] px-6 text-sm font-medium uppercase tracking-[3px] text-white transition-colors hover:bg-[#B58A43] sm:h-auto sm:w-40 sm:rounded-none"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
}
