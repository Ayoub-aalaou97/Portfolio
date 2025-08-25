"use client";

import { useState } from "react";

export default function CopyToClipboard({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      // reset after 2s
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-md 
                text-sm bg-neutral-200 hover:bg-neutral-300 text-neutral-800
                transition border border-neutral-300"
    >
      {copied ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-green-600"
          >
            <path d="M20.285 6.709l-11.285 11.291-5.285-5.291 1.414-1.414 3.871 3.877 9.871-9.877z" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="text-neutral-700"
          >
            <path d="M216,40V168H168V88H88V40Z" opacity="0.2"></path>
            <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
          </svg>
          Copy
        </>
      )}
    </button>
  );
}
