import { Suspense } from "react";
import type { Metadata } from "next";
import NewsListPage from "../suspense/news/news-list-suspense";
import LoadingSpinner from "../components/LoadingSpinner";

export const metadata: Metadata = {
    title: "Lawu Digital - Solusi Digitalmu",
    description: "Mempermudah solusi digitalmu",
};

export default function MainNewsPage() {
  return (
    <Suspense fallback={
      <div>
        <LoadingSpinner loadingText="Loading berita..."/>
      </div>
    }>
        <NewsListPage/>
    </Suspense>
  );
}