import React from 'react';
import purify from 'isomorphic-dompurify';

type BlogParams = { content: string };

export default function ArticleBody({ blog }: { blog: BlogParams }) {
  
  return (
    <div className="prose lg:prose-xl mx-auto max-w-none">
      <div dangerouslySetInnerHTML={{ __html: purify.sanitize(blog.content) }} />
    </div>
  );
};

