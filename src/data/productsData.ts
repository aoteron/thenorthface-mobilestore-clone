// dataProducts.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  gender: "Hombre" | "Mujer" | "Unisex";
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
    name: "Chaqueta 3 en 1 Evolve II Triclimate® para hombre",
    category: "Senderismo para hombre",
    gender: "Hombre",
    idealUse: "Chaqueta versátil para climas fríos, compuesta por dos capas que pueden usarse juntas o por separado, proporcionando protección contra el viento, la lluvia y el frío.",
    advantages: {
      Versatilidad: true,
      "Protección contra los elementos": true,
      "Capas intercambiables": true,
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
    name: "Chaqueta con aislamiento térmico sintético Huila para mujer",
    category: "Senderismo para mujer",
    gender: "Mujer",
    idealUse: "Calidez al instante al hacer senderismo en días fríos y miserables",
    advantages: {
      "DWR - Repelente de agua": true,
      "Aislamiento sintético": true
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
    name: "Zapatillas alpinas GORE-TEX® Verto para hombre",
    category: "Alpinismo",
    gender: "Hombre",
    idealUse: "Zapatillas diseñadas para alpinismo y actividades de montaña, ofreciendo protección impermeable y transpirable gracias a la tecnología GORE-TEX®.",
    advantages: {
      "Protección impermeable": true,
      "Transpirabilidad": true,
      "Agarre en terrenos alpinos": true
    },
    variations: [
      {
        id: "1",
        color: "Negro",
        price: 170.00,
        image: "https://images.thenorthface.com/is/image/TheNorthFaceEU/83ND_MN8_hero"
      }
    ]
  },
  {
    id: "4",
    name: "Mochila Borealis",
    category: "Mochilas",
    gender: "Unisex",
    idealUse: "Mochila versátil diseñada para el uso diario, viajes y actividades al aire libre, con compartimentos organizativos y panel trasero acolchado para mayor comodidad.",
    advantages: {
      "Versatilidad": true,
      "Comodidad": true,
      "Organización": true
    },
    variations: [
      {
        id: "1",
        color: "Negro",
        price: 125.00,
        image: "https://images.thenorthface.com/is/image/TheNorthFaceEU/52SE_R81_hero"
      }
    ]
  },
  
  
  
];
