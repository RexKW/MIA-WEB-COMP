"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

import { NavUser } from "@/components/navigation/nav-user";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ShopCard } from "@/components/app/shop-card";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/logos/.jpg",
  },
};

const shops = [
  {
    name: "French Laundry",
    address: "Jl. Citra Raya Made",
    image: "/images/coffee-shop.png",
    isOpen: true,
    isFavorite: true,
  },
  {
    name: "Coffee & Code",
    address: "Jl. Tekno No. 21",
    image: "/images/coffee-shop.png",
    isOpen: false,
    isFavorite: false,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center">
        <Image
          src="/logos/logo-black.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </SidebarHeader>
      <SidebarContent>
        {/* Search Bar */}
        <div className="my-4 relative px-4">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search shops by name..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className=" pl-10 max-w-sm"
          />
        </div>
        {/* Map shops to ShopCard in the sidebar */}
        <div className="px-4 pb-4 pt-2 flex flex-col gap-3">
          {shops.map((shop) => (
            <ShopCard
              key={shop.name}
              {...shop}
              compact
              className="w-full max-w-none"
            />
          ))}
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
