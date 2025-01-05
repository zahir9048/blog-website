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
      {/* <div>
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
      </div> */}
      <div className="max-w-[1300px] px-[20px] sm:px-[50px] mx-auto pt-[100px]">
        <div className="w-full mb-[50px]">
          {blog.image && (
            <img
              src={urlFor(blog.image.asset._ref).url()}
              alt={blog.title}
              className="w-full h-[400px] object-cover object-center rounded-[10px]"
            />
          )}
          <div className="my-[25px]">
            <div className="flex flex-col sm:flex-row items-center gap-[15px]">
              <div className="flex gap-[5px] items-center sm:max-w-[60%]">
                <h1 className=" text-[26px] xl:text-[30px] font-bold text-start">
                  {blog.title}
                  <span className="sm:hidden mx-[15px] rounded-[5px] text-black bg-[#0000001a] py-[3px] px-[15px] max-w-fit text-[14px] lg:text-[16px]">
                    {blog.category.charAt(0).toUpperCase() +
                      blog.category.slice(1).toLowerCase()}
                  </span>
                  <span className="sm:hidden m-0 p-0 text-[14px] lg:text-[16px] inline-flex items-center space-x-1">
                    <span>Date Posted:</span>
                    <span className="font-bold">{blog.date_posted}</span>
                  </span>
                </h1>
              </div>
              <div className="hidden sm:flex flex-col md:flex-row justify-between flex-grow gap-[5px] md:gap-[0px]">
                <div className="rounded-[5px] text-black bg-[#0000001a] py-[3px] px-[15px] max-w-fit">
                  <p className="m-0 p-0 text-[14px] lg:text-[16px]">
                    {blog.category.charAt(0).toUpperCase() +
                      blog.category.slice(1).toLowerCase()}
                  </p>
                </div>
                <p className="m-0 p-0 text-[14px] lg:text-[16px]">
                  Date Posted:{" "}
                  <span className="font-bold">{blog.date_posted}</span>
                </p>
              </div>
            </div>
            <p className="text-justify">{blog.desc}</p>
          </div>
          <div className="flex gap-[20px] sm:gap-[0px] flex-col sm:flex-row justify-between items-center">
            <div className="flex gap-[20px] items-center">
              <div>
                <img
                  className="w-[60px] h-[60px] object-contain rounded-[50%]"
                  src={urlFor(blog.posterImage.asset._ref).url()}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[20px] font-bold">
                  By: {blog.posterName}
                </div>
                <div className="text-[#6C757D] text-[12px] font-normal">
                  {blog.posterDesignation}
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <a href="/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
