"use client";

import { useState } from "react";
import { Map } from "@/components/app/map";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const shops = [
  {
    id: "1",
    name: "French Laundry",
    address: "Jl. Citra Raya Made",
    image: "/images/coffee-shop.png",
    latitude: -6.302,
    longitude: 106.652,
    isOpen: true,
    isFavorite: true,
    category: "Jasa",
  },
  {
    id: "2",
    name: "Coffee & Code",
    address: "Jl. Tekno No. 21",
    latitude: -6.403,
    longitude: 106.653,
    image: "/images/coffee-shop.png",
    isOpen: false,
    isFavorite: false,
    category: "Makanan",
  },
  {
    id: "3",
    name: "Citra Boutique",
    address: "Citraland Boulevard",
    image: "/images/coffee-shop.png",
    latitude: -6.504,
    longitude: 106.654,
    isOpen: false,
    isFavorite: false,
    category: "Pakaian",
  },
];

export default function MapPage() {
  const [activeShopId, setActiveShopId] = useState<string | null>(null);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar shops={shops} onShopClick={setActiveShopId} />
        <main className="flex-1 p-8">
          <div className="h-[calc(100vh-4rem)] w-full rounded-lg overflow-hidden shadow-lg">
            <Map shops={shops} activeShopId={activeShopId} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}