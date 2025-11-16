"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { Shop } from "@/types/shop";
import Image from "next/image";

interface ShopDetailProps {
  shop: Shop;
  onClose?: () => void;
}

export function ShopDetail({ shop, onClose }: ShopDetailProps) {
  const [activeTab, setActiveTab] = useState<"catalog" | "media">("catalog");
  const router = useRouter();
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
    <div className="flex flex-col bg-[#032D51] p-5 text-white rounded-2xl gap-5 relative">

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white rounded-full text-[#032D51] font-bold text-xl shadow-lg transition-all hover:scale-110"
          aria-label="Close"
        >
          ×
        </button>
      )}

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

        <button 
          className="text-sm text-[#A4CBE5] hover:text-[#94FFEF] transition"
          onClick={() => router.push(`/shops/${shop.id}/${activeTab}`)}
        >
          More...
        </button>
      </div>

      {/* Tab Content */}
      <div ref={contentRef}>

        {activeTab === "catalog" && (
          <div className="grid grid-cols-3 gap-3 mt-2">
            {shop.catalog.slice(0, 3).map((item) => (
              <div 
                key={item.id}
                className="bg-[#01355F] h-28 rounded-xl flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-[#014570] transition"
                onClick={() => router.push(`/shops/${shop.id}/catalog`)}
              >
                <span className="text-3xl mb-1">{item.image}</span>
                <p className="text-xs text-center text-[#A9C9E8] line-clamp-2">{item.name}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "media" && (
          <div className="grid grid-cols-3 gap-3 mt-2">
            {shop.media.slice(0, 3).map((video) => (
              <div 
                key={video.id}
                className="bg-[#004072] h-28 rounded-xl overflow-hidden cursor-pointer hover:bg-[#005090] transition"
                onClick={() => router.push(`/shops/${shop.id}/media`)}
              >
                <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  width={150}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
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
