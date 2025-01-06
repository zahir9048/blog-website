import { client } from '@/sanity/lib/client';
import IBlog from '@/sanity/lib/IBlog';


export async function fetchBlogs(): Promise<IBlog[]> {
  const query = '*[_type == "blog"]{title, category, desc, image, _id, excerpt, date_posted, author}';
  return await client.fetch(query);
}

export async function fetchSingleBlog(blogId: string): Promise<IBlog> {
  const query = '*[_type == "blog" && _id == $blogId]{title, category, desc, image, _id, excerpt, date_posted, author, posterName, posterDesignation, posterImage}[0]';
  const params = { blogId };

  return await client.fetch(query, params);
}
