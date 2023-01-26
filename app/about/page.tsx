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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <p className="paragraph">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            <p className="paragraph">Subscribe to stay up to date!</p>
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
