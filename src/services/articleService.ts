import { Article } from "@/data/content";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export interface ApiArticleItem {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  thumbnail?: string | null;
  thumbnail_url?: string | null;
  status?: string;
  published_at?: string;
  published_at_formatted?: string;
  reading_time?: string;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
  author?: {
    id: number;
    name: string;
  };
  created_at?: string;
  updated_at?: string;
}

export function mapApiToArticle(item: ApiArticleItem): Article {
  return {
    slug: item.slug,
    title: item.title,
    date: item.published_at || item.created_at || "",
    summary: item.excerpt || "",
    // Empty string when the API has no thumbnail; UI renders a neutral placeholder.
    thumbnail: item.thumbnail_url?.trim() || "",
    content: item.content || item.excerpt || "",
    author: item.author?.name || "",
    category: item.category?.name,
  };
}

/**
 * Fetch articles from http://localhost:8000/api/articles
 */
export async function getArticlesFromApi(): Promise<Article[]> {
  "use cache";
  try {
    const res = await fetch(`${API_BASE_URL}/articles`);

    if (!res.ok) {
      console.warn(`[articleService] API responded with status ${res.status}`);
      return [];
    }

    const json = await res.json();
    if (json.success && Array.isArray(json.data)) {
      return json.data.map((item: ApiArticleItem) => mapApiToArticle(item));
    }
  } catch (error) {
    console.warn("[articleService] Failed to fetch articles from API:", error);
  }

  return [];
}

/**
 * Get articles for the blog/news section. Uses API data only (no dummy content).
 */
export async function getBlogArticles(): Promise<Article[]> {
  return getArticlesFromApi();
}

/**
 * Get article detail by slug from the API. Returns null when not found.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  "use cache";
  try {
    const res = await fetch(`${API_BASE_URL}/articles/${encodeURIComponent(slug)}`);

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return mapApiToArticle(json.data);
      }
    }
  } catch (error) {
    console.warn(`[articleService] Failed to fetch article "${slug}" from API:`, error);
  }

  return null;
}
