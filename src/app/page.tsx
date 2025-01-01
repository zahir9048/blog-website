import React from "react";
import { fetchBlogs } from "@/sanity/lib/blogData";
import Hero from "./components/hero";
import Blogs from "./components/blogs";
import IBlog from '@/sanity/lib/IBlog';


export default async function Home() {
  const blogs: IBlog[] = await fetchBlogs();
  const firstBlog = blogs[0];
  const uniqueCategories: string[] = Array.from(
    new Set(blogs.map((blog) => blog.category))
  );
  return (
    <>
      <Hero blog={firstBlog}  />
      <Blogs blogs={blogs} categories={uniqueCategories} />
    </>
  );
}
