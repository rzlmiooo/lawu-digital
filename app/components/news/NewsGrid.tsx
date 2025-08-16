'use client';

import { News } from '@/app/interfaces/news-interface';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard'; 

export default function NewsGrid({ newsData }: { newsData: News[] }) {
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((blog) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <NewsCard blog={blog} />
        </motion.div>
      ))}
    </section>
  );
}