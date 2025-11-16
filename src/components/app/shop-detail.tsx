"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Shop } from "@/types/shop";
import Image from "next/image";

interface ShopDetailProps {
  shop: Shop;
}

export function ShopDetail({ shop }: ShopDetailProps) {
  const [activeTab, setActiveTab] = useState<"catalog" | "media">("catalog");

  const contentRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation when tab changes
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col bg-[#032D51] p-5 text-white rounded-2xl gap-5">

      {/* Title */}
      <p className="text-3xl text-center font-semibold">{shop.name}</p>

      {/* Image */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <Image 
          src={shop.image}
          alt={shop.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">Description</p>
        <p className="text-sm leading-relaxed text-[#D2E6F9]">
          {shop.description}
        </p>
      </div>

      {/* Location + Hours */}
      <div className="flex bg-[#01355F] rounded-xl p-4 justify-between">
        <div className="flex flex-col">
          <p className="font-medium">{shop.city}</p>
          <p className="text-sm text-[#A9C9E8]">{shop.address}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Open</p>
          <p className="text-sm text-[#A9C9E8]">{shop.time}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-6 text-xl font-semibold">

          {/* Catalog Tab */}
          <button
            className={`transition ${
              activeTab === "catalog"
                ? "text-[#94FFEF]"
                : "text-[#A4CBE5]"
            }`}
            onClick={() => setActiveTab("catalog")}
          >
            Catalog
          </button>

          {/* Media Tab */}
          <button
            className={`transition ${
              activeTab === "media"
                ? "text-[#94FFEF]"
                : "text-[#A4CBE5]"
            }`}
            onClick={() => setActiveTab("media")}
          >
            Media
          </button>
        </div>

        <button className="text-sm text-[#A4CBE5]">More...</button>
      </div>

      {/* Tab Content */}
      <div ref={contentRef}>

        {activeTab === "catalog" && (
          <div className="grid grid-cols-3 gap-3 mt-2">
            <div className="bg-[#01355F] h-28 rounded-xl"></div>
            <div className="bg-[#01355F] h-28 rounded-xl"></div>
            <div className="bg-[#01355F] h-28 rounded-xl"></div>
          </div>
        )}

        {activeTab === "media" && (
          <div className="grid grid-cols-3 gap-3 mt-2">
            <div className="bg-[#004072] h-28 rounded-xl"></div>
            <div className="bg-[#004072] h-28 rounded-xl"></div>
            <div className="bg-[#004072] h-28 rounded-xl"></div>
          </div>
        )}

      </div>

      {/* Bottom Dots */}
      <div className="flex justify-center gap-3 mt-4">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-[#4CA9FF] rounded-full"></div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>

    </div>
  );
}
