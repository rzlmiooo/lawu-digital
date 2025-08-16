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
            Digitalization<br />
            Business
          </h1>
          <span className="mt-4 md:mt-0 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full text-sm">
            News
          </span>
        </div>
        <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
          Digitalization is a form of concern for the future of business.
        </p>
      </section>
    </motion.div>
  );
};
