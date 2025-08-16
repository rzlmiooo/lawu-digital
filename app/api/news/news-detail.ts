import { News } from "@/app/interfaces/news-interface";

export async function getNewsArticle(slug: string): Promise<News | null> {
  const apiNewsUrl = `https://lawu-digital-server-production.up.railway.app/admin/get-slug/${slug}`;
  
  try {
    const res = await fetch(apiNewsUrl, { next: { revalidate: 3600 } }); 
    
    if (!res.ok) {
      if (res.status === 404) {
        return null; 
      }
      throw new Error(`Failed to fetch news article: ${res.statusText}`);
    }
    
    const newsData: News = await res.json();
    return newsData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}