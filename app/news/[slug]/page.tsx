// app/news/[slug]/page.tsx
import { Suspense } from "react";
import NewsDetail from "@/app/suspense/news/slug/news-slug-suspense";
import LoadingSpinner from "../../components/LoadingSpinner";

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Suspense fallback={<LoadingSpinner loadingText="Loading detail berita..." />}>
      <NewsDetail params={params} />
    </Suspense>
  );
}
