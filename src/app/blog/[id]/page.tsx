import { client } from "@/sanity/lib/client";
import { fetchSingleBlog } from "@/sanity/lib/blogData";
import imageUrlBuilder from "@sanity/image-url";
import IBlog from '@/sanity/lib/IBlog';


interface BlogPageProps {
  params: { id: string };
}

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export default async function BlogSinglePage({ params }: BlogPageProps) {
  const blog: IBlog = await fetchSingleBlog(params.id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div className="">
        <div className="text-white bg-black w-full h-[400px]">
          <h1>white</h1>
          <h1>{blog.title}</h1>
          <h2>{blog.category}</h2>
          <p>{blog.desc}</p>
          {blog.image && (
            <img src={urlFor(blog.image.asset._ref).url()} alt={blog.title} />
          )}
        </div>
      </div>
    </>
  );
}
