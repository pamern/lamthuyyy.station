Ok, plan từng bước như này:

## Bước 1: Tạo route About

Tạo file:

```txt
app/about/page.tsx
```

Trang này là nơi ráp toàn bộ giao diện **Về chúng tôi**.

## Bước 2: Tạo folder component nhỏ

Tạo folder:

```txt
components/about/
```

Chỉ tạo 2 component dùng lặp:

```txt
components/about/SectionHeading.tsx
components/about/ValueCard.tsx
```

Không tạo `AboutHero`, `AboutStory`, `AboutTimeline`, `AboutCraft`.

## Bước 3: Tạo file data

Tạo:

```txt
data/about.ts
```

Trong file này để:

```txt
timelineItems
aboutValues
craftImages
```

Mục đích: page gọn hơn, không hard-code mảng dài trong JSX.

## Bước 4: Chuẩn bị ảnh

Tạo folder:

```txt
public/images/about/
```

Thêm ảnh:

```txt
about-hero.png
founder.png
craft-1.png
craft-2.png
craft-3.png
craft-4.png
```

Khi code gọi ảnh bằng:

```txt
/images/about/about-hero.png
```

## Bước 5: Code `SectionHeading`

Component này nhận:

```txt
eyebrow
title
description
```

Dùng cho các section có tiêu đề giống nhau:

```txt
Hành Trình Di Sản
Ba Trụ Cột Tâm Hồn
Cận Cảnh Sự Tỉ Mỉ
```

## Bước 6: Code `ValueCard`

Component này nhận:

```txt
title
description
```

Dùng để render 3 card giá trị thương hiệu.

## Bước 7: Code Hero trực tiếp trong `page.tsx`

Hero gồm:

```txt
- Nền cream
- Badge: Since 2024
- Heading lớn
- Mô tả ngắn
- Button đi tới /products
- Ảnh about-hero.png
- Badge nổi: Kỹ nghệ 200 năm
```

Layout:

```txt
Desktop: 2 cột
Mobile: 1 cột
```

## Bước 8: Code Story / Founder trực tiếp trong `page.tsx`

Section này gồm:

```txt
- Ảnh founder.png
- Title: Người kể chuyện bằng men lam
- Đoạn giới thiệu founder / thương hiệu
- Quote hoặc chữ ký nhỏ nếu mockup có
```

Layout:

```txt
Desktop: ảnh trái, text phải
Mobile: ảnh trên, text dưới
```

## Bước 9: Code Timeline trực tiếp trong `page.tsx`

Dùng `timelineItems` từ `data/about.ts`.

Layout:

```txt
Desktop:
- line dọc ở giữa
- card trái/phải xen kẽ

Mobile:
- list dọc
- không cần layout trái/phải phức tạp
```

## Bước 10: Code Values section

Dùng:

```txt
SectionHeading
ValueCard
aboutValues
```

Layout:

```txt
Desktop: grid 3 cột
Mobile: grid 1 cột
```

## Bước 11: Code Craft Gallery trực tiếp trong `page.tsx`

Dùng `craftImages`.

Layout:

```txt
Desktop:
- 1 ảnh lớn bên trái
- 3 ảnh nhỏ bên phải

Mobile:
- ảnh xếp dọc hoặc grid 1 cột
```

## Bước 12: Kiểm tra responsive

Test các kích thước:

```txt
Mobile
Tablet
Desktop
```

Ưu tiên:

```txt
- Không vỡ ảnh
- Text không quá sát mép
- Timeline mobile dễ đọc
- Button rõ
```

## Bước 13: Kiểm tra import

Đảm bảo import đúng:

```tsx
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/about/SectionHeading";
import ValueCard from "@/components/about/ValueCard";
import { aboutValues, craftImages, timelineItems } from "@/data/about";
```

## Bước 14: Chạy project

```bash
npm run dev
```

Mở:

```txt
http://localhost:3000/about
```

## Bước 15: Nếu lỗi ảnh

Kiểm tra ảnh đã nằm đúng chưa:

```txt
public/images/about/about-hero.png
```

Không được gọi kiểu:

```txt
public/images/about/about-hero.png
```

Mà phải gọi:

```txt
/images/about/about-hero.png
```
