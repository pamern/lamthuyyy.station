Plan code trang **blog-detail.png**:

## 1. Tạo route chi tiết blog

```txt
app/blog/[slug]/page.tsx
```

Vì project đang dùng App Router dạng `app/blog/page.tsx`, chi tiết blog nên đi theo dynamic route `[slug]`. 

## 2. Chuẩn bị mock data

Tạo hoặc sửa:

```txt
data/blogs.ts
```

Mỗi blog nên có:

```ts
{
  slug: "nghe-thuat-phap-lam-hue",
  title: "...",
  category: "DI SẢN",
  date: "25/06/2026",
  author: "LAM THỦY",
  image: "/images/blog/blog-detail-1.png",
  excerpt: "...",
  content: [...]
}
```

## 3. Chia component

Nên tạo:

```txt
components/blog/
├─ BlogDetailHero.tsx
├─ BlogContent.tsx
├─ RelatedPosts.tsx
```

Nếu muốn đơn giản thì gộp trong `page.tsx` cũng được, nhưng nên tách để dễ sửa.

## 4. Layout chính theo ảnh

Trang có 4 khối lớn:

```txt
Breadcrumb / Back to Blog
↓
Hero title + meta
↓
Ảnh lớn bài viết
↓
Nội dung bài viết
↓
Bài viết liên quan
```

## 5. Phần Hero

Code phần trên cùng gồm:

```txt
BLOG / DI SẢN
Tiêu đề bài viết lớn
Ngày đăng - Tác giả - Thời gian đọc
Đoạn mô tả ngắn
```

Style:

```txt
max-w-4xl
text-center
padding-top lớn
màu nền trắng / kem nhạt
```

## 6. Ảnh cover

Dùng `next/image`:

```tsx
<Image
  src={blog.image}
  alt={blog.title}
  fill
  className="object-cover"
/>
```

Khung ảnh nên:

```txt
max-w-6xl
h-[520px]
rounded hoặc không bo tùy ảnh
```

## 7. Nội dung bài viết

Nội dung nên để dạng array trong mock:

```ts
content: [
  {
    type: "paragraph",
    text: "..."
  },
  {
    type: "heading",
    text: "Pháp lam Huế là gì?"
  },
  {
    type: "quote",
    text: "..."
  }
]
```

Khi render thì map theo `type`.

## 8. Sidebar nếu ảnh có phần bên phải

Nếu hình có mục như:

```txt
Mục lục
Bài viết mới nhất
Chia sẻ
```

thì layout dùng:

```txt
grid lg:grid-cols-[1fr_300px]
```

Còn nếu ảnh chỉ có bài viết full-width thì không cần sidebar.

## 9. Bài viết liên quan

Cuối trang lấy 3 bài khác từ `blogs.ts`:

```ts
const relatedBlogs = blogs
  .filter((item) => item.slug !== blog.slug)
  .slice(0, 3);
```

Render bằng `BlogCard` hiện có.

## 10. Luồng code

Làm theo thứ tự:

```txt
1. Cập nhật data/blogs.ts có slug + content
2. Tạo app/blog/[slug]/page.tsx
3. Tìm blog theo slug
4. Nếu không có blog thì notFound()
5. Render hero
6. Render ảnh cover
7. Render content
8. Render related posts
9. Test bằng /blog/nghe-thuat-phap-lam-hue
```

Route chính nên là:

```txt
/blog/[slug]
```
    