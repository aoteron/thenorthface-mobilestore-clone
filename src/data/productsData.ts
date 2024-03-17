// dataProducts.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  gender: "Male" | "Female" | "Unisex";
  idealUse: string;
  advantages: {
    [key: string]: boolean;
  };
  variations: ProductVariation[];
}

export interface ProductVariation {
  id: string;
  color: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Evolve II Triclimate® 3-in-1 Jacket for Men",
    category: "Men's Hiking",
    gender: "Male",
    idealUse: "Versatile jacket for cold climates, composed of two layers that can be worn together or separately, providing protection against wind, rain, and cold.",
    advantages: {
      Versatility: true,
      "Protection against the elements": true,
      "Interchangeable layers": true,
    },
    variations: [
      {
        id: "1",
        color: "Forest Olive-TNF Black",
        price: 115.00,
        image: "https://images.thenorthface.com/is/image/TheNorthFaceEU/CG55_RMO_hero"
      }
    ]
  },
  {
    id: "2",
    name: "Huila Synthetic Insulated Jacket for Women",
    category: "Women's Hiking",
    gender: "Female",
    idealUse: "Instant warmth when hiking on cold and miserable days.",
    advantages: {
      "DWR - Water Repellent": true,
      "Synthetic Insulation": true
    },
    variations: [
      {
        id: "1",
        color: "Indigo Stone",
        price: 190.00,
        image: "/src/assets/products/85AG_POD_hero.jpeg"
      },
      {
        id: "2",
        color: "TNF Black",
        price: 190.00,
        image: "src/assets/products/85AG_JK3_hero.jpeg"
      },
      {
        id: "3",
        color: "Dark Sage-Pine Needle",
        price: 95.00,
        image: "src/assets/products/85AG_ONQ_hero.jpeg"
      },
      {
        id: "4",
        color: "Boysenberry-Rose Quart",
        price: 95.00,
        image: "/src/assets/products/85AG_OWU_hero.jpeg"
      }
    ]
  },
  {
    id: "3",
    name: "GORE-TEX® Verto Alpine Shoes for Men",
    category: "Mountaineering",
    gender: "Male",
    idealUse: "Shoes designed for mountaineering and mountain activities, offering waterproof and breathable protection thanks to GORE-TEX® technology.",
    advantages: {
      "Waterproof Protection": true,
      "Breathability": true,
      "Grip on Alpine Terrain": true
    },
    variations: [
      {
        id: "1",
        color: "Black",
        price: 170.00,
        image: "https://images.thenorthface.com/is/image/TheNorthFaceEU/83ND_MN8_hero"
      }
    ]
  },
  {
    id: "4",
    name: "Borealis Backpack",
    category: "Backpacks",
    gender: "Unisex",
    idealUse: "Versatile backpack designed for everyday use, travel, and outdoor activities, with organizational compartments and padded back panel for added comfort.",
    advantages: {
      Versatility: true,
      Comfort: true,
      Organization: true
    },
    variations: [
      {
        id: "1",
        color: "Black",
        price: 125.00,
        image: "https://images.thenorthface.com/is/image/TheNorthFaceEU/52SE_R81_hero"
      }
    ]
  },
  
  
  
];
