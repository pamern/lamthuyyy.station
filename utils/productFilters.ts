import type { Product } from "@/data/products";

export interface FilterOptions {
  searchQuery?: string;
  category?: string;
  collections?: string[];
  maxPrice?: number;
  priceRange?: string; // "Tất cả", "dưới-300", "300-500", "trên-500"
  statuses?: string[];
  sortBy?: string; // "default", "price-asc", "price-desc"
}

export function filterProducts(products: Product[], options: FilterOptions): Product[] {
  let result = products.filter((product) => {
    // 1. Search Query
    if (
      options.searchQuery &&
      !product.name.toLowerCase().includes(options.searchQuery.toLowerCase()) &&
      !product.description?.toLowerCase().includes(options.searchQuery.toLowerCase())
    ) {
      return false;
    }

    // 2. Category
    if (options.category && options.category !== "Tất cả" && product.category !== options.category) {
      return false;
    }

    // 3. Collection
    if (
      options.collections &&
      options.collections.length > 0 &&
      !options.collections.includes(product.collectionSlug)
    ) {
      return false;
    }

    // 4. Price slider (maxPrice)
    if (options.maxPrice !== undefined && product.price > options.maxPrice) {
      return false;
    }

    // 5. Price range dropdown band
    if (options.priceRange && options.priceRange !== "Tất cả") {
      if (options.priceRange === "dưới-300" && product.price >= 300000) {
        return false;
      }
      if (
        options.priceRange === "300-500" &&
        (product.price < 300000 || product.price > 500000)
      ) {
        return false;
      }
      if (options.priceRange === "trên-500" && product.price <= 500000) {
        return false;
      }
    }

    // 6. Statuses
    if (options.statuses && options.statuses.length > 0) {
      const matchesStatus = options.statuses.some((status) => {
        if (status === "Pre-order") return product.status === "pre-order";
        if (status === "Còn hàng") return product.status === "in-stock";
        return true;
      });
      if (!matchesStatus) return false;
    }

    return true;
  });

  // Sorting logic
  if (options.sortBy === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (options.sortBy === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}
