export type Collection = {
  id: string;
  slug: string;
  name: string;
  image: string;
};

export const collections: Collection[] = [
  {
    id: "1",
    slug: "lien-hoa",
    name: "Liên Hoa",
    image: "/products/lienhoa/fullbst/collection.png",
  },
  {
    id: "2",
    slug: "huong-nguyet",
    name: "Hương Nguyệt",
    image: "/products/huongnguyet/fullbst/collection.png",
  },
];
