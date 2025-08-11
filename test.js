import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { log } from "console";

function getAllFolderPost(dir) {
  let directories = [];

  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      directories.push(fullPath);
      directories = directories.concat(getAllFolderPost(fullPath));
    }
  }
  return directories;
}

const listPath = getAllFolderPost(path.join(process.cwd(), "posts", "blog", "de"));

const res = readAllPost(listPath);



function readAllPost(dirArr) {
  const listPostPath = dirArr;

  for (const filePath of listPostPath) {
    
    const fileContents = fs.readdirSync(filePath);
    return fileContents
    const { data: frontMatter } = matter(fileContents);
  }

  return frontMatter;

}

/**
 * 1. create  mdx utils files
 * 2. get All Directories
 * 3. get All files from  directories
 *
 */
