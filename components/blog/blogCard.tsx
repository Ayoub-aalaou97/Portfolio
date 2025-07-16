import React from 'react'
import Image from 'next/image'
import { Icon } from "@iconify/react";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  imageUrl: string;
  category: string;
};

const BlogCard = ({ imageUrl, title, description, date, readingTime, category }: BlogCardProps) => {
  return (
    <div className='card w-[480px]'>
      <Image 
        src={imageUrl} 
        alt="Avatar"
        width={480}
        height={200}
        className='rounded-[14px]'
      />
      <div className="card-body py-2 px-3">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="card-footer py-2 px-3 flex justify-between">
        <div className="f-block-date flex mr-2">
          <Icon icon="formkit:date" width="24" height="24" />
          <span className='text-space-mono'>{date}</span>
        </div>
        <div className="f-blog-time flex mr-2">
          <Icon icon="mingcute:time-line" width="24" height="24" />
          <span className='text-space-mono'>{readingTime}</span>
        </div>
        <div className="f-blog-category flex mr-2">
          <Icon icon="akar-icons:tag" width="24" height="24" />
          <span className='text-space-mono'>{category}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard