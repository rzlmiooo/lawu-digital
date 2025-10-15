"use client"

import React from 'react';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <section className="text-center md:text-left py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Lawu Digital<br />
            News
          </h1>
        </div>
        <p className="text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
          Ikuti update terbaru dari kegiatan-kegiatan dan tips menarik dari Lawu Digital
        </p>
      </section>
    </motion.div>
  );
};
