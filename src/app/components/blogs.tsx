"use client";
import { client } from "@/sanity/lib/client";
import React, { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import IBlog from "@/sanity/lib/IBlog";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export default function Blogs({
  blogs,
  categories,
}: {
  blogs: IBlog[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const allCategories = ["All", ...categories];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  console.log(blogs);

  return (
    <div className="max-w-[1300px] h-[full] mx-auto px-[50px] flex flex-col items-start text-black py-[100px]">
      <h1 className="text-[36px] font-bold">Our Blogs</h1>
      <Tabs
        aria-label="Dynamic tabs"
        items={allCategories.map((category) => ({
          id: category,
          label:
            category.charAt(0).toUpperCase() + category.slice(1).toLowerCase(),
        }))}
        onSelectionChange={(category) =>
          setSelectedCategory(category as string)
        }
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <div className="flex gap-[50px] mt-4">
              {filteredBlogs.map((blog, index) => (
                <a key={index} href={`/blog/${blog._id}`} className="relative max-w-[300px]">
                  <Card>
                    <CardBody className="p-0 flex flex-col gap-[7px]">
                      <Image
                      className="rounded-[5px] object-contain"
                        width={310}
                        height={200}
                        alt={blog.title}
                        src={urlFor(blog.image.asset._ref).url()}
                      />
                      <div className="flex flex-col gap-[7px] max-w-[100%]">
                        <p className="m-0 p-0 text-[#6C757D] text-[12px]">{blog.date_posted}</p>
                        <h1 className="font-bold text-[#6C757D] text-[18px]">{blog.title}</h1>
                        <p className="p-0 m-0 font-regular text-[12px] text-[#6C757D]">{blog.excerpt}</p>
                        <div className="absolute top-[10px] right-[10px] text-white rounded-[8px] bg-[#ffffff59] py-[5px] px-5"><p>{blog.category.charAt(0).toUpperCase() + blog.category.slice(1).toLowerCase()}</p></div>
                      </div>
                    </CardBody>
                  </Card>
                </a>
              ))}
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
