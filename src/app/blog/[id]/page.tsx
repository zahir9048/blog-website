import { client } from "@/sanity/lib/client";
import { fetchSingleBlog } from "@/sanity/lib/blogData";
import imageUrlBuilder from "@sanity/image-url";
import IBlog from "@/sanity/lib/IBlog";

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
      <div>
        <div className="h-screen bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="max-w-[1300px] h-full mx-auto px-[50px] flex flex-col justify-end text-white py-[100px]">
            <div className="max-w-[530px]">
              <div className="bg-[#a5afbc40] px-3 py-2 max-w-fit rounded-[10px]">
                <p className="m-0 p-0">Adventure</p>
              </div>
              <h1 className="font-bold text-[36px]">
                Richird Norton photorealistic rendering as real photos
              </h1>
              <div className="flex gap-[15px]">
                <p>08.08.2021</p>
                <div className="w-[90px] bg-[#FFF] h-[1px] mt-2"></div>
                <p>
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] px-[50px] mx-auto pt-[100px]">
        <div className=" w-full h-[400px]">
          <h2>Category: {blog.category}</h2>
          {blog.image && (
            <img src={urlFor(blog.image.asset._ref).url()} alt={blog.title} className="w-full h-[300px] object-cover" />
          )}
          <h1 className="text-[30px] font-bold">{blog.title}</h1>
          <p>{blog.desc}</p>
        </div>
      </div>
    </>
  );
}
