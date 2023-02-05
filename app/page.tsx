"use client"
import Image from "next/image";
import Link from "next/link";

function Home() {

  return (
    <div className="h-screen bg-conversly_color-snow">
      <main className="relative flex flex-col justify-center items-center h-full items-end overflow-hidden">
      <h1 className="hidden md:block font-title text-conversly_color md:text-4xl" >
This is the home page          </h1>
          <Link href="/hosts" className="flex items-center justify-center bg-conversly_color w-48 h-14 rounded-full cursor-pointer md:w-56 md:h-16">
            <p className="font-body text-conversly_color-snow text-lg md:text-2xl">
              Find Host
            </p>
          </Link>
      </main>
    </div>
  );
};

export default Home;
