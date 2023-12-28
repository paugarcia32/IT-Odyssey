/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PostMetadata } from './PostMetadata';
import { Card, CardBody, Image, Link, Chip } from '@nextui-org/react';

const PostPreview = (props: PostMetadata) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={props.banner}
              width="100%"
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <p className="text-small text-foreground/80">{props.date}</p>
                  <Link href={`/posts/${props.slug}`}>
                    <h2 className=" hover:underline font-title mb-2">{props.title}</h2>
                  </Link>
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 flex-wrap">
                  {props.tags.map((tag, index) => (
                  <Chip key={index} className="bg-primary" size='sm' ><h3 className="font-semibold">{tag}</h3></Chip>
                ))}
                </div>
            <div className="flex flex-col mt-2 gap-1">
              <p className="text-slate-400">{props.subtitle}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>

  );
};

export default PostPreview;
