"use client";

import Image from "next/image";
import type { Wood } from "@/data/woods";

type FabricSelectorProps = {
  woods: Wood[];
  productName: string;
  productId: string;
  selectedWoodId?: string;
  onSelect: (woods: Wood) => void;
};

export default function WoodSelector({
  woods,
  productName,
  productId,
  selectedWoodId,
  onSelect,
}: FabricSelectorProps) {
  if (!woods.length) {
    return null;
  }

  const selectedWood =
    woods.find((wood) => wood.id === selectedWoodId) ?? woods[0];

  const productUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/producto/${productId}`;

  const whatsappMessage = encodeURIComponent(
    `Hola, NAV Muebles.

Estoy interesado en el ${productName}.

Color: ${selectedWood.color}.

Quisiera solicitar una cotización.

Ver producto: ${productUrl}`
  );

  return (
    <div className="mt-10">
      <p className="text-xs uppercase tracking-[0.25em] text-[#B8941F]">
        Elige tu madera
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {woods.map((wood) => {
          const isSelected = wood.id === selectedWoodId;

          return (
            <button
              key={wood.id}
              type="button"
              onClick={() => onSelect(wood)}
              className={`overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 ${
                isSelected
                  ? "border-[#B8941F] ring-2 ring-[#B8941B]/20"
                  : "border-black/10 hover:border-black/30"
              }`}
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={wood.image}
                  alt={`${wood.color}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="px-2 py-2">
                <p className="text-xs font-medium text-[#B8941F]">
                  Color
                </p>

                <p className="mt-1 text-lg font-medium text-black">
                  {wood.color}
                </p>

              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl bg-[#F3EFE8] p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-[#B8941F]">
          Madera seleccionada
        </p>

        <p className="mt-1 text-sm text-black/60">
          Color: {selectedWood.color}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-center text-sm text-white/60">
          Precio disponible mediante cotización personalizada.
        </p>

        <a
          href={`https://wa.me/573181093004?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full rounded-full bg-[#B8941F] px-8 py-4 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#C9A52E]"
        >
          Solicitar cotización por WhatsApp
        </a>
      </div>
    </div>
  );
}