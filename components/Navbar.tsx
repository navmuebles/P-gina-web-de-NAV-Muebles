"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const categories = [
  "Base camas",
  "Butacas",
  "Cabeceros",
  "Cojines",
  "Comedores",
  "Escritorios",
  "Mecedoras",
  "Poltronas",
  "Puffs",
  "Salas",
  "Sillas de escritorio",
  "Taburetes",
  "Categoría infantil",
  "Telas",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/90 shadow-lg backdrop-blur-md"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-semibold tracking-widest text-white">
              NAV
            </span>

            <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
              muebles
            </span>
          </div>
        </Link>

        {/* Navegación escritorio */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm text-white transition-colors hover:text-[#D4AF37]"
          >
            Inicio
          </Link>

          <Link
            href="/nosotros"
            className="text-sm text-white transition-colors hover:text-[#D4AF37]"
          >
            Nosotros
          </Link>

          {/* Colecciones */}
          <div
            className="relative"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <Link
              href="/#colecciones"
              className="flex items-center gap-1 text-sm text-white transition-colors hover:text-[#D4AF37]"
            >
              Colecciones

              <span
                className={`text-xs transition-transform ${
                  collectionsOpen ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </Link>

            {/* Menú desplegable */}
            {collectionsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-1">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/catalogo/${category
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                        className="rounded-lg px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-[#D4AF37]"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/proyectos"
            className="text-sm text-white transition-colors hover:text-[#D4AF37]"
          >
            Proyectos
          </Link>

          <Link
            href="/contacto"
            className="text-sm text-white transition-colors hover:text-[#D4AF37]"
          >
            Contacto
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573181093004"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white"
          >
            Solicitar cotización
          </a>
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#D4AF37]"
            >
              Inicio
            </Link>

            <Link
              href="/nosotros"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#D4AF37]"
            >
              Nosotros
            </Link>

            <div className="border-t border-white/10 pt-4">
              <p className="mb-3 text-xs uppercase tracking-widest text-[#D4AF37]">
                Colecciones
              </p>

              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/catalogo/${category
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-white/80 hover:text-[#D4AF37]"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/proyectos"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#D4AF37]"
            >
              Proyectos
            </Link>

            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#D4AF37]"
            >
              Contacto
            </Link>

            <a
              href="https://wa.me/573181093004"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#D4AF37] px-6 py-3 text-center text-sm font-medium text-black"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      )}
    </header>
  );
}