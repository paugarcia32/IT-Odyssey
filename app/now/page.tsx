/* eslint-disable react/no-unescaped-entities */
'use client'

import TOC from "@/components/TOC"

export default function Now() {
  return(
    <div className="max-w-6xl m-0 mx-auto leading-relaxed p-2 md:p-10 lg:p-20 font-body">
          <h1 className="text-4xl font-bold mb-5 font-title">Now</h1>
          <div className="w-20 text-left h-0.5 bg-accent mb-5"></div>
          <div className="md:flex md:mt-10">
            <div className="md:w-1/4">
              <div className="md:sticky md:top-12">
                {/* Ajusta el valor de md:top-10 según tus necesidades */}
                <TOC />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h2 className="text-2xl font-bold mt-7.5 mb-2.5 font-title">What I'm up to now (updated January 30)</h2>

                <ul className="my-2.5 pl-5 list-disc mb-4 mx-2.5">
                  <li>I am currently living in Barcelona and I am on the last course of Network Engeniering.</li>
                  <li>I've started to search for a work related with the IT sector</li>
                  <li>Trying to achive my first stripe on BJJ</li>
                  <li>Enjoying Fiodor Dovstoyevsky literature</li>
                </ul>

              <h2 className="text-2xl font-bold mt-7.5 mb-2.5 font-title">What is this?</h2>
              <p className="mb-4"> Most websites have a link that says “about”. It goes to a page that tells you something about the background of this person or business. For short, people just call it an “about page”. </p>
              <p className="mb-4">Most websites have a link that says “contact”. It goes to a page that tells you how to contact this person or business. For short, people just call it a “contact page”.</p>
              <p className="mb-4">So a website with a link that says “now” goes to a page that tells you what this person is focused on at this point in their life. For short, we call it a “now page”.</p>
              <p className="mb-4">If you want to learn more about this, you can check this <a className="hover:underline text-accent" href="https://nownownow.com/about" rel="external nofollow noopener" target="_blank">website</a>.</p>
            </div>
          </div>
    </div>
  )

}