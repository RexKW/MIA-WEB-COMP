"use client";

import { navItems } from "@/utils/navigation";
import { type LucideIcon } from "lucide-react";

import { NavMain } from "@/components/navigation/nav-main";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  imageSrc?: string;
  isActive?: boolean;
  isCollapsible?: boolean | true;
  items?: {
    title: string;
    url: string;
  }[];
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  items?: NavItem[];
}

export function AppSidebar({ items, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={items || navItems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
