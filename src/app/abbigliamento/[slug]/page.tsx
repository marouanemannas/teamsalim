import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductPage } from "@/components/ProductPage";

interface ProductPageRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) return {};

  return {
    title: `${product.name} — Team Salim`,
    description: product.description,
  };
}

export default async function ProductRoute({ params }: ProductPageRouteProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) notFound();

  return <ProductPage product={product} />;
}
