"use client";

import { useEffect, useState } from "react";
import SuccessOrderCard from "@/components/SuccessOrderCard";
import { mockOrder, Order } from "@/data/mockOrder";

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState<Order>(mockOrder);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("lastOrder");

    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch (error) {
        console.error("Không thể đọc dữ liệu đơn hàng:", error);
      }
    }
  }, []);

  return (
    <main className="bg-[#FDFBF7] py-16">
      <SuccessOrderCard order={order} />
    </main>
  );
}
