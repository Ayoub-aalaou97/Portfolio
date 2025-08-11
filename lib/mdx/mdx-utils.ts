import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cwd } from "process";

/**
 * Get all blog posts for a given language and optional category.
 *
 * @param lang - Language code (e.g., 'en', 'fr')
 * @param category - Optional category subfolder (e.g., 'seo', 'nuxt')
 * @returns Array of blog post metadata
 */
export async function getAllBlogPosts(lang: string, category?: string) {
  const categoryPath = category ? category : "";
  const blogDirectory = path.join(process.cwd(), "posts", "blog", lang, categoryPath);

  const getAllMdxFiles = (dir: string): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    return entries.flatMap((entry) => {
      const res = path.resolve(dir, entry.name);
      if (entry.isDirectory()) return getAllMdxFiles(res);
      if (entry.name.endsWith(".mdx")) return [res];
      return [];
    });
  };

  const filePaths = getAllMdxFiles(blogDirectory);

  const blogs = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const relativePath = path.relative(blogDirectory, filePath).replace(/\\/g, "/");
    const segments = relativePath.replace(/\.mdx$/, "").split("/");
    const categoryFromPath = segments.length > 1 ? segments[0] : category || "";
    const slug = segments.slice(1).join("/");

    return {
      slug,
      category: categoryFromPath,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || "",
      coverImage: data.coverImage,
      readTime: data.readTime,
      //category: data.category
    };
  });

  return blogs;
}


export async function getBlogPost({
    lang,
    category,
    slang
  }: {
    lang:string,
    category: string,
    slang: string
  }) {
  
  try {
    const filePath = path.join(process.cwd(), "posts", "blog", lang, category, `${slang}.mdx`);

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");

    const { content, data: metadata } = matter(fileContents);

    return {
      content,
      metadata,
      slug: slang,
    };
  } catch (error) {
    console.error("Error reading post:", error);
    return null;
  }
  
}
