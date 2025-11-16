"use client";

import { use, useState } from "react";
import { Heart, Search } from "lucide-react";
import { shops } from "@/utils/shop";
import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function ShopCatalogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const shop = shops.find((s) => s.id === id);

  if (!shop) {
    notFound();
  }

  const [favorites, setFavorites] = useState(new Set());

  const category = "all";
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const products = shop.catalog;

  const filteredProducts =
    category === "all" ? products : products.filter((p) => p.cat === category);
  const searchedProducts = filteredProducts.filter((p) =>
    p.name.toLowerCase().includes(searchText)
  );

  const sortedProducts = [...searchedProducts].sort((a, b) => {
    switch (sortType) {
      case "popular":
        return b.popular - a.popular;
      case "bestselling":
        return b.sold - a.sold;
      case "new":
        return b.date - a.date;
      case "price_low":
        return a.price - b.price;
      case "price_high":
        return b.price - a.price;
      default:
        return 0;
    }
  });

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
                {shop.name} - Catalog
              </h1>
            </div>

          {/* SEARCH BAR */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#46C4FF]" />
            <input
              type="text"
              placeholder="Search coffee and more…"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value.toLowerCase())}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-3xl border border-[#46C4FF66] bg-[#46C4FF20] focus:outline-none focus:ring-2 focus:ring-[#46C4FF] text-gray-700"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* SORT FILTER */}
          <div className="px-3 sm:px-6 pt-4 pb-2 overflow-x-auto hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {[
                { key: "default", label: "All Products" },
                { key: "popular", label: "Most Popular" },
                { key: "bestselling", label: "Best Selling" },
                { key: "new", label: "New Arrivals" },
                { key: "price_low", label: "Price: Low → High" },
                { key: "price_high", label: "Price: High → Low" },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSortType(s.key)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition shadow-sm border ${
                    sortType === s.key
                      ? "bg-[#0056A3] text-white border-blue-600 shadow-md"
                      : "bg-white text-[#0056A3] border-[#46C4FF66] hover:bg-[#46C4FF20]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT LIST */}
          <section className="px-3 sm:px-6 py-4 sm:py-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-700 tracking-tight">
              All Products
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {sortedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#46C4FF33] hover:shadow-lg transition-shadow relative"
                >
                  {item.badge && (
                    <span className="absolute top-2 left-2 text-[10px] sm:text-xs bg-[#46C4FF20] text-[#0056A3] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm border border-[#46C4FF33]">
                      {item.badge}
                    </span>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white border border-[#46C4FF33] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-sm"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        favorites.has(item.id)
                          ? "fill-red-500 text-red-500"
                          : "text-[#0056A3]"
                      }`}
                    />
                  </button>

                  <div className="aspect-square flex items-center justify-center mb-2">
                    <span className="text-5xl sm:text-6xl">{item.image}</span>
                  </div>

                  <h3 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1 line-clamp-2">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between mt-1">
                    <span className="font-bold text-sm sm:text-base text-emerald-700">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
