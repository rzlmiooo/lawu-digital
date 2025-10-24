import React from 'react';

type BlogParams = {
  title: string,
  author: string,
  published_at: string
};

export default function ArticleHeader({ blog }: { blog: BlogParams }) {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
        {blog.title}
      </h1>
      <div className="text-gray-600 text-sm mb-6">
        By <span className="font-semibold">{blog.author}</span> on {blog.published_at}
      </div>
    </div>
  );
};

