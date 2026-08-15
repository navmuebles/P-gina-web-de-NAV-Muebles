"use client";

import Image from "next/image";
import type { Fabric } from "@/data/fabrics";
import { useState } from "react";

type FabricSelectorProps = {
  fabrics: Fabric[];
  productName: string;
  productId: string;
};

export default function FabricSelector({
  fabrics,
  productName,
  productId,
}: FabricSelectorProps) {
  const [selectedFabricId, setSelectedFabricId] = useState(
    fabrics[0]?.id ?? ""
  );

  if (!fabrics.length) {
    return null;
  }

  const selectedFabric =
    fabrics.find((fabric) => fabric.id === selectedFabricId) ?? fabrics[0];

  const productUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/producto/${productId}`;

const whatsappMessage = encodeURIComponent(
  `Hola, NAV Muebles.

Estoy interesado en el ${productName}.

Tela: ${selectedFabric.brand} · ${selectedFabric.reference}
Color: ${selectedFabric.color}.

Quisiera solicitar una cotización.

Ver producto: ${productUrl}`
);

  return (
    <div className="mt-10">
      <p className="text-xs uppercase tracking-[0.25em] text-[#B8941F]">
        Elige tu tela
      </p>

      <h2 className="mt-2 text-2xl font-medium text-black">
        Personaliza tu {productName}
      </h2>

      <p className="mt-3 text-sm leading-6 text-black/50">
        Selecciona una de nuestras telas disponibles.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {fabrics.map((fabric) => {
          const isSelected = fabric.id === selectedFabricId;

          return (
            <button
              key={fabric.id}
              type="button"
              onClick={() => setSelectedFabricId(fabric.id)}
              className={`overflow-hidden rounded-2xl border text-left transition-all ${
                isSelected
                  ? "border-[#B8941F] ring-2 ring-[#B8941F]/20"
                  : "border-black/10 hover:border-black/30"
              }`}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={fabric.image}
                  alt={`${fabric.reference} ${fabric.color}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3">
                <p className="text-xs uppercase tracking-wider text-[#B8941F]">
                  {fabric.brand}
                </p>

                <p className="mt-1 text-sm font-medium text-black">
                  {fabric.reference}
                </p>

                <p className="text-sm text-black/50">
                  {fabric.color}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl bg-[#F3EFE8] p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-[#B8941F]">
          Tela seleccionada
        </p>

        <p className="mt-2 text-lg font-medium text-black">
          {selectedFabric.brand} · {selectedFabric.reference}
        </p>

        <p className="mt-1 text-sm text-black/60">
          Color: {selectedFabric.color}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-sm text-black/40">
          Precio disponible mediante cotización personalizada.
        </p>

        <a
          href={`https://wa.me/573181093004?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full rounded-full bg-black px-8 py-4 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#B8941F]"
        >
          Solicitar cotización por WhatsApp
        </a>
      </div>
    </div>
  );
}