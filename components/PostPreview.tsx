/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PostMetadata } from './PostMetadata';
import { Card, CardHeader, CardBody, Image, Link, Chip, CardFooter } from '@nextui-org/react';

const PostPreview = (props: PostMetadata) => {
  return (
        <Card shadow="sm" className='border-none bg-secondary-50 dark:bg-secondary mx-10 md:mx-0'>
          <div className="overflow-visible p-0 relative col-span-6 md:col-span-4">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={props.title}
              className="w-full object-cover h-[160px]"
              src={props.banner}

            />
          </div>
          <CardBody className="text-small justify-between">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                 <div className="flex justify-start items-center gap-2 flex-wrap">
                   {props.tags.map((tag, index) => (
                   <Chip key={index} className="bg-accent-50 border border-accent-400 dark:bg-accent-950 dark:border-accent-600" size='sm' ><h3 className="font-semibold">{tag}</h3></Chip>
                 ))}
                 </div>
                   <Link href={`/posts/${props.slug}`}>
                     <h2 className="text-accent hover:underline font-title mb-2">{props.title}</h2>
                   </Link>
               </div>
             </div>
             <div className="flex flex-col mt-2 gap-1">
               <p className="text-slate-400">{props.subtitle}</p>
             </div>
          </CardBody>
          <CardFooter>
            <p className="text-default-500">{props.date}</p>
          </CardFooter>
        </Card>
  );
};

export default PostPreview;
