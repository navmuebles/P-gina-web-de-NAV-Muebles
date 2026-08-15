import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const categoryName = category
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10">
        <div className="mb-12">
          <Link
            href="/catalogo"
            className="text-sm text-black/50 transition-colors hover:text-[#B8941F]"
          >
            ← Volver al catálogo
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#B8941F]">
            Colección
          </p>

          <h1 className="mt-3 text-5xl font-medium capitalize tracking-tight text-black sm:text-6xl">
            {categoryName}
          </h1>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="rounded-3xl border border-black/10 bg-white p-12 text-center">
            <h2 className="text-2xl font-medium text-black">
              Próximamente
            </h2>

            <p className="mx-auto mt-3 max-w-md text-black/50">
              Estamos preparando nuevos diseños para esta colección.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/producto/${product.id}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDEAE5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B8941F]">
                    {categoryName}
                  </p>

                  <h2 className="mt-2 text-2xl font-medium text-black">
                    {product.name}
                  </h2>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/50">
                    {product.description}
                  </p>

                  <span className="mt-5 block text-sm font-medium text-black transition-colors group-hover:text-[#B8941F]">
                    Ver producto →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}