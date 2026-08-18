export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  fabricIds?: string[];
  fabricImages?: Record<string, string>;
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
    "pascal-marmol",
    "abby-negro",
    "abby-gris",
    "abby-moca",
    ],

    fabricImages: {
    "pascal-marmol": "/images/products/sofa-prestige/PASCAL%20MÁRMOL.jpg",
    "abby-negro": "/images/products/sofa-prestige/ABBY%20NEGRO.jpg",
    "abby-gris": "/images/products/sofa-prestige/ABBY%20GRIS.jpg",
    "abby-moca": "/images/products/sofa-prestige/ABBY%20MOCA.jpg",
    }, 

  },
  {
      id: "sofa-oporto",
      name: "Sofá Cama Oporto",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/COLBAN BEIGE.png",
      featured: true,

      fabricIds: [
      "colban-beige",
      "pascal-azul",
      "pascal-coral",
      "pascal-gris"
      ],

      fabricImages: {
      "colban-beige": "/images/products/sofa-oporto/COLBAN%20BEIGE.png",
      "pascal-azul": "/images/products/sofa-oporto/PASCAL%20AZUL.png",
      "pascal-coral": "/images/products/sofa-oporto/PASCAL%20CORAL.png",
      "pascal-gris": "/images/products/sofa-oporto/PASCAL%20GRIS .png",
      }, 

    },
    {
      id: "sofa-helsinki",
      name: "Sofá Cama Helsinki",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/SIBERIA%20GRIS.png",
      featured: true,

      fabricIds: [
      "siberia-gris",
      "siberia-navy",
      "siberia-rojo",
      "siberia-verde"
      ],

      fabricImages: {
      "siberia-gris": "/images/products/sofa-helsinki/SIBERIA%20GRIS.png",
      "siberia-navy": "/images/products/sofa-helsinki/SIBERIA%20NAVY.png",
      "siberia-rojo": "/images/products/sofa-helsinki/SIBERIA%20ROJO.png",
      "siberia-verde": "/images/products/sofa-helsinki/SIBERIA%20VERDE.png",
      }, 

    },
     {
      id: "sofa-eclipse",
      name: "Sofá Cama Eclipse",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/COPACABANA CREMA.png",
      featured: true,

      fabricIds: [
      "copacabana-crema",
      "copacabana-beige",
      "nantes-gris",
      "nantes-navy"
      ],

      fabricImages: {
      "copacabana-crema": "/images/products/sofa-eclipse/COPACABANA%20CREMA.png",
      "copacabana-beige": "/images/products/sofa-eclipse/COPACABANA%20BEIGE.png",
      "nantes-gris": "/images/products/sofa-eclipse/NANTES%20GRIS .png",
      "nantes-navy": "/images/products/sofa-eclipse/NANTES%20NAVY.png",
      }, 

    },
     {
      id: "sofa-forest",
      name: "Sofá Cama Forest",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PRADERA PLATA.jpg",
      featured: true,

      fabricIds: [
      "pradera-plata",
      "pradera-aluminio",
      "pradera-camel",
      "pradera-negro"
      ],

      fabricImages: {
      "pradera-plata": "/images/products/sofa-forest/PRADERA%20PLATA.jpg",
      "pradera-aluminio": "/images/products/sofa-forest/PRADERA%20ALUMINIO.png",
      "pradera-camel": "/images/products/sofa-forest/PRADERA CAMEL.png",
      "pradera-negro": "/images/products/sofa-forest/PRADERA NEGRO.png",
      }, 

    },
    {
      id: "sofa-novad",
      name: "Sofá Novad",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PLATINUM HIELO.png",
      featured: true,

      fabricIds: [
      "platinum-hielo",
      "platinum-sand",
      "velia-maifil",
      "velia-mocca"
      ],

      fabricImages: {
      "platinum-hielo": "/images/products/sofa-novad/PLATINUM%20HIELO.png",
      "platinum-sand": "/images/products/sofa-novad/PLATINUM%20SAND.png",
      "velia-maifil": "/images/products/sofa-novad/VELIA MAIFIL.png",
      "velia-mocca": "/images/products/sofa-novad/VELIA MOCCA.png",
      }, 

    },
];