import React from 'react';
import purify from 'isomorphic-dompurify';

export default function ArticleBody({ blog }: { blog: any }) {
  
  const sanitizedContent = purify.sanitize(blog.content);
  return (
    <div className="prose lg:prose-xl mx-auto max-w-none">
      <div dangerouslySetInnerHTML={{ __html: purify.sanitize(blog.content) }} />
    </div>
  );
};

