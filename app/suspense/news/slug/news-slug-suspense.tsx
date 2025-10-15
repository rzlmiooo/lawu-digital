import type { News } from "@/app/interfaces/news-interface";
import NavbarDark from "@/app/components/dark/Navbar";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import purify from "isomorphic-dompurify";
import Image from "next/image";

type SlugParams = { slug: string };

export default async function NewsDetail({ params }: { params: SlugParams }) {
  const { slug } = params; 

  const apiNewsUrl = `https://lawu-digital-server-production.up.railway.app/admin/get-slug/${slug}`;

  try {
    const res = await fetch(apiNewsUrl, { cache: "no-store" });
    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error("Failed to fetch news article.");
    }

    const newsData: News[] = await res.json();
    if (!newsData.length) notFound();

    return (
      <div className="bg-white text-black min-h-screen">
        <NavbarDark />
        {newsData.map((article) => (
          <div key={article.id} className="prose mx-auto p-6">
            <h1>{article.title}</h1>
            <Image
              src={article.cover_image}
              alt={article.title}
              width={400}
              height={300}
              className="rounded-xl aspect-[4/3] object-cover"
            />
            <p className="text-gray-500">
              {new Date(article.published_at).toDateString()}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: purify.sanitize(article.content),
              }}
            />
          </div>
        ))}
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Failed to load this news article. Please try again later.
        </p>
      </div>
    );
  }
}
