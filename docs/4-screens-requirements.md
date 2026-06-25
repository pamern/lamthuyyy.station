# Ràng buộc triển khai 4 màn hình - phần Trúc

## 1. Phạm vi

File này mô tả chặt yêu cầu triển khai 4 màn hình thuộc phần Trúc trong `docs/plan.md`.

Chỉ xử lý các màn hình sau:

```text
app/page.tsx
app/products/page.tsx
app/products/[slug]/page.tsx
app/cart/page.tsx
```

Không xử lý các phần thuộc Ngọc Mỹ:

```text
app/blog/page.tsx
app/about/page.tsx
app/checkout-success/page.tsx
app/not-found.tsx
data/blogs.ts
data/about.ts
components/BlogCard.tsx
```

## 2. Ý tưởng sản phẩm

Website là trang thương mại cho thương hiệu `LAM THỦY`, tập trung vào sản phẩm thủ công Pháp Lam Huế.

Tinh thần giao diện:

- Sang, sạch, có cảm giác di sản đương đại.
- Màu chủ đạo là xanh navy, trắng, kem nhạt, đen ở footer.
- Sản phẩm phải là điểm nhìn chính, không làm bố cục quá rối.
- Nội dung tiếng Việt, giọng thương hiệu nhẹ, tinh tế, thủ công.
- Không làm landing page chung chung; màn hình đầu tiên phải là trải nghiệm mua sắm và khám phá sản phẩm.

## 3. Công nghệ bắt buộc

Project đang dùng:

```text
Next.js 16.2.9
React 19.2.4
TypeScript
Tailwind CSS 4
npm
```

Lệnh chạy:

```bash
npm run dev
```

Không dùng React Router. Routing phải theo App Router của Next.js bằng folder trong `app/`.

Trước khi sửa code Next.js, phải tuân thủ `AGENTS.md`: đọc guide liên quan trong `node_modules/next/dist/docs/` nếu thư mục đó tồn tại.

## 4. Nguyên tắc dữ liệu

Không dùng database.

Không lưu data thật.

Không gọi API ngoài.

Không tạo server action để ghi dữ liệu.

Tất cả dữ liệu sản phẩm, bộ sưu tập, giỏ hàng, giá, rating, trạng thái, mô tả đều mock tĩnh trong folder `data/`.

Data bắt buộc nằm ở:

```text
data/products.ts
data/collections.ts
```

Nếu cần mock giỏ hàng, ưu tiên lấy từ `data/products.ts` rồi tạo biến local trong `app/cart/page.tsx`, hoặc export thêm mock cart từ `data/products.ts`. Không tạo database, localStorage, cookie, hoặc trạng thái lưu lâu dài.

## 5. Nguyên tắc hình ảnh

Tất cả ảnh sản phẩm lấy từ:

```text
public/products/
```

Đường dẫn khi dùng trong code không được ghi `public`, mà dùng dạng:

```text
/products/mockhoaxanh.png
/products/bookmarkxanh.png
```

Các ảnh hiện có:

```text
public/products/bookmarkhong.png
public/products/bookmarkxanh.png
public/products/caiaohong.png
public/products/caiaoxanh.png
public/products/collection.png
public/products/mockhoahong.png
public/products/mockhoaxanh.png
```

Ảnh collection bắt buộc dùng:

```text
/products/collection.png
```

Không dùng ảnh remote.

Không hard-code ảnh ngoài `public/products/` cho sản phẩm và collection.

Ưu tiên dùng `next/image` thay vì thẻ `img` để tối ưu ảnh, lazy loading và tránh layout shift.

## 6. Cấu trúc file bắt buộc

Các page chính:

```text
app/
  page.tsx
  products/
    page.tsx
    [slug]/
      page.tsx
  cart/
    page.tsx
```

Các component thuộc phần Trúc:

```text
components/
  ProductCard.tsx
  ProductGrid.tsx
  CollectionCard.tsx
  CartItem.tsx
```

Component layout dùng chung, không phá cấu trúc hiện có:

```text
components/layout/
  Navbar.tsx
  Footer.tsx
  Newsletter.tsx
```

Data thuộc phần Trúc:

```text
data/
  products.ts
  collections.ts
```

Không viết lặp card sản phẩm thủ công ở từng page. Phải tách component để dùng lại.

## 7. Flow code bắt buộc

Flow danh sách sản phẩm:

```text
data/products.ts
  -> components/ProductGrid.tsx
  -> components/ProductCard.tsx
  -> app/products/page.tsx
```

Flow trang chủ:

```text
data/products.ts + data/collections.ts
  -> CollectionCard / ProductCard / ProductGrid
  -> app/page.tsx
```

Flow chi tiết sản phẩm:

```text
URL /products/[slug]
  -> lấy slug
  -> tìm product trong data/products.ts
  -> render ảnh, thông tin, mô tả, sản phẩm cùng bộ sưu tập
```

Flow giỏ hàng / thanh toán:

```text
mock cart items
  -> CartItem
  -> app/cart/page.tsx
  -> render form thông tin + tóm tắt đơn hàng
```

## 8. Màn hình 1 - Trang chủ

Route:

```text
/
```

File:

```text
app/page.tsx
```

Mục tiêu:

- Dựng màn hình giống ảnh trang chủ.
- Có Navbar ở đầu và Footer ở cuối.
- Có hero lớn với tinh thần `Nghệ thuật trong tầm tay`.
- Có khu bộ sưu tập dạng icon/ảnh tròn.
- Có các card category nổi bật như Móc khóa, Treo áo, Bookmark.
- Có block DIY Kit.
- Có section sản phẩm nổi bật `Tinh hoa thủ công`.
- Có Newsletter.

Data dùng:

```text
data/products.ts
data/collections.ts
```

Ảnh collection dùng chung:

```text
/products/collection.png
```

## 9. Màn hình 2 - Danh sách sản phẩm

Route:

```text
/products
```

File:

```text
app/products/page.tsx
```

Mục tiêu:

- Dựng màn hình danh sách sản phẩm giống ảnh thứ 2.
- Có tiêu đề lớn: `Pháp Lam & Nghệ Thuật Sống Chậm`.
- Có ô tìm kiếm lớn ở khu đầu trang.
- Có filter dạng pill: Tất cả, Móc khóa, Treo áo, Bookmark, DIY Kit.
- Có sidebar filter bên trái: danh mục, khoảng giá, bộ sưu tập, trạng thái.
- Có grid sản phẩm 3 cột trên desktop.
- Có pagination mock ở cuối.
- Có Footer.

Yêu cầu xử lý:

- Filter có thể là UI mock, chưa cần lọc thật nếu chưa cần.
- Search có thể là input UI mock, chưa cần logic tìm kiếm.
- Product card phải lấy từ `ProductCard.tsx`.

## 10. Màn hình 3 - Chi tiết sản phẩm

Route:

```text
/products/[slug]
```

File:

```text
app/products/[slug]/page.tsx
```

Mục tiêu:

- Dựng màn hình chi tiết giống ảnh thứ 3.
- Có breadcrumb.
- Có gallery ảnh nhỏ bên trái.
- Có ảnh sản phẩm lớn.
- Có tên sản phẩm, bộ sưu tập, rating, giá.
- Có chọn số lượng.
- Có cảnh báo pre-order nếu sản phẩm mock có trạng thái pre-order.
- Có nút `Mua ngay`, `Thêm vào giỏ hàng`, nút yêu thích.
- Có các dòng cam kết: sẵn sàng giao ngay, miễn phí vận chuyển theo điều kiện, đổi trả.
- Có tab mock: Câu chuyện văn hoá, Thông số chi tiết, Đánh giá.
- Có section `Cùng Bộ Sưu Tập`.
- Có Footer.

Yêu cầu xử lý:

- Sản phẩm phải được tìm bằng `slug`.
- Nếu không tìm thấy sản phẩm, dùng `notFound()` của Next.js nếu phù hợp.
- Sản phẩm liên quan lấy từ cùng `collectionSlug` hoặc mock cùng collection.

## 11. Màn hình 4 - Giỏ hàng / thông tin thanh toán

Route theo plan:

```text
/cart
```

File:

```text
app/cart/page.tsx
```

Mục tiêu:

- Dựng màn hình giống ảnh thứ 4, giao diện thực tế là thông tin thanh toán.
- Có tiêu đề: `THÔNG TIN THANH TOÁN`.
- Có form thông tin liên hệ: email, số điện thoại.
- Có form địa chỉ giao hàng: họ tên, địa chỉ cụ thể, tỉnh/thành phố, quận/huyện.
- Có phương thức thanh toán:
  - Chuyển khoản ngân hàng.
  - Thẻ tín dụng.
  - COD bị disabled hoặc mờ vì không áp dụng cho hàng pre-order.
- Có panel tóm tắt đơn hàng bên phải.
- Có danh sách item trong đơn hàng.
- Có mã giảm giá mock.
- Có tạm tính, phí vận chuyển, giảm giá, tổng cộng.
- Có nút `ĐẶT HÀNG NGAY`.
- Có Footer.

Yêu cầu xử lý:

- Không cần submit thật.
- Không cần validate phức tạp.
- Không cần lưu đơn hàng.
- Button đặt hàng chỉ là UI.

## 12. Component ràng buộc

### ProductCard

File:

```text
components/ProductCard.tsx
```

Dùng cho:

- Trang chủ.
- Trang danh sách sản phẩm.
- Section sản phẩm liên quan ở trang chi tiết.

Phải nhận props từ product data, không viết cứng từng card.

Tối thiểu hiển thị:

- Ảnh.
- Tên sản phẩm.
- Giá.
- Rating nếu có.
- Badge nếu có: mới, hết hàng, pre-order.
- Icon hoặc nút thêm giỏ hàng.

### ProductGrid

File:

```text
components/ProductGrid.tsx
```

Dùng để render danh sách nhiều `ProductCard`.

Không để page tự map thủ công quá nhiều lần nếu đã có grid.

### CollectionCard

File:

```text
components/CollectionCard.tsx
```

Dùng cho khu bộ sưu tập trên trang chủ.

Ảnh bắt buộc dùng `/products/collection.png`.

### CartItem

File:

```text
components/CartItem.tsx
```

Dùng trong panel tóm tắt đơn hàng ở `/cart`.

Hiển thị:

- Ảnh sản phẩm.
- Tên sản phẩm.
- Phân loại.
- Số lượng.
- Giá.

## 13. Data model gợi ý

`data/products.ts` nên có kiểu dữ liệu tương tự:

```ts
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  collectionSlug: string;
  price: number;
  image: string;
  gallery?: string[];
  rating?: number;
  reviewCount?: number;
  badge?: "new" | "sold-out" | "pre-order";
  status?: "in-stock" | "sold-out" | "pre-order";
  description?: string;
};
```

`data/collections.ts` nên có kiểu dữ liệu tương tự:

```ts
export type Collection = {
  id: string;
  slug: string;
  name: string;
  image: string;
};
```

## 14. Tối ưu bắt buộc

Không dùng cách truyền thống là copy/paste HTML từng sản phẩm trong từng page.

Phải dùng component tái sử dụng.

Phải gom data mock vào `data/`.

Phải dùng route động `[slug]` cho chi tiết sản phẩm.

Phải dùng `next/image` cho ảnh sản phẩm nếu không có lý do kỹ thuật ngăn cản.

Phải giữ page component gọn: page chịu trách nhiệm layout và gọi component, không chứa quá nhiều markup lặp.

## 15. Không được làm

- Không thêm database.
- Không gọi API thật.
- Không dùng ảnh ngoài `public/products/` cho sản phẩm và collection.
- Không phá layout chung `Navbar` và `Footer` nếu không cần.
- Không đổi phạm vi sang các màn hình của Ngọc Mỹ.
- Không hard-code cùng một product card ở nhiều nơi.
- Không làm chức năng checkout thật.
- Không lưu cart vào localStorage/cookie/database.

## 16. Tiêu chí hoàn thành

Hoàn thành khi:

- Có đủ 4 route:
  - `/`
  - `/products`
  - `/products/[slug]`
  - `/cart`
- 4 màn hình giống tinh thần các ảnh prompt đã đưa.
- Sản phẩm render từ mock data.
- Collection dùng ảnh `public/products/collection.png`.
- Product images dùng ảnh trong `public/products/`.
- Có component dùng lại cho product card, grid, collection card, cart item.
- Chạy được bằng `npm run dev`.
- Không có lỗi TypeScript/ESLint nghiêm trọng do code mới gây ra.

