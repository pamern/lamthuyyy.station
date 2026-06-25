"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowRight, 
  Landmark, 
  CreditCard, 
  Truck, 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { products } from "@/data/products";
import { vietnamLocations } from "@/data/vietnamLocations";

interface CartItemState {
  productId: string;
  variant: string;
  quantity: number;
}

export default function CartPage() {
  const router = useRouter();
  
  // States
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Form Inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Error & Modal States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [orderCode, setOrderCode] = useState("");
  const [orderSummary, setOrderSummary] = useState({
    fullName: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    paymentMethod: "",
    total: 0,
  });

  // Load cart from LocalStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadCart = () => {
        const cartDataStr = localStorage.getItem("lamthuy_cart");
        if (cartDataStr) {
          try {
            const rawItems: CartItemState[] = JSON.parse(cartDataStr);
            // Map items with product data
            const resolvedItems = rawItems.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              if (!product) return null;
              
              // Find variant price if variant exists
              let price = product.price;
              if (product.variants) {
                const variantObj = product.variants.find((v) => v.name === item.variant);
                if (variantObj) {
                  price = variantObj.price;
                }
              }
              
              return {
                ...product,
                price,
                variant: item.variant,
                quantity: item.quantity,
              };
            }).filter(Boolean);
            
            setCartItems(resolvedItems);
          } catch (e) {
            setCartItems([]);
          }
        } else {
          setCartItems([]);
        }
        setLoading(false);
      };

      loadCart();
      window.addEventListener("cartUpdated", loadCart);
      return () => window.removeEventListener("cartUpdated", loadCart);
    }
  }, []);

  // Update localStorage when cart changes
  const saveCartToStorage = (updatedItems: any[]) => {
    const rawData = updatedItems.map((item) => ({
      productId: item.id,
      variant: item.variant,
      quantity: item.quantity,
    }));
    localStorage.setItem("lamthuy_cart", JSON.stringify(rawData));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Quantity handlers
  const handleIncrease = (id: string, variant: string) => {
    const updated = cartItems.map((item) => {
      if (item.id === id && item.variant === variant) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updated);
    saveCartToStorage(updated);
  };

  const handleDecrease = (id: string, variant: string) => {
    const updated = cartItems.map((item) => {
      if (item.id === id && item.variant === variant) {
        return { ...item, quantity: Math.max(1, item.quantity - 1) };
      }
      return item;
    }).filter((item) => item.quantity > 0);
    setCartItems(updated);
    saveCartToStorage(updated);
  };

  const handleRemove = (id: string, variant: string) => {
    const updated = cartItems.filter((item) => !(item.id === id && item.variant === variant));
    setCartItems(updated);
    saveCartToStorage(updated);
  };

  // Coupons
  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "LAMTHUY10") {
      setCouponApplied(true);
      setCouponDiscount(0.1); // 10% discount
      alert("Áp dụng mã giảm giá LAMTHUY10 thành công! Bạn được giảm 10% giá trị sản phẩm.");
    } else {
      alert("Mã giảm giá không hợp lệ. Vui lòng thử lại!");
    }
  };

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 349000 || subtotal === 0 ? 0 : 30000;
  const discountAmount = Math.round(subtotal * couponDiscount);
  const total = subtotal + shippingFee - discountAmount;

  // Form Validation
  const getFormErrors = () => {
    const newErrors: Record<string, string> = {};

    // Name Validation
    if (!fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên";
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = "Họ và tên phải dài ít nhất 2 ký tự";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Định dạng email không hợp lệ";
    }

    // Phone Validation
    const phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/;
    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Số điện thoại Việt Nam không hợp lệ (phải bắt đầu bằng 0 và đủ 10 số)";
    }

    // Address Validation
    if (!address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ giao hàng cụ thể";
    } else if (address.trim().length < 5) {
      newErrors.address = "Địa chỉ cụ thể quá ngắn (ít nhất 5 ký tự)";
    }

    // Province Validation
    if (!selectedProvince) {
      newErrors.province = "Vui lòng chọn tỉnh / thành phố";
    }

    // District Validation
    if (!selectedDistrict) {
      newErrors.district = "Vui lòng chọn quận / huyện";
    }

    return newErrors;
  };

  // Checkout Handler
  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    const newErrors = getFormErrors();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Scroll to the first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Generate random order code: LT-XXXXXX
    const randomCode = `LT-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Store order details before clearing cart state
    setOrderSummary({
      fullName,
      phone,
      address,
      province: selectedProvince,
      district: selectedDistrict,
      paymentMethod,
      total,
    });
    
    setOrderCode(randomCode);
    setIsSuccessModalOpen(true);

    // Clear cart
    localStorage.removeItem("lamthuy_cart");
    setCartItems([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Find districts matching selected province
  const currentProvinceData = vietnamLocations.find((p) => p.name === selectedProvince);
  const availableDistricts = currentProvinceData ? currentProvinceData.districts : [];

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("vi-VN").format(price);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-500">
        Đang tải thông tin đơn hàng...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white relative">
      <section className="px-8 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-serif text-3xl font-bold uppercase tracking-[2px] text-[#083B63] md:text-4xl">
            Giỏ Hàng &amp; Thanh Toán
          </h1>

          {cartItems.length === 0 ? (
            <div className="mt-16 flex flex-col items-center justify-center text-center py-20 border border-dashed border-gray-200 rounded-2xl bg-gray-50">
              <ShoppingBag size={48} className="text-gray-300 mb-4 animate-bounce" />
              <h3 className="text-lg font-semibold text-[#083B63]">Giỏ hàng của bạn đang trống</h3>
              <p className="text-gray-500 mt-2 max-w-md text-sm">
                Hãy lựa chọn cho mình hoặc người thân những sản phẩm Pháp Lam tinh tế đầy ý nghĩa từ các bộ sưu tập của chúng tôi.
              </p>
              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#083B63] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0a4d80]"
              >
                Tiếp tục mua sắm
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_420px]">
              {/* ===== LEFT: SHIIPING INFO & PAYMENT FORM ===== */}
              <form onSubmit={handleCheckoutSubmit} className="space-y-10">
                {/* 01 - Contact Info */}
                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#083B63] text-xs font-bold text-white">
                      01
                    </span>
                    <h2 className="text-lg font-bold text-[#083B63]">
                      Thông tin liên hệ
                    </h2>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        placeholder="example@gmail.com"
                        className={`h-12 w-full rounded-lg border px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-[#083B63] ${
                          errors.email ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500 font-medium">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                        }}
                        placeholder="09xx xxx xxx"
                        className={`h-12 w-full rounded-lg border px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-[#083B63] ${
                          errors.phone ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500 font-medium">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 02 - Shipping Address */}
                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#083B63] text-xs font-bold text-white">
                      02
                    </span>
                    <h2 className="text-lg font-bold text-[#083B63]">
                      Địa chỉ nhận hàng
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Họ và tên người nhận <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                        }}
                        placeholder="Nhập họ và tên người nhận"
                        className={`h-12 w-full rounded-lg border px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-[#083B63] ${
                          errors.fullName ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500 font-medium">
                          <AlertCircle size={12} /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Tỉnh / Thành phố <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="province"
                            value={selectedProvince}
                            onChange={(e) => {
                              setSelectedProvince(e.target.value);
                              setSelectedDistrict(""); // reset district
                              if (errors.province) setErrors((prev) => ({ ...prev, province: "" }));
                            }}
                            className={`h-12 w-full rounded-lg border px-4 pr-10 text-sm bg-white text-gray-700 outline-none transition-colors focus:border-[#083B63] appearance-none cursor-pointer ${
                              errors.province ? "border-red-500" : "border-gray-200"
                            }`}
                          >
                            <option value="">Chọn tỉnh / thành phố</option>
                            {vietnamLocations.map((loc) => (
                              <option key={loc.name} value={loc.name}>
                                {loc.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <span className="text-xs">▼</span>
                          </div>
                        </div>
                        {errors.province && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-red-500 font-medium">
                            <AlertCircle size={12} /> {errors.province}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Quận / Huyện <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="district"
                            value={selectedDistrict}
                            disabled={!selectedProvince}
                            onChange={(e) => {
                              setSelectedDistrict(e.target.value);
                              if (errors.district) setErrors((prev) => ({ ...prev, district: "" }));
                            }}
                            className={`h-12 w-full rounded-lg border px-4 pr-10 text-sm bg-white text-gray-700 outline-none transition-colors focus:border-[#083B63] appearance-none cursor-pointer disabled:bg-gray-50 disabled:text-gray-400 ${
                              errors.district ? "border-red-500" : "border-gray-200"
                            }`}
                          >
                            <option value="">Chọn quận / huyện</option>
                            {availableDistricts.map((dist) => (
                              <option key={dist} value={dist}>
                                {dist}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <span className="text-xs">▼</span>
                          </div>
                        </div>
                        {errors.district && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-red-500 font-medium">
                            <AlertCircle size={12} /> {errors.district}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Địa chỉ cụ thể <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          if (errors.address) setErrors((prev) => ({ ...prev, address: "" }));
                        }}
                        placeholder="Số nhà, ngõ/ngách, tên đường, phường/xã..."
                        className={`h-12 w-full rounded-lg border px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-[#083B63] ${
                          errors.address ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                      {errors.address && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500 font-medium">
                          <AlertCircle size={12} /> {errors.address}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 03 - Payment Method */}
                <div>
                  <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#083B63] text-xs font-bold text-white">
                      03
                    </span>
                    <h2 className="text-lg font-bold text-[#083B63]">
                      Phương thức thanh toán
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {/* Bank Transfer */}
                    <label
                      className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-5 transition-all ${
                        paymentMethod === "bank"
                          ? "border-[#083B63] bg-[#f8fafc] shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-[#083B63] h-4 w-4"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-[#083B63]">
                          Chuyển khoản ngân hàng (Khuyên dùng)
                        </span>
                        <p className="mt-0.5 text-xs text-gray-500">
                          Chuyển khoản an toàn qua mã QR hoặc thông tin tài khoản
                        </p>
                      </div>
                      <Landmark size={22} className="text-[#083B63] hidden sm:block" />
                    </label>

                    {/* Credit Card */}
                    <label
                      className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-5 transition-all ${
                        paymentMethod === "card"
                          ? "border-[#083B63] bg-[#f8fafc] shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-[#083B63] h-4 w-4"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-[#083B63]">
                          Thẻ tín dụng quốc tế (Visa / Mastercard)
                        </span>
                        <p className="mt-0.5 text-xs text-gray-500">
                          Thanh toán bảo mật trực tiếp thông qua cổng thanh toán
                        </p>
                      </div>
                      <CreditCard size={22} className="text-gray-500 hidden sm:block" />
                    </label>

                    {/* COD - Disabled for Pre-orders */}
                    <div className="relative flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-5 opacity-60">
                      <input
                        type="radio"
                        name="payment"
                        disabled
                        className="accent-gray-400 h-4 w-4"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-gray-400">
                          Thanh toán khi nhận hàng (COD)
                        </span>
                        <p className="mt-0.5 text-xs text-gray-400">
                          Chỉ áp dụng với các đơn hàng sẵn sản phẩm (không chứa sản phẩm pre-order)
                        </p>
                      </div>
                      <Truck size={22} className="text-gray-300 hidden sm:block" />
                      <span className="absolute right-4 top-3 rounded bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold uppercase text-amber-700 tracking-wider">
                        Pre-order Chỉ chuyển khoản
                      </span>
                    </div>
                  </div>
                </div>
              </form>

              {/* ===== RIGHT: ORDER PRODUCTS SUMMARY & CART ACTIONS ===== */}
              <div>
                <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-[#083B63] border-b border-gray-100 pb-3">
                    Đơn hàng của bạn
                  </h3>

                  {/* Cart Items List */}
                  <div className="divide-y divide-gray-100 max-h-[300px] overflow-y-auto pr-1 mt-2">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.variant}`} className="flex items-center gap-4 py-4">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#f4f1ef] border border-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#083B63] truncate leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-gray-500 mt-0.5 truncate">
                            {item.variant}
                          </p>
                          <p className="text-xs font-bold text-[#B58A43] mt-1">
                            {formatPrice(item.price)}đ
                          </p>
                        </div>
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 border border-gray-200 rounded-md p-1 bg-gray-50">
                          <button
                            type="button"
                            onClick={() => handleDecrease(item.id, item.variant)}
                            className="text-gray-500 hover:text-red-500 p-0.5 transition-colors cursor-pointer"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold text-gray-800 w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleIncrease(item.id, item.variant)}
                            className="text-gray-500 hover:text-[#083B63] p-0.5 transition-colors cursor-pointer"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemove(item.id, item.variant)}
                          className="text-gray-300 hover:text-red-600 transition-colors p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Coupon Form */}
                  <div className="mt-6 flex gap-2 border-t border-gray-100 pt-6">
                    <input
                      type="text"
                      placeholder="Mã giảm giá (ví dụ: LAMTHUY10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                      className="h-11 flex-1 rounded-lg border border-gray-200 px-4 text-xs text-gray-700 outline-none transition-colors focus:border-[#083B63] placeholder:text-gray-400 disabled:bg-gray-100 disabled:text-gray-400"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      disabled={couponApplied || !couponCode}
                      className="h-11 rounded-lg bg-[#083B63] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#0a4d80] disabled:bg-gray-200 disabled:text-gray-400 cursor-pointer"
                    >
                      {couponApplied ? "Đã áp" : "Áp dụng"}
                    </button>
                  </div>

                  {/* Pricing Summary */}
                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-6 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Tạm tính ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} sản phẩm)</span>
                      <span>{formatPrice(subtotal)}đ</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Phí vận chuyển</span>
                      {shippingFee === 0 ? (
                        <span className="text-green-600 font-semibold uppercase text-xs tracking-wider">Miễn phí</span>
                      ) : (
                        <span>{formatPrice(shippingFee)}đ</span>
                      )}
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Giảm giá (Mã: LAMTHUY10 - 10%)</span>
                        <span>-{formatPrice(discountAmount)}đ</span>
                      </div>
                    )}
                    {shippingFee > 0 && (
                      <p className="text-[11px] text-gray-400 leading-normal italic">
                        * Miễn phí vận chuyển cho đơn hàng từ 349.000đ.
                      </p>
                    )}
                  </div>

                  {/* Total Price */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-150 pt-4">
                    <span className="text-base font-bold text-[#083B63]">
                      Tổng tiền thanh toán
                    </span>
                    <span className="text-2xl font-bold text-[#B58A43]">
                      {formatPrice(total)}đ
                    </span>
                  </div>

                  {/* Action submit button */}
                  <button
                    type="submit"
                    onClick={handleCheckoutSubmit}
                    className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#083B63] text-sm font-bold uppercase tracking-[2px] text-white transition-all hover:bg-[#0a4d80] hover:shadow-lg cursor-pointer"
                  >
                    Xác nhận đặt hàng
                    <ArrowRight size={16} />
                  </button>

                  <p className="mt-4 text-center text-[10px] leading-relaxed text-gray-400">
                    Bằng việc nhấn đặt hàng, bạn đồng ý với các{" "}
                    <span className="underline">Điều khoản giao dịch</span> &amp;{" "}
                    <span className="underline">Chính sách bảo mật thông tin</span> của LAM THỦY Contemporary Heritage.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== SUCCESS CHECKOUT MODAL ===== */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl text-center border border-gray-100 transform transition-all animate-in fade-in zoom-in duration-300">
            <CheckCircle size={56} className="mx-auto text-green-600 mb-4 animate-bounce" />
            <h2 className="font-serif text-2xl font-bold text-[#083B63] md:text-3xl">
              Đặt Hàng Thành Công!
            </h2>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">
              Mã đơn hàng: <span className="text-[#B58A43] font-bold">{orderCode}</span>
            </p>

            <div className="my-6 rounded-xl bg-gray-50 p-5 text-left text-sm text-gray-600 space-y-2 border border-gray-100">
              <p><strong>Người nhận:</strong> {orderSummary.fullName}</p>
              <p><strong>Số điện thoại:</strong> {orderSummary.phone}</p>
              <p><strong>Địa chỉ nhận hàng:</strong> {orderSummary.address}, {orderSummary.district}, {orderSummary.province}</p>
              <p><strong>Phương thức:</strong> {orderSummary.paymentMethod === "bank" ? "Chuyển khoản ngân hàng" : "Thẻ tín dụng quốc tế"}</p>
              <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center text-gray-800 font-bold">
                <span>Tổng giá trị đơn hàng:</span>
                <span className="text-[#B58A43] text-lg">{formatPrice(orderSummary.total)}đ</span>
              </div>
            </div>

            {orderSummary.paymentMethod === "bank" ? (
              <div className="mb-6 rounded-xl bg-[#083B63]/5 p-5 text-center text-xs text-[#083B63] border border-[#083B63]/10">
                <p className="font-bold text-sm mb-2 text-[#083B63]">Thông tin chuyển khoản</p>
                <p>Ngân hàng: <strong>Vietcombank</strong></p>
                <p>Số tài khoản: <strong>1018899889</strong></p>
                <p>Chủ tài khoản: <strong>LAM THUY STATION</strong></p>
                <p className="mt-2 text-[10px] text-gray-500">
                  Nội dung CK: <strong className="text-[#B58A43]">{orderCode} - {orderSummary.phone}</strong>
                </p>
                <p className="mt-2 text-[10px] text-amber-800 font-semibold italic bg-amber-50 rounded py-1 px-2 border border-amber-200/50">
                  * Vui lòng chuyển khoản trước 100% để xác nhận đơn hàng Pre-order.
                </p>
              </div>
            ) : (
              <div className="mb-6 rounded-xl bg-green-50 p-4 text-center text-xs text-green-800 border border-green-200">
                <p className="font-semibold">Cổng thanh toán đang kết nối...</p>
                <p className="text-gray-500 mt-1">Cám ơn bạn đã lựa chọn thanh toán thẻ tín dụng bảo mật.</p>
              </div>
            )}

            <button
              onClick={() => {
                setIsSuccessModalOpen(false);
                router.push("/");
              }}
              className="w-full h-12 rounded-full bg-[#083B63] text-sm font-semibold text-white hover:bg-[#0a4d80] transition-colors cursor-pointer"
            >
              Quay lại trang chủ
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
