"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

import { Shop } from "@/types/shop";
import { shops } from "@/utils/shop";
import { categoryIcons } from "@/utils/category";
import { navItems } from "@/utils/navigation";

import { ShopCard } from "@/components/app/shop-card";
import { NavMain } from "@/components/navigation/nav-main";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

interface MapSidebarProps extends React.ComponentProps<typeof Sidebar> {
  shops?: Shop[];
  onShopClick?: (shopId: string) => void;
}

export function MapSidebar({
  shops: propShops,
  onShopClick,
  ...props
}: MapSidebarProps) {
  const { state } = useSidebar();
  const shopsData = propShops || shops;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShop, setSelectedShop] = useState<string | "All">("All");

  const filteredShops = shopsData.filter((s) => {
    const matchesSearch = s.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSelected =
      selectedShop === "All" ? true : s.category === selectedShop;
    return matchesSearch && matchesSelected;
  });
  
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  if (state === "collapsed") {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarContent>
          <NavMain items={navItems} />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    );
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Sidebar Header */}
      <SidebarHeader className="flex items-center">
        {/* Logo */}
        <Image
          src="/logos/logo-green.png"
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
            {Array.from(new Set(shopsData.map((s) => s.category))).map(
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
      {/* Sidebar Content */}
      <SidebarContent className="hide-scrollbar">
        {/* Shop Cards */}
        <div className="px-8 flex flex-col">
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              onClick={() => onShopClick?.(shop.id)}
              className="cursor-pointer"
            >
              <ShopCard {...shop} compact variant="flat" className="w-full" />
            </div>
          ))}
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
