import NextLink from "next/link";
import { Logo } from "@/components/icons";
export default function Footer(){
  return (
    <footer className="bg-secondary dark:bg-secondary font-body w-svw">
      <div
        className=" max-w-7xl m-auto flex flex-col p-16 "
      >
        <div className="lg:flex lg:flex-row grid grid-cols-1 md:grid-cols-2 flex-wrap lg:justify-between md:justify-items-center items-start w-full text-left mb-0.5">
                  {/* <!-- List Container --> */}
          <div className="w-1/2 md:w-40 m-1  flex flex-col justify-start mb-5 min-w-max hover:text-accent">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo/>
              <p className="font-bold lg:text-xl text-lg">IT Odyssey</p>
            </NextLink>
          </div>

          <div className="w-1/2 md:w-40 m-1 flex flex-col justify-start min-w-max">
              <h1 className="mb-5 text-lg subpixel-antialiased font-bold font-title">The project</h1>
              <a href="/" className="pointer text-sm hover:text-accent my-2.5">Home</a>
              <a href="/about" className="pointer text-sm hover:text-accent my-2.5">About</a>
          </div>


            <div className="w-1/2 md:w-40 m-1 flex flex-col justify-start min-w-max">
              <h1 className="mb-5 text-lg subpixel-antialiased font-bold font-title">Learn more</h1>
              <a href="/resources" className="pointer text-sm hover:text-accent my-2.5">Resources</a>
              <a href="/FAQ" className="pointer text-sm hover:text-accent my-2.5">FAQ</a>

            </div>

            <div className="w-1/2 md:w-40 m-1 flex flex-col justify-start min-w-max">
              <h1 className="mb-5 text-lg subpixel-antialiased font-bold font-title">Support</h1>
              <a href="/contact" className="pointer text-sm hover:text-accent my-2.5">Contact</a>
              <a href="/termsandconditions" className="pointer text-sm hover:text-accent my-2.5">Terms and Conditions</a>
              <a href="/privacypolicy" className="pointer text-sm hover:text-accent my-2.5">Privacy Policy</a>
            </div>

        </div>
        <div className="text-sm mt-2 text-center">
          <p>@{new Date().getFullYear()} <a href="/contact" className="pointer hover:text-accent hover:underline">Pau Garcia</a>. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )

}