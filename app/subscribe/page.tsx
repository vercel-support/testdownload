"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Script from "next/script";

function Subscribe() {
  return (
    <div>
      <main className="body min-h-[90vh] flex flex-col py-4">
        <div className="flex flex-col md:flex-row md:space-x-8 mt-2 items-center">
          {/* Bottom */}
          {/* <div className="flex flex-col justify-center items-center space-y-4 mt-16 md:flex-row md:space-x-7 md:items-end md:-mb-20"> */}
          <div className="flex flex-col md:flex-col justify-center py-6 items-center bg-conversly_color-blush h-48 sm:w-[100%] rounded-l-[2rem] rounded-tr-[2rem] md:h-96 md:w-full md:rounded-l-[4rem] md:rounded-tr-[4rem] lg:w-[30%]">
            <div className="mx-10">
              <TypeAnimation
                sequence={[
                  2000,
                  "Bonjour",
                  2000,
                  "Guten Tag",
                  2000,
                  "Buongiorno",
                  2000,
                  "Buenos días",
                  2000,
                  "Hello",
                  2000,
                  "Bom dia",
                  2000,
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={45}
                className={"font-body font-bold text-xl md:text-2xl text-black"}
              />
              <h1 className="font-body text-black text-3xl md:text-5xl">
                What language are you learning?
              </h1>
            </div>
          </div>
          <div className="bg-conversly_color-light items-center flex-col md:items-start p-8 w-full mt-16 md:p-16 justify-center font-body text-black lg:flex-1">
            <div>
              <h1 className="font-body text-center w-full font-bold text-2xl mb-6">
                We are constantly improving the platform, and bringing on new
                languages and language hosts!
              </h1>
              <p className="font-body text-center w-full font-bold text-xl mb-6">
                Stay tuned
              </p>
              
            </div>
            <>
                <Script
                  
                  async
                  data-uid="58082f1f5a"
                  src="https://conversly.ck.page/58082f1f5a/index.js"
                ></Script>
              </>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Subscribe;
