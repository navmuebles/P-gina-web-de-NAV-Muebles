import Link from "next/link";

const categories = [
  {
    name: "Base camas",
    slug: "base-camas",
  },
  {
    name: "Butacas",
    slug: "butacas",
  },
  {
    name: "Cabeceros",
    slug: "cabeceros",
  },
  {
    name: "Cojines",
    slug: "cojines",
  },
  {
    name: "Comedores",
    slug: "comedores",
  },
  {
    name: "Escritorios",
    slug: "escritorios",
  },
  {
    name: "Mecedoras",
    slug: "mecedoras",
  },
  {
    name: "Poltronas",
    slug: "poltronas",
  },
  {
    name: "Puffs",
    slug: "puffs",
  },
  {
    name: "Salas",
    slug: "salas",
  },
  {
    name: "Sillas de escritorio",
    slug: "sillas-de-escritorio",
  },
  {
    name: "Taburetes",
    slug: "taburetes",
  },
  {
    name: "Categoría infantil",
    slug: "categoria-infantil",
  },
  {
    name: "Telas",
    slug: "telas",
  },
];

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#B8941F]">
            NAV Muebles
          </p>

          <h1 className="text-5xl font-medium tracking-tight text-black sm:text-6xl">
            Nuestras colecciones
          </h1>

          <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
            Explora nuestras categorías y encuentra el diseño ideal para tu
            espacio. Todos nuestros productos se manejan bajo cotización.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/catalogo/${category.slug}`}
              className="group flex min-h-44 items-end rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8941F] hover:shadow-xl"
            >
              <div>
                <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#B8941F]">
                  Colección
                </span>

                <h2 className="text-2xl font-medium text-black transition-colors group-hover:text-[#B8941F]">
                  {category.name}
                </h2>

                <span className="mt-4 block text-sm text-black/40 transition-colors group-hover:text-black">
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