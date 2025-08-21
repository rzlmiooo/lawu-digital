import React from 'react';
import { notFound } from 'next/navigation';
import { getProjectById, getProjectsData } from '@/app/api/projects/projects';
import { Project } from '@/app/interfaces/project-interface';
import NavbarDark from '@/app/components/dark/Navbar';
import Footer from '@/app/components/Footer';
import ProjectDetailsClientWrapper from '@/app/components/projects/ProjectDetailsClientWrapper';

export async function generateStaticParams() {
  const projects = await getProjectsData();
  return projects.map((project) => ({ id: project.id }));
}

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project: Project | undefined = await getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <NavbarDark />
      <main>
        <ProjectDetailsClientWrapper project={project} />
      </main>
      <Footer />
    </div>
  );
}
