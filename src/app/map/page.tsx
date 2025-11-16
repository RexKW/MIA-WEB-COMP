"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import { Shop } from "@/types/shop";
import { shops } from "@/utils/shop";
import { useIsMobile } from "@/hooks/use-mobile";

import { MapMobile } from "@/components/app/map-mobile";
import { MapSidebar } from "@/components/navigation/map-sidebar";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ShopDetail } from "@/components/app/shop-detail";

const MapPageSidebar = ({
  children,
  shops,
  onShopClick,
}: {
  children: React.ReactNode;
  shops?: Shop[];
  onShopClick?: (shopId: string) => void;
}) => (
  <SidebarProvider>
    <MapSidebar shops={shops} onShopClick={onShopClick} />
    <SidebarInset className="flex flex-col relative">
      <div className="absolute top-4 left-4 z-10000">
        <div className="bg-background/95 backdrop-blur-md rounded-md border shadow-xl p-2 min-w-11 min-h-11 hidden md:flex items-center justify-center">
          <SidebarTrigger />
        </div>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </SidebarInset>
  </SidebarProvider>
);

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

export default function MapPage() {
  const [activeShopId, setActiveShopId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MapMobile shops={shops} />;
  }

  return (
  <MapPageSidebar shops={shops} onShopClick={setActiveShopId}>
    <div className="relative w-full h-full">

      {/* Shop Detail Overlay */}
      {activeShopId && (
        <div className="absolute md:left-5 top-2 z-50 w-[200px] md:w-[400px] h-full bg-transparent overflow-y-auto">
          <ShopDetail shop={shops.find(s => s.id === activeShopId)!} />
        </div>
      )}

      {/* Map container ALWAYS stays mounted */}
      <div className="absolute inset-0 z-0">
        <Map shops={shops} activeShopId={activeShopId} />
      </div>

    </div>
  </MapPageSidebar>
);

}
