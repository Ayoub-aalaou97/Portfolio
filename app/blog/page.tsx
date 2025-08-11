import React from 'react'
import logo  from "@/public/img/logo.png"
import Image from 'next/image'
import { Icon } from "@iconify/react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import BlogCard from "@/components/blog/blogCard";
import { getAllBlogPosts } from '@/lib/mdx/mdx-utils';




export default async function Blog() {
  const lang =  "de";
  const blogList = await getAllBlogPosts(lang)

  return (
    <div className='container mx-auto'>

      <section className="blog container flex">
        {/* @todo info should be getted from  */}
        <div className=" mx-auto">
          <h1>Blog</h1>
          <ul className="blog-container grid grid-cols-2 gap-4">
            
            {blogList.map(({title, date, description, coverImage, readTime, category, slug})  => (
              <li key={`${category}/${slug}`} className="w-full">
                <Link href={`/blog/${lang}/${category}/${slug}`}>
                  <BlogCard 
                    imageUrl={"/img/blog/" + coverImage}
                    title={title}
                    description={description}
                    date={date}
                    readingTime={readTime}
                    category={category}
                    />
                </Link>
              </li>
            ))}

            
          </ul>
            

        </div>
      </section>

    </div>
  )
}