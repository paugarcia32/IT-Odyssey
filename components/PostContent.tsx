'use client'
import React, { useState } from 'react';
import { PostMetadata } from './PostMetadata';
import PostPreview from './PostPreview';
import { Input, Pagination, Select, SelectItem } from "@nextui-org/react";
import { SearchIcon, TagIcon } from './icons';

interface PostContentProps {
  posts: PostMetadata[];
}

const PAGE_SIZE = 3;

const PostContent: React.FC<PostContentProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | undefined>('');
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const handleTagChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
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
    <div>
      <div className='md:flex md:flex-row grid grid-cols-1 justify-items-center md:justify-between items-center text-center'>
        <Input
        className='mb-4 md:mb-0 '
          type="text"
          placeholder="Search Posts..."
          // labelPlacement="outside"
          startContent={
            <SearchIcon className="text-2xl pointer-events-none flex-shrink-0 text-primary" />
          }

          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select
          className="md:ml-4"
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
      <div className="grid grid-cols-1 gap-4 my-10">
        {currentPosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          isCompact
          showControls
          total={totalPages}
          initialPage={1}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PostContent;