import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const categories = [
  {
    name: "Base camas",
    slug: "base-camas",
    image: "",
  },
  {
    name: "Butacas",
    slug: "butacas",
    image: "",
  },
  {
    name: "Cabeceros",
    slug: "cabeceros",
    image: "",
  },
  {
    name: "Cojines",
    slug: "cojines",
    image: "",
  },
  {
    name: "Comedores",
    slug: "comedores",
    image: "",
  },
  {
    name: "Escritorios",
    slug: "escritorios",
    image: "",
  },
  {
    name: "Mecedoras",
    slug: "mecedoras",
    image: "",
  },
  {
    name: "Poltronas",
    slug: "poltronas",
    image: "",
  },
  {
    name: "Puffs",
    slug: "puffs",
    image: "",
  },
  {
    name: "Salas",
    slug: "salas",
    image: "/images/products/vista-catalogo.png",
  },
  {
    name: "Sillas de escritorio",
    slug: "sillas-de-escritorio",
    image: "",
  },
  {
    name: "Taburetes",
    slug: "taburetes",
    image: "",
  },
  {
    name: "Categoría infantil",
    slug: "categoria-infantil",
    image: "",
  },
  {
    name: "Telas",
    slug: "telas",
    image: "",
  },
];

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#B8941F]">
            NAV Muebles
          </p>

          <h1 className="text-5xl font-medium tracking-tight text-white sm:text-6xl">
            Nuestras colecciones
          </h1>

          <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
            Explora nuestras categorías y encuentra el diseño ideal para tu
            espacio. Todos nuestros productos se manejan bajo cotización.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/catalogo/${category.slug}`}
              className="group relative flex min-h-80 overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8941F] hover:shadow-xl"
            >
              {/* Imagen de la colección */}
              {category.image && (
                <div className="absolute right-0 top-0 h-full w-2/2 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain object-right transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/50 to-transparent" />
                </div>
              )}

              {/* Información */}
              <div className="relative z-10 max-w-[55%]">
                <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#B8941F]">
                  Colección
                </span>

                <h2 className="text-2xl font-medium text-white transition-colors group-hover:text-[#B8941F]">
                  {category.name}
                </h2>

                <span className="mt-4 block text-sm text-white/40 transition-colors group-hover:text-white">
                  Ver colección →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}