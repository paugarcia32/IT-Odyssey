import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import TOC from "@/components/TOC"
import { SearchIcon, TagIcon } from '@/components/icons';
import { Chip, Image, Divider } from '@nextui-org/react';
import DownloadButton from "@/components/downloadButton";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="max-w-fit">
      <div className="my-12 text-center items-center">
        <h1 className="text-2xl font-title ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <div className="max-w-4xl m-0 mx-auto  leading-relaxed px-25 md:px-40">
        <div className="flex justify-start items-center gap-2 flex-wrap mb-4">
          <TagIcon />
          {post.data.tags && post.data.tags.length > 0 && post.data.tags.map((tag: string, index: number) => (
            <Chip key={index} className="bg-accent-50 border border-accent-400 dark:bg-accent-950 dark:border-accent-600" size='sm'>
              <h1 className="font-semibold">{tag}</h1>
            </Chip>
          ))}
        </div>
        <TOC />
        <article
        className="prose dark:prose-invert prose:font-body prose-headings:font-title prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-7.5 prose-h2:mb-2.5 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2 prose-h4:text-lg prose-h4:mt-5 prose-h4:mb-1.5 prose-a:text-accent hover:prose-a:underline prose-a:no-underline "

        >
          <Markdown>{post.content}</Markdown>
        </article>
        <div className="font-body mb-10 items-center text-center">
          <Divider className="my-4" />
          <p className="mb-4">If you liked this post, you can download it in PDF format!</p>
          <div className="px-40">
            <DownloadButton slug={slug} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostPage;
