"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { products } from "@/data/products";
import FabricSelector from "@/components/FabricSelector";
import { fabrics } from "@/data/fabrics";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProductPage({ params }: Props) {
  const { id } = use(params);

  const product = products.find((item) => item.id === id);

  const productFabrics = fabrics.filter((fabric) =>
    product?.fabricIds?.includes(fabric.id)
  );

  const [selectedFabricId, setSelectedFabricId] = useState(
    productFabrics[0]?.id
  );
    const selectedFabric = productFabrics.find(
      (fabric) => fabric.id === selectedFabricId
  );


  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8F7F4]">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-black">
              Producto no encontrado
            </h1>

            <Link
              href="/catalogo"
              className="mt-6 inline-block text-sm text-[#B8941F]"
            >
              ← Volver al catálogo
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10">
        <Link
          href={`/catalogo/${product.category}`}
          className="text-sm text-black/50 transition-colors hover:text-[#B8941F]"
        >
          ← Volver a {product.category.replaceAll("-", " ")}
        </Link>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Imagen */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-6 transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Información */}
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#B8941F]">
              NAV Muebles
            </p>

            <h1 className="mt-4 text-5xl font-medium tracking-tight text-black sm:text-6xl">
              {product.name}
            </h1>

            <div className="mt-8 h-px w-full bg-black/10" />

            <p className="mt-8 text-base leading-8 text-black/60 sm:text-lg">
              {product.description}
            </p>

            {/* Personalización */}
            <FabricSelector
              fabrics={fabrics.filter((fabric) =>
                product.fabricIds?.includes(fabric.id)
              )}
              productName={product.name}
              productId={product.id}
            />
            
          </div>
        </div>
      </section>
    </main>
  );
}