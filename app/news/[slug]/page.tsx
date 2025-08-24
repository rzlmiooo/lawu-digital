import { Suspense } from "react";
import NewsDetail from "@/app/suspense/news/slug/news-slug-suspense";
import LoadingSpinner from "../../components/LoadingSpinner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function NewsDetailPage({ params }: any ) {
  return (
    <Suspense fallback={<LoadingSpinner loadingText="Loading detail berita..." />}>
      <NewsDetail params={params} />
    </Suspense>
  );
}
