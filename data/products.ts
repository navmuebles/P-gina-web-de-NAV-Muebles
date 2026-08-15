export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  fabricIds?: string[];
};

export const products: Product[] = [
  {
    id: "sofa-prestige",
    name: "Sofá Cama Prestige",
    category: "salas",
    description:
      "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
    image: "/images/products/sofa-prestige.jpg",
    featured: true,
    fabricIds: [
  "mediterraneo-sapporo-blanco",
  "mediterraneo-sapporo-arena",
  "mediterraneo-sapporo-taupe",
  "mediterraneo-sapporo-guinda",
],
  },
];