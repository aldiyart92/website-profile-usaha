import { Article, articles as staticArticles } from "@/data/content";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const fallbackThumbnails = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
];

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

export function mapApiToArticle(item: ApiArticleItem, index: number = 0): Article {
  const thumbnail =
    item.thumbnail_url && item.thumbnail_url.trim() !== ""
      ? item.thumbnail_url
      : fallbackThumbnails[index % fallbackThumbnails.length];

  return {
    slug: item.slug,
    title: item.title,
    date: item.published_at ? item.published_at.split("T")[0] : item.created_at?.split("T")[0] || "2026-10-23",
    summary: item.excerpt || "",
    thumbnail,
    content: item.content || item.excerpt || "",
    author: item.author?.name || "Admin",
    category: item.category?.name || "Artikel & Wawasan",
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
      return json.data.map((item: ApiArticleItem, idx: number) => mapApiToArticle(item, idx));
    }
  } catch (error) {
    console.warn("[articleService] Failed to fetch articles from API, using fallback data:", error);
  }

  return [];
}

/**
 * Get articles for blog/news section, combining API articles with fallback static articles
 * so that both the 3-slide headline slider and side list are fully populated.
 */
export async function getBlogArticles(): Promise<Article[]> {
  const apiArticles = await getArticlesFromApi();
  if (apiArticles.length === 0) {
    return staticArticles;
  }

  // Combine API articles with fallback static articles if fewer than 6 articles
  const combined = [...apiArticles];
  for (const staticArt of staticArticles) {
    if (!combined.some((a) => a.slug === staticArt.slug)) {
      combined.push(staticArt);
    }
  }
  return combined;
}

/**
 * Get article detail by slug, checking API first, then fallback to static content.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/articles/${slug}`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return mapApiToArticle(json.data, 0);
      }
    }
  } catch (error) {
    console.warn(`[articleService] Failed to fetch article "${slug}" from API:`, error);
  }

  // Fallback to static articles
  const found = staticArticles.find((a) => a.slug === slug);
  return found || null;
}
