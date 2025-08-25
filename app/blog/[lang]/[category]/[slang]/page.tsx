import React from 'react'
import logo  from "@/public/img/logo.png"
import Image from 'next/image'
import { Icon } from "@iconify/react";
import { getBlogPost } from '@/lib/mdx/mdx-utils';
import TableOfContents from '@/components/blog/tableOfContents';

export default async function Blog({ params }: {params: {lang:string, category: string, slang: string}}) {

  const blogPost = await getBlogPost(params);
  const headingList = blogPost?.metadata.headings;

  if (!blogPost) {
    return (
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="text-gray-600">The blog post you are looking for doesn’t exist.</p>
      </div>
    );
  }

  return (
    <div className='container max-w-7xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8'>
      <div className="">
          <h1 className="text-3xl font-bold">{blogPost?.metadata.title}</h1>
          <p className="text-gray-600 text-sm">{blogPost?.metadata.description}</p>

          <div className="flex items-center gap-3 my-4">
            <Image src={logo} alt="Author" width={40} height={40} className="rounded-full border" />
            <div>
              <p className="text-sm font-medium">{blogPost?.metadata.author}</p>
              <p className="text-xs text-gray-500">{blogPost?.metadata.username}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1"><Icon icon="formkit:date" /> {blogPost?.metadata.date}</div>
            <div className="flex items-center gap-1"><Icon icon="mingcute:time-line" /> {blogPost?.metadata.readTime}</div>
            <div className="flex items-center gap-1"><Icon icon="akar-icons:tag" /> {blogPost?.metadata.category}</div>
          </div>

          <Image
            src={`/img/blog/${blogPost?.metadata.coverImage}`}
            alt={blogPost?.metadata.title}
            width={950}
            height={500}
            className="rounded-lg mt-6"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {blogPost?.metadata.tags?.map((tag: string) => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">#{tag}</span>
            ))}
          </div>

      
          <article className="prose dark:prose-invert mt-12">
            {blogPost?.content} 
          </article>
          
      </div>
      <TableOfContents headings={headingList}></TableOfContents>
    </div>
  )
}