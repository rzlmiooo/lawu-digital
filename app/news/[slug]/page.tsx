import { Suspense } from "react";
import type { Metadata } from "next";
import NewsDetail from "@/app/suspense/news/slug/news-slug-suspense";
import LoadingSpinner from "../../components/LoadingSpinner";
import { News } from "@/app/interfaces/news-interface";

export const metadata: Metadata = {
    title: "Lawu Digital - Solusi Digitalmu",
    description: "Mempermudah solusi digitalmu",
};

interface NewsDetailPageParams {
  params: News
}

export default function NewsDetailPage({ params }: NewsDetailPageParams) {
  return (
    <Suspense fallback={
      <div>
        <LoadingSpinner loadingText="Loading detail berita..."/>
      </div>
    }>
        <NewsDetail params={params} />
    </Suspense>
  );
}