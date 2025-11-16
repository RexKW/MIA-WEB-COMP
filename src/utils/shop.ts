import { Shop } from "@/types/shop";

export const shops: Shop[] = [
  {
    id: "1",
    name: "Lontong Balap Pak Gendut",
    address: "Jl. Kranggan No.60, Sawahan",
    city: "Surabaya",
    description:
      "Warung lontong balap legendaris di Surabaya, terkenal dengan resep otentik dan bumbu petis yang khas.",
    time: "09:00 - 21:00",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPbsmuOFzwS_AMkcj41iGcc2H5dfUERNsXVCato=s1360-w1360-h1020-rw",
    latitude: -7.252048,
    longitude: 112.730821,
    isOpen: true,
    isFavorite: true,
    category: "Makanan",
    catalog: [
      {
        id: 101,
        cat: "main",
        name: "Lontong Balap Komplit",
        price: 18000,
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNMp8FSuyQ1ORUXm28oYGZRddhDwF6F-p72rjYP=s1360-w1360-h1020-rw",
        badge: "Best Seller",
        popular: 99,
        sold: 1200,
        date: 20220101,
      },
      {
        id: 102,
        cat: "main",
        name: "Lontong Balap Spesial",
        price: 25000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwvN-YlyiWGhiYIzdZ_xwidKTgFFeDUUJoV7w3JfknZjNUO6WR1bg3YfkXQl1E039IDpPMQw_rwE07BmMc05c_X5mRvlZj0eWJFCb5-m8Q4iFE7pmfwephX0DihNUTbQUJZ_VHOejuyBuWF=s1360-w1360-h1020-rw",
        popular: 95,
        sold: 900,
        date: 20220101,
      },
      {
        id: 103,
        cat: "side",
        name: "Bakso Goreng",
        price: 15000,
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNJADJk7Fuog3mElX6OvgFeAoJPf4-KBdFNFI0c=s1360-w1360-h1020-rw",
        popular: 88,
        sold: 750,
        date: 20220115,
      },
    ],
    media: [
      {
        id: 1001,
        title: "Review Lontong Balap Pak Gendut",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy4bPfyEAOKmFmig6rjWqp3A1n2_7NozSaxIyHLRrfMZfJFPTMe5woQ0cBFW5RDNy8wUou-0l3z9L7KHQOE_oZ6kcI4DhWLwUOGzyf_8QYRy5IbkdNY1Y2ca8S5i0VY3wt0ceRD5w=s1360-w1360-h1020-rw",
        duration: "5:12",
        views: "20.2K",
      },
    ],
  },
  {
    id: "2",
    name: "Shoes and Care",
    address: "Jl. Kertajaya Indah No.25, Mulyorejo",
    city: "Surabaya",
    description:
      "Jasa laundry dan perawatan sepatu (shoe cleaning) profesional untuk sneakers, kulit, dan lainnya.",
    time: "10:00 - 20:00",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxUkhsubPtPNeLyCWM-eQDQ_CvROk_M2oY9FDlMkSZr2HhF01c1iPrXhu2C7QO-wVdxjariRLBeDw2gV8MxqYX25-SBO4jjnXXwnT8fso91FNSCzn8Z1g16ILD1vKWsLNWPS7Ek=s1360-w1360-h1020-rw",
    latitude: -7.276512,
    longitude: 112.771234,
    isOpen: true,
    isFavorite: false,
    category: "Jasa",
    catalog: [
      {
        id: 201,
        cat: "cleaning",
        name: "Deep Clean Premium",
        price: 65000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyV9EnJLIGgMwP_Mm1E3CoXwbyJcGmwMu1fnVccyit529wYqB3W_Ar9VR9BdKLrRfVLM4jsRnSCzUKXGPKjYyE1zEhg8ylTDRsU51keFQCskWNRvhF7ly0R_CC9BQyTwBtLHLM=s1360-w1360-h1020-rw",
        badge: "Popular",
        popular: 95,
        sold: 500,
        date: 20230101,
      },
      {
        id: 202,
        cat: "cleaning",
        name: "Fast Clean Regular",
        price: 35000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSykCQSMTHupKzMAvQh5dqDkkvjFzDfnDglcYt8oUTNwDQRNp6m1uVItF042ocAFMDYuZ1INYsQJSiu-3RifHG_EmVg9aCOi1SfpBbdRxIwA0AldDKQzkyf1S-dLDgENY_MC-z8=s1360-w1360-h1020-rw",
        popular: 90,
        sold: 650,
        date: 20230215,
      },
      {
        id: 204,
        cat: "repair",
        name: "Sole Repair & Reglue",
        price: 120000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwzV1hRVbBsjq09LisZz58lyjVxQnvM2N-HrmPp_IfCuokjMsI1kV5xqVmCtye6U3h8xI18-M8_K7bPAQP4soTfYeopQgjR-EIbgJclV7Hd1BAZh2i0Q14lWC-5GF8d9-IaZX7V=s1360-w1360-h1020-rw",
        badge: "Premium",
        popular: 75,
        sold: 180,
        date: 20241001,
      },
    ],
    media: [
      {
        id: 2001,
        title: "Before & After Sepatu Kami",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxw5U1W0FgZVJqlf1HjK-DE86jphiJBLUa2i2pKZXnXiLSBoEoSPcKEGo6IhlBHzKVQmJMCpprh1Ajjw71Ir5UHSTE3Bq9EE3bq3Laju6U7y345Sj7HNn6HxbU9tjYUFRD5st-Ftw=s1360-w1360-h1020-rw",
        duration: "2:30",
        views: "15.1K",
      },
      {
        id: 2002,
        title: "Tips Merawat Sepatu Putih",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxw5U1W0FgZVJqlf1HjK-DE86jphiJBLUa2i2pKZXnXiLSBoEoSPcKEGo6IhlBHzKVQmJMCpprh1Ajjw71Ir5UHSTE3Bq9EE3bq3Laju6U7y345Sj7HNn6HxbU9tjYUFRD5st-Ftw=s1360-w1360-h1020-rw ",
        duration: "3:45",
        views: "22.8K",
      },
    ],
  },
  {
    id: "3",
    name: "Kampung Batik",
    address:
      "Jl. Putat Jaya Barat VIII B No.31, Putat Jaya",
    city: "Surabaya",
    description:
      "UMKM Butik batik yang berfokus pada batik tulis dan cap khas Jawa Timuran dengan desain modern.",
    time: "09:00 - 17:00",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxrmG80r3BVy8zcJy-rP0oVTSoFudB1ncpUs74g6oPNooOWcOFQhWkDFdGgM3K5rTM1vQmKWFRkWnWcpUOgXhNDrvI_qh6ePvIrcIf-EHFSZ2b5b-Ze-IwNj1S6bMstvEhkBPwz=s1360-w1360-h1020-rw",
    latitude: -7.280014,
    longitude: 112.718501,
    isOpen: true,
    isFavorite: false,
    category: "Pakaian",
    catalog: [
      {
        id: 301,
        cat: "pria",
        name: "Kemeja Batik Lengan Panjang",
        price: 275000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzB-qS70PbvNWkZ6FX5CI4QyF-PuB-LQQwhVoKB9wcfWLqPObvzmrMfXgqjP0D3YsQJq60VpeX4Zt-7B-sh-wDtzHcnyMxaVJWW4HsmY5gVhezFgG6elmXGatJ_zwM6rPNR3MUUrw=s1360-w1360-h1020-rw",
        badge: "Best Seller",
        popular: 95,
        sold: 280,
        date: 20240501,
      },
      {
        id: 302,
        cat: "pria",
        name: "Kemeja Batik Lengan Pendek",
        price: 195000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyLbPRVEURD8EuSnTbS6SNdv4pz-_cOCZEPdx2X9SecJ6eIbYX_baLENiYQuQezAu12OxKPQrAEqFZXwwGSLhk0Ppg-dk8WjntTnwsNltd42wbjnsB7RGrFxflHdCx-thqsGRgk=s1360-w1360-h1020-rw",
        popular: 92,
        sold: 340,
        date: 20240401,
      },
      {
        id: 303,
        cat: "wanita",
        name: "Dress Batik Modern",
        price: 285000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwe1bhHR6U9L7onB-5bR9m9EqybpsUcojziSgBpHDgBwrVYzhHFVM7GBVRgJiML3RENXunBJvakZHfIA2bgvDJAEeiz4sdD1b56zZt-3sl1eZn1c0R7ViVWAqtImNvRE1Qt-Ddk=s1360-w1360-h1020-rw",
        popular: 88,
        sold: 210,
        date: 20240615,
      },
      {
        id: 304,
        cat: "kain",
        name: "Kain Batik 2 Meter",
        price: 185000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwe1bhHR6U9L7onB-5bR9m9EqybpsUcojziSgBpHDgBwrVYzhHFVM7GBVRgJiML3RENXunBJvakZHfIA2bgvDJAEeiz4sdD1b56zZt-3sl1eZn1c0R7ViVWAqtImNvRE1Qt-Ddk=s1360-w1360-h1020-rw",
        badge: "Popular",
        popular: 85,
        sold: 190,
        date: 20231110,
      },
    ],
    media: [
      {
        id: 3001,
        title: "Proses Membuat Batik Tulis",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxrvKG_h7IkkpJGXMH84hY_woP-q00SP69kiC5MSYNJRlHzbajzm6H3aYLuORi4SNQfcVL2fxbkWH2-RFf5tTKb5IxeYyK9uT7LPe-KQPB95d5YY-lyyKWqjdCYhK0lW74DlmCKgQ=s1360-w1360-h1020-rw",
        duration: "4:20",
        views: "9.8K",
      },
      {
        id: 3002,
        title: "Koleksi Terbaru 2025",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwe1bhHR6U9L7onB-5bR9m9EqybpsUcojziSgBpHDgBwrVYzhHFVM7GBVRgJiML3RENXunBJvakZHfIA2bgvDJAEeiz4sdD1b56zZt-3sl1eZn1c0R7ViVWAqtImNvRE1Qt-Ddk=s1360-w1360-h1020-rw",
        duration: "1:15",
        views: "5.5K",
      },
    ],
  },
  {
    id: "5",
    name: "Zangrandi Ice Cream",
    address: "Jl. Yos Sudarso No.15, Embong Kaliasin",
    city: "Surabaya",
    description:
      "Toko es krim legendaris sejak 1930, menyajikan es krim klasik dengan resep Italia otentik dan suasana nostalgia yang kental.",
    time: "10:00 - 22:00",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMFX3J0myaHh2Zdb4RYsJcF56zkvXLR8dZ88BPu=s1360-w1360-h1020-rw",
    latitude: -7.2605,
    longitude: 112.7424,
    isOpen: true,
    isFavorite: true,
    category: "Makanan",
    catalog: [
      {
        id: 501,
        cat: "classic",
        name: "Cocio Quake",
        price: 55000,
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNhPSWYuX1PuZ0MIj80Zj2Sr4-Wc0Ex3jzlhC9G=s1360-w1360-h1020-rw",
        badge: "Signature",
        popular: 98,
        sold: 950,
        date: 20220101,
      },
      {
        id: 502,
        cat: "classic",
        name: "Banana Split",
        price: 45000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwN2QMCny_o8mDh7BrEqE8gzpEmTWO0damAgwi5fOmI_JeGj490GRiTclnTreW3DkfRLTw-vuq8vX3hwOzgyAllJcYon0ACwN8S_ndYA14YF1v-Z5yQGhn4wOwJsP4nn7fEwNaP=s1360-w1360-h1020-rw",
        badge: "Popular",
        popular: 95,
        sold: 870,
        date: 20220101,
      },
      {
        id: 503,
        cat: "special",
        name: "Spumoni",
        price: 50000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxCjno7D23iV7uHX0TQZP8hkShVmIDIZCOFYa7EPOjqmnwx4Ak9jXb8XjWHF6ep9vChz-y1Ez92-jfxyX7UNk0XPhKc0fujAsAkj0HyuJ93wj5qAKQ5pwm1FLGVU8jcWW3oei6y=s1360-w1360-h1020-rw",
        popular: 92,
        sold: 680,
        date: 20230115,
      },
      {
        id: 504,
        cat: "sundae",
        name: "Chocolate Fudge Sundae",
        price: 48000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzflv6oUEhRUDVqZZOV9JRnwvX5jNSleWfEyQfZBaUgn80UJUHt6781FRfZpkZeJ1lADgZAxGZ0ER8ZzY3GFhUbWfo2By1PpXxtnkOTEcnyPLhUYhCHOvFUyf_K-ihz5hMqvnxdkLJZBw5U=s1360-w1360-h1020-rw",
        popular: 90,
        sold: 720,
        date: 20230201,
      },
    ],
    media: [
      {
        id: 5001,
        title: "Sejarah Zangrandi Sejak 1930",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwjclNBWDLcg0-eqMbyZyXusWK3HTcBGA2HrKXfLZYS68-_emnVK00P1DK1FfwH_LYYzr_xKeIY02GiXBPjMcEnMj-ZnIuL74RmhFebYfHjVLibm2_fHoyQjQjkZxkjB0EJcliFeqf14-w=s1360-w1360-h1020-rw",
        duration: "8:10",
        views: "42.3K",
      },
      {
        id: 5002,
        title: "Menu Favorit Zangrandi",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzVP3vyudonpr2Hcwe3CvRgx16WFg84m-gcgeuMYnauU_db0o02efQ5ZKHwsgwgx5RbHb2xBzu4VweI7flhYIUTAoLG7Dx4uWiu8h88NNKHF2uX5S3o1FI5I_Rb_SNhPnPq9folyZm46ik=s1360-w1360-h1020-rw",
        duration: "5:30",
        views: "28.7K",
      },
    ],
  },
  {
    id: "6",
    name: "Cak Cuk Surabaya",
    address: "Jl. Dharmawangsa No.35, Airlangga",
    city: "Surabaya",
    description:
      "Merek kaos oleh-oleh khas Surabaya yang ikonik, menampilkan desain dan kata-kata jenaka khas Suroboyoan.",
    time: "09:00 - 21:00",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxNbuEU7J5gNpPa4-gL9vsIt5cl9Lmgpk5ka35YwpoDkI148yTYsCiMtdMAy9Ji-wk991YoI-t3Grp1dBZgE1_UFl1RxJe9dnk5SuMgmNcMlkeKcsSrnzT6h-vBaopE5Yo_D89V=s1360-w1360-h1020-rw",
    latitude: -7.2721,
    longitude: 112.7533,
    isOpen: true,
    isFavorite: false,
    category: "Pakaian",
    catalog: [
      {
        id: 601,
        cat: "kaos",
        name: "Kaos 'Arek Suroboyo'",
        price: 95000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw93lxmL4eNS3SFX20NkljMVYIre4_3E4hOUAGktOgE6nHJQdP72UQ6WzarB4vQqyufX-T6yNddiJEdKBY9mP_AuU0rJyrdkG7r8Vu6X7E2J_Tk_f-eFteDb6Ed9-hv7H9SsZ4j=s1360-w1360-h1020-rw",
        badge: "Best Seller",
        popular: 96,
        sold: 1100,
        date: 20230101,
      },
      {
        id: 602,
        cat: "kaos",
        name: "Kaos Desain 'Jancuk'",
        price: 95000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw93lxmL4eNS3SFX20NkljMVYIre4_3E4hOUAGktOgE6nHJQdP72UQ6WzarB4vQqyufX-T6yNddiJEdKBY9mP_AuU0rJyrdkG7r8Vu6X7E2J_Tk_f-eFteDb6Ed9-hv7H9SsZ4j=s1360-w1360-h1020-rw",
        popular: 88,
        sold: 900,
        date: 20230201,
      },
      {
        id: 603,
        cat: "kaos",
        name: "Kaos 'Ora Umum'",
        price: 95000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwREAkcJ3AsfB5aGiprrFlqmOtta3QZwIPjKZh75jpXYg0cevMhc2NIS-qp4aL4BH8RYy48kgHygoECsok6pripgxbaIvAbAt-7QnrBUpTSxd5aKWdmkXeUTKpq26K_9AzjOo4Png=s1360-w1360-h1020-rw",
        popular: 85,
        sold: 750,
        date: 20230315,
      },
    ],
    media: [
      {
        id: 6001,
        title: "Proses Desain Kaos Cak Cuk",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSziRDRTAIzI-Gbp-Pg8Euuq0cS-Z7Qm-mYWlFc5zgHVYaI80m9mWEa2UChAls9R1Tm4lJfVzFbaOcV8TOefCPzV7Z7YvPz8dHjXy8Puoq0h7Nrsqc5IpM-tfnkq7i0Qy3bXjYVX=s1360-w1360-h1020-rw",
        duration: "2:15",
        views: "18.9K",
      },
      {
        id: 6002,
        title: "Koleksi Terbaru Kaos Suroboyo",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzo0-zckz9FQo_91tgSP_jt-L77b0GbLaXV4DoncMO8xdOlDtIXPJLMjXE8-c9eaLf_eMBRTg1RFY3TkVW2cgEj51IywfizfzLXuNsCemKVCf_egp2PgHOfIV2lee7TH0Kg1lXj6w=s1360-w1360-h1020-rw",
        duration: "3:45",
        views: "25.3K",
      },
    ],
  },
  {
    id: "7",
    name: "Soto Ayam Lamongan Cak Har",
    address: "Jl. Dr. Ir. H. Soekarno No. 220, Mulyorejo",
    city: "Surabaya",
    description:
      "Soto ayam Lamongan paling ramai di Surabaya, terkenal dengan kuah kental berlimpah koya dan porsi jumbo.",
    time: "07:00 - 22:00",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzbT_H91y8M7hHLbuhMGCUhnQ1WdUYKZy_CVSKJQ1_qrXHDKlyLs4P2OvrRrmUVL41fPIoxK3DL_ahAIPVU6RTHDuW8c8NB7kwd3Z4LotVOV39u_u38jTfqodb49cO3cfD_SzZN=s1360-w1360-h1020-rw",
    latitude: -7.2882,
    longitude: 112.7836,
    isOpen: true,
    isFavorite: false,
    category: "Makanan",
    catalog: [
      {
        id: 701,
        cat: "main",
        name: "Soto Ayam Kampung",
        price: 18000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwAMc-YxbtzZl4OL_y4pycMbuwYc5uatKAqRunOakOD4Y3DLyJNNRBfU6KcsgUrpn7VBRLE78z0sS5AL1_vmiebDtO6iLQnIL6RqqbEv7hVv51Y64vjU3ocHQkfW1TCxQoUOUU5b7r4zyAc=s1360-w1360-h1020-rw",
        badge: "Popular",
        popular: 98,
        sold: 3000,
        date: 20220101,
      },
      {
        id: 702,
        cat: "main",
        name: "Soto Ayam Jumbo",
        price: 28000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwAMc-YxbtzZl4OL_y4pycMbuwYc5uatKAqRunOakOD4Y3DLyJNNRBfU6KcsgUrpn7VBRLE78z0sS5AL1_vmiebDtO6iLQnIL6RqqbEv7hVv51Y64vjU3ocHQkfW1TCxQoUOUU5b7r4zyAc=s1360-w1360-h1020-rw",
        popular: 90,
        sold: 1500,
        date: 20220115,
      },
      {
        id: 704,
        cat: "main",
        name: "Soto Ayam + Nasi Goreng",
        price: 35000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwr9rBfBIti_fgaX8glRh9PRP66n6yrWTnMZswdH8yBxECQ2grv2DLgw5OSsKNFQLMekcOeG93MbzxfeTukBIhoA7J047wvVeqFW9GEMU6kKwUuIiQ0lFLgXPg3tQ5097dY_7D2=s1360-w1360-h1020-rw",
        badge: "Combo",
        popular: 88,
        sold: 1200,
        date: 20220201,
      },
    ],
    media: [
      {
        id: 7001,
        title: "Cara Makan Soto Lamongan yang Benar",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxxOqhuMf5dNI55XfmNu-9rUvUqP8QYaCLzzbNTHqtzfxIkV4Xwp21Hv_YwW5qM6UDuoBvqFhG9yvHsFiIfy5gIWxIbzFFQ47ocM6eS9klr7aLicntEMHKu_VZT24Z2kuTD1y_13Q=s1360-w1360-h1020-rw",
        duration: "2:50",
        views: "42.5K",
      },
    ],
  },
  {
    id: "11",
    name: "Rujak Cingur Achmad Jais",
    address: "Jl. Achmad Jais No.40, Peneleh",
    city: "Surabaya",
    description:
      "Rujak cingur legendaris dan otentik di Surabaya, dikenal dengan bumbu petis yang kental dan cingur yang empuk.",
    time: "10:00 - 17:00",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxfh10DUwSn9U69e1ShXiv6RnpbcKyzuVY2mPNqsSnGG-CsfuNKizVZynDwwGrcJPdQqtjoVYX9rLTkHKi1g72THhnSac95L5y36wpWnhDiQkjSDz2BhR45dekamg-qMwq7iPUW4w=s1360-w1360-h1020-rw", // Placeholder
    latitude: -7.255477,
    longitude: 112.740223,
    isOpen: true,
    isFavorite: false,
    category: "Makanan",
    catalog: [
      {
        id: 1101,
        cat: "main",
        name: "Rujak Cingur Komplit",
        price: 20000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxfh10DUwSn9U69e1ShXiv6RnpbcKyzuVY2mPNqsSnGG-CsfuNKizVZynDwwGrcJPdQqtjoVYX9rLTkHKi1g72THhnSac95L5y36wpWnhDiQkjSDz2BhR45dekamg-qMwq7iPUW4w=s1360-w1360-h1020-rw",
        badge: "Legend",
        popular: 98,
        sold: 800,
        date: 20220301,
      },
      {
        id: 1102,
        cat: "main",
        name: "Rujak Cingur + Lontong",
        price: 22000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-gz5VVBI3QeNieanFZ3EGhaV8sJINrGV1C6PYHBBJjQxRC5fPC7fWlnSKdA1nwsQNJ9wvwowzt629SlbAJtATsFsD62meNxIs6tJeTw46tEHHQEtmzjIWFUSFOLe5t12FQ5-V=s1360-w1360-h1020-rw",
        popular: 90,
        sold: 600,
        date: 20220301,
      },
      {
        id: 1103,
        cat: "side",
        name: "Lontong Sayur",
        price: 15000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxf9gOWYuj29eJ6PHJeEhQBXuNIaFSpHongxpCJ_ZL74Vhp0RCIinqjjW2x8wLZpHmJn_AKpriC4Q6vNnqtJM6QlTgNyueXBXV3J_OoCimDeIJBeAEo4md8Q_NSnLo_8nxFSXOY=s1360-w1360-h1020-rw",
        popular: 85,
        sold: 500,
        date: 20220401,
      },
      {
        id: 1104,
        cat: "beverage",
        name: "Es Teh Manis",
        price: 5000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyeZOlMBIX0rOQdguPICG13UFtGNHqgoxs73L20_DD3AG--V4vP1kquMya5_EVEpfeE2YwygPPaiX53JUOhlgd08oKlgQ6jl_KA4jwyD0xCku62-GoFpXEJnhT8W2L0j-BmM2nsFQ=s1360-w1360-h1020-rw",
        popular: 82,
        sold: 720,
        date: 20220301,
      },
    ],
    media: [
      {
        id: 11001,
        title: "Resep Rahasia Rujak Cingur Achmad Jais",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy2OjFFk9HLvee6IsikjUuLoa280H8C7tX8MhydeGVdtmIM2Xe7oPlmfeN__-jEvpA1zOZycvOQwZaAJCj3UQvUhok7CMvrYm8JMnenQNEC22QsY8MIkfqDMbkAMdQKb7EoCu78Gw=s1360-w1360-h1020-rw",
        duration: "3:35",
        views: "32.8K",
      },
    ],
  },
  {
    id: "12",
    name: "Mirota Batik & Handicraft",
    address: "Jl. Sulawesi No.24, Ngagel",
    city: "Surabaya",
    description:
      "Toko cindera mata, batik, dan kerajinan tangan terlengkap di Surabaya. Menawarkan koleksi dari seluruh nusantara.",
    time: "09:00 - 21:00",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMFgcLnT9sVKz0fbx29-LyBfdKK3CnwqAQbu68Q=s1360-w1360-h1020-rw",
    latitude: -7.27689,
    longitude: 112.747002,
    isOpen: true,
    isFavorite: false,
    category: "Pakaian",
    catalog: [
      {
        id: 1201,
        cat: "pria",
        name: "Kemeja Batik Tulis Premium",
        price: 450000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzvOAS4buzskAH7zE1atuckbaZrvzVA-ufqv7xRkefqf4pDQmM1TQMwrKMiH-4pepJdz2yznF605N5RBKbO3aDODUEwIRwc5m8JNEo8iIz4gybGTA_oSkpETYk2lcdjX0Sfgia9hkLTtAI=s1360-w1360-h1020-rw",
        badge: "Premium",
        popular: 85,
        sold: 150,
        date: 20240110,
      },
      {
        id: 1202,
        cat: "wanita",
        name: "Dress Batik Cap",
        price: 320000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxe-oAkRmb_-4DXgIYGDklVmZ0_WMxlquNWT8m5NtOR80GMxxiv5RbROVWoIsg6jQ-4b4D4ht6iTQ8kxG__psN3jy1OdSeCsD7IwhSDGJRgnc4aawGOCtBIoMs89NAP-OvmRGV6=s1360-w1360-h1020-rw",
        popular: 90,
        sold: 200,
        date: 20240315,
      },
      {
        id: 1203,
        cat: "aksesoris",
        name: "Tas Batik Kombinasi",
        price: 185000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxTJHrV578F5cVq6JHfJ901xh1_uyN-2civUcM5wBnyTpgh0tqCdYc2Tx8ARDzj31b_baUx4pmTE4aKe_L7RC0mK_qE3HHIu-lO2kGLhy_leVcCfVZNUSxzpaECDF4wbRMk1jRp=s1360-w1360-h1020-rw",
        popular: 82,
        sold: 180,
        date: 20231101,
      },
      {
        id: 1204,
        cat: "handicraft",
        name: "Wayang Kulit Miniatur",
        price: 250000,
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxQ3-EJzPdhn97hxCxgYUmRUib4rcF1dLUJPKOi9HckjFxM4T-7a83BLdfaDXjOTMk8Ky2lAz9Jb9Floo4uxJ_aY2PGO4DtwM26y_GcMBj07tQwObDnep9hGx1fiE8QLWJk3w2jcTx2rHt7=s1360-w1360-h1020-rw",
        badge: "Exclusive",
        popular: 75,
        sold: 80,
        date: 20240201,
      },
    ],
    media: [
      {
        id: 12001,
        title: "Tur Toko Mirota Surabaya",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyX0vs0O-ljYrLBavsZU7HtExJBJPXv8jzgsK3J7rRcEhnG5bj0lE7AeI3fJu67f269Biw0P_fsYG8EP5rKPanPVBLkgHgRAVWojrykbgW-DfSjc69YMF6Ksc4TfHE96Vma=s1360-w1360-h1020-rw",
        duration: "6:30",
        views: "28.4K",
      },
      {
        id: 12002,
        title: "Koleksi Batik Nusantara Terlengkap",
        thumbnail:
          "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxtAhGNKMVDoeqxtDWBRAyZu6oxdSh2rro3TW8tW8vFfbaThESMPzyDF_R6bGhF_vCf3bB1jWaR36peaXWJXoQNYbFc5OgJs6HMZomTq5MH8IX4J5Xwjnxrw1TvW0mRsL7JwkM=s1360-w1360-h1020-rw",
        duration: "4:50",
        views: "18.7K",
      },
    ],
  },
];
