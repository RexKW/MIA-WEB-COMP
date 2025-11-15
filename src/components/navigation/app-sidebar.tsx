"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, Shirt, Utensils, UserRound } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ShopCard } from "@/components/app/shop-card";

const shops = [
  {
    name: "French Laundry",
    address: "Jl. Citra Raya Made",
    image: "/images/coffee-shop.png",
    isOpen: true,
    isFavorite: true,
    category: "Jasa",
  },
  {
    name: "Coffee & Code",
    address: "Jl. Tekno No. 21",
    image: "/images/coffee-shop.png",
    isOpen: false,
    isFavorite: false,
    category: "Makanan",
  },
  {
    name: "Citra Boutique",
    address: "Citraland Boulevard",
    image: "/images/coffee-shop.png",
    isOpen: false,
    isFavorite: false,
    category: "Pakaian",
  },
];

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Jasa: UserRound,
  Makanan: Utensils,
  Pakaian: Shirt,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShop, setSelectedShop] = useState<string | "All">("All");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const filteredShops = shops.filter((s) => {
    const matchesSearch = s.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSelected =
      selectedShop === "All" ? true : s.category === selectedShop;
    return matchesSearch && matchesSelected;
  });

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center">
        {/* Logo */}
        <Image
          src="/logos/logo-black.png"
          alt="Logo"
          width={100}
          height={100}
        />
        {/* Search Bar */}
        <div className="mt-4 relative px-6 w-full">
          <Search className="absolute left-10 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search shops by name..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className=" pl-12 max-w-sm"
          />
        </div>
        {/* Map Categories */}
        <div className="overflow-x-auto hide-scrollbar w-full pl-6 mt-2">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant={selectedShop === "All" ? "default" : "secondary"}
              className="cursor-pointer font-bold"
              onClick={() => setSelectedShop("All")}
            >
              All
            </Badge>
            {Array.from(new Set(shops.map((s) => s.category))).map(
              (category) => {
                const IconComponent = categoryIcons[category];
                return (
                  <Badge
                    key={category}
                    variant={
                      selectedShop === category ? "default" : "secondary"
                    }
                    className="cursor-pointer font-bold flex items-center gap-1"
                    onClick={() => setSelectedShop(category)}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {category}
                  </Badge>
                );
              }
            )}
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="hide-scrollbar">
        {/* Shop Cards */}
        <div className="px-8 flex flex-col">
          {filteredShops.map((shop) => (
            <ShopCard
              key={shop.name}
              {...shop}
              compact
              variant="flat"
              className="w-full"
            />
          ))}
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
