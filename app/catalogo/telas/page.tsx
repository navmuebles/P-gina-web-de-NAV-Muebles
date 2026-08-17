import Image from "next/image";
import Link from "next/link";
import { fabrics } from "@/data/fabrics";
import Navbar from "@/components/Navbar";

export default function FabricsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <Link
            href="/catalogo"
            className="text-sm text-white/50 transition-colors hover:text-[#B8941F]"
          >
            ← Volver al catálogo
          </Link>

          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#B8941F]">
            Personalización
          </p>

          <h1 className="mt-3 text-5xl font-medium tracking-tight text-white sm:text-6xl">
            Catálogo de telas
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Explora nuestra selección de telas, referencias y colores
            disponibles para personalizar tus muebles.
          </p>
        </div>

        {/* Catálogo */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {fabrics.map((fabric) => (
            <article
              key={fabric.id}
              className="group overflow-hidden rounded-3xl bg-[#111111] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative aspect-square overflow-hidden bg-[#181818]">
                <Image
                  src={fabric.image}
                  alt={`${fabric.brand} ${fabric.reference} ${fabric.color}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Información */}
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#B8941F]">
                  {fabric.brand}
                </p>

                <h2 className="mt-2 text-xl font-medium text-white">
                  {fabric.reference}
                </h2>

                <p className="mt-1 text-sm text-white/50">
                  Color: {fabric.color}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Información inferior */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B8941F]">
            Personaliza tu mueble
          </p>

          <h2 className="mt-3 text-2xl font-medium text-white sm:text-3xl">
            ¿Encontraste la tela que buscas?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Indícanos la referencia y el color de la tela que deseas junto con
            el nombre del mueble. Nuestro equipo podrá ayudarte con tu
            cotización personalizada.
          </p>

          <a
            href="https://wa.me/573181093004"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#B8941F] hover:text-white"
          >
            Solicitar cotización
          </a>
        </div>
      </section>
    </main>
  );
}