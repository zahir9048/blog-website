import React from "react";
import { fetchBlogs } from "@/sanity/lib/blogData";
import Blogs from "./components/blogs";
import IBlog from '@/sanity/lib/IBlog';


export default async function Home() {
  const blogs: IBlog[] = await fetchBlogs();
  const uniqueCategories: string[] = Array.from(
    new Set(blogs.map((blog) => blog.category))
  );
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

      <Blogs blogs={blogs} categories={uniqueCategories} />
    </>
  );
}

// return (
//   <>
//     <div className="h-screen bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
//       <div className="max-w-[1300px] h-full mx-auto px-[50px] flex flex-col justify-end text-white py-[100px]">
//         <div className="max-w-[530px]">
//           <div className="bg-[#a5afbc40] px-3 py-2 max-w-fit rounded-[10px]">
//             <p className="m-0 p-0">Adventure</p>
//           </div>
//           <h1 className="font-bold text-[36px]">
//             Richird Norton photorealistic rendering as real photos
//           </h1>
//           <div className="flex gap-[15px]">
//             <p>08.08.2021</p>
//             <div className="w-[90px] bg-[#FFF] h-[1px] mt-2"></div>
//             <p>
//               Progressively incentivize cooperative systems through
//               technically sound functionalities. The credibly productivate
//               seamless data.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div>
//       <div className="max-w-[1300px] h-[500px] mx-auto px-[50px] flex flex-col items-start text-black">
//         <h1>Our Blogs</h1>
//         <div className="flex w-full flex-col">
//         <Tabs
//             aria-label="Dynamic tabs"
//             items={uniqueCategories.map((category) => ({
//               id: category,
//               label: category,
//             }))}
//             onSelectionChange={(category) => setSelectedCategory(category as string)} // Update the selected category
//           >
//             {(item) => (
//               <Tab key={item.id} title={item.label}>
//                 <div className="grid grid-cols-1 gap-4 mt-4">
//                   {filteredBlogs.map((blog, index) => (
//                     <Card key={index}>
//                       <CardBody>
//                         <Image
//                           width={200}
//                           height={200}
//                           alt={blog.title}
//                           src={urlFor(blog.image.asset._ref).url()}
//                         />
//                         <h1>{blog.title}</h1>
//                         <p>{blog.desc}</p>
//                       </CardBody>
//                     </Card>
//                   ))}
//                 </div>
//               </Tab>
//             )}
//           </Tabs>

//           <div>
//             {data.map((item: IBlog, index: number) => (
//               <div key={index}>
//                 <Image
//                   width={200}
//                   height={200}
//                   alt="h"
//                   src={urlFor(item.image.asset._ref).url()}
//                 />
//                 <h1>{item.title}</h1>
//                 <h1>Category: {item.category}</h1>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// );
