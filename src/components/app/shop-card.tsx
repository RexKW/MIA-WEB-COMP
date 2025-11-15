import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShopCardProps {
  name: string;
  address: string;
  image: string;
  isOpen?: boolean;
  isFavorite?: boolean;
  className?: string;
  compact?: boolean;
}

export function ShopCard({
  name,
  address,
  image,
  isOpen = true,
  isFavorite = false,
  className,
  compact = false,
}: ShopCardProps) {
  return (
    <Card className={cn("relative overflow-hidden w-full max-w-md rounded-xl", className)}>
      <div className={cn("relative w-full rounded-t-xl overflow-hidden", compact ? "h-40" : "h-56")}>
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover"
        />

        {/* Open pill */}
        <div className="absolute left-4 top-4">
          <Badge variant={isOpen ? "default" : "outline"}>
            {isOpen ? "Open" : "Closed"}
          </Badge>
        </div>

        {/* Favorite star */}
        <button
          aria-label="add to favorites"
          className="absolute right-4 top-4 rounded-full bg-white/75 p-2 shadow-md"
        >
          <Star className={isFavorite ? "w-5 h-5 text-amber-500" : "w-5 h-5 text-muted-foreground"} />
        </button>
      </div>

      <CardContent className={cn("-mt-6 rounded-b-xl bg-emerald-400 px-6 py-8", compact ? "py-4" : "py-8")}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className={cn("font-extrabold text-slate-900", compact ? "text-lg" : "text-3xl")}>{name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-800/75">
              <MapPin className="w-4 h-4 text-slate-900/60" />
              <span>{address}</span>
            </div>
          </div>

          <div className="shrink-0">
            <Coffee className={cn("text-slate-900", compact ? "w-8 h-8" : "w-14 h-14")} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
