'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map(src => (
          <motion.div
            key={src}
            className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}   
            transition={{ duration: 0.3 }}
          >
            <Image src={src} alt="Project screenshot" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
