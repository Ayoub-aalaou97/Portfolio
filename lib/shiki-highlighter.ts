// lib/mdx/shiki-highlighter.ts
import { createHighlighter } from 'shiki';

export async function highlightCode(code: string, lang: string) {
  const highlighter = await createHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['ts', 'js', 'bash', 'html', 'css', 'json', 'md'], // add more as needed
    // defaultColor: 'light',
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'github-dark',
  });
}
