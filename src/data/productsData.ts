// dataProducts.ts
export interface Product {
  id: string;
  name: string;
  use: string;
  gender: "Hombre" | "Mujer";
  idealUse: string;
  advantages: {
    [key: string]: boolean;
  };
  variations: ProductVariation[];
}

export interface ProductVariation {
  id: string;
  color: string;
  prize: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Chaqueta con aislamiento térmico sintético Huila para mujer",
    use: "Senderismo",
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
        prize: 190.00,
        image: "/src/assets/products/85AG_POD_hero.jpeg"
      },
      {
        id: "2",
        color: "TNF Black",
        prize: 190.00,
        image: "src/assets/products/85AG_JK3_hero.jpeg"
      },
      {
        id: "3",
        color: "Dark Sage-Pine Needle",
        prize: 95.00,
        image: "src/assets/products/85AG_ONQ_hero.jpeg"
      },
      {
        id: "4",
        color: "Boysenberry-Rose Quart",
        prize: 95.00,
        image: "/src/assets/products/85AG_OWU_hero.jpeg"
      }
    ]
  }
];
