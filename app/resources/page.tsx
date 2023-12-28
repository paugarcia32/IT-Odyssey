'use client'

import React, { useEffect } from "react";
import TOC from "@/components/TOC"
import {Card, CardBody, CardFooter, Divider, Tabs, Tab, Snippet, Code} from "@nextui-org/react";
import { BodyFontIcon, MoonFilledIcon, SunFilledIcon, TitleFontIcon } from "@/components/icons";
import {  SiTypescript, SiNextdotjs, SiTailwindcss, SiNextui  } from 'react-icons/si';

const Resources = () => {
  const typographyData = [
    {
      name: 'Roboto Slab',
      type: 'Title typography',
      link: 'https://fonts.google.com/specimen/Roboto+Slab',
    },
    {
      name: 'Montserrat',
      type: 'Body typography',
      link: 'https://fonts.google.com/specimen/Montserrat',
    },
  ];




  return (
    <div className="max-w-4xl m-0 mx-auto leading-relaxed p-20 font-body">
      <h1 className="text-4xl font-bold mb-5 font-title">Resources</h1>
      <div className="w-20 text-left h-0.5 bg-accent mb-5"></div>
      <TOC />
      <div className="content">
      <h2 className="text-2xl font-bold mt-7.5 mb-2.5 font-title">Technologies Used</h2>

        <div className="flex flex-wrap md:flex-row justify-between  my-10 items-center gap-8">
          <p className="mb-4">
          In this project, we have used <a className="text-accent hover:underline" href="https://nextjs.org/">NextJS</a> with <a className="text-accent hover:underline" href="https://www.typescriptlang.org/">Typescript</a>. Also, we have used <a className="text-accent hover:underline" href="https://nextui.org/">Next UI</a> for some nice looking UI components combined with <a className="text-accent hover:underline" href="https://tailwindcss.com/">Tailwind CSS</a>.
        </p>
          <div className="flex flex-col items-center">
            <SiNextdotjs size={48} />
            <p>Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript size={48} />
            <p>Typescript</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss size={48} />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNextui size={48} />
            <p>Next UI</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-7.5 mb-2.5 font-title">Styles</h2>
        <h3 className="text-xl font-bold mt-7.5 mb-2.5 font-title">Color Palette</h3>

        <div className="mb-10">
          <div className="md:flex md:flex-row grid grid-cols-2 justify-items-center md:justify-between items-center text-center mt-10">
            <Card shadow="sm" className="w-36 h-36 mb-10 bg-primary rounded-lg flex justify-center items-center text-center font-bold">
                <CardBody>
                  <p>Primary</p>
                </CardBody>
              </Card>

              <Card shadow="sm" className="w-36 h-36 mb-10 bg-accent rounded-lg flex justify-center items-center  text-center font-bold">
                <CardBody>
                  <p>Accent</p>
                </CardBody>
              </Card>

              <Card shadow="sm" className="w-36 h-36 mb-10 bg-secondary rounded-lg flex justify-center items-center text-center font-bold">
                <CardBody>
                  <p>Secondary</p>
                </CardBody>
              </Card>

              <Card shadow="sm" className="w-36 h-36 mb-10 bg-background rounded-lg flex justify-center items-center text-center font-bold">
                <CardBody>
                  <p>Background</p>
                </CardBody>
              </Card>
            </div>
            <div className="grid justify-items-center">
              <Tabs aria-label="Options" color="primary" variant="bordered">
              <Tab
                key="photos"
                title={
                  <div className="flex items-center space-x-2">
                    <MoonFilledIcon/>
                    <span>Dark Mode Code</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>
                    <Snippet className="my-2">primary: #add7d7</Snippet>
                    <Snippet className="my-2">secondary: #201e22</Snippet>
                    <Snippet className="my-2">background: #11100e</Snippet>
                    <Snippet className="my-2">accent: #99cccc</Snippet>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="music"
                title={
                  <div className="flex items-center space-x-2">
                    <SunFilledIcon/>
                    <span>Light Mode Code</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>
                    <Snippet className="my-2">primary: #add7d7</Snippet>
                    <Snippet className="my-2">secondary: #ecebed</Snippet>
                    <Snippet className="my-2">background: #f5f5f5</Snippet>
                    <Snippet className="my-2">accent: #55aaaa</Snippet>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
            </div>

        </div>


        <h3 className="text-xl font-bold mt-7.5 mb-2.5 font-title">Fonts Used</h3>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          {typographyData.map((typography, index) => (
            <Card key={index} shadow="sm" className="min-w-[250px]  w-[300] min-h-[100px] mb-10 md:mx-10">
              <CardBody className="overflow-visible p-0">
                <div className="flex items-center justify-center mb-1">
                  <div className="mt-0.5">
                    {typography.type === 'Title typography' ? (
                    <TitleFontIcon/>
                  ) : (
                    <BodyFontIcon />
                  )}
                  </div>

                  <h1  className="font-bold ml-2 text-xl">
                    {typography.name}
                  </h1>
                </div>
              </CardBody>
              <Divider />
              <CardFooter className="text-small justify-between">
                <h1 className="sm p-4">
                  <b>{typography.type}</b>
                </h1>
                <a href={typography.link} target="_blank" rel="noopener noreferrer">
                  Google Fonts
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>



      </div>
    </div>
  );
};

export default Resources;