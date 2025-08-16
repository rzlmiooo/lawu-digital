import { Suspense } from "react";
import type { Metadata } from "next";
import ProjectDetailPage from "@/app/suspense/projects/id/projects-detail-suspense";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export const metadata: Metadata = {
    title: "Lawu Digital - Solusi Digitalmu",
    description: "Mempermudah solusi digitalmu",
};

export default function ProjectsDetailPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={
      <div>
        <LoadingSpinner loadingText="Loading projects..."/>
      </div>
    }>
        <ProjectDetailPage params={params}/>
    </Suspense>
  );
}