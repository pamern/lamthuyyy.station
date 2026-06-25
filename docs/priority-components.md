Dựa trên các file giao diện PNG đã có trong source, hãy tạo hệ thống components cho Next.js + Tailwind.

Không dùng shadcn.
UI đơn giản, bám màu xanh navy #002B5B, trắng/kem, vàng đồng.
Tạo các component theo cấu trúc:

components/layout/Navbar.tsx
components/layout/Footer.tsx
components/layout/Newsletter.tsx

components/home/HeroBanner.tsx
components/home/CollectionCircleList.tsx
components/home/ProductTypeCards.tsx
components/home/DiyFeatureSection.tsx
components/home/FeaturedProducts.tsx

components/product/ProductCard.tsx
components/product/ProductFilter.tsx
components/product/ProductGallery.tsx
components/product/ProductInfo.tsx
components/product/ProductTabs.tsx
components/product/RelatedProducts.tsx

components/checkout/CheckoutForm.tsx
components/checkout/PaymentMethod.tsx
components/checkout/OrderSummary.tsx
components/checkout/SuccessOrderCard.tsx

components/blog/BlogHero.tsx
components/blog/BlogCard.tsx
components/blog/BlogCategoryTabs.tsx

components/about/AboutHero.tsx
components/about/FounderSection.tsx
components/about/TimelineSection.tsx
components/about/ValueCards.tsx
components/about/CraftGallery.tsx

Sau đó export lại từng component để dùng trong các page.