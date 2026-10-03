export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  fabricIds?: string[];
  fabricImages?: Record<string, string>;
  woodIds?: string[];
  woodImages?: Record<string, string>;
};


export const products: Product[] = [
  {
    id: "-prestige",
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
      name: "Sofá Cama serenity",
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
      name: "Sofá Cama Imperial",
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
    {
      id: "poltrona-michi",
      name: "Poltrona Michi",
      category: "poltronas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/COLBAN MARFIL.jpg",
      featured: true,

      fabricIds: [
      "colban-azul",
      "colban-camel",
      "colban-coral",
      "colban-marfil",
      ],

      fabricImages: {
      "colban-azul": "/images/products/poltrona-michi/PASCAL AZUL.jpg",
      "colban-camel": "/images/products/poltrona-michi/COLBAN CAMEL.jpg",
      "colban-coral": "/images/products/poltrona-michi/PASCAL CORAL.jpg",
      "colban-marfil": "/images/products/poltrona-michi/COLBAN MARFIL.jpg",
      },
    },
    {
      id: "poltrona-giratoria",
      name: "Poltrona Giratoria",
      category: "poltronas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/MONET PLUS BLANCO.jpg",
      featured: true,

      fabricIds: [
      "colban-grafito",
      "colban-negro",
      "colban-plata",
      "monetplus-blanco",
      ],

      fabricImages: {
      "colban-grafito": "/images/products/poltrona-giratoria/COLBAN GRAFITO.jpg",
      "colban-negro": "/images/products/poltrona-giratoria/COLBAN NEGRO.jpg",
      "colban-plata": "/images/products/poltrona-giratoria/COLBAN PLATA.jpg",
      "monetplus-blanco": "/images/products/poltrona-giratoria/MONET PLUS BLANCO.jpg",
      },
    },
    {
      id: "poltrona-lounge",
      name: "Poltrona Lounge",
      category: "poltronas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/ABBY PLATA.jpg",
      featured: true,

      fabricIds: [
      "abby-plata",
      "abby-rosa",
      "abby-sand",
      "join22-azul",
      ],

      fabricImages: {
      "abby-plata": "/images/products/poltrona-lounge/ABBY PLATA.jpg",
      "abby-rosa": "/images/products/poltrona-lounge/ABBY ROSA.jpg",
      "abby-sand": "/images/products/poltrona-lounge/ABBY SAND.jpg",
      "join22-azul": "/images/products/poltrona-lounge/JOIN 22 AZUL.jpg",
      },
    },
    {
      id: "poltrona-rotondo",
      name: "Poltrona Rotoondo",
      category: "poltronas",
      description:
        "Sofá cama de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/ABBY CRUDO.jpg",
      featured: true,

      fabricIds: [
      "abby-beige",
      "abby-crudo",
      "join17-nuvo",
      "join47-taupe",
      ],

      fabricImages: {
      "abby-beige": "/images/products/poltrona-rotondo/ABBY BEIGE.jpg",
      "abby-crudo": "/images/products/poltrona-rotondo/ABBY CRUDO.jpg",
      "join17-nuvo": "/images/products/poltrona-rotondo/JOIN 17 NUVO.jpg",
      "join47-taupe": "/images/products/poltrona-rotondo/JOIN 47 TAUPE.jpg",
      },
    },
    {
      id: "cabecero-velvet",
      name: "Cabecero Velvet",
      category: "cabeceros",
      description:
        "Cabecero de diseño contemporáneo, pensado para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/JOIN 00 BLANCO.jpg",
      featured: true,

      fabricIds: [
      "join00-blanco",
      "join02-sand",
      "join21-rosy",
      "join52-carbon",
      ],

      fabricImages: {
      "join00-blanco": "/images/products/cabecero-velvet/JOIN 00 BLANCO.jpg",
      "join02-sand": "/images/products/cabecero-velvet/JOIN 02 SAND.jpg",
      "join21-rosy": "/images/products/cabecero-velvet/JOIN 21 ROSY.jpg",
      "join52-carbon": "/images/products/cabecero-velvet/JOIN 52 CARBóN.jpg",
      },
    },
    {
      id: "butaca-teddy",
      name: "Butacas Teddy",
      category: "butacas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/JOIN 10 GRIS.jpg",
      featured: true,

      fabricIds: [
      "join10-gris",
      "join12-grafito",
      "metro-negro",
      "metro-taupe",
      ],

      fabricImages: {
      "join10-gris": "/images/products/butaca-teddy/JOIN 10 GRIS.jpg",
      "join12-grafito": "/images/products/butaca-teddy/JOIN 12 GRAFITO.jpg",
      "metro-negro": "/images/products/butaca-teddy/METRO NEGRO.jpg",
      "metro-taupe": "/images/products/butaca-teddy/METRO TAUPE.jpg",
      },
    },
    {
      id: "comedor-nordic",
      name: "Comedor Nordic",
      category: "comedores",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/METRO MARFIL.jpg",
      featured: true,

      fabricIds: [
      "metro-aqua",
      "metro-camel",
      "metro-hielo",
      "metro-marfil",
      ],

      fabricImages: {
      "metro-aqua": "/images/products/comedor-nordic/METRO AQUA.jpg",
      "metro-camel": "/images/products/comedor-nordic/METRO CAMEL.jpg",
      "metro-hielo": "/images/products/comedor-nordic/METRO HIELO.jpg",
      "metro-marfil": "/images/products/comedor-nordic/METRO MARFIL.jpg",
      },
    },
    {
      id: "sofa-oasis",
      name: "Sofá Oasis",
      category: "salas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PRADERA CRUDO.jpg",
      featured: true,

      fabricIds: [
      "pradera-arcilla",
      "pradera-chocolate",
      "pradera-verde",
      "pradera-crudo",
      ],

      fabricImages: {
      "pradera-arcilla": "/images/products/sofa-oasis/PRADERA ARCILLA.jpg",
      "pradera-chocolate": "/images/products/sofa-oasis/PRADERA CHOCOLATE.jpg",
      "pradera-verde": "/images/products/sofa-oasis/PRADERA VERDE.jpg",
      "pradera-crudo": "/images/products/sofa-oasis/PRADERA CRUDO.jpg",
      },
    },
    {
      id: "poltrona-baby-panda",
      name: "Poltrona Baby Panda",
      category: "poltronas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PRADERA ARENA.jpg",
      featured: true,

      fabricIds: [
      "pradera-arena",
      "sensei-rojo",
      "pradera-aluminio",
      "pradera-plata"
      ],

      fabricImages: {
      "pradera-aluminio": "/images/products/poltrona-baby-panda/PRADERA ALUMINIO.jpg",
      "pradera-arena": "/images/products/poltrona-baby-panda/PRADERA ARENA.jpg",
      "pradera-plata": "/images/products/poltrona-baby-panda/PRADERA PLATA.jpg",
      "sensei-rojo": "/images/products/poltrona-baby-panda/SENSEI ROJO.jpg",
      },
    },
    {
      id: "sofa-lounge",
      name: "Sofá Lounge",
      category: "salas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/PRADERA MARFIL.jpg",
      featured: true,

      fabricIds: [
      "pradera-marfil",
      "sensei-gris",
      "sensei-negro",
      "sensei-palorosa"
      ],

      fabricImages: {
      "pradera-marfil": "/images/products/sofa-lounge/PRADERA MARFIL.jpg",
      "sensei-gris": "/images/products/sofa-lounge/SENSEI GRIS.jpg",
      "sensei-negro": "/images/products/sofa-lounge/SENSEI NEGRO.jpg",
      "sensei-palorosa": "/images/products/sofa-lounge/SENSEI PALO ROSA.jpg",
      },
    },
    {
      id: "basecama-secreto",
      name: "Basecama Secreto",
      category: "base-camas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/SENSEI MARFIL.jpg",
      featured: true,

      fabricIds: [
      "sensei-marfil",
      "sensei-camel",
      "sensei-cocoa",
      "sensei-beige"
      ],

      fabricImages: {
      "sensei-marfil": "/images/products/basecama-secreto/SENSEI MARFIL.jpg",
      "sensei-camel": "/images/products/basecama-secreto/SENSEI CAMEL.jpg",
      "sensei-cocoa": "/images/products/basecama-secreto/SENSEI COCOA.jpg",
      "sensei-beige": "/images/products/basecama-secreto/SENSEI BEIGE.jpg",
      },
    },
    {
      id: "poltrona-mufasa",
      name: "Poltrona Mufasa",
      category: "poltronas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/EGO MARFIL.jpg",
      featured: true,

      fabricIds: [
      "ego-marfil",
      "ego-beige",
      "ego-almendra",
      "gema-negro"
      ],

      fabricImages: {
      "ego-marfil": "/images/products/poltrona-mufasa/EGO MARFIL.jpg",
      "ego-beige": "/images/products/poltrona-mufasa/EGO BEIGE.jpg",
      "ego-almendra": "/images/products/poltrona-mufasa/EGO ALMENDRA.jpg",
      "gema-negro": "/images/products/poltrona-mufasa/GEMA NEGRO.jpg",
      },
    },
    {
      id: "sofa-versalles",
      name: "Sofá Cama Versalles",
      category: "salas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/EGO PLATA.jpg",
      featured: true,

      fabricIds: [
      "ego-aluminio",
      "ego-rosa",
      "ego-plata",
      "ego-taupe"
      ],

      fabricImages: {
      "ego-aluminio": "/images/products/sofa-versalles/EGO ALUMINIO.jpg",
      "ego-rosa": "/images/products/sofa-versalles/EGO ROSA.jpg",
      "ego-plata": "/images/products/sofa-versalles/EGO PLATA.jpg",
      "ego-taupe": "/images/products/sofa-versalles/EGO TAUPE.jpg",
      },
    },
    {
      id: "sofa-bellagio",
      name: "Sofá Bellagio",
      category: "salas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/SUSSY HOME 1700.jpg",
      featured: true,

      fabricIds: [
      "ego-gris",
      "ego-verde",
      "sussyhome-1700",
      "sussyhome-1630"
      ],

      fabricImages: {
      "ego-gris": "/images/products/sofa-bellagio/EGO GRIS.jpg",
      "ego-verde": "/images/products/sofa-bellagio/EGO VERDE.jpg",
      "sussyhome-1700": "/images/products/sofa-bellagio/SUSSY HOME 1700.jpg",
      "sussyhome-1630": "/images/products/sofa-bellagio/SUSSY HOME 1630.jpg",
      },
    },
    {
      id: "poltrona-tulipan",
      name: "Poltrona Tulipán",
      category: "poltronas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/SUSSY HOME 1650.jpg",
      featured: true,

      fabricIds: [
      "sussyhome-1620",
      "sussyhome-1650",
      "sussyhome-7350",
      "sussyhome-9600"
      ],

      fabricImages: {
      "sussyhome-1620": "/images/products/poltrona-tulipan/SUSSY HOME 1620.jpg",
      "sussyhome-1650": "/images/products/poltrona-tulipan/SUSSY HOME 1650.jpg",
      "sussyhome-7350": "/images/products/poltrona-tulipan/SUSSY HOME 7350.jpg",
      "sussyhome-9600": "/images/products/poltrona-tulipan/SUSSY HOME 9600.jpg",
      },
    },
    {
      id: "sofa-chesterfield",
      name: "Sofá Chesterfield",
      category: "salas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/CRACK MARFIL.jpg",
      featured: true,

      fabricIds: [
      "sussyhome-0020",
      "sussyhome-0060",
      "crack-marfil",
      "crack-beige"
      ],

      fabricImages: {
      "sussyhome-0020": "/images/products/sofa-chesterfield/SUSSY HOME 0020.jpg",
      "sussyhome-0060": "/images/products/sofa-chesterfield/SUSSY HOME 0060.jpg",
      "crack-marfil": "/images/products/sofa-chesterfield/CRACK MARFIL.jpg",
      "crack-beige": "/images/products/sofa-chesterfield/CRACK BEIGE.jpg",
      },
    },
    {
      id: "sofacama-urban",
      name: "Sofá Cama Urban",
      category: "salas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/CRACK INDIGO.jpg",
      featured: true,

      fabricIds: [
      "crack-camel",
      "crack-cocoa",
      "crack-indigo",
      "crack-palorosa"
      ],

      fabricImages: {
      "crack-camel": "/images/products/sofa-urban/CRACK CAMEL.jpg",
      "crack-cocoa": "/images/products/sofa-urban/CRACK COCOA.jpg",
      "crack-indigo": "/images/products/sofa-urban/CRACK INDIGO.jpg",
      "crack-palorosa": "/images/products/sofa-urban/CRACK PALO ROSA.jpg",
      },
    },
    {
      id: "poltrona-trompa",
      name: "Poltrona Trompa",
      category: "poltronas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/CRACK PLATA.png",
      featured: true,

      fabricIds: [
      "crack-aluminio",
      "crack-carbon",
      "crack-plata",
      "gema-hielo"
      ],

      fabricImages: {
      "crack-aluminio": "/images/products/poltrona-trompa/CRACK ALUMINIO.png",
      "crack-carbon": "/images/products/poltrona-trompa/CRACK CARBON.png",
      "crack-plata": "/images/products/poltrona-trompa/CRACK PLATA.png",
      "gema-hielo": "/images/products/poltrona-trompa/GEMAHIELO.png",
      },
    },
    {
      id: "poltrona-curve",
      name: "Poltrona Curve",
      category: "poltronas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/MONUMENTAL SAND.png",
      featured: true,

      fabricIds: [
      "monumental-beige",
      "monumental-jade",
      "monumental-rosa",
      "monumental-sand",
      ],

      fabricImages: {
      "monumental-beige": "/images/products/poltrona-curve/MONUMENTAL BEIGE.png",
      "monumental-jade": "/images/products/poltrona-curve/MONUMENTAL JADE.png",
      "monumental-rosa": "/images/products/poltrona-curve/MONUMENTAL ROSA.png",
      "monumental-sand": "/images/products/poltrona-curve/MONUMENTAL SAND.png",
      },
    },
    {
      id: "poltrona-orbit",
      name: "Poltrona Orbit",
      category: "poltronas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/MONUMENTALHIELO.png",
      featured: true,

      fabricIds: [
      "monumental-hielo",
      "monumental-negro",
      "monumental-plata",
      "monumental-plomo",
      ],

      fabricImages: {
      "monumental-hielo": "/images/products/poltrona-orbit/MONUMENTALHIELO.png",
      "monumental-negro": "/images/products/poltrona-orbit/MONUMENTAL NEGRO.png",
      "monumental-plata": "/images/products/poltrona-orbit/MONUMENTAL PLATA.png",
      "monumental-plomo": "/images/products/poltrona-orbit/MONUMENTAL PLOMO.png",
      },
    },
    {
      id: "puff-velvet",
      name: "Puff Velvet",
      category: "puffs",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/VESPA BLANCO.png",
      featured: true,

      fabricIds: [
      "monumental-petroleo",
      "vespa-arena",
      "vespa-blanco",
      "vespa-crudo",
      ],

      fabricImages: {
      "monumental-petroleo": "/images/products/puff-velvet/MONUMENTAL PETROLEO.png",
      "vespa-arena": "/images/products/puff-velvet/VESPA ARENA.png",
      "vespa-blanco": "/images/products/puff-velvet/VESPA BLANCO.png",
      "vespa-crudo": "/images/products/puff-velvet/VESPA CRUDO.png",
      },
    },
    {
      id: "sofa-petite",
      name: "Sofa Petite",
      category: "salas",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/DORSET CREMA.png",
      featured: true,

      fabricIds: [
      "dorset-crema",
      "vespa-gris",
      "vespa-nuez",
      "vespa-plata",
      ],

      fabricImages: {
      "dorset-crema": "/images/products/sofa-petite/DORSET CREMA.png",
      "vespa-gris": "/images/products/sofa-petite/VESPA GRIS.png",
      "vespa-nuez": "/images/products/sofa-petite/VESPA NUEZ.png",
      "vespa-plata": "/images/products/sofa-petite/VESPA PLATA.png",
      },
    },
    {
      id: "silla-chrome",
      name: "Silla Chrome",
      category: "sillas-de-escritorio",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/LUCERO CRUDO.png",
      featured: true,

      fabricIds: [
      "lucero-crudo",
      "lucero-sand",
      "lucero-taupe",
      "zagori-humo",
      ],

      fabricImages: {
      "lucero-crudo": "/images/products/silla-chrome/LUCERO CRUDO.png",
      "lucero-sand": "/images/products/silla-chrome/LUCERO SAND.png",
      "lucero-taupe": "/images/products/silla-chrome/LUCERO TAUPE.png",
      "zagori-humo": "/images/products/silla-chrome/ZAGORI 904 HUMO.png",
      },
    },
    {
      id: "comedor-zenit",
      name: "Comedro Zenit",
      category: "comedores",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/ZAGORI PLATA.png",
      featured: true,

      fabricIds: [
      "zagori-azul",
      "zagori-nuez",
      "zagori-plata",
      "zagori-orquidea",
      ],

      fabricImages: {
      "zagori-azul": "/images/products/comedor-zenit/ZAGORI AZUL.png",
      "zagori-nuez": "/images/products/comedor-zenit/ZAGORI NUEZ.png",
      "zagori-plata": "/images/products/comedor-zenit/ZAGORI PLATA.png",
      "zagori-orquidea": "/images/products/comedor-zenit/ZAGORI ORQUIDEA.png",
      },
    },
    {
      id: "escritorio-atenas",
      name: "Escritorio Atenas",
      category: "escritorios",
      description:
        "Butacas de diseño contemporáneo, pensadas para brindar comodidad, funcionalidad y estilo a tus espacios.",
      image: "/images/products/ESCRITORIO ATENAS.png",
      featured: true,

      woodIds: [
      "madera-escritorios",
      ],

      woodImages: {
      "madera-escritorios": "/images/products/ESCRITORIO ATENAS.png",
      },
    },
];