import { Suspense } from "react";
import NewsDetail from "@/app/suspense/news/slug/news-slug-suspense";
import LoadingSpinner from "../../components/LoadingSpinner";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function NewsDetailPage({ params }: PageProps ) {
  return (
    <Suspense fallback={<LoadingSpinner loadingText="Loading detail berita..." />}>
      <NewsDetail params={params} />
    </Suspense>
  );
}
