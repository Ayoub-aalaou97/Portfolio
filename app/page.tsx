import Image from "next/image";
import SiteHeader from "@/components/layout/header";
import myImg from "@/public/myimg_out.png";
import BlogCard from "@/components/blog/blogCard";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <main>
      {/* start home */}
      <section className="container mx-auto max-w-7xl pt-14">
        <Image 
          src={myImg}
          alt="Ayoub Image"
          width={144}
          height={144}
          className="block mx-auto"
        />
        <h1 className="text-center text-3xl mt-3">Hey, 👋🏻 <span className="grad-text">I'm Ayoub Aalaou!</span></h1>
        <p className="px-[400px] text-center mt-3">I'm a senior frontend developer and blogger based in Bremen, aiming to leave a lasting impression
          and drive innovation in the ever-evolving world of software development.
        </p>

        <div className="more-info flex px-[400px] mt-4 justify-center">
          <a className="flex mr-4">
            <Icon className="mr-2" icon="material-symbols:download-for-offline-rounded" width="24" height="24" /> 
            Download Resume
          </a>
          <a className="mr-4"><Icon icon="cib:linkedin" width="24" height="24" /></a>
          <a className="mr-4"><Icon icon="mdi:github" width="24" height="24" /></a>
          <a><Icon icon="material-symbols:mail" width="24" height="24" /></a>
        </div>

      </section>
      
      <section className="blog container flex">
        {/* @todo info should be getted from  */}
        <div className=" mx-auto">
          <h1>Blog</h1>
          <div className="blog-container grid grid-flow-col grid-cols-2 gap-4">
            
            <BlogCard 
              imageUrl="/blog_1.jpg"
              title="Mastering React: Key Concepts and Essential Tips "
              description="Dive into React's core concepts in 2025! Learn about components, JSX, hooks, and more. Perfect for beginners looking to build modern web apps. Start your React journey today!"
              date="10.07.2025"
              readingTime="17 min read"
              category="Web Development"
            />
  
            <BlogCard 
            imageUrl="/blog_1.jpg"
            title="Mastering React: Key Concepts and Essential Tips "
            description="Dive into React's core concepts in 2025! Learn about components, JSX, hooks, and more. Perfect for beginners looking to build modern web apps. Start your React journey today!"
            date="10.07.2025"
            readingTime="17 min read"
            category="Web Development"
            />
            
            
          </div>

        </div>
      </section>

    </main>
  );
}
