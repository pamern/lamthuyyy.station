export interface OrderItem {
  id: number | string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  orderId: string;
  orderDate: string;

  customer: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
  };

  paymentMethod: string;
  paymentStatus: "paid" | "pending";

  items: OrderItem[];

  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
}

export const mockOrder: Order = {
  orderId: "LT202606250001",
  orderDate: "25/06/2026",

  customer: {
    fullName: "Nguyễn Ngọc Mỹ",
    phone: "0901234567",
    email: "ngocmy@gmail.com",
    address: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
  },

  paymentMethod: "Thanh toán qua VNPay",
  paymentStatus: "paid",

  items: [
    {
      id: 1,
      name: "Bookmark Pháp Lam",
      image: "/products/huongnguyet/bookmart/bookmarkxanh.png",
      price: 180000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Móc khóa Pháp Lam",
      image: "/products/huongnguyet/moc_khoa/mockhoaxanh.png",
      price: 120000,
      quantity: 2,
    },
  ],

  subtotal: 420000,
  shippingFee: 30000,
  discount: 20000,
  total: 430000,
};
