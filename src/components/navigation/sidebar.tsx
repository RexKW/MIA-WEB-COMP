import { AppSidebar } from "@/components/navigation/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
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
