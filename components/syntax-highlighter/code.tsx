import React from 'react'
import { codeToHtml } from 'shiki'
import { transformerNotationHighlight, transformerNotationDiff} from '@shikijs/transformers'
import type { BundledLanguage, BundledTheme } from "shiki";


type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};


    
export default async function Code({code,  lang, theme, filename}: Props) {



  const html = await codeToHtml(code, {
    lang: 'javascript',
    theme:"everforest-dark",
    transformers: [
      transformerNotationHighlight(),
      transformerNotationDiff()
    ],
  })

  return (
    <div>
      <div className="bg-neutral-800">
        {filename && (
          <div className="inline-flex bg-neutral-900 px-4 py-2 text-sm">
            {filename}
          </div>
        )}
      <div 
        className="[&_.highlighted]:bg-white/10"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
      </div>


      
    </div>
  )

}

