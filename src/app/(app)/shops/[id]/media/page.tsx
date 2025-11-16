"use client";

import { Menu, Search } from 'lucide-react';
import { useState } from 'react';
import { ShopMediaCard } from '@/components/app/shop-media-card';

export default function ShopMediaPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchText, setSearchText] = useState("");

  // === VIDEO DARI SHOP INI ===
  const shopVideos = [
    { id: 101, title: "Promo Signature Coffee 2025", thumbnail: "https://images.unsplash.com/photo-1587019158091-1a2a1aef57c6?w=600&fit=crop", duration: "0:30", views: "8.2K" },
    { id: 102, title: "Behind The Bar: Manual Brew Process", thumbnail: "https://images.unsplash.com/photo-1517256064527-09c73fc73e63?w=600&fit=crop", duration: "1:15", views: "5.1K" },
  ];

  // === SEMUA VIDEO LAINNYA ===
  const videos = [
    { id: 1, title: "Cara Membuat Espresso Sempurna", thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&fit=crop", duration: "5:32", views: "1.2K" },
    { id: 2, title: "Latte Art untuk Pemula", thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&fit=crop", duration: "8:15", views: "2.5K" },
    { id: 3, title: "Review Mesin Kopi Terbaru 2024", thumbnail: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&fit=crop", duration: "12:45", views: "3.8K" },
    { id: 4, title: "Behind the Scenes - Coffee Shop", thumbnail: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&fit=crop", duration: "6:20", views: "980" },
    { id: 5, title: "10 Tips Memilih Biji Kopi Berkualitas", thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&fit=crop", duration: "7:50", views: "1.7K" },
  ];

  // === HANYA FILTER SEARCH, TANPA SORT ===
  const filteredVideos = videos.filter(video =>
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
                Media Video
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
            {shopVideos.map(video => (
              <ShopMediaCard key={video.id} video={video} />
            ))}
          </div>

          {/* MORE VIDEOS */}
          <h2 className="text-xl font-semibold text-emerald-700 mt-6 mb-4">
            Video Lainnya
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
              <ShopMediaCard key={video.id} video={video} />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto" />
              <p className="text-gray-600 text-lg mt-4">Tidak ada video ditemukan</p>
              <p className="text-gray-400 text-sm mt-1">Coba kata kunci lain</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
