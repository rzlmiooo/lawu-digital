import { News } from "@/app/interfaces/news-interface";

export async function getNewsData(): Promise<News[]> {
  try {
    const res = await fetch('https://lawu-digital-server-production.up.railway.app/admin/get');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const data: News[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
}