export interface Shop {
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
