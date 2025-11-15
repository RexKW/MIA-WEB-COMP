"use client";

import { useState } from 'react';
import {
  Heart, ShoppingBag, Search, Menu, X, Home, Coffee, Gift, Star
} from 'lucide-react';

export default function ShopCataloguePage() {
  const [favorites, setFavorites] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [category, setCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const products = [
    { id: 1, cat: "coldbrew", name: 'Cold Brew', price: 2.95, image: '🥤', popular: 50, sold: 70, date: 20230101 },
    { id: 2, cat: "coldbrew", name: 'Pumpkin Spice Cream Cold Brew', price: 4.25, image: '🥤', badge: 'Season 🔥', popular: 80, sold: 120, date: 20241015 },
    { id: 3, cat: "coldbrew", name: 'Cold Brew with Salted Caramel Cream', price: 4.25, image: '🥤', badge: 'New 💎', popular: 95, sold: 40, date: 20241102 },

    { id: 6, cat: "lattes", name: 'Iced Pumpkin Spice Latte', price: 4.25, image: '☕', badge: 'Season 🔥', popular: 75, sold: 90, date: 20241001 },
    { id: 7, cat: "lattes", name: 'Latte Macchiato', price: 3.96, image: '☕', popular: 40, sold: 50, date: 20230101 },

    { id: 11, cat: "espresso", name: 'Espresso', price: 2.45, image: '☕', badge: 'Popular 🏆', popular: 99, sold: 200, date: 20220101 },
    { id: 12, cat: "espresso", name: 'Espresso Macchiato', price: 2.65, image: '☕', popular: 60, sold: 70, date: 20220202 },

    { id: 20, cat: "other", name: 'Hot Chocolate', price: 2.15, image: '🍫', popular: 30, sold: 35, date: 20210101 },
  ];

  const filteredProducts = category === "all" ? products : products.filter(p => p.cat === category);
  const searchedProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchText));

  const sortedProducts = [...searchedProducts].sort((a, b) => {
    switch (sortType) {
      case "popular": return b.popular - a.popular;
      case "bestselling": return b.sold - a.sold;
      case "new": return b.date - a.date;
      case "price_low": return a.price - b.price;
      case "price_high": return b.price - a.price;
      default: return 0;
    }
  });

  return (
    <div className="flex min-h-screen bg-blue-50">
      <div className="flex-1 transition-all duration-300">
        {/* HEADER */}
        <header className="bg-white shadow-sm w-full border-b border-[#46C4FF33]">
          <div className="px-6 py-5 max-w-6xl mx-auto flex flex-col gap-4">
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
              <div className="text-3xl font-bold text-emerald-700 tracking-tight">
                Catalogue
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#46C4FF]" />
              <input
                type="text"
                placeholder="Search coffee and more…"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#46C4FF66] bg-[#46C4FF20] focus:outline-none focus:ring-2 focus:ring-[#46C4FF] text-gray-700"
              />
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* SORT FILTER */}
          <div className="mx-6 mt-8 flex gap-3 overflow-x-auto pb-2 justify-center">
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
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition shadow-sm border ${sortType === s.key
                    ? "bg-[#0056A3] text-white border-blue-600 shadow-md"
                    : "bg-white text-[#0056A3] border-[#46C4FF66] hover:bg-[#46C4FF20]"
                  }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* PRODUCT LIST */}
          <section className="mx-6 mt-8 bg-white rounded-3xl p-8 shadow-sm border border-[#46C4FF33]">
            <h2 className="text-2xl font-bold mb-6 text-emerald-700 tracking-tight">
              {category === "all" ? "All Products" : category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>

            <div className="grid grid-cols-4 gap-6">
              {sortedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-[#46C4FF33] hover:shadow-lg transition-shadow relative"
                >
                  {item.badge && (
                    <span className="absolute top-3 left-3 text-xs bg-[#46C4FF20] text-[#0056A3] px-3 py-1 rounded-full shadow-sm border border-[#46C4FF33]">
                      {item.badge}
                    </span>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 w-9 h-9 bg-white border border-[#46C4FF33] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-sm"
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.has(item.id) ? "fill-red-500 text-red-500" : "text-[#0056A3]"}`}
                    />
                  </button>

                  <div className="aspect-square flex items-center justify-center mb-4">
                    <span className="text-6xl">{item.image}</span>
                  </div>

                  <h3 className="font-semibold text-md text-gray-800 mb-2">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-lg text-emerald-700">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
