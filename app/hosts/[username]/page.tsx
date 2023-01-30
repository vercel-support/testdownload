import React from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { supabase } from "../../../utils/supabase";
import Script from "next/script";
import Link from "next/link";
import Router from 'next/navigation'

export const revalidate = 60;

export default async function HostPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .match({ username })
    .single();
  const [host] = await Promise.all([profile]);


  return (
    <div>
      <>
        <Script src="https://assets.calendly.com/assets/external/widget.js" />
      </>
      {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}

      <div className="min-h-[90vh] bg-conversly_color-snow">
        <Link href="/hosts"
          className="pl-6 pt-6 pb-10 flex flex-row space-x-2 lg:pl-44 lg:pb-0"
          //onClick={() => router.push("/hosts")}
        >
          <ArrowLeftIcon className="w-5" />
          <h1 className="cursor-pointer font-body text-lg text-conversly_color">
            See all hosts
          </h1>
        </Link>
        <div className="flex flex-col lg:flex-row items-center md:mt-16">
          <div className="body flex flex-col h-7/8 justify-center py-6 items-center bg-conversly_color rounded-t-[2rem] rounded-tr-[2rem] lg:pl-44 md:rounded-t-[4rem] md:rounded-tl-none md:pt-44 md:p-16 lg:w-[70%] lg:h-[70vh]">
            <div className="flex flex-col">
              <div className="flex h-full mx-auto items-end bottom-0 z-50">
                <Image
                  src={profile.avatar_url}
                  alt="host's profile picture`"
                  width="150"
                  height="150"
                  className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover -mt-24 md:-mt-44 mb-8 border-[20px] border-conversly_color-snow lg:-mt-56"
                />
              </div>
              <h1 className="font-title text-center text-conversly_color-snow text-3xl md:text-5xl">
                {profile.full_name}
              </h1>
              <p className="text-lg text-conversly_color-snow py-8 text-center">
                {profile.languages}
              </p>
              <h2 className="text-lg text-conversly_color-snow text-left pb-8">
                {profile.bio}
              </h2>

              <div
                className="calendly-inline-widget min-w-[320px] h-screen lg:hidden"
                data-url={profile.calendar_embed}
              ></div>
            </div>
          </div>

          <div
            className="calendly-inline-widget w-full h-screen hidden lg:block"
            data-url={profile.calendar_embed}
          ></div>
        </div>
      </div>
    </div>
  );
}
