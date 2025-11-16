"use client";

import { Search } from "lucide-react";
import { use, useState } from "react";
import { ShopMediaCard } from "@/components/app/shop-media-card";
import { shops } from "@/utils/shop";
import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function ShopMediaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const shop = shops.find((s) => s.id === id);
  
  if (!shop) {
    notFound();
  }

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
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-hidden">
        {/* HEADER - Fixed */}
        <header className="shrink-0 bg-background shadow-sm border-b border-[#46C4FF33]">
          <div className="px-3 sm:px-6 py-3 sm:py-4 flex flex-col gap-3">
            {/* Title Row with Sidebar Trigger */}
            <div className="flex items-center gap-3">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-lg sm:text-2xl font-bold text-emerald-700 tracking-tight line-clamp-1">
                {shop.name} - Media
              </h1>
            </div>

          {/* SEARCH BAR */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#46C4FF]" />
            <input
              type="text"
              placeholder="Cari video kopi..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value.toLowerCase())}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-3xl border border-[#46C4FF66] bg-[#46C4FF20] focus:outline-none focus:ring-2 focus:ring-[#46C4FF] text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
          {/* SHOP VIDEOS */}
          <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-3">
            Video dari Toko Ini
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {shopVideos.map((video) => (
              <ShopMediaCard key={video.id} video={video} />
            ))}
          </div>

          {/* MORE VIDEOS */}
          <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mt-4 mb-3">
            Video Lainnya
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredVideos.map((video) => (
              <ShopMediaCard key={video.id} video={video} />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <Search className="w-12 h-12 sm:w-14 sm:h-14 text-gray-400 mx-auto" />
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Tidak ada video ditemukan
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Coba kata kunci lain</p>
            </div>
          )}
        </div>
      </main>
    </SidebarInset>
    </SidebarProvider>
  );
}
