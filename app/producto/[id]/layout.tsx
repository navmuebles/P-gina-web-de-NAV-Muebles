import type { Metadata } from "next";
import { products } from "@/data/products";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return {
      title: "Producto no encontrado | NAV Muebles",
    };
  }

  return {
    title: `${product.name} | NAV Muebles`,
    description: product.description,

    openGraph: {
      title: `${product.name} | NAV Muebles`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${product.name} | NAV Muebles`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductLayout({ children }: Props) {
  return children;
}