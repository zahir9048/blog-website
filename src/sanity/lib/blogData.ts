import { client } from '@/sanity/lib/client';
import IBlog from '@/sanity/lib/IBlog';


export async function fetchBlogs(): Promise<IBlog[]> {
  const query = '*[_type == "blog"]{title, category, desc, image, _id, excerpt, date_posted, author}';
  return await client.fetch(query);
}

export async function fetchSingleBlog(blogId: string): Promise<IBlog> {
  console.log(blogId);
  const query = '*[_type == "blog" && _id == $blogId]{title, category, desc, image, _id, excerpt, date_posted, author}[0]';
  const params = { blogId };

  console.log(query);
  return await client.fetch(query, params);
}
