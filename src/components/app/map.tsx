"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Shop } from "@/types/shop";
import { MapZoom } from "@/components/app/map-zoom";

function ZoomControlPositioner({ activeShopId }: { activeShopId?: string | null }) {
  const map = useMap();

  useEffect(() => {
    const zoomControl = map.zoomControl;
    if (zoomControl) {
      zoomControl.setPosition("topright");
      
      // Hide zoom controls on mobile when a shop is selected
      const isMobile = window.innerWidth <= 768;
      const container = zoomControl.getContainer();
      
      if (container) {
        if (isMobile && activeShopId) {
          container.style.display = "none";
        } else {
          container.style.display = "block";
        }
      }
    }
  }, [map, activeShopId]);

  return null;
}

interface MapProps {
  shops: Shop[];
  activeShopId?: string | null;
}

export function Map({ shops, activeShopId }: MapProps) {
  if (!shops || shops.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-muted/50">
        <div className="text-center">
          <p className="text-muted-foreground">No shops to display</p>
        </div>
      </div>
    );
  }

  const defaultCenter: [number, number] = [
    shops[0].latitude,
    shops[0].longitude,
  ];
  const defaultZoom = 13;

  return (
    <MapContainer
      key="main-map"
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ZoomControlPositioner activeShopId={activeShopId} />

      <MapZoom shops={shops} activeShopId={activeShopId} />

      {shops.map((shop) => (
        <Marker key={shop.id} position={[shop.latitude, shop.longitude]} zIndexOffset={9999}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
