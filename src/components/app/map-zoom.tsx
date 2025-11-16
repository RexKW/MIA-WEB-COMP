"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";
import { Shop } from "@/types/shop";

interface MapZoomProps {
  shops: Shop[];
  activeShopId?: string | null;
}

export function MapZoom({ shops, activeShopId }: MapZoomProps) {
  const map = useMap();

  useEffect(() => {
    const activeShop = shops.find((shop) => shop.id === activeShopId);

    if (activeShop && window.innerWidth <= 768) {
      map.flyTo([activeShop.latitude, activeShop.longitude], 16, {
        animate: true,
        duration: 1.5,
      });

      setTimeout(() => {
        const offsetY = -window.innerHeight * 0.25; // Shift up by 25% to center above detail panel
        map.panBy([0, offsetY], { animate: true, duration: 0.5 });
      }, 1500);
    } else if (activeShop) {
      map.flyTo([activeShop.latitude, activeShop.longitude], 16, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [activeShopId, shops, map]);

  return null;
}
