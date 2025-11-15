import { Shirt, Utensils, UserRound } from "lucide-react";

export const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Jasa: UserRound,
  Makanan: Utensils,
  Pakaian: Shirt,
};
