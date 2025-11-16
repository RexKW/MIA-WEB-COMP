export interface CatalogItem {
  id: number;
  cat: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  popular: number;
  sold: number;
  date: number;
}

export interface MediaVideo {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

export interface Shop {
  id: string;
  name: string;
  address: string;
  city: string;
  description: string;
  time: string;
  image: string;
  latitude: number;
  longitude: number;
  category: string;
  isOpen: boolean;
  isFavorite: boolean;
  catalog: CatalogItem[];
  media: MediaVideo[];
}
