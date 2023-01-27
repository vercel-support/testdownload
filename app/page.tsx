"use client"
import Image from "next/image";
import Link from "next/link";
// import ContactIcons from "../components/socialcontact";
// import TypingAnimation from "../components/typinganimation";

function Home() {

  return (
    <div className="h-[90vh] bg-conversly_color-snow">
      <main className="relative flex flex-row h-full items-end overflow-hidden">
        {/* mobile */}
        <div className="md:hidden bg-[url('/mobile_bg.png')] bg-cover bg-no-repeat bg-center h-full w-full flex flex-col items-end pb-10 justify-center">
          <div className="mt-[20%] mx-auto">
            {/* <TypingAnimation /> */}
            <h1 className="font-title text-conversly_color-snow mt-3 text-3xl md:text-4xl">
              What language <br /> are you learning?
            </h1>
          </div>
          <div className="w-[90%] mx-auto md:w-full md:ml-[35%]">
            <Image
              src="/girl.png"
              alt="Young woman looking welcoming"
              width="380"
              height="380"
            />
          </div>
        </div>
        {/* Mobile Bottom */}
        {/* This section shows an overlay with a button that links to the Teacher's List Page Only visible on mobile and tablets */}
        <div className="absolute flex flex-col lg:hidden h-24 items-center justify-center bg-conversly_color-snow w-full -mb-3 z-10 md:h-44 md:space-y-8">
        <h1 className="hidden md:block font-title text-conversly_color md:text-4xl" >
            Find your favorite language host
          </h1>
          <Link href="/hosts" className="flex items-center justify-center bg-conversly_color w-48 h-14 rounded-full cursor-pointer md:w-56 md:h-16">
            <p className="font-body text-conversly_color-snow text-lg md:text-2xl">
              Find Host
            </p>
          </Link>
        </div>

        {/* iPad & Desktop */}
        {/* Left side (desktop) */}
        <div className="hidden md:block h-[90%] lg:flex lg:flex-row lg:pr-44">
          <div className="flex flex-row h-7/8 justify-center py-6 items-center bg-conversly_color rounded-t-[2rem] rounded-tr-[2rem] md:rounded-t-[4rem] md:pt-16 md:pb-0 md:px-16 lg:w-[40%] lg: lg:flex-1">
            <div className="flex flex-row">
              <div className="md:max-w-2xl space-y-5 lg:mx-[20%]">
                {/* <TypingAnimation /> */}
                <h1 className="font-title text-conversly_color-snow text-3xl md:text-5xl">
                  What language are you learning?
                </h1>
                {/* <ContactIcons /> */}
              </div>
              <div className="flex h-full mx-auto items-end lg:absolute bottom-0 lg:-mt-[22%] lg:ml-[30%] z-50">
                <Image
                  src="/girl.png"
                  alt="Young woman looking welcoming"
                  width="400"
                  height="400"
                />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="hidden relative lg:flex lg:flex-row ">
          <div className="bg-[url('/greetingsBubbles.png')] bg-contain bg-no-repeat bg-center absolute z-0 h-full w-[40%] pl-[400px]"></div>
            <div className="hidden lg:flex lg:flex-col justify-center items-end lg:ml-80 z-10">
              <h1 className="hidden lg:block font-title text-right text-conversly_color text-3xl">
                Find your favorite <br/> language host
              </h1>
              <Link href="/hosts" className="flex items-center justify-center bg-conversly_color w-56 h-16 rounded-full cursor-pointer mt-8">
                <p className="font-body text-conversly_color-snow text-lg md:text-2xl">
                  Find Host
                </p>
                </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
