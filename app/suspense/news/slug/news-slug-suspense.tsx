import { News } from '@/app/interfaces/news-interface';
import NavbarDark from '@/app/components/dark/Navbar';
import Footer from '@/app/components/Footer';
import { notFound } from 'next/navigation';
import purify from 'isomorphic-dompurify';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function NewsDetail({ params }: PageProps) {
  const { slug } = params;
  const apiNewsUrl = `https://lawu-digital-server-production.up.railway.app/admin/get-slug/${slug}`;


  try {
    const res = await fetch(apiNewsUrl, { cache: 'no-store' });
    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error('Failed to fetch news article.');
    }

    const data: News | News[] = await res.json();
    const articles: News[] = Array.isArray(data) ? data : [data];

    return (
      <div className="prose mx-auto p-6">
        <NavbarDark />
        {articles.map((article) => (
          <div key={article.id} className="prose mx-auto p-6">
            <h1>{article.title}</h1>
            <img
              src={article.cover_image.trimStart()}
              alt={article.title}
              className="rounded-xl w-full"
            />
            <p className="text-gray-500">
              {article.published_at
                ? new Date(article.published_at).toDateString()
                : 'Belum dipublikasikan'}
            </p>
            <div dangerouslySetInnerHTML={{ __html: purify.sanitize(article.content) }} />
          </div>
        ))}
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Failed to load this news article. Please try again later.
        </p>
      </div>
    );
  }
}
