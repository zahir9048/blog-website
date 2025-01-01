"use client";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import IBlog from "@/sanity/lib/IBlog";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}


export default function Hero({ blog }: { blog: IBlog }) {
  if (!blog) {
    return <div>Loading...</div>;
  }

  const imgUrl = urlFor(blog.image.asset._ref).url();
  console.log(imgUrl);

  return (
    <>
      <div>
        <div style={{backgroundImage: `url('${imgUrl}')`}} className="h-screen  bg-cover bg-center bg-no-repeat">
          <div className="max-w-[1300px] h-full mx-auto px-[50px] flex flex-col justify-end text-white py-[100px]">
            <div className="max-w-[530px]">
              <div className="bg-[#a5afbc40] px-3 py-2 max-w-fit rounded-[10px]">
                <p className="m-0 p-0">{blog.category.charAt(0).toUpperCase() + blog.category.slice(1).toLowerCase()}</p>{" "}
              </div>
              <h1 className="font-bold text-[36px]">{blog.title}</h1>{" "}
              <div className="flex gap-[15px]">
                <p>{blog.date_posted}</p> 
                <div className="w-[90px] bg-[#FFF] h-[1px] mt-2"></div>
                <div className="flex flex-col items-end">
                  <p>{blog.excerpt}</p>
                  <p>- {blog.author}</p>
                </div>
              </div>
              
              {" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
