import { Shop } from "@/types/shop";

export const shops: Shop[] = [
  {
    id: "1",
    name: "Ho Wan",
    address: "Jl. Raya Internasional Village B1 No. 16, Citraland",
    city: "Surabaya",
    description:
      "Authentic Hong Kong style fast food serving premium dim sum, roasted meats, and classic comfort porridge.",
    time: "07:00 - 21:30",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx4_A9YEEoIhigfxNtA8WppRaQdSfJnM-X5bhr2XdyUzRl7cAJpTwv7Wb_4_Ac7sB8GVkjZtJ2inPfx0ymrX5s_WOYW694rh-5gMRDviYMCv6kmjWfiPzRmGMjC1oaBt0o5qv6Whg=s1360-w1360-h1020-rw",
    latitude: -7.284981,
    longitude: 112.673653,
    isOpen: true,
    isFavorite: false,
    category: "Makanan",
    catalog: [
      {
        id: 41,
        cat: "dimsum",
        name: "Siomay Udang Ayam",
        price: 28000,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?w=600&fit=crop",
        badge: "Best Seller",
        popular: 98,
        sold: 450,
        date: 20230510,
      },
      {
        id: 42,
        cat: "main_course",
        name: "Nasi Bebek Panggang HK",
        price: 55000,
        image:
          "https://images.unsplash.com/photo-1512831728-9e89d3f4b143?w=600&fit=crop", // Roasted meat vibe
        popular: 92,
        sold: 320,
        date: 20230615,
      },
      {
        id: 43,
        cat: "porridge",
        name: "Bubur Phitan (Century Egg)",
        price: 32000,
        image:
          "https://images.unsplash.com/photo-1511910849309-0dffb87d2d09?w=600&fit=crop",
        badge: "Comfort",
        popular: 85,
        sold: 150,
        date: 20240120,
      },
      {
        id: 44,
        cat: "beverage",
        name: "Hong Kong Milk Tea",
        price: 22000,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&fit=crop",
        popular: 88,
        sold: 210,
        date: 20230201,
      },
    ],
    media: [
      {
        id: 401,
        title: "The Art of Dim Sum",
        thumbnail:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?w=600&fit=crop",
        duration: "4:15",
        views: "8.5K",
      },
      {
        id: 402,
        title: "Roasting The Perfect Duck",
        thumbnail:
          "https://images.unsplash.com/photo-1585325701165-351af916e581?w=600&fit=crop",
        duration: "6:30",
        views: "12.1K",
      },
    ],
  },
];
