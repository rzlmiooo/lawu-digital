import React from 'react';
import { News } from '@/app/interfaces/news-interface';

interface ArticleHeaderProps {
  blog: News;
}

export default function ArticleHeader({ blog }: ArticleHeaderProps) {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-2">
        {blog.title}
      </h1>
      <div className="text-gray-600 text-sm mb-6">
        By <span className="font-semibold">{blog.author_name}</span> on {blog.published_at}
      </div>
    </div>
  );
};

