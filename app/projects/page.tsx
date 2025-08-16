import { Suspense } from "react";
import type { Metadata } from "next";
import ProjectsPage from "../suspense/projects/main-projects-suspense";
import LoadingSpinner from "../components/LoadingSpinner";

export const metadata: Metadata = {
    title: "Lawu Digital - Solusi Digitalmu",
    description: "Mempermudah solusi digitalmu",
};

export default function MainProjectsPage() {
  return (
    <Suspense fallback={
      <div>
        <LoadingSpinner loadingText="Loading projects..."/>
      </div>
    }>
        <ProjectsPage/>
    </Suspense>
  );
}