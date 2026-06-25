export type BlogContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    };

export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: BlogContentBlock[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "nghe-thuat-phap-lam-hue",
    title: "Nghệ thuật Pháp Lam Huế - Di sản rực rỡ của triều Nguyễn",
    excerpt:
      "Khám phá vẻ đẹp tinh xảo của nghệ thuật Pháp Lam Huế, một dòng thủ công mỹ nghệ mang đậm dấu ấn cung đình Việt Nam.",
    category: "Di sản",
    date: "25/06/2026",
    author: "LAM THỦY",
    readTime: "5 phút đọc",
    image: "/images/blog/blog-1.png",
    content: [
      {
        type: "paragraph",
        text: `Pháp Lam Huế là một trong những loại hình thủ công mỹ nghệ đặc sắc của Việt Nam, ra đời dưới triều Nguyễn vào đầu thế kỷ XIX và phát triển rực rỡ trong giai đoạn trị vì của vua Minh Mạng. Đây là nghệ thuật tráng men trên kim loại, chủ yếu là đồng, kết hợp giữa kỹ thuật chế tác tinh xảo và tư duy thẩm mỹ cung đình để tạo nên những tác phẩm có giá trị nghệ thuật cao. Trải qua nhiều công đoạn công phu như tạo hình, chạm khắc, phủ men và nung ở nhiệt độ cao, mỗi sản phẩm Pháp Lam đều sở hữu màu sắc rực rỡ, bề mặt sáng bóng và độ bền vượt trội theo thời gian.

Điểm đặc biệt của Pháp Lam Huế nằm ở bảng màu phong phú với các gam xanh lam, vàng, đỏ, trắng và lục được phối hợp hài hòa, tạo nên vẻ đẹp vừa sang trọng vừa thanh nhã. Những hoa văn trang trí thường lấy cảm hứng từ thiên nhiên và văn hóa phương Đông như rồng, phượng, hoa sen, mây, sóng nước hay các họa tiết hình học mang ý nghĩa cát tường. Mỗi đường nét đều được chế tác thủ công tỉ mỉ, thể hiện trình độ kỹ thuật cao cùng sự kiên nhẫn và tài hoa của người nghệ nhân.

Trong quá khứ, Pháp Lam chủ yếu được sử dụng để trang trí các công trình kiến trúc cung đình như điện, đền, miếu và lăng tẩm của triều Nguyễn. Bên cạnh đó, nhiều vật phẩm nghi lễ, đồ thờ cúng và đồ dùng dành riêng cho hoàng gia cũng được chế tác bằng kỹ thuật này nhằm khẳng định sự quyền quý và địa vị. Chính vì vậy, Pháp Lam không chỉ mang giá trị thẩm mỹ mà còn phản ánh đời sống văn hóa, tín ngưỡng và trình độ thủ công bậc cao của Việt Nam trong thời kỳ phong kiến.

Sau một thời gian dài mai một bởi biến động lịch sử, nghệ thuật Pháp Lam Huế đã được các nghệ nhân và nhà nghiên cứu từng bước khôi phục. Ngày nay, nhiều sản phẩm được sáng tạo dựa trên kỹ thuật truyền thống nhưng mang hơi thở hiện đại, từ tranh nghệ thuật, đồ trang trí nội thất đến quà tặng lưu niệm cao cấp. Sự kết hợp giữa giá trị di sản và thiết kế đương đại đã giúp Pháp Lam tiếp cận gần hơn với công chúng, đồng thời góp phần quảng bá văn hóa Huế đến bạn bè trong nước và quốc tế.

Không chỉ là một nghề thủ công, Pháp Lam Huế còn là biểu tượng của sự giao thoa giữa nghệ thuật, lịch sử và tinh thần sáng tạo. Mỗi tác phẩm đều chứa đựng câu chuyện về bàn tay khéo léo của người nghệ nhân, về vẻ đẹp cung đình xưa và khát vọng gìn giữ những giá trị truyền thống. Chính điều đó đã làm nên sức hấp dẫn bền vững của Pháp Lam, biến mỗi sản phẩm trở thành một tác phẩm nghệ thuật độc bản, lưu giữ dấu ấn văn hóa Việt qua nhiều thế hệ.`,
      },
      {
        type: "heading",
        text: "Nguồn gốc",
      },
      {
        type: "paragraph",
        text: "Được hình thành từ đầu thế kỷ XIX, Pháp Lam từng được sử dụng rộng rãi trong kiến trúc cung đình và các vật phẩm dành cho hoàng gia.",
      },
      {
        type: "heading",
        text: "Giá trị nghệ thuật",
      },
      {
        type: "paragraph",
        text: "Những họa tiết rồng, phượng, hoa sen cùng màu men nhiều lớp đã tạo nên nét đẹp trường tồn cho dòng nghệ thuật này.",
      },
      {
        type: "quote",
        text: "Mỗi sản phẩm Pháp Lam đều mang trong mình một câu chuyện văn hóa Việt.",
      },
      {
        type: "paragraph",
        text: "Ngày nay nhiều nghệ nhân vẫn tiếp tục nghiên cứu và phục dựng kỹ thuật Pháp Lam truyền thống.",
      },
    ],
  },
  {
    id: 2,
    slug: "qua-tang-thu-cong-y-nghia",
    title: "Quà tặng thủ công - Trao gửi giá trị qua từng chi tiết",
    excerpt:
      "Một món quà thủ công không chỉ mang giá trị vật chất mà còn chứa đựng sự trân trọng dành cho người nhận.",
    category: "Quà tặng",
    date: "20/06/2026",
    author: "LAM THỦY",
    readTime: "4 phút đọc",
    image: "/images/blog/blog-2.png",
    content: [
      {
        type: "paragraph",
        text: "Những món quà thủ công luôn mang nét độc bản bởi mỗi sản phẩm đều được tạo nên từ đôi tay người nghệ nhân.",
      },
      {
        type: "heading",
        text: "Giá trị tinh thần",
      },
      {
        type: "paragraph",
        text: "Một món quà thủ công thể hiện sự quan tâm và trân trọng nhiều hơn những sản phẩm sản xuất hàng loạt.",
      },
      {
        type: "quote",
        text: "Quà tặng đẹp nhất là món quà chứa đựng tâm huyết.",
      },
    ],
  },
  {
    id: 3,
    slug: "quy-trinh-che-tac-thu-cong",
    title: "Quy trình chế tác thủ công phía sau một tác phẩm",
    excerpt:
      "Đằng sau mỗi sản phẩm là hàng chục công đoạn được hoàn thiện hoàn toàn thủ công.",
    category: "Chế tác",
    date: "15/06/2026",
    author: "LAM THỦY",
    readTime: "6 phút đọc",
    image: "/images/blog/blog-3.png",
    content: [
      {
        type: "paragraph",
        text: "Mỗi tác phẩm trải qua nhiều bước như lên ý tưởng, tạo khuôn, xử lý bề mặt, tráng men và hoàn thiện.",
      },
      {
        type: "heading",
        text: "Từng công đoạn đều quan trọng",
      },
      {
        type: "paragraph",
        text: "Chỉ cần sai lệch nhỏ trong quá trình nung hoặc pha màu cũng ảnh hưởng đến toàn bộ sản phẩm.",
      },
      {
        type: "quote",
        text: "Sự kiên nhẫn là chất liệu đầu tiên của một người nghệ nhân.",
      },
    ],
  },
  {
    id: 4,
    slug: "bao-ton-nghe-thuat-truyen-thong",
    title: "Bảo tồn nghệ thuật truyền thống trong nhịp sống hiện đại",
    excerpt:
      "Giữa sự phát triển của công nghệ, những giá trị thủ công truyền thống vẫn luôn có chỗ đứng riêng.",
    category: "Văn hóa",
    date: "10/06/2026",
    author: "LAM THỦY",
    readTime: "5 phút đọc",
    image: "/images/blog/blog-4.png",
    content: [
      {
        type: "paragraph",
        text: "Việc gìn giữ các làng nghề truyền thống không chỉ là bảo tồn kỹ thuật mà còn lưu giữ ký ức văn hóa của dân tộc.",
      },
      {
        type: "heading",
        text: "Sự giao thoa",
      },
      {
        type: "paragraph",
        text: "Nhiều thương hiệu đã kết hợp tinh thần truyền thống với thiết kế hiện đại để đưa sản phẩm đến gần hơn với giới trẻ.",
      },
      {
        type: "quote",
        text: "Di sản chỉ thật sự sống khi được tiếp tục sử dụng trong đời sống hôm nay.",
      },
    ],
  },
  {
    id: 5,
    slug: "nghe-nhan-va-cau-chuyen-sang-tao",
    title: "Người nghệ nhân và câu chuyện phía sau mỗi sáng tạo",
    excerpt:
      "Mỗi tác phẩm thủ công đều phản chiếu cá tính và tâm huyết của người tạo ra nó.",
    category: "Nghệ nhân",
    date: "05/06/2026",
    author: "LAM THỦY",
    readTime: "7 phút đọc",
    image: "/images/blog/blog-5.png",
    content: [
      {
        type: "paragraph",
        text: "Không có hai sản phẩm thủ công nào hoàn toàn giống nhau bởi dấu ấn của người nghệ nhân luôn hiện diện trong từng chi tiết.",
      },
      {
        type: "heading",
        text: "Tinh thần sáng tạo",
      },
      {
        type: "paragraph",
        text: "Kinh nghiệm nhiều năm kết hợp cùng sự sáng tạo giúp mỗi sản phẩm đều mang một vẻ đẹp riêng.",
      },
      {
        type: "quote",
        text: "Mỗi đường nét đều là kết quả của sự kiên trì.",
      },
    ],
  },
  {
    id: 6,
    slug: "ve-dep-cua-nghe-thuat-thu-cong-viet",
    title: "Vẻ đẹp của nghệ thuật thủ công Việt trong đời sống hiện đại",
    excerpt:
      "Từ những vật dụng hằng ngày đến đồ trang trí cao cấp, nghệ thuật thủ công vẫn luôn giữ được sức hút đặc biệt.",
    category: "Phong cách sống",
    date: "01/06/2026",
    author: "LAM THỦY",
    readTime: "5 phút đọc",
    image: "/images/blog/blog-6.jpg",
    content: [
      {
        type: "paragraph",
        text: "Các sản phẩm thủ công ngày càng xuất hiện nhiều trong không gian sống hiện đại nhờ sự tinh tế và giá trị văn hóa.",
      },
      {
        type: "heading",
        text: "Ứng dụng trong cuộc sống",
      },
      {
        type: "paragraph",
        text: "Từ đồ trang trí, quà tặng cho đến phụ kiện cá nhân, các sản phẩm thủ công đều mang đến dấu ấn riêng cho người sử dụng.",
      },
      {
        type: "quote",
        text: "Giá trị của thủ công nằm ở sự khác biệt mà máy móc không thể thay thế.",
      },
    ],
  },
];
