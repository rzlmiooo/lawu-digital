// components/projects/ProjectGrid.tsx
'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '@/app/interfaces/project-interface';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex justify-center items-center text-gray-500 py-12">
        <p>No projects to display.</p>
      </div>
    );
  }

  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id} 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
}
