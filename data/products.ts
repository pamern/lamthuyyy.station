export type ProductVariant = {
  name: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  collectionSlug: string;
  price: number; // Base minimum price
  image: string;
  gallery?: string[];
  rating?: number;
  reviewCount?: number;
  badge?: "new" | "sold-out" | "pre-order";
  status?: "in-stock" | "sold-out" | "pre-order";
  description?: string;
  variants?: ProductVariant[];
  savingsText?: string; // e.g. "Mua combo tiết kiệm 99.000đ (10%)"
};

export const products: Product[] = [
  // ===== MÓC KHÓA =====
  {
    id: "1",
    slug: "moc-khoa-lien-hoa",
    name: "Móc Khóa Liên Hoa",
    category: "Móc khóa",
    collection: "Liên Hoa",
    collectionSlug: "lien-hoa",
    price: 279000,
    image: "/products/lienhoa/moc_khoa/mockhoahong.png",
    gallery: ["/products/lienhoa/moc_khoa/mockhoahong.png"],
    rating: 4.9,
    reviewCount: 73,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Móc khóa Liên Hoa mang vẻ đẹp thanh khiết của đóa hoa sen nở rộ, được thể hiện qua kỹ thuật tráng men Pháp Lam tinh xảo. Mỗi sản phẩm được hoàn thiện tỉ mỉ bởi nghệ nhân, tạo nên một tác phẩm nghệ thuật thu nhỏ đầy ý nghĩa, là người bạn đồng hành mang lại bình an.",
  },
  {
    id: "2",
    slug: "moc-khoa-huong-nguyet",
    name: "Móc Khóa Hương Nguyệt",
    category: "Móc khóa",
    collection: "Hương Nguyệt",
    collectionSlug: "huong-nguyet",
    price: 289000,
    image: "/products/huongnguyet/moc_khoa/mockhoaxanh.png",
    gallery: ["/products/huongnguyet/moc_khoa/mockhoaxanh.png"],
    rating: 4.8,
    reviewCount: 128,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Móc khóa Hương Nguyệt lấy cảm hứng từ vầng trăng sáng dịu dàng, phản chiếu trên mặt nước hồ đêm tĩnh lặng. Với kỹ thuật tráng men Pháp Lam Huế truyền thống, sắc xanh cung đình trầm ấm kết hợp cùng họa tiết vẽ tay thủ công tạo nên vẻ đẹp sâu lắng, quý phái.",
  },

  // ===== TREO ÁO =====
  {
    id: "3",
    slug: "treo-ao-lien-hoa",
    name: "Treo Áo Liên Hoa",
    category: "Treo áo",
    collection: "Liên Hoa",
    collectionSlug: "lien-hoa",
    price: 319000,
    image: "/products/lienhoa/cai_ao/caiaohong.png",
    gallery: ["/products/lienhoa/cai_ao/caiaohong.png"],
    rating: 5.0,
    reviewCount: 15,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Treo áo Liên Hoa mang sắc hồng dịu dàng của cánh sen đầu hạ. Sản phẩm được chế tác thủ công bằng phương pháp nung men ở nhiệt độ cao, tạo nên lớp màu bóng bẩy, bền bỉ, là điểm nhấn sang trọng cho mọi trang phục truyền thống lẫn hiện đại.",
  },
  {
    id: "4",
    slug: "treo-ao-huong-nguyet",
    name: "Treo Áo Hương Nguyệt",
    category: "Treo áo",
    collection: "Hương Nguyệt",
    collectionSlug: "huong-nguyet",
    price: 329000,
    image: "/products/huongnguyet/cai_ao/caiaoxanh.png",
    gallery: ["/products/huongnguyet/cai_ao/caiaoxanh.png"],
    rating: 4.9,
    reviewCount: 57,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Treo áo Hương Nguyệt mang họa tiết hoa văn cổ điển uyển chuyển trên nền sắc xanh vương giả. Tác phẩm Pháp Lam thủ công này phản chiếu tinh hoa thẩm mỹ cung đình, tôn vinh nét thanh lịch và cá tính của người mặc.",
  },

  // ===== BOOKMARK =====
  {
    id: "5",
    slug: "bookmark-lien-hoa",
    name: "Bookmark Liên Hoa",
    category: "Bookmark",
    collection: "Liên Hoa",
    collectionSlug: "lien-hoa",
    price: 389000,
    image: "/products/lienhoa/bookmart/bookmarkhong.png",
    gallery: ["/products/lienhoa/bookmart/bookmarkhong.png"],
    rating: 4.8,
    reviewCount: 92,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Bookmark Liên Hoa được chế tác từ kim loại cao cấp tráng men Pháp Lam tinh tế. Họa tiết đóa sen hồng thanh tao nâng niu từng trang sách của bạn, biến mỗi giờ phút đọc sách trở thành một trải nghiệm nghệ thuật thư thái và đầy thi vị.",
  },
  {
    id: "6",
    slug: "bookmark-huong-nguyet",
    name: "Bookmark Hương Nguyệt",
    category: "Bookmark",
    collection: "Hương Nguyệt",
    collectionSlug: "huong-nguyet",
    price: 399000,
    image: "/products/huongnguyet/bookmart/bookmarkxanh.png",
    gallery: ["/products/huongnguyet/bookmart/bookmarkxanh.png"],
    rating: 5.0,
    reviewCount: 86,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Bookmark Hương Nguyệt với họa tiết trăng non uốn lượn mềm mại trên nền men xanh lam đặc trưng của Pháp Lam Huế. Sản phẩm là món quà ý nghĩa dành tặng những tâm hồn yêu sách và trân trọng nét đẹp văn hóa di sản.",
  },

  // ===== BỘ SẢN PHẨM (COMBOS) =====
  {
    id: "7",
    slug: "tron-bo-lien-hoa",
    name: "Bộ Sản Phẩm Liên Hoa",
    category: "Bộ sản phẩm",
    collection: "Liên Hoa",
    collectionSlug: "lien-hoa",
    price: 888000,
    image: "/products/lienhoa/fullbst/collection.png",
    gallery: [
      "/products/lienhoa/fullbst/collection.png",
      "/products/lienhoa/moc_khoa/mockhoahong.png",
      "/products/lienhoa/cai_ao/caiaohong.png",
      "/products/lienhoa/bookmart/bookmarkhong.png"
    ],
    rating: 5.0,
    reviewCount: 45,
    badge: "pre-order",
    status: "pre-order",
    savingsText: "Mua combo tiết kiệm 99.000đ (10%)",
    description:
      "Bộ sản phẩm Liên Hoa bao gồm cả 3 tác phẩm Pháp Lam: Móc khóa, Cài áo và Bookmark Liên Hoa. Mua trọn bộ để sở hữu đầy đủ tinh hoa di sản Pháp Lam mang họa tiết hoa sen hồng thanh khiết với mức giá ưu đãi đặc biệt.",
    variants: [
      { name: "Mua Combo (Trọn bộ)", price: 888000 },
      { name: "Mua lẻ Móc khóa", price: 279000 },
      { name: "Mua lẻ Treo áo", price: 319000 },
      { name: "Mua lẻ Bookmark", price: 389000 },
    ],
  },
  {
    id: "8",
    slug: "tron-bo-huong-nguyet",
    name: "Bộ Sản Phẩm Hương Nguyệt",
    category: "Bộ sản phẩm",
    collection: "Hương Nguyệt",
    collectionSlug: "huong-nguyet",
    price: 915000,
    image: "/products/huongnguyet/fullbst/collection.png",
    gallery: [
      "/products/huongnguyet/fullbst/collection.png",
      "/products/huongnguyet/moc_khoa/mockhoaxanh.png",
      "/products/huongnguyet/cai_ao/caiaoxanh.png",
      "/products/huongnguyet/bookmart/bookmarkxanh.png"
    ],
    rating: 5.0,
    reviewCount: 38,
    badge: "pre-order",
    status: "pre-order",
    savingsText: "Mua combo tiết kiệm 102.000đ (10%)",
    description:
      "Bộ sản phẩm Hương Nguyệt bao gồm cả 3 tác phẩm Pháp Lam: Móc khóa, Cài áo và Bookmark Hương Nguyệt. Mua trọn bộ để sở hữu đầy đủ tinh hoa di sản Pháp Lam mang họa tiết trăng nước lung linh huyền ảo với mức giá ưu đãi đặc biệt.",
    variants: [
      { name: "Mua Combo (Trọn bộ)", price: 915000 },
      { name: "Mua lẻ Móc khóa", price: 289000 },
      { name: "Mua lẻ Treo áo", price: 329000 },
      { name: "Mua lẻ Bookmark", price: 399000 },
    ],
  },

  // ===== DIY KITS (SHOPEE STYLE) =====
  {
    id: "9",
    slug: "diy-kit-lien-hoa",
    name: "DIY Kit Liên Hoa",
    category: "DIY Kit",
    collection: "Liên Hoa",
    collectionSlug: "lien-hoa",
    price: 159000, // Min price of variants
    image: "/products/DIYKit.png",
    gallery: [
      "/products/DIYKit.png",
      "/products/lienhoa/moc_khoa/mockhoahong.png",
      "/products/lienhoa/cai_ao/caiaohong.png",
      "/products/lienhoa/bookmart/bookmarkhong.png"
    ],
    rating: 4.8,
    reviewCount: 26,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Trải nghiệm tự tay tạo nên tác phẩm Pháp Lam Liên Hoa với bộ nguyên vật liệu DIY đầy sáng tạo. Bạn có thể chọn phiên bản đầy đủ dụng cụ (Full set) hoặc chỉ mua gói nguyên vật liệu bổ sung phù hợp với nhu cầu.",
    variants: [
      { name: "Full set - Móc khóa Liên Hoa", price: 259000 },
      { name: "Full set - Treo áo Liên Hoa", price: 299000 },
      { name: "Full set - Bookmark Liên Hoa", price: 369000 },
      { name: "Nguyên vật liệu - Móc khóa Liên Hoa", price: 159000 },
      { name: "Nguyên vật liệu - Treo áo Liên Hoa", price: 209000 },
      { name: "Nguyên vật liệu - Bookmark Liên Hoa", price: 299000 },
    ],
  },
  {
    id: "10",
    slug: "diy-kit-huong-nguyet",
    name: "DIY Kit Hương Nguyệt",
    category: "DIY Kit",
    collection: "Hương Nguyệt",
    collectionSlug: "huong-nguyet",
    price: 169000, // Min price of variants
    image: "/products/DIYKit.png",
    gallery: [
      "/products/DIYKit.png",
      "/products/huongnguyet/moc_khoa/mockhoaxanh.png",
      "/products/huongnguyet/cai_ao/caiaoxanh.png",
      "/products/huongnguyet/bookmart/bookmarkxanh.png"
    ],
    rating: 4.9,
    reviewCount: 35,
    badge: "pre-order",
    status: "pre-order",
    description:
      "Trải nghiệm tự tay tạo nên tác phẩm Pháp Lam Hương Nguyệt với bộ nguyên vật liệu DIY đầy sáng tạo. Bạn có thể chọn phiên bản đầy đủ dụng cụ (Full set) hoặc chỉ mua gói nguyên vật liệu bổ sung phù hợp với nhu cầu.",
    variants: [
      { name: "Full set - Móc khóa Hương Nguyệt", price: 269000 },
      { name: "Full set - Treo áo Hương Nguyệt", price: 309000 },
      { name: "Full set - Bookmark Hương Nguyệt", price: 379000 },
      { name: "Nguyên vật liệu - Móc khóa Hương Nguyệt", price: 169000 },
      { name: "Nguyên vật liệu - Treo áo Hương Nguyệt", price: 219000 },
      { name: "Nguyên vật liệu - Bookmark Hương Nguyệt", price: 309000 },
    ],
  },
  {
    id: "11",
    slug: "men-cat-sapphire-thach-anh-mai-nhon",
    name: "[COMBO 3 gói] Men cát Sapphire - Thạch Anh mài nhọn (30g)",
    category: "Nguyên liệu",
    collection: "Nguyên liệu",
    collectionSlug: "nguyen-lieu",
    price: 22000,
    image: "/products/nguyenlieu/mencat.png",
    gallery: ["/products/nguyenlieu/mencat.png"],
    rating: 4.9,
    reviewCount: 18,
    badge: "new",
    status: "in-stock",
    description:
      "Combo 3 gói men cát Sapphire dạng thạch anh mài nhọn, phù hợp để phối màu, phủ nền và tạo hiệu ứng lấp lánh cho sản phẩm thủ công.",
  },
  {
    id: "12",
    slug: "day-dong-xoan-bao-vien",
    name: "Dây đồng xoắn bao viền",
    category: "Nguyên liệu",
    collection: "Nguyên liệu",
    collectionSlug: "nguyen-lieu",
    price: 19000,
    image: "/products/nguyenlieu/daydong.png",
    gallery: ["/products/nguyenlieu/daydong.png"],
    rating: 4.8,
    reviewCount: 24,
    badge: "new",
    status: "in-stock",
    description:
      "Dây đồng dùng để bao viền, tạo khung và định hình họa tiết cho sản phẩm thủ công.",
    variants: [
      { name: "Dây đồng xoắn 0.3x1mm bao viền (1 mét)", price: 29000 },
      { name: "Dây đồng xoắn 0.5x1mm bao viền (1 mét)", price: 29000 },
      { name: "Dây đồng dẹt 0.3x1mm bao viền (1 mét)", price: 19000 },
      { name: "Dây đồng dẹt 0.5x1mm bao viền (1 mét)", price: 19000 },
    ],
  },
  {
    id: "13",
    slug: "keo-gan-day-keo-pha-cat-chuyen-dung",
    name: "Keo gắn dây & keo pha cát chuyên dụng",
    category: "Nguyên liệu",
    collection: "Nguyên liệu",
    collectionSlug: "nguyen-lieu",
    price: 49000,
    image: "/products/nguyenlieu/keochuyendung.png",
    gallery: ["/products/nguyenlieu/keochuyendung.png"],
    rating: 4.9,
    reviewCount: 31,
    badge: "new",
    status: "in-stock",
    description:
      "Keo chuyên dụng hỗ trợ gắn dây viền và pha cát màu, phù hợp cho các bước hoàn thiện sản phẩm.",
    variants: [
      { name: "Keo gắn dây chuyên dụng 20ml", price: 59000 },
      { name: "Keo gắn dây chuyên dụng 50ml", price: 132500 },
      { name: "Keo gắn dây chuyên dụng 100ml", price: 255000 },
      { name: "Keo pha cát chuyên dụng 50ml", price: 49000 },
      { name: "Keo pha cát chuyên dụng 100ml", price: 88000 },
    ],
  },
  {
    id: "14",
    slug: "keo-trang-mang",
    name: "Keo tráng màng",
    category: "Nguyên liệu",
    collection: "Nguyên liệu",
    collectionSlug: "nguyen-lieu",
    price: 59000,
    image: "/products/nguyenlieu/keotrangmang.png",
    gallery: ["/products/nguyenlieu/keotrangmang.png"],
    rating: 4.8,
    reviewCount: 19,
    badge: "new",
    status: "in-stock",
    description:
      "Keo tráng màng giúp phủ bề mặt, bảo vệ lớp màu và tạo độ bóng hoàn thiện cho sản phẩm.",
    variants: [
      { name: "Keo tráng màng 20ml", price: 59000 },
      { name: "Keo tráng màng 50ml", price: 142500 },
      { name: "Keo tráng màng 100ml", price: 255000 },
    ],
  },
  {
    id: "15",
    slug: "set-mau-cat-sapphire",
    name: "Set màu cát Sapphire",
    category: "Nguyên liệu",
    collection: "Nguyên liệu",
    collectionSlug: "nguyen-lieu",
    price: 89000,
    image: "/products/nguyenlieu/setmencat.png",
    gallery: ["/products/nguyenlieu/setmencat.png"],
    rating: 4.9,
    reviewCount: 27,
    badge: "new",
    status: "in-stock",
    description:
      "Bộ màu cát Sapphire nhiều sắc độ, đóng gói 10g mỗi màu để phối màu và trang trí sản phẩm thủ công.",
    variants: [
      { name: "Set 12 gói màu - 10g/màu cát Sapphire", price: 89000 },
      { name: "Set 24 gói màu - 10g/màu cát Sapphire", price: 158000 },
    ],
  },
];

// Mock cart items for /cart page
export const mockCartItems = [
  {
    productId: "7",
    variant: "Trọn bộ (Full set)",
    quantity: 1,
  },
  {
    productId: "9",
    variant: "Full set - Móc khóa Liên Hoa",
    quantity: 1,
  },
];
