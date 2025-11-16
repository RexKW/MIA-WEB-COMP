"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { gsap } from "gsap";
import { useRef } from "react";

import { Shop } from "@/types/shop";
import { categoryIcons } from "@/utils/category";

import { AppSidebar } from "@/components/navigation/app-sidebar";
import { ShopCard } from "@/components/app/shop-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ShopDetail } from "./shop-detail";

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

interface MobileMapPageProps {
  shops: Shop[];
}

export function MapMobile({ shops }: MobileMapPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | "All">(
    "All"
  );
  const [activeShopId, setActiveShopId] = useState<string | null>(null);

  const filteredShops = shops.filter((shop) => {
    const matchesSearch = shop.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ? true : shop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(shops.map((s) => s.category)));

  const [delayedActiveShopId, setDelayedActiveShopId] = useState<string | null>(null);

  useEffect(() => {
    if (activeShopId) {
      const timeout = setTimeout(() => {
        setDelayedActiveShopId(activeShopId);
      }, 2000); // delay time

      return () => clearTimeout(timeout);
    } else {
      setDelayedActiveShopId(null);
    }
  }, [activeShopId]);

  const detailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (delayedActiveShopId && detailRef.current) {
      gsap.from(detailRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [delayedActiveShopId]);


  return (
    <SidebarProvider>
      <div>
        <AppSidebar />
      </div>

      <SidebarInset className="flex flex-col h-screen overflow-hidden">
        {/* Top Section */}
        {!activeShopId && (
          <>
            <div className="shrink-0 z-20 bg-background">
              <div className="flex items-center gap-3 px-4 py-3">
                {/* Sidebar Trigger */}
                <SidebarTrigger className="-ml-1" />

                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search shops..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-10"
                  />
                </div>
              </div>

              {/* Category Section */}
              <div className="overflow-x-auto hide-scrollbar px-4">
                <div className="inline-flex items-center gap-2">
                  <Badge
                    variant={selectedCategory === "All" ? "default" : "secondary"}
                    className="cursor-pointer font-bold whitespace-nowrap"
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </Badge>
                  {categories.map((category) => {
                    const IconComponent = categoryIcons[category];
                    return (
                      <Badge
                        key={category}
                        variant={
                          selectedCategory === category ? "default" : "secondary"
                        }
                        className="cursor-pointer font-bold flex items-center gap-1 whitespace-nowrap"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                        {category}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>


            <div className="shrink-0 overflow-x-auto hide-scrollbar px-4">
              <div className="inline-flex gap-4">
                {filteredShops.map((shop) => (
                  <div
                    key={shop.id}
                    onClick={() => setActiveShopId(shop.id)}
                    className="cursor-pointer w-64 shrink-0"
                  >
                    <ShopCard {...shop} compact className="w-full" variant="flat" />
                  </div>
                ))}
              </div>

            </div>
          </>
        )}



        {/* Map Section */}
        <div className={`flex-1 w-full overflow-hidden ${activeShopId ? "h-full" : "min-h-0"}`}>
          <Map shops={shops} activeShopId={activeShopId} />
        </div>

        {delayedActiveShopId !== null && (
          <div
            ref={detailRef}
            className="
              absolute left-10 top-5 z-[650] w-[300px] h-[90%]
              bg-white shadow-xl overflow-y-auto rounded-xl
            "
          >
            <button
              onClick={() => setActiveShopId(null)}
              className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <ShopDetail shop={shops.find(s => s.id === delayedActiveShopId)!} />
          </div>
        )}

      </SidebarInset>
    </SidebarProvider>
  );
}
