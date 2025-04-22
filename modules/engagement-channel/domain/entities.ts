export type FeedPostTag = "recomendation" | "news" | "history" | "event" | "cupon"

export interface FeedPost {
    id: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    videoUrl?: string;
    createdAt: string; // ISO date string
    tags?: FeedPostTag
    expiresAt?: string; // ISO date string
    redirectUrl?: string;
}

const tagTranslations: Record<FeedPostTag, string> = {
    recomendation: "Recomendación",
    news: "Noticias",
    history: "Historia",
    event: "Evento",
    cupon: "Cupón",
};

export function translateFeedPostTag(tag: FeedPostTag): string {
    return tagTranslations[tag];
}
