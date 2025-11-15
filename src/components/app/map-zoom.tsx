"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";

interface Shop {
  id: string;
  latitude: number;
  longitude: number;
}

interface MapZoomProps {
  shops: Shop[];
  activeShopId?: string | null;
}

export function MapZoom({ shops, activeShopId }: MapZoomProps) {
  const map = useMap();

  useEffect(() => {
    const activeShop = shops.find((shop) => shop.id === activeShopId);

    if (activeShop) {
      map.flyTo([activeShop.latitude, activeShop.longitude], 16, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [activeShopId, shops, map]);

  return null;
}
