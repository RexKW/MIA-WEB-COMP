"use client";

import "leaflet/dist/leaflet.css";
import { MapZoom } from "./map-zoom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
  const defaultCenter: [number, number] = [shops[0].latitude, shops[0].longitude];
  const defaultZoom = 13;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Component to handle the zoom/pan logic */}
      <MapZoom shops={shops} activeShopId={activeShopId} />

      {/* Render the markers for all shops */}
      {shops.map((shop) => (
        <Marker key={shop.id} position={[shop.latitude, shop.longitude]}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
