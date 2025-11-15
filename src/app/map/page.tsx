"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Sidebar } from "@/components/navigation/sidebar";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Map = dynamic(
  () => import("@/components/app/map").then((mod) => ({ default: mod.Map })),
  {
    ssr: false,
    loading: () => (
      <Card className="h-full w-full flex items-center justify-center bg-muted/50">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Skeleton className="h-64 w-96 rounded-lg" />
            <div className="absolute inset-2 grid grid-cols-3 grid-rows-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-full w-full rounded-sm opacity-60"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </Card>
    ),
  }
);

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
    <Sidebar shops={shops} onShopClick={setActiveShopId}>
      <Map shops={shops} activeShopId={activeShopId} />
    </Sidebar>
  );
}
