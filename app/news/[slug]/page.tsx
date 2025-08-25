import { Suspense } from "react";
import type { Metadata } from "next";
import NewsDetail from "@/app/suspense/news/slug/news-slug-suspense";
import LoadingSpinner from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Lawu Digital - Solusi Digitalmu",
  description: "Mempermudah solusi digitalmu",
};

type SlugParams = { slug: string };

export default async function NewsDetailPage({params}: { params: Promise<SlugParams>; }) {
  const resolved = await params; 
  return (
    <Suspense
      fallback={
        <div>
          <LoadingSpinner loadingText="Loading detail berita..." />
        </div>
      }
    >
      <NewsDetail params={resolved} />
    </Suspense>
  );
}
