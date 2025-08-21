import Navbar from '@/app/components/light/Navbar';
import Footer from '@/app/components/Footer';
import HeroProjects from '@/app/components/projects/HeroProjects';
import FilterBar from '@/app/components/projects/FilterBar';
import ProjectGrid from '@/app/components/projects/ProjectGrid';
import { getProjectsData } from '@/app/api/projects/projects';

export default async function ProjectsPage() {
  const projectsData = await getProjectsData();

  if (!projectsData || projectsData.length === 0) {
    return (
      <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col justify-center items-center">
        <Navbar />
        <main className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">No projects found.</h1>
          <p className="mt-2 text-gray-600">Please check back later!</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <HeroProjects title="Digitalisasi" subtitle="Transformasi digital dengan mudah." />
        <FilterBar />
        <ProjectGrid projects={projectsData} />
      </main>
      <Footer />
    </div>
  );
}