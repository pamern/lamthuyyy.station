import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Truck, RefreshCw, ShieldAlert, Gift, ArrowLeft } from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const servicesMap: Record<string, ServiceData> = {
  "giao-hang": {
    title: "Chính sách Giao hàng",
    subtitle: "Vận chuyển di sản an toàn đến tận tay bạn",
    icon: <Truck size={40} className="text-[#B58A43]" />,
    content: (
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <p>
          Tại <strong>LAM THỦY</strong>, mỗi sản phẩm Pháp Lam Huế là một tác phẩm nghệ thuật thủ công vô giá. Chúng tôi cam kết dịch vụ đóng gói đóng hộp và vận chuyển chuyên nghiệp nhất để bảo toàn sản phẩm hoàn hảo khi đến tay khách hàng.
        </p>

        <div className="rounded-xl border border-gray-150 bg-gray-50 p-6 space-y-4">
          <h3 className="font-serif text-base font-bold text-[#083B63]">1. Thời gian giao hàng dự kiến</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Khu vực Nội thành Huế:</strong> Giao ngay trong vòng 24h kể từ khi xác nhận đơn hàng.</li>
            <li><strong>Thành phố lớn (Hà Nội, TP. HCM, Đà Nẵng):</strong> Từ 2 - 3 ngày làm việc.</li>
            <li><strong>Các tỉnh thành khác:</strong> Từ 3 - 5 ngày làm việc.</li>
            <li><strong>Sản phẩm Pre-order (Đặt trước):</strong> Thời gian hoàn thiện từ 7 - 14 ngày làm việc trước khi bàn giao vận chuyển.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-base font-bold text-[#083B63]">2. Biểu phí vận chuyển</h3>
          <p>
            Biểu phí vận chuyển được tính đồng giá <strong>30.000đ</strong> cho mọi đơn hàng dưới 349.000đ trên toàn quốc.
          </p>
          <p className="text-green-600 font-semibold flex items-center gap-2 bg-green-50/70 p-3 rounded-lg border border-green-100">
            <span>✓</span> Miễn phí vận chuyển (Free Shipping) toàn quốc cho mọi đơn hàng có giá trị từ <strong>349.000đ</strong> trở lên.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-base font-bold text-[#083B63]">3. Quy trình đồng kiểm và nhận hàng</h3>
          <p>
            Khách hàng được quyền <strong>mở hộp đồng kiểm</strong> cùng nhân viên giao hàng tại chỗ. Khách hàng vui lòng kiểm tra kỹ lưỡng:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Đúng mẫu mã sản phẩm Pháp Lam đã đặt.</li>
            <li>Sản phẩm nguyên vẹn, bề mặt men không bị nứt vỡ hay xước.</li>
            <li>Đầy đủ thẻ bảo hành chính hãng và hộp quà tặng kèm theo (nếu có).</li>
          </ul>
        </div>
      </div>
    ),
  },
  "doi-tra": {
    title: "Chính sách Đổi trả",
    subtitle: "Bảo đảm quyền lợi tối đa cho người sưu tầm",
    icon: <RefreshCw size={40} className="text-[#B58A43]" />,
    content: (
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <p>
          Sự hài lòng của khách hàng là mục tiêu hàng đầu của chúng tôi. <strong>LAM THỦY</strong> hỗ trợ chính sách đổi trả linh hoạt trong vòng <strong>7 ngày</strong> kể từ khi khách hàng nhận được sản phẩm thành công.
        </p>

        <div className="rounded-xl border border-gray-150 bg-gray-50 p-6 space-y-4">
          <h3 className="font-serif text-base font-bold text-[#083B63]">1. Điều kiện đổi trả hàng</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sản phẩm còn nguyên trạng, đầy đủ nhãn mác, hộp quà, và thẻ di sản đi kèm.</li>
            <li>Chưa có dấu hiệu đã qua sử dụng, va đập hoặc tự ý lau chùi bằng hóa chất tẩy rửa mạnh.</li>
            <li>Đổi trả miễn phí 100% đối với các sản phẩm phát hiện lỗi nứt men, bọt men do lỗi sản xuất hoặc hư hỏng trong quá trình vận chuyển.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-base font-bold text-[#083B63]">2. Quy trình đổi trả</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Liên hệ Hotline hỗ trợ hoặc gửi Email đính kèm ảnh chụp chi tiết lỗi sản phẩm.</li>
            <li>LAM THỦY xác nhận tình trạng đơn hàng và điều phối đơn vị vận chuyển đến nhận lại hàng miễn phí.</li>
            <li>Sau khi nhận và kiểm tra tình trạng hàng trả, LAM THỦY sẽ gửi sản phẩm thay thế mới hoặc hoàn trả 100% giá trị tiền mặt qua tài khoản ngân hàng trong vòng 3 ngày làm việc.</li>
          </ol>
        </div>
      </div>
    ),
  },
  "bao-quan": {
    title: "Hướng dẫn Bảo quản",
    subtitle: "Giữ gìn độ sáng bóng và giá trị vĩnh cửu của Pháp Lam",
    icon: <ShieldAlert size={40} className="text-[#B58A43]" />,
    content: (
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <p>
          Pháp Lam Huế là dòng sản phẩm men kính nung trên kim loại ở nhiệt độ cao nên có độ bền vĩnh cửu với thời gian. Tuy nhiên, để sản phẩm luôn giữ được màu sắc lung linh và bề mặt men láng mịn như mới, quý khách vui lòng lưu ý một số hướng dẫn bảo quản sau:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-150 p-5 bg-green-50/20">
            <h4 className="font-serif font-bold text-[#083B63] mb-2">Nên làm:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Lau chùi bụi bẩn nhẹ nhàng bằng khăn mềm khô hoặc ẩm nhẹ.</li>
              <li>Đặt hoặc cất giữ sản phẩm ở nơi khô ráo, tránh độ ẩm quá cao dài ngày.</li>
              <li>Sử dụng hộp lót nhung đi kèm khi mang sản phẩm di chuyển đi xa.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-150 p-5 bg-red-50/20">
            <h4 className="font-serif font-bold text-red-800 mb-2">Tránh làm:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Không ngâm sản phẩm trực tiếp trong nước nóng hoặc dung môi tẩy rửa mạnh.</li>
              <li>Tránh cọ xát trực tiếp bề mặt men kính với các vật kim loại sắc nhọn dễ gây trầy xước.</li>
              <li>Hạn chế làm rơi từ trên cao xuống bề mặt đá cứng để tránh mẻ góc men.</li>
            </ul>
          </div>
        </div>

        <p className="italic text-xs text-gray-500">
          * Trong trường hợp sản phẩm sử dụng lâu ngày bị xỉn màu phần kim loại viền ngoài, quý khách có thể mang trực tiếp qua trạm LAM THỦY để được nghệ nhân đánh bóng vệ sinh miễn phí trọn đời.
        </p>
      </div>
    ),
  },
  "qua-tang": {
    title: "Dịch vụ Gói quà tặng",
    subtitle: "Trao gửi trọn vẹn tình cảm qua nét vẽ Pháp Lam",
    icon: <Gift size={40} className="text-[#B58A43]" />,
    content: (
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <p>
          Một món quà mang đậm dấu ấn di sản văn hóa Huế là lựa chọn hoàn hảo nhất để gửi gắm lòng tri ân sâu sắc đến người thân, đối tác hay bạn bè quốc tế. <strong>LAM THỦY</strong> cung cấp dịch vụ gói quà tặng nghệ thuật sang trọng đi kèm.
        </p>

        <div className="rounded-xl border border-gray-150 bg-gray-50 p-6 space-y-4">
          <h3 className="font-serif text-base font-bold text-[#083B63]">Gói dịch vụ mặc định bao gồm:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Hộp giấy mỹ thuật cao cấp:</strong> Hộp cứng phủ nhũ vàng ép kim logo LAM THỦY trang nhã.</li>
            <li><strong>Thẻ di sản (Heritage Card):</strong> Thuyết minh chi tiết về điển tích, câu chuyện văn hóa đằng sau họa tiết sản phẩm bằng hai ngôn ngữ Việt - Anh.</li>
            <li><strong>Thiệp viết tay:</strong> Khách hàng có thể yêu cầu soạn nội dung lời chúc viết tay trên thiệp mỹ thuật vân tre đặc trưng của tiệm.</li>
            <li><strong>Lót nhung chống sốc:</strong> Bảo vệ sản phẩm tuyệt đối trong quá trình vận chuyển xa.</li>
          </ul>
        </div>

        <p>
          Khi đặt hàng qua website, quý khách chỉ cần ghi chú yêu cầu viết thiệp ở phần thông tin thanh toán, đội ngũ của LAM THỦY sẽ tận tay chuẩn bị món quà chu đáo nhất trước khi gửi đi.
        </p>
      </div>
    ),
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ===== BREADCRUMB ===== */}
      <nav className="border-b border-gray-100 px-8 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-[#083B63]">
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-400">Dịch vụ &amp; Chính sách</span>
          <ChevronRight size={14} />
          <span className="font-medium text-[#083B63]">{service.title}</span>
        </div>
      </nav>

      {/* ===== CONTENT SECTION ===== */}
      <section className="px-8 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-4 rounded-full bg-[#f4f1ef] p-5">
              {service.icon}
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#083B63] md:text-4xl">
              {service.title}
            </h1>
            <p className="mt-3 text-base text-gray-500 font-medium italic">
              {service.subtitle}
            </p>
            <div className="mt-6 h-0.5 w-16 bg-[#B58A43]" />
          </div>

          {/* Body */}
          <div className="prose prose-blue max-w-none">
            {service.content}
          </div>

          {/* Action Footer */}
          <div className="mt-16 border-t border-gray-100 pt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#083B63] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#083B63] transition-all hover:bg-[#083B63] hover:text-white"
            >
              <ArrowLeft size={14} />
              Quay lại Trang chủ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
