import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { news } from "@/data/news";
import { NewsArticlePage } from "@/components/NewsArticlePage";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} — Team Salim`,
    description: article.excerpt,
  };
}

export default async function NewsArticleRoute({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) notFound();

  return <NewsArticlePage article={article} />;
}
