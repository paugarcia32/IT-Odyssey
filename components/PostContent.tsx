/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState, ChangeEventHandler  } from 'react';
import { PostMetadata } from './PostMetadata';
import PostPreview from './PostPreview';
import { Input, Pagination, Select, SelectItem, Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import { SearchIcon, TagIcon } from './icons';

interface PostContentProps {
  posts: PostMetadata[];
}

const PAGE_SIZE = 6;

const PostContent: React.FC<PostContentProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | undefined>('');


  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const handleTagChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const val = e.target.value;
    setSelectedTag(val === '' ? undefined : val);
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearchTerm =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSelectedTag = !selectedTag || selectedTag === '' || post.tags.includes(selectedTag);

    return matchesSearchTerm && matchesSelectedTag;
  });

  const indexOfLastPost = currentPage * PAGE_SIZE;
  const indexOfFirstPost = indexOfLastPost - PAGE_SIZE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);

  return (
    <div className='max-w-6xl'>
      <div className='flex justify-center'>
        <Input
              className='mb-4 max-w-xl mx-8'
              color='default'
              type="text"
              placeholder="Search Posts ..."
              startContent={
                <SearchIcon className="text-2xl pointer-events-none flex-shrink-0 text-primary" />
              }
              onChange={(e) => setSearchTerm(e.target.value)}
            />
      </div>
      <div className="md:flex">
        <div className="md:w-1/4 mx-8 md:mx-4">
          <div className='md:mt-10 hidden md:block'>

            <Card shadow="sm" className="py-4 border-none bg-secondary-50 dark:bg-secondary">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar isBordered radius="full" size="md" src="profile.jpg" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">Pau Garcia</h4>
                    <h5 className="text-small tracking-tight text-default-400">@paugarcia32</h5>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                  Check out on what I'm right now!
                </p>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <a className="hover:underline text-accent" href="/now" rel="external nofollow noopener">Now Page</a>
              </CardFooter>
            </Card>

          </div>

          <div className="md:sticky md:top-12 md:mt-10">
            <Select
              className="max-w-xl"
              color='default'
              placeholder="Filter by Tag"
              value={selectedTag || ''}
              onChange={handleTagChange}
              startContent={
                <TagIcon className="text-2xl pointer-events-none flex-shrink-0 text-primary" />
              }
            >
              {allTags.map((tag) => (
                <SelectItem key={`${tag}`} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="md:w-3/4 md:mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl gap-4 my-10">
          {currentPosts.map((post) => (
            <PostPreview key={post.slug} {...post} />
          ))}
        </div>
        <div className="flex justify-center mb-6">
          <Pagination
            isCompact
            showControls
            total={totalPages}
            initialPage={1}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default PostContent;