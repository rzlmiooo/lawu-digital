'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/app/interfaces/project-interface';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} passHref>
      <motion.div
        className="flex flex-col h-full cursor-pointer group"
        whileHover={{ scale: 1.03 }} 
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md transition-transform duration-300">
          <motion.div layoutId={`project-image-${project.id}`}>
            <Image
              src={project.heroImage.trim()}
              alt={project.title}
              fill
              className="transition-opacity duration-300 group-hover:opacity-80 object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <div className="mt-4 flex-1">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.client}</p>
        </div>
      </motion.div>
    </Link>
  );
}
