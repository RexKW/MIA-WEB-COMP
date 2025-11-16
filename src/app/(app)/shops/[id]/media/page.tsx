"use client";

import { Menu, Search } from "lucide-react";
import { use, useState } from "react";
import { ShopMediaCard } from "@/components/app/shop-media-card";
import { shops } from "@/utils/shop";
import { notFound } from "next/navigation";

export default function ShopMediaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const shop = shops.find((s) => s.id === id);
  
  if (!shop) {
    notFound();
  }

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchText, setSearchText] = useState("");

  // === VIDEO DARI SHOP INI ===
  const shopVideos = shop.media;

  // === SEMUA VIDEO LAINNYA (from other shops) ===
  const videos = shops
    .filter((s) => s.id !== shop.id)
    .flatMap((s) => s.media);

  // === HANYA FILTER SEARCH, TANPA SORT ===
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchText)
  );

  return (
    <div className="flex min-h-screen bg-blue-50">
      <div className="flex-1 transition-all duration-300">
        {/* HEADER */}
        <header className="bg-white shadow-sm border-b border-[#46C4FF33]">
          <div className="px-6 py-5 max-w-7xl mx-auto flex flex-col gap-4">
            {/* Top Row */}
            <div className="flex items-center gap-4">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 hover:bg-[#46C4FF20] rounded-lg border border-[#46C4FF33]"
                >
                  <Menu className="w-5 h-5 text-[#0056A3]" />
                </button>
              )}
              <div className="text-2xl font-bold text-emerald-700 tracking-tight">
                {shop.name} - Media Video
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#46C4FF]" />
              <input
                type="text"
                placeholder="Cari video kopi..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                className="w-full pl-12 pr-4 py-3 rounded-3xl border border-[#46C4FF66] bg-[#46C4FF20] focus:outline-none focus:ring-2 focus:ring-[#46C4FF] text-gray-700 placeholder-gray-500"
              />
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="px-6 py-8 max-w-7xl mx-auto">
          {/* SHOP VIDEOS */}
          <h2 className="text-xl font-semibold text-emerald-700 mb-4">
            Video dari Toko Ini
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
            {shopVideos.map((video) => (
              <ShopMediaCard key={video.id} video={video} />
            ))}
          </div>

          {/* MORE VIDEOS */}
          <h2 className="text-xl font-semibold text-emerald-700 mt-6 mb-4">
            Video Lainnya
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <ShopMediaCard key={video.id} video={video} />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto" />
              <p className="text-gray-600 text-lg mt-4">
                Tidak ada video ditemukan
              </p>
              <p className="text-gray-400 text-sm mt-1">Coba kata kunci lain</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
