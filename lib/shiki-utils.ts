import  rehypeShiki from "@shikijs/rehype";
import { transformerNotationHighlight } from "@shikijs/transformers"; 
import { transformerNotationDiff } from "@shikijs/transformers";
import { transformerNotationFocus } from "@shikijs/transformers";

export function rehypeShikiConfig() {
  return [
    rehypeShiki, 
    {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
      defaultTheme: "dark",
      transformers: [
        transformerNotationHighlight(), // highlight lines => `// [!code highlight]`
        transformerNotationDiff(),      // git diff style => `+` / `-`
        transformerNotationFocus(),     // focus specific lines => `// [!code focus]`
      ],
    },
  ];
}
