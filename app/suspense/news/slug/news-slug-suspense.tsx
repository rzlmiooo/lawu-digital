import { News } from '@/app/interfaces/news-interface';
import NavbarDark from '@/app/components/dark/Navbar';
import Footer from '@/app/components/Footer';
import { notFound } from 'next/navigation';
import purify from 'isomorphic-dompurify';

export default async function NewsDetail(props: { params: { slug: string } }) {
  const { slug } = await props.params;
  const apiNewsUrl = `https://lawu-digital-server-production.up.railway.app/admin/get-slug/${slug}`;

  try {
    const res = await fetch(apiNewsUrl, { cache: 'no-store' });
    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error('Failed to fetch news article.');
    }

    const newsData: News = await res.json();
    const sanitizedContent = purify.sanitize(newsData.content);

    return (
      <div className="prose mx-auto p-6">
        <NavbarDark/>
        {newsData.map((article) => (
          <div key={article.id} className="prose mx-auto p-6">
            <h1>{article.title}</h1>
            <img src={article.cover_image} alt={article.title} className="rounded-xl w-full" />
            <p className="text-gray-500">{new Date(article.published_at || 'Belum dipublikasikan').toDateString()}</p>
            <div dangerouslySetInnerHTML={{ __html: purify.sanitize(article.content) }} />
          </div>
        ))}
      <Footer/>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load this news article. Please try again later.</p>
      </div>
    );
  }
}
