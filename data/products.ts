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
      image: "/images/products/PLATINUM HIELO.jpg",
      featured: true,

      fabricIds: [
      "platinum-hielo",
      "platinum-sand",
      "velia-maifil",
      "velia-mocca"
      ],

      fabricImages: {
      "platinum-hielo": "/images/products/sofa-novad/PLATINUM%20HIELO.jpg",
      "platinum-sand": "/images/products/sofa-novad/PLATINUM%20SAND.jpg",
      "velia-maifil": "/images/products/sofa-novad/VELIA MAIFIL.jpg",
      "velia-mocca": "/images/products/sofa-novad/VELIA MOCCA.jpg",
      }, 

    },
    {
      id: "basecama-sirena",
      name: "Base Cama Sirena",
      category: "base-camas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/CLARION ARENA.png",
      featured: true,

      fabricIds: [
      "clarion-arena",
      "clarion-crema",
      "platinum-menta",
      "platinum-negro"
      ],

      fabricImages: {
      "clarion-arena": "/images/products/basecama-sirena/CLARION ARENA.png",
      "clarion-crema": "/images/products/basecama-sirena/CLARION CREMA .png",
      "platinum-menta": "/images/products/basecama-sirena/PLATINUM MENTA .png",
      "platinum-negro": "/images/products/basecama-sirena/PLATINUM NEGRO.png",
      }, 

    },
    {
      id: "cuddle-bear",
      name: "Poltrona Cuddle Bear",
      category: "categoria-infantil",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PORTADA.png",
      featured: true,

      fabricIds: [
      "lucero-negro",
      "river-beige",
      "river-crudo",
      "lucero-indigo"
      ],

      fabricImages: {
      "lucero-negro": "/images/products/cuddle-bear/LUCERO NEGRO.png",
      "river-beige": "/images/products/cuddle-bear/RIVER BEIGE.png",
      "river-crudo": "/images/products/cuddle-bear/RIVER CRUDO.png",
      "lucero-indigo": "/images/products/cuddle-bear/LUCERO INDIGO.png",
      }, 

    },
    {
      id: "mecedora-nube",
      name: "Mecedora Nube",
      category: "categoria-infantil",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/RIVER NAVY.png",
      featured: true,

      fabricIds: [
      "river-blanco",
      "river-navy",
      "river-negro",
      "river-plata"
      ],

      fabricImages: {
      "river-blanco": "/images/products/mecedora-nube/RIVER BLANCO.png",
      "river-navy": "/images/products/mecedora-nube/RIVER NAVY.png",
      "river-negro": "/images/products/mecedora-nube/RIVER NEGRO.png",
      "river-plata": "/images/products/mecedora-nube/RIVER PLATA .png",
      }, 

    },
    {
      id: "sala-serenity",
      name: "Sala Serenity",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/GEMA HIELO.png",
      featured: true,

      fabricIds: [
      "gema-hielo",
      "gema-taupe",
      "gema-verde",
      "gema-crudo"
      ],

      fabricImages: {
      "gema-hielo": "/images/products/sala-serenity/GEMA HIELO.png",
      "gema-taupe": "/images/products/sala-serenity/GEMA TAUPE.png",
      "gema-verde": "/images/products/sala-serenity/GEMA VERDE.png",
      "gema-crudo": "/images/products/sala-serenity/GEMA CRUDO.png",
      }, 

    },
    {
      id: "sofa-paris",
      name: "Sofá Paris",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PASCAL MARMOL.png",
      featured: true,

      fabricIds: [
      "abby-negro",
      "abby-moca",
      "abby-gris",
      "pascal-marmol"
      ],

      fabricImages: {
      "abby-negro": "/images/products/sofa-paris/ABBY NEGRO.png",
      "abby-moca": "/images/products/sofa-paris/ABBY MOCa.png",
      "abby-gris": "/images/products/sofa-paris/ABBY GRIS.png",
      "pascal-marmol": "/images/products/sofa-paris/PASCAL MARMOL.png",
      }, 

    },
    {
      id: "comedor-niza",
      name: "Comedor Niza",
      category: "comedores",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/GEMA BEIGE.png",
      featured: true,

      fabricIds: [
      "gema-beige",
      "gema-gris",
      "gema-indigo",
      "gema-rosa"
      ],

      fabricImages: {
      "gema-beige": "/images/products/comedor-niza/GEMA BEIGE.png",
      "gema-gris": "/images/products/comedor-niza/GEMA GRIS.png",
      "gema-indigo": "/images/products/comedor-niza/GEMA INDIGO.png",
      "gema-rosa": "/images/products/comedor-niza/GEMA ROSA.png",
      }, 

    },
    {
      id: "poltrona-sherpa",
      name: "Poltrona Sherpa",
      category: "poltronas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/CLARION GRIS.png",
      featured: true,

      fabricIds: [
      "clarion-gris",
      "zagori-arena",
      "zagori-crema",
      "zagori-trigo"
      ],

      fabricImages: {
      "clarion-gris": "/images/products/poltrona-sherpa/CLARION GRIS.png",
      "zagori-arena": "/images/products/poltrona-sherpa/SAGORI ARENA.png",
      "zagori-crema": "/images/products/poltrona-sherpa/ZAGORI CREMA.png",
      "zagori-trigo": "/images/products/poltrona-sherpa/ZAGORI TRIGO.png",
      }, 

    },
    {
      id: "comedor-oak",
      name: "Comedor Oak",
      category: "comedores",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/COPACABANA PLATA.png",
      featured: true,

      fabricIds: [
      "copacabana-gris",
      "copacabana-plata",
      "copacabana-plomo",
      "copacabana-carbon"
      ],

      fabricImages: {
      "copacabana-gris": "/images/products/comedor-oak/COPACABANA GRIS.png",
      "copacabana-plata": "/images/products/comedor-oak/COPACABANA PLATA.png",
      "copacabana-plomo": "/images/products/comedor-oak/COPACABANA PLOMO.png",
      "copacabana-carbon": "/images/products/comedor-oak/COPACABANA CARBON.png",
      }, 

    },
    {
      id: "poltrona-bongo",
      name: "Poltrona Bongo",
      category: "poltronas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/NANTES GRIS.png",
      featured: true,

      fabricIds: [
      "nantes-gris",
      "nantes-navy",
      "nantes-taupe",
      "nantes-zafiro"
      ],

      fabricImages: {
      "nantes-gris": "/images/products/poltrona-bongo/NANTES GRIS.png",
      "nantes-navy": "/images/products/poltrona-bongo/NANTES NAVY.png",
      "nantes-taupe": "/images/products/poltrona-bongo/NANTES TAUPE.png",
      "nantes-zafiro": "/images/products/poltrona-bongo/NANTES ZAFIRO.png",
      }, 

    },
    {
      id: "sofa-escandinavo",
      name: "Sofá Escandinavo",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/GEORGIA PALO DE ROSA.png",
      featured: true,

      fabricIds: [
      "georgia-arena",
      "georgia-navy",
      "georgia-paloderosa",
      "georgia-marfil"
      ],

      fabricImages: {
      "georgia-arena": "/images/products/sofa-escandinavo/GEORGIA ARENA .png",
      "georgia-navy": "/images/products/sofa-escandinavo/GEORGIA NAVY.png",
      "georgia-paloderosa": "/images/products/sofa-escandinavo/GEORGIA PALO DE ROSA.png",
      "georgia-marfil": "/images/products/sofa-escandinavo/GEORGIA MARFIL.png",
      }, 

    },
    {
      id: "taburete-onix",
      name: "Butacas Onix",
      category: "butacas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/SENSEI ESMERALDA.png",
      featured: true,

      fabricIds: [
      "sensei-azul",
      "sensei-chocolate",
      "sensei-esmeralda",
      "sensei-plata"
      ],

      fabricImages: {
      "sensei-azul": "/images/products/taburete-onix/SENSEI AZUL.png",
      "sensei-chocolate": "/images/products/taburete-onix/SENSEI CHOCOLATE.jpg",
      "sensei-esmeralda": "/images/products/taburete-onix/SENSEI ESMERALDA.png",
      "sensei-plata": "/images/products/taburete-onix/SENSEI PLATA.png",
      }, 

    },
    {
      id: "cojin-venice",
      name: "Cojin Venice",
      category: "cojines",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/RIVER BLANCO.jpg",
      featured: true,

      fabricIds: [
      "lekki-aqua",
      "lekki-azul",
      "river-blanco",
      "rivoli-crudo"
      ],

      fabricImages: {
      "lekki-aqua": "/images/products/cojin-venice/LEKKI AQUA.jpg",
      "lekki-azul": "/images/products/cojin-venice/LEKKI AZUL.jpg",
      "river-blanco": "/images/products/cojin-venice/RIVER BLANCO.jpg",
      "rivoli-crudo": "/images/products/cojin-venice/RIVOLI CRUDO.jpg",
      }, 

    },
    {
      id: "cojin-dueto",
      name: "Cojin Dueto",
      category: "cojines",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/RIVOLI ESMERALDA.jpg",
      featured: true,

      fabricIds: [
      "mandy-sand",
      "rivoli-esmeralda",
      "rivoli-aqua",
      "rivoli-beige"
      ],

      fabricImages: {
      "mandy-sand": "/images/products/cojin-dueto/MANDY SAND.jpg",
      "rivoli-esmeralda": "/images/products/cojin-dueto/RIVOLI ESMERALDA.jpg",
      "rivoli-aqua": "/images/products/cojin-dueto/RIVOLI AQUA.jpg",
      "rivoli-beige": "/images/products/cojin-dueto/RIVOLI BEIGE.jpg",
      }, 

    },
    {
      id: "cabecero-verona",
      name: "Cabecero Verona",
      category: "cabeceros",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/MONET PLUS ALMENDRA.jpg",
      featured: true,

      fabricIds: [
      "lekki-crudo",
      "monetplus-acero",
      "monetplus-almendra",
      "monetplus-plata"
      ],

      fabricImages: {
      "lekki-crudo": "/images/products/cabecero-verona/LEKKI CRUDO.jpg",
      "monetplus-acero": "/images/products/cabecero-verona/MONET PLUS ACERO.jpg",
      "monetplus-almendra": "/images/products/cabecero-verona/MONET PLUS ALMENDRA.jpg",
      "monetplus-plata": "/images/products/cabecero-verona/MONET PLUS PLATA.jpg",
      }, 

    },
    {
      id: "basecama-wingback",
      name: "Basecama Wingback",
      category: "base-camas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/GEMA ROSA.png",
      featured: true,

      fabricIds: [
      "gema-beige",
      "gema-taupe",
      "gema-rosa",
      "gema-verde"
      ],

      fabricImages: {
      "gema-beige": "/images/products/basecama-wingback/GEMA BEIGE.png",
      "gema-taupe": "/images/products/basecama-wingback/GEMA TAUPE.png",
      "gema-rosa": "/images/products/basecama-wingback/GEMA ROSA.png",
      "gema-verde": "/images/products/basecama-wingback/GEMA VERDE.png",
      }, 

    },
    {
      id: "basecama-heart",
      name: "Basecama Heart",
      category: "base-camas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/SENSEI CHOCOLATE.jpg",
      featured: true,

      fabricIds: [
      "sensei-azul",
      "sensei-chocolate",
      "sensei-esmeralda",
      "sensei-plata"
      ],

      fabricImages: {
      "sensei-azul": "/images/products/basecama-heart/SENSEI AZUL.jpg",
      "sensei-chocolate": "/images/products/basecama-heart/SENSEI CHOCOLATE.jpg",
      "sensei-esmeralda": "/images/products/basecama-heart/SENSEI ESMERALDA.jpg",
      "sensei-plata": "/images/products/basecama-heart/SENSEI PLATA.jpg",
      },
    }, 
    {
      id: "basecama-colonial",
      name: "Basecama Colonial",
      category: "base-camas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PASCAL HUMO.jpg",
      featured: true,

      fabricIds: [
      "pascal-humo",
      "pascal-nieve",
      "pascal-plata",
      "pascal-beige"
      ],

      fabricImages: {
      "pascal-humo": "/images/products/basecama-colonial/PASCAL HUMO.jpg",
      "pascal-nieve": "/images/products/basecama-colonial/PASCAL NIEVE.jpg",
      "pascal-plata": "/images/products/basecama-colonial/PASCAL PLATA.jpg",
      "pascal-beige": "/images/products/basecama-colonial/PASCAL BEIGE.jpg",
      },
    },
    {
      id: "sofa-imperial",
      name: "Sofá Imperial",
      category: "salas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/LEKKI BEIGE.jpg",
      featured: true,

      fabricIds: [
      "lekki-beige",
      "lekki-gris",
      "lekki-rosa",
      "lekki-taupe"
      ],

      fabricImages: {
      "lekki-beige": "/images/products/sofa-imperial/LEKKI BEIGE.jpg",
      "lekki-gris": "/images/products/sofa-imperial/LEKKI GRIS.jpg",
      "lekki-rosa": "/images/products/sofa-imperial/LEKKI ROSA.jpg",
      "lekki-taupe": "/images/products/sofa-imperial/LEKKI TAUPE.jpg",
      },
    },
    {
      id: "basecama-bubblecloud",
      name: "Base cama Bubble cloud",
      category: "base-camas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PRADERA NEGRO.jpg",
      featured: true,

      fabricIds: [
      "pradera-indigo",
      "pradera-carbon",
      "pradera-negro",
      "pradera-camel",
      ],

      fabricImages: {
      "pradera-indigo": "/images/products/basecama-bubblecloud/PRADERA ÍNDIGO.jpg",
      "pradera-carbon": "/images/products/basecama-bubblecloud/PRADERA CARBÓN.jpg",
      "pradera-negro": "/images/products/basecama-bubblecloud/PRADERA NEGRO.jpg",
      "pradera-camel": "/images/products/basecama-bubblecloud/PRADERA CAMEL.jpg",
      },
    }, 
    {
      id: "poltrona-bunny",
      name: "Poltrona Bunny",
      category: "poltronas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PASCAL CORAL.png",
      featured: true,

      fabricIds: [
      "pascal-coral",
      "pascal-azul",
      "colban-beige",
      "pascal-gris",
      ],

      fabricImages: {
      "pascal-coral": "/images/products/poltrona-bunny/PASCAL CORAL.png",
      "pascal-azul": "/images/products/poltrona-bunny/PASCAL AZUL.png",
      "colban-beige": "/images/products/poltrona-bunny/COLBAN BEIGE.png",
      "pascal-gris": "/images/products/poltrona-bunny/PASCAL GRIS.png",
      },
    },
    {
      id: "cabecero-milano",
      name: "Cabecero Milano",
      category: "cabeceros",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/MONET PLUS TAUPE.jpg",
      featured: true,

      fabricIds: [
      "monetplus-cocoa",
      "monetplus-rosaviejo",
      "monetplus-taupe",
      "monetplus-indigo",
      ],

      fabricImages: {
      "monetplus-cocoa": "/images/products/cabecero-milano/MONET PLUS COCOA.jpg",
      "monetplus-rosaviejo": "/images/products/cabecero-milano/MONET PLUS ROSA VIEJO.jpg",
      "monetplus-taupe": "/images/products/cabecero-milano/MONET PLUS TAUPE.jpg",
      "monetplus-indigo": "/images/products/cabecero-milano/MONET PLUS ÍNDIGO.jpg",
      },
    },  
];