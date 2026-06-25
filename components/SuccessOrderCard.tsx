import Link from "next/link";
import Image from "next/image";

import { Order } from "@/data/mockOrder";

import craftIcon from "@/public/images/success-order/che-tac.png";
import packageIcon from "@/public/images/success-order/dong-goi.png";
import supportIcon from "@/public/images/success-order/ho-tro.png";
import deliveryIcon from "@/public/images/success-order/icon-delivery.png";

interface SuccessOrderCardProps {
  order: Order;
}

function formatPrice(price: number) {
  return price.toLocaleString("vi-VN") + "đ";
}

const journeyItems = [
  {
    icon: craftIcon,
    title: "Chế tác tỉ mỉ",
    desc: "Vật phẩm của bạn đang được các nghệ nhân chế tác thủ công với sự tinh xảo tuyệt đối.",
  },
  {
    icon: packageIcon,
    title: "Đóng gói & giao hàng",
    desc: "Chúng tôi sẽ thông báo ngay khi món đồ di sản này bắt đầu hành trình đến với bạn.",
  },
  {
    icon: supportIcon,
    title: "Hỗ trợ 24/7",
    desc: "Đội ngũ trợ lý riêng của chúng tôi luôn sẵn sàng hỗ trợ bất cứ khi nào bạn cần.",
  },
];

export default function SuccessOrderCard({ order }: SuccessOrderCardProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#072B57] text-2xl text-white">
          ✓
        </div>

        <h1 className="mt-7 text-4xl font-bold tracking-tight text-[#071D3A] md:text-5xl">
          Cảm ơn bạn đã lựa chọn LAM THỦY
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6E737A]">
          Đơn hàng của bạn đã được tiếp nhận và đang bắt đầu hành trình từ những
          bàn tay nghệ nhân đến không gian sống của bạn.
        </p>
      </div>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.45fr_1fr]">
        <div>
          <div className="border border-[#E5E0DA] bg-white p-7">
            <div className="flex items-start justify-between border-b border-[#ECE7E1] pb-8">
              <div>
                <p className="text-sm font-medium uppercase text-[#656B73]">
                  Mã đơn hàng
                </p>
                <p className="mt-3 font-bold text-[#071D3A]">
                  #{order.orderId}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium uppercase text-[#656B73]">
                  Trạng thái
                </p>
                <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#D9F0B8] px-4 py-2 text-sm font-medium text-[#071D3A]">
                  <span className="h-2 w-2 rounded-full bg-[#071D3A]" />
                  Đang xử lý
                </span>
              </div>
            </div>

            <div className="grid gap-8 pt-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase text-[#656B73]">
                  Địa chỉ giao hàng
                </p>
                <div className="mt-4 space-y-2 text-sm leading-6 text-[#1D2939]">
                  <p>{order.customer.fullName}</p>
                  <p>{order.customer.address}</p>
                  <p>Việt Nam</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-medium uppercase text-[#656B73]">
                    Thông tin liên lạc
                  </p>
                  <div className="mt-4 space-y-2 text-sm leading-6 text-[#1D2939]">
                    <p>{order.customer.email}</p>
                    <p>{order.customer.phone}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase text-[#656B73]">
                    Phương thức thanh toán
                  </p>
                  <p className="mt-4 text-sm text-[#1D2939]">
                    {order.paymentMethod}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-10 text-base font-medium text-[#071D3A]">
            Hành trình sản phẩm
          </h2>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {journeyItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#F7F4F1] px-7 py-8 text-center"
              >
                <div className="flex justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-5 text-sm font-bold uppercase text-[#071D3A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5F6670]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="flex h-14 flex-1 items-center justify-center gap-2 rounded-lg bg-[#072B57] text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#0A396F]"
            >
              <span>Theo dõi đơn hàng</span>

              <Image
                src={deliveryIcon}
                alt="Theo dõi đơn hàng"
                width={18}
                height={18}
                className="object-contain"
              />
            </Link>

            <Link
              href="/products"
              className="flex h-14 flex-1 items-center justify-center rounded-lg border border-[#072B57] text-sm font-bold uppercase tracking-[0.2em] text-[#071D3A] transition hover:bg-[#072B57] hover:text-white"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>

        <aside className="h-fit border border-[#E5E0DA] bg-white">
          <div className="border-b border-[#ECE7E1] px-7 py-7">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#071D3A]">
              Tóm tắt đơn hàng
            </h2>
          </div>

          <div className="space-y-7 px-7 py-7">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#F7F4F1]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 justify-between gap-4">
                  <div>
                    <p className="font-bold text-[#071D3A]">{item.name}</p>
                    <p className="mt-2 text-sm text-[#5F6670]">
                      Số lượng: {item.quantity}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-sm font-bold text-[#071D3A]">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}

            <div className="space-y-5 border-t border-[#ECE7E1] pt-7 text-sm text-[#5F6670]">
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Phí vận chuyển</span>
                <span>
                  {order.shippingFee === 0
                    ? "Miễn phí"
                    : formatPrice(order.shippingFee)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Giảm giá</span>
                <span>-{formatPrice(order.discount)}</span>
              </div>
            </div>

            <div className="flex justify-between border-t border-[#ECE7E1] pt-7 text-lg font-bold text-[#071D3A]">
              <span>Tổng cộng</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
