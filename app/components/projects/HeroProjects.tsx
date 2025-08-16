'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProjectsProps {
  title: string;
  subtitle: string;
}

export default function HeroProjects({ title, subtitle }: HeroProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/texture.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.0 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.0 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}
