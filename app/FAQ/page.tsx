'use client'

import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FAQ() {
    const itemClasses = {
      base: "py-0 max-w",
      title: "font-semibold text-lg",
      trigger: "py-0  rounded-lg h-14",
      indicator: "text-blod ",
      content: "text-small max-w-[400]",
    };

    const Q1 =
      "This is a personal blog, so there is only one person (me) who works on it.";

    const Q2 =
    "It varies; there is no strict schedule for publishing new blog posts. However, I will try to upload new posts as soon as I can!";

    const Q3 =
     "No, on this blog, I don't collect any data from the users who visit the website.";

    const Q4 =
    "In this blog, I cover various topics related to coding and the tech world, drawing from my own experiences as the main content.";


  return (
      <div className="max-w-4xl m-0 mx-auto leading-relaxed p-20">
          <h1 className="text-4xl font-bold mb-5 font-title">Frequently Asked Questions</h1>
          <div className="w-20 text-left h-0.5 bg-accent mb-5"></div>
            <div className="max-w-xl w-xl font-body">
                <Accordion selectionMode="multiple" variant="shadow" itemClasses={itemClasses} showDivider={false} className="max-w-[500]" fullWidth={false}>
                  <AccordionItem key="1" aria-label="Q1" title="How many people work on this blog?">
                    {Q1}
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Q2" title="How often do you publish new blog posts?">
                    {Q2}
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Q3" title="Is user data collected on this blog?">
                    {Q3}
                  </AccordionItem>
                  <AccordionItem key="4" aria-label="Q4" title="What topics do you cover in your blog posts?">
                    {Q4}
                  </AccordionItem>
                </Accordion>
            </div>

      </div>
  );
}