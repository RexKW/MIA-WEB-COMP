"use client";

import "leaflet/dist/leaflet.css";
import { MapZoom } from "./map-zoom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ZoomControlPositioner() {
  const map = useMap();

  useEffect(() => {
    // Move zoom control to top right
    const zoomControl = map.zoomControl;
    if (zoomControl) {
      zoomControl.setPosition("topright");
    }
  }, [map]);

  return null;
}

interface Shop {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
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
      style={{ height: "100vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ZoomControlPositioner />

      <MapZoom shops={shops} activeShopId={activeShopId} />

      {shops.map((shop) => (
        <Marker key={shop.id} position={[shop.latitude, shop.longitude]}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
