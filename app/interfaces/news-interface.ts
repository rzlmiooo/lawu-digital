export interface News {
    id:string;
    slug:string;
    title:string;
    excerpt:string;
    content:string;
    cover_image:string;
    author_name:string;
    author_image:string;
    published_at:string;
    category:string;
    tags:string;
    is_published:string;
    successMessage: string | null;
    errorMessage: string | null;
}