import Link from 'next/link';
import { News } from '@/app/interfaces/news-interface';

interface NewsCardProps {
  blog: News;
};

export default function NewsCard({ blog }: NewsCardProps) {
  console.log(blog);
  return (
    <Link href={`/news/${blog.slug}`}>
      <div className={`flex flex-col 'md:col-span-2' : ''}`}>
      <div className={`relative 'h-96' : 'h-64'}`}>
        <img src={blog.cover_image} alt={blog.title} className="rounded-lg object-cover"/>
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