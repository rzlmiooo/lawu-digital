import React from 'react';
import { Project } from '@/app/interfaces/project-interface';

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 rounded-lg shadow-inner">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-bold uppercase text-gray-500 mb-2">Client</h3>
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.client}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase text-gray-500 mb-2">Services</h3>
          <ul className="text-xl font-semibold text-gray-900 dark:text-gray-100 space-y-1">
            {project.services.map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase text-gray-500 mb-2">Date</h3>
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.date}</p>
        </div>
      </div>
    </section>
  );
}
