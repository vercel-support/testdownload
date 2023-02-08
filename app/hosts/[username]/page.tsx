import React from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { supabase } from "../../../utils/supabase";
import Script from "next/script";
import Link from "next/link";

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
      {/* <>
        <Script src="https://assets.calendly.com/assets/external/widget.js" />
      </> */}
      {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}

      <div className="min-h-screen">
        <Link
          href="/hosts"
          className="pl-6 pt-6 pb-10 flex flex-row space-x-2 lg:pl-44"
        >
          <ArrowLeftIcon className="w-5" />
          <h1>See all hosts</h1>
        </Link>
        <div>
          <div>
            <div className="flex flex-col justify-center items-center mx-10 mt-32">
              <div>
                <Image
                  src={profile.avatar_url}
                  alt="host's profile picture`"
                  width="150"
                  height="150"
                  className="rounded-full w-56 h-56 object-cover -mt-24 md:-mt-44 mb-8 lg:-mt-56"
                />
              </div>
              <h1>{profile.full_name}</h1>
              <h2>{profile.bio}</h2>

              {/* <div className="calendly-inline-widget w-full h-screen"
                 data-url={profile.calendar_embed}
               ></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
