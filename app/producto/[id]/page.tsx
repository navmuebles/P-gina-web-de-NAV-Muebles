"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { products } from "@/data/products";
import FabricSelector from "@/components/FabricSelector";
import { fabrics } from "@/data/fabrics";
import WoodSelector from "@/components/Woodselector";
import { woods } from "@/data/woods";

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
  const productWoods = woods.filter((wood) =>
    product?.woodIds?.includes(wood.id)
  );

  const [selectedFabricId, setSelectedFabricId] = useState(
  productFabrics[0]?.id
  )
  const [selectedWoodId, setSelectedWoodId] = useState(
  productWoods[0]?.id
  );
  
  if (!product) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-white">
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
  const selectedProductImage =
    product.woodImages?.[selectedWoodId ?? ""] ??
    product.fabricImages?.[selectedFabricId ?? ""] ??
    product.image;
  
    return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10">
        <Link
          href={`/catalogo/${product.category}`}
          className="text-sm text-white/50 transition-colors hover:text-[#B8941F]"
        >
          ← Volver a {product.category.replaceAll("-", " ")}
        </Link>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Imagen */}
          <div className="relative aspect-[1.08/1] overflow-hidden rounded-3xl bg-white">
          <Image
            src={selectedProductImage}
            alt={product.name}
            fill
            priority
            className="object-contain p-2 transition-transform duration-700 hover:scale-105"
            />
          </div>


          {/* Información */}
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#B8941F]">
              NAV Muebles
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {product.name}
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/55">
            {product.description}
            </p>
            <div className="mt-8 h-px w-full bg-white/15" />

           
            {/* Personalización */}
            <FabricSelector
              fabrics={productFabrics}
              productName={product.name}
              productId={product.id}
              selectedFabricId={selectedFabricId}
              onSelect={(fabric) => setSelectedFabricId(fabric.id)}
            />
            <WoodSelector
              woods={productWoods}
              productName={product.name}
              productId={product.id}
              selectedWoodId={selectedWoodId}
              onSelect={(wood) => setSelectedWoodId(wood.id)}
            />
            
          </div>
        </div>
      </section>
    </main>
  );
}