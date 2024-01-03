/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { Fragment, Key, useState } from "react";
import { Progress } from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import { AboutIcon, XPIcon, SkillsIcon } from "@/components/icons";


export default function About() {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index: React.SetStateAction<number>) => {
    setToggleTab(index);
  };

const [selected, setSelected] = React.useState("photos");

const handleSelectionChange = (key: Key) => {
  setSelected(key as string); // Asignar el key a setSelected
};
  // useScrollToTop();
  return (
    <Fragment>
      <section className="bg-background min-h-screen p-12 items-center">
        <div className="grid justify-around lg:flex ">
          <div className="mb-10 ">
                <Image
                isBlurred
                height={400}
                src="profile.jpg"
                alt="NextUI Album Cover"
                className="max-w-lg"
              />
          </div>
          <div className="flex max-w-lg min-w-lg flex-col items-center lg:ml-10">
            <Tabs
              aria-label="Options"
              selectedKey={selected}
              onSelectionChange={handleSelectionChange}
              className=""
            >
            <Tab key="about" title={
              <div className="flex items-center space-x-2">
                <AboutIcon/>
                <span>About</span>
              </div>
            }>
                <Card>
                  <CardHeader>
                    <h2 className="text-4xl font-bold leading-normal">My Story</h2>
                  </CardHeader>
                  <div className="w-40 text-left h-0.5 bg-accent mb-2 ml-3"></div>
                  <CardBody>
                      <p className="pb-4">
                        Hi! I am a 21-year-old guy, a tech enthusiast who is passionate about creating a blog.
                      </p>
                      <p className="pb-4">
                        Ever since I was young, I have been fascinated by technology.
                        This blog is where I will share all my experiences, opinions, and journey in this exciting world.
                      </p>
                      <h3 className="mb-4 text-2xl font-bold leading-6">Network Engineering Student</h3>
                      <p className="pb-4">
                        I am currently in my fourth year of studying Network Engineering.
                      </p>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="skills" title={
              <div className="flex items-center space-x-2">
                <SkillsIcon/>
                <span>Skils</span>
              </div>
            }>
                <Card>
                  <CardHeader>
                    <h2 className="text-4xl font-bold leading-normal">Skills</h2>
                  </CardHeader>
                  <div className="w-40 text-left h-0.5 bg-accent mb-2 ml-3"></div>
                  <CardBody>
                      <p className="pb-4">
                        During my university journey, I've explored various
                        programming languages, such as Typescript, Java, C#, C,
                        Flutter, and React. This exposure has allowed me to acquire a
                        diverse skill set in different languages and programming
                        paradigms that I can leverage in the future.
                      </p>
                      <p className="pb-4">
                        Below, you will find graphics representing my proficiency in
                        different programming languages based on my Github statistics.
                      </p>

                      <div className="grid grid-cols-2 mt-0.5">
                        <div className="mb-7 mr-5">
                          <Progress isStriped classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-accent-300 to-accent-500",
                          }}
                          label="Typescript" value={80}  className="max-w-md" />
                        </div>

                        <div className="mb-7 mr-5">
                          <Progress classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-accent",
                          }} label="Java" value={50}  className="max-w-md" />
                        </div>

                      <div className="mb-7 mr-5">
                          <Progress isStriped classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-accent-300 to-accent-500",
                          }} label="Flutter" value={70}  className="max-w-md" />
                        </div>

                        <div className="mb-7 mr-5">
                          <Progress isStriped classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-accent-300 to-accent-500",
                          }} label="C#" value={20}  className="max-w-md" />
                        </div>
                      </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="experience" title={
              <div className="flex items-center space-x-2">
                <XPIcon/>
                <span>Experience</span>
              </div>
            }>
                <Card>
                  <CardHeader>
                    <h2 className="text-4xl font-bold leading-normal">Experience</h2>
                  </CardHeader>
                  <div className="w-40 text-left h-0.5 bg-accent mb-2 ml-3"></div>
                  <CardBody>

                        <h3 className="mb-4 text-2xl font-bold leading-6">Network Engineering</h3>
                        <div className="w-40 text-left h-0.5 bg-accent mb-2 ml-0.5"></div>
                        <span className="text-gray-500 text-sm font-normal">2020-2023</span>
                        <p className="pb-4">
                          I've been studying Network Engineering at UPC in Spain for 4
                          years. During this program, I've gained a deep understanding
                          of networking principles and technologies, which has allowed
                          me to explore the vast and ever-evolving world of computer
                          networks.
                        </p>



                        <h3 className="mt-4 mb-4 text-2xl font-bold leading-6">Software Development</h3>
                        <div className="w-40 text-left h-0.5 bg-accent mb-2 ml-0.5"></div>
                        <span className="text-gray-500 text-sm font-normal">2021-2023</span>
                        <p className="pb-4">
                          I've been learning programming for the past 2 years,
                          striving to become better every day. Through various
                          projects and hands-on experience, I've honed my skills in
                          languages like Typescript, Java, C#, C, Flutter, and React.
                          My passion for problem-solving and creating innovative
                          solutions drives me to continuously expand my knowledge in
                          the field of software development.
                        </p>

                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </Fragment>
  );
}