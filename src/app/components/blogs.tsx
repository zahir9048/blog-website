"use client";
import { client } from "@/sanity/lib/client";
import React, { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import IBlog from '@/sanity/lib/IBlog';
import { format } from "date-fns";


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
    <div className="max-w-[1300px] h-[500px] mx-auto px-[50px] flex flex-col items-start text-black py-[100px]">
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
                <a href={`/blog/${blog._id}`}>
                  <Card key={index}>
                    <CardBody>
                      <Image
                        width={200}
                        height={200}
                        alt={blog.title}
                        src={urlFor(blog.image.asset._ref).url()}
                      />
                      <h1>Title: {blog.title}</h1>
                      <p>Excerpt: {blog.excerpt}</p>
                      <p>Category: {blog.category}</p>
                      <p>Date Posted: {blog.date_posted}</p>
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
