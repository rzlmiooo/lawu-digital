import type { News } from "@/app/interfaces/news-interface";
import NavbarDark from "@/app/components/light/Navbar";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import purify from "isomorphic-dompurify";
import Image from "next/image";
import ShareButtons from "@/app/components/ShareButton";

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
      <div className="bg-gray-950 text-gray-100 min-h-screen">
        <NavbarDark />
        {newsData.map((article) => (
          <div key={article.id} className="mx-auto pt-24 sm:pt-32 p-4 sm:p-8 flex justify-center items-start">
            <div className="w-full sm:w-2/3 px-6 sm:px-24">
              <h1 className="text-3xl">{article.title}</h1>
              <p className="text-gray-200 my-2">
                {new Date(article.published_at).toDateString()}
              </p>
              <Image
                src={article.cover_image}
                alt={article.title}
                width={400}
                height={300}
                className="my-4 w-full rounded-xl border-2 border-gray-900 aspect-[16/9] object-cover"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: purify.sanitize(article.content),
                }}
              />
              <div className="mt-24 flex flex-col">
                <label className="">Bagikan artikel ini:</label>
                <ShareButtons />
                <label className="pt-12">Komentar</label>
                <div className="mt-2 rounded-xl p-6 bg-gray-900 text-gray-400">Belum ada komentar</div>
              </div>
            </div>
            <div className="w-1/3 hidden sm:flex flex-col max-w-sm min-w-[200px] pr-20">
              <div className="w-full">
                <div className="flex border-2 border-gray-900 rounded p-6">
                  <input
                    className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border-2 border-gray-900 rounded pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-700 shadow-sm focus:shadow"
                    placeholder="Cari Artikel..." 
                  />
                  <button
                    className="top-1 right-1 flex items-center rounded rounded-tl-none rounded-bl-none bg-gray-800 py-1 px-2.5 border-t-1 border-r-1 border-b-1 border-gray-900 text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                  </button> 
                </div>
              </div>
              <div className="flex border-2 border-gray-900 rounded p-6">Kategori</div>
              <div className="flex border-2 border-gray-900 rounded p-6">Berita Terbaru</div>
            </div>
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
