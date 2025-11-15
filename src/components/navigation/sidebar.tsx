import { AppSidebar } from "./app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface Shop {
  id: string;
  name: string;
  address: string;
  image: string;
  latitude: number;
  longitude: number;
  category: string;
  isOpen: boolean;
  isFavorite: boolean;
}

interface SidebarProps {
  children: React.ReactNode;
  shops?: Shop[];
  onShopClick?: (shopId: string) => void;
}

export function Sidebar({ children, shops, onShopClick }: SidebarProps) {
  return (
    <SidebarProvider>
      <AppSidebar shops={shops} onShopClick={onShopClick} />
      <SidebarInset className="flex flex-col relative">
        <div className="absolute top-4 left-4 z-10000">
          <div className="bg-background/95 backdrop-blur-md rounded-md border shadow-xl p-1">
            <SidebarTrigger />
          </div>
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
