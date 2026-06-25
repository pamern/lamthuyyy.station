Plan code trang **Blog** theo cấu trúc hiện tại:

```text id="0ztacg"
app/
└── blog/
    └── page.tsx

components/
└── BlogCard.tsx

data/
└── blogs.ts

images/
└── blog/
    ├── hero-blog.png
    ├── article-1.png
    ├── article-2.png
    ├── article-3.png
    ├── article-4.png
    ├── article-5.png
    ├── article-6.png
    └── artisan.png
```

### Bước 1: Tạo data blog

Tạo file:

```text
data/blogs.ts
```

Chứa mock data cho 6 bài viết:

```ts
export const blogs = [
  {
    id: 1,
    title: "Cách bảo quản sản phẩm Pháp lam",
    date: "12 THÁNG 10, 2024",
    category: "DUY TRÌ",
    excerpt: "Để giữ cho lớp men luôn sáng bóng và bền màu theo thời gian, việc chăm sóc đúng cách...",
    image: "/images/blog/article-1.png",
  },
]
```

### Bước 2: Tạo component BlogCard

Tạo file:

```text
components/BlogCard.tsx
```

Component này render đúng card trong ảnh **Article - Blog Card 1.png**:

* Ảnh bo góc.
* Badge category nằm trên ảnh, góc trái.
* Ngày tháng nhỏ màu xám.
* Tiêu đề in đậm, uppercase.
* Mô tả ngắn.
* Link `ĐỌC TIẾP →`.

### Bước 3: Tạo route Blog

Tạo folder và file:

```text
app/blog/page.tsx
```

Trong page này chia layout theo thứ tự:

```text
Navbar có sẵn từ layout
↓
Hero Blog
↓
Tabs danh mục
↓
Grid 6 bài viết
↓
Pagination
↓
Newsletter section
↓
Quote + hình nghệ nhân
↓
Footer có sẵn từ layout
```

### Bước 4: Code Hero section

Trong `app/blog/page.tsx`:

* Background dùng `/images/blog/hero-blog.png`.
* Chiều cao khoảng `520px`.
* Text lớn:

```text
LINH HỒN
PHÁP LAM HUẾ
```

* Mô tả ngắn bên dưới.
* Button trắng: `ĐỌC CÂU CHUYỆN →`.

### Bước 5: Code tabs danh mục

Dưới hero có thanh category:

```text
Tất cả | Văn hóa Huế | Hướng dẫn DIY | Cảm hứng sống
```

Hiện tại chỉ mock UI, chưa cần filter thật.

### Bước 6: Code grid bài viết

Dùng:

```tsx
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
  {blogs.map((blog) => (
    <BlogCard key={blog.id} blog={blog} />
  ))}
</div>
```

### Bước 7: Code pagination giả

Làm giống ảnh:

```text
‹   Trang 1 / 10   ›
```

Nút phải là hình tròn xanh đậm.

### Bước 8: Code newsletter

Section nền sáng:

```text
Nhận thông tin về các mẫu thiết kế mới nhất
```

Input email + button `ĐĂNG KÝ`.

Nếu dự án đã có `Newsletter` trong `components/layout/` thì import lại, không tạo mới.

### Bước 9: Code quote cuối trang

Dưới newsletter:

* Bên trái là câu quote italic màu xanh.
* Bên phải là ảnh nghệ nhân `/images/blog/artisan.png`.

### Bước 10: Kiểm tra responsive

Mobile:

* Hero text nhỏ lại.
* Blog card 1 cột.
* Quote section chuyển thành 1 cột.
* Newsletter input + button xếp dọc hoặc giữ ngang nếu đủ rộng.

Prompt ngắn để đưa Codex:

```text
Code trang Blog theo ảnh Blog.png và Article - Blog Card 1.png. Giữ đúng cấu trúc thư mục hiện tại: tạo app/blog/page.tsx, components/BlogCard.tsx, data/blogs.ts, ảnh đặt trong images/blog. Dùng Tailwind CSS, Next.js App Router. Không đổi Navbar/Footer/Layout hiện có. Trang gồm hero, tabs danh mục, grid 6 BlogCard, pagination, newsletter, quote section. BlogCard phải giống ảnh card: ảnh bo góc, badge trên ảnh, date, title uppercase, excerpt, link ĐỌC TIẾP.
```
