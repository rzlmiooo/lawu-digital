'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/app/interfaces/project-interface';
import ProjectDetails from '@/app/components/projects/ProjectDetails';
import ProjectGallery from '@/app/components/projects/ProjectGallery';

interface ProjectDetailsClientWrapperProps {
  project: Project;
}

export default function ProjectDetailsClientWrapper({ project }: ProjectDetailsClientWrapperProps) {
  return (
    <>
      <motion.div
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}   
        transition={{ duration: 0.3 }}
      >
        <motion.div layoutId={`project-image-${project.id}`}>
          <img
            src={project.heroImage}
            alt={project.title}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            className="brightness-75"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16 text-white bg-gradient-to-t from-black/70 to-transparent"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{project.title}</h1>
          <p className="mt-2 text-lg md:text-xl font-medium">{project.subtitle}</p>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectDetails project={project} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="my-12 prose max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl font-light leading-relaxed">{project.description}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectGallery images={project.galleryImages} />
        </motion.div>
      </div>
    </>
  );
}
