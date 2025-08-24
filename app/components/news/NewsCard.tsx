import Image from 'next/image';
import Link from 'next/link';

type BlogParams = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author_name: string;
  author_image: string;
  published_at: string;
  category: string;
  tags: string;
  is_published: string;
};

export default function NewsCard({ blog }: { blog: BlogParams }) {
  return (
    <Link href={`/news/${blog.slug}`}>
      <div className={`flex flex-col 'md:col-span-2' : ''}`}>
        <div className={`relative 'h-96' : 'h-64'}`}>
          <Image src={blog.cover_image} alt={blog.title} style={{ objectFit: 'cover' }} className="rounded-lg" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{blog.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{blog.excerpt}</p>
          <button className="text-blue-500 font-bold mt-2 hover:underline">Read Now</button>
        </div>
      </div>
    </Link>
  );
}