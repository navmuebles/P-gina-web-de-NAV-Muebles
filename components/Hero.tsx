import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Imagen del producto */}
      <div className="absolute inset-0">
        <Image
          src="/images/products/pagina-principal.jpg"
          alt="Sofá Cama Prestige de NAV Muebles"
          fill
          priority
          className="object-contain object-center lg:object-right"
        />
      </div>

      {/* Degradado para mejorar la lectura del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-10">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#B8941F]">
            NAV Muebles
          </p>

          <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Diseño que inspira.
            <br />
            <span className="text-[#B8941F]">Calidad que perdura.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
            Muebles diseñados para transformar tus espacios, con calidad,
            estilo y opciones de personalización pensadas para ti.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#colecciones"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#B8941F] hover:text-white"
            >
              Ver colecciones
            </a>

            <a
              href="https://wa.me/573181093004"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#B8941F] hover:text-[#B8941F]"
            >
              Solicitar cotización
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B8941F]" />

            <span className="text-xs uppercase tracking-[0.25em] text-white/50">
              Sofá Cama Prestige
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}