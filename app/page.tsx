import React from 'react';
import getPostMetadata from '../components/getPostMetadata';
import PostContent from '../components/PostContent';

const HomePage = () => {
  const postMetadata = getPostMetadata();


  return (
    // <div className="grid grid-cols gap-4 mb-10">
    <div>
      <PostContent posts={postMetadata} />
    </div>
  );
};

export default HomePage;
