Dưới đây là plan code trang **Thanh toán thành công** theo ảnh, tách rõ phần giao diện và phần lấy dữ liệu session từ trang checkout trước. Dự án đang dùng Next.js App Router với các route dạng `app/page.tsx`, `app/products/page.tsx`, `app/cart/page.tsx`, `app/checkout/page.tsx` nên trang này nên đặt ở `app/checkout/success/page.tsx` hoặc `app/payment-success/page.tsx`. 

## Plan từng bước

### 1. Tạo route trang success

Tạo file:

```txt
app/checkout/success/page.tsx
```

Vì trang cần đọc `sessionStorage`, phải dùng client component:

```tsx
"use client";
```

### 2. Xác định dữ liệu cần nhận từ checkout

Trang giỏ hàng/thanh toán trước khi bấm nút **Thanh toán** nên lưu dữ liệu như sau:

```ts
sessionStorage.setItem("lastOrder", JSON.stringify(orderData));
```

Dữ liệu nên có:

```ts
{
  orderId: "LT20260001",
  customerName: "Ngọc Mỹ",
  phone: "0900000000",
  address: "TP.HCM",
  paymentMethod: "Chuyển khoản ngân hàng",
  items: [
    {
      name: "Bookmark Pháp lam",
      quantity: 1,
      price: 180000,
      image: "/images/products/bookmark.jpg"
    }
  ],
  subtotal: 180000,
  shippingFee: 30000,
  total: 210000
}
```

### 3. Khi vào trang success, đọc dữ liệu session

Trong `page.tsx`, dùng `useEffect`:

```tsx
const savedOrder = sessionStorage.getItem("lastOrder");
```

Nếu có dữ liệu thì render chi tiết đơn hàng. Nếu không có thì hiển thị trạng thái fallback: “Không tìm thấy thông tin đơn hàng”.

### 4. Layout giao diện theo ảnh

Chia giao diện thành 4 khối chính:

```txt
Success Icon + Title
↓
Thông tin đơn hàng
↓
Tóm tắt sản phẩm / tổng tiền
↓
Nút hành động
```

Nội dung nên có:

```txt
Thanh toán thành công!
Cảm ơn bạn đã đặt hàng tại Lam Thủy.
Mã đơn hàng: LT20260001
Chúng tôi sẽ liên hệ xác nhận và giao hàng trong thời gian sớm nhất.
```

### 5. Component nên tách

Tạo folder:

```txt
components/checkout/
├─ SuccessOrderCard.tsx
├─ OrderInfo.tsx
├─ SuccessProductItem.tsx
```

Nếu muốn đơn giản, chỉ cần:

```txt
components/checkout/SuccessOrderCard.tsx
```

### 6. Giao diện chính cần code

Trang `page.tsx` chỉ nên lo lấy dữ liệu:

```tsx
"use client";

import { useEffect, useState } from "react";
import SuccessOrderCard from "@/components/checkout/SuccessOrderCard";

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("lastOrder");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  return <SuccessOrderCard order={order} />;
}
```

### 7. Cơ chế fallback khi không có session

Vì bạn không làm trang giỏ hàng/thanh toán, vẫn phải mock tạm để test:

```ts
const mockOrder = {
  orderId: "LT20260001",
  customerName: "Ngọc Mỹ",
  paymentMethod: "Chuyển khoản ngân hàng",
  total: 210000,
};
```

Logic:

```tsx
const displayOrder = order ?? mockOrder;
```

### 8. Nút hành động cuối trang

Theo ảnh success page nên có 2 nút:

```txt
Tiếp tục mua sắm  → /products
Về trang chủ      → /
```

Có thể thêm:

```txt
Xem đơn hàng
```

nhưng nếu chưa có trang đơn hàng thì không cần.

### 9. Sau khi render thành công

Không nên xóa session ngay, vì người dùng reload trang vẫn cần thấy đơn hàng. Chỉ xóa khi họ bấm “Tiếp tục mua sắm” nếu muốn:

```ts
sessionStorage.removeItem("lastOrder");
```

## Thứ tự code nên làm

1. Tạo `app/checkout/success/page.tsx`.
2. Tạo mock order để test giao diện.
3. Code layout giống ảnh trước.
4. Thêm `useEffect` đọc `sessionStorage`.
5. Nếu có session thì dùng session, không có thì dùng mock.
6. Thêm nút về `/products` và `/`.
7. Test bằng cách tự set session trong DevTools hoặc tạo nút checkout mock tạm.
