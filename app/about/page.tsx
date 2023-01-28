import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Share from "../../components/SocialMediaShare";

function About() {
  return (
    <div className="body min-h-screen">

      <div className="absolute bg-conversly_color-blush w-full h-4/6 md:h-2/6 lg:h-3/6 -ml-6 mt-32 lg:mt-40 z-0 lg:-ml-44"></div>
      <div className="flex flex-col md:flex-row w-full pt-20 md:pt-40 mb-20 flex-1 justify-center relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="mx-auto md:ml-0 md:w-[50%]">
            <Image
              src="/pic1.png"
              alt=""
              width="400"
              height="400"
              className="ml-6 -mt-20"
            />
            <Image
              src="/pic2.png"
              alt=""
              width="300"
              height="300"
              className="-mt-44"
            />
          </div>

          <div className="flex flex-col justify-center w-full md:w-[43%] md:-mt-40 md:justify-end">
            <h1 className="text-4xl mt-8 font-title md:w-3 md:text-right mb-8">About Conversly</h1>

            <p className="paragraph">
            At Conversly, our mission is to connect knowledgable language hosts with curious students seeking to expand their conversational vocabulary in multiple languages! 
            </p>

            <p className="paragraph">
            We believe that the most effective way to achieve this is through engaging spoken language sessions with a vetted host. As experience has shown that students are able to improve their pronunciation and confidence in speaking aloud to others.
            </p>

            <p className="paragraph">Our Hosts offer classes from beginner to advanced in 10 languages (and growing!) to accomodate as many language enthusiasts and world travelers as possible.</p>

            <p className="paragraph">We are still new, but we have big plans for the future.</p>


            <Link
              href={"/"}
              className="py-2 px-8 bg-conversly_color hover:bg-conversly_color-defaulthover text-conversly_color-snow rounded-3xl w-44"
            >
              Subscribe here
            </Link>
          </div>
        </div>
         
      </div>
      {/* <Share/> */}
    </div>
  );
}

export default About;
