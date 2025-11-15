"use client";

import { Menu, Search, Play, Clock, Eye } from 'lucide-react';
import { useState } from 'react';

export default function ShopMediaPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const videos = [
    { id: 1, title: "Cara Membuat Espresso Sempurna", thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=225&fit=crop", duration: "5:32", views: "1.2K", category: "tutorial" },
    { id: 2, title: "Latte Art untuk Pemula", thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=225&fit=crop", duration: "8:15", views: "2.5K", category: "tutorial" },
    { id: 3, title: "Review Mesin Kopi Terbaru 2024", thumbnail: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=225&fit=crop", duration: "12:45", views: "3.8K", category: "review" },
    { id: 4, title: "Behind the Scenes - Coffee Shop", thumbnail: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=225&fit=crop", duration: "6:20", views: "980", category: "behind" },
    { id: 5, title: "10 Tips Memilih Biji Kopi Berkualitas", thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=225&fit=crop", duration: "7:50", views: "1.7K", category: "tips" },
    { id: 6, title: "Cold Brew vs Iced Coffee", thumbnail: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=225&fit=crop", duration: "4:30", views: "2.1K", category: "tutorial" },
    { id: 7, title: "Mengunjungi Perkebunan Kopi di Aceh", thumbnail: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=225&fit=crop", duration: "15:22", views: "5.3K", category: "travel" },
    { id: 8, title: "Meracik Signature Coffee Menu", thumbnail: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=225&fit=crop", duration: "9:10", views: "1.9K", category: "tutorial" }
  ];

  const categories = [
    { id: "all", label: "Semua Video" },
    { id: "tutorial", label: "Tutorial" },
    { id: "review", label: "Review" },
    { id: "tips", label: "Tips & Trik" },
    { id: "behind", label: "Behind the Scenes" },
    { id: "travel", label: "Travel" }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchText);
    return matchesCategory && matchesSearch;
  });

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

          {/* Categories Filter */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full whitespace-nowrap font-medium transition-all border shadow-sm ${selectedCategory === cat.id
                  ? 'bg-[#0056A3] text-white border-blue-600 shadow-md'
                  : 'bg-white text-[#0056A3] border-[#46C4FF66] hover:bg-[#46C4FF20]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                className="bg-white rounded-2xl border border-[#46C4FF33] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer mx-auto max-w-[180px]"
              >
                {/* TikTok-Style Thumbnail */}
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <div className="bg-white rounded-full p-3 opacity-0 hover:opacity-100 transform scale-75 hover:scale-100 transition-all shadow-md">
                      <Play className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Eye className="w-3 h-3" />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* No Results */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto" />
              <p className="text-gray-600 text-lg mt-4">Tidak ada video ditemukan</p>
              <p className="text-gray-400 text-sm mt-1">Coba kata kunci atau kategori lain</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
