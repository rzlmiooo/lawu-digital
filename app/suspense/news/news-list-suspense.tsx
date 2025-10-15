import NewsGrid from '@/app/components/news/NewsGrid';
import Navbar from "@/app/components/light/Navbar";
import { getNewsData } from '@/app/api/news/news';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import CTA from '@/app/components/CTA';


export default async function NewsListPage() {
  const newsData = await getNewsData();

  if (newsData.length === 0) {
    return <div>No news articles found.</div>;
  }

  return (
    <div className="bg-gray-950 text-gray-100 font-sans">
      <Navbar/>
      <main className="container mx-auto px-6 py-8 pt-20">
        <Hero />

        <NewsGrid newsData={newsData} />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}