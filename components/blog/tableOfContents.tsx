"use client";
import React, {useState} from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

type TableOfContentsProps = {
  headings: string[]
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    isVisible == true ?  setIsVisible(false) : setIsVisible(true);
  };

    const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll smoothly without changing the URL
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  return (

    <aside>
      <div className='sticky top-24'>
        <div className='table-of-contents p-3 rounded-lg shadow-sm'>
          <div className='flex items-center justify-between cursor-pointer pb-2 border-b border-[rgba(60,60,60,0.12)]'>
            <h2 className='text-lg font-semibold'>Table of Content</h2>
            <button  onClick={handleClick}  className='cursor-pointer'>
              <Icon icon="circum:circle-chev-down" width="24" height="24" />
            </button>
          </div>

          {isVisible && (
            <nav className="p-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              <ul className="space-y-1">
                {headings.map((heading, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScrollTo(slugify(heading))}
                      className="text-left text-gray-700 hover:underline"
                    >
                      {heading}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

        </div>
      </div>
    </aside>
  )
}

export default TableOfContents