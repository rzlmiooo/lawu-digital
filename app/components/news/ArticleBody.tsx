import React from 'react';
import purify from 'isomorphic-dompurify';
import { News } from '@/app/interfaces/news-interface';

interface ArticleBodyProps {
  blog: News;
}

export default function ArticleBody({ blog }: ArticleBodyProps) {
  return (
    <div className="prose lg:prose-xl mx-auto max-w-none">
      <div dangerouslySetInnerHTML={{ __html: purify.sanitize(blog.content) }} />
    </div>
  );
};

