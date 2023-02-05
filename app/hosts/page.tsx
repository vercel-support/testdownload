
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../utils/supabase";

export const revalidate = 60;

async function getData() {
     const { data }  = await supabase.from("profiles").select('*').eq("is_host", true);
     return data;
   }

export default async function Page() {
  const data = await getData();

  return (
     <div className="body min-h-screen">
      <Link href="/"
          className="pl-6 pt-6 pb-10 flex flex-row space-x-2 lg:pl-44"
        >
          <ArrowLeftIcon className="w-5" />
          <h1>
            Back home
          </h1>
        </Link>
       <div className="flex flex-col items-center py-16 space-y-8">
         {/* <pre>{JSON.stringify(data , null, 2)}</pre> */}
         <h1>
           This is our list of users
         </h1>
         <div className="grid w-full md:grid-cols-3 xl:grid-cols-4 gap-8">
           {data!.map((profile) => (
             <div>
               <Link href={`/hosts/${profile.username}`}
                 key={profile.id}
               >
                 <div
                   id={profile.id}
                   className="flex flex-col justify-center items-center p-8 shadow-[0_0px_20px_0px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] "
                 >
                   {profile.avatar_url && (
                     <Image
                       src={profile.avatar_url}
                       alt="user's profile picture"
                       width="200"
                       height="200"
                       className="rounded-full w-44 h-44 object-cover lg:w-36 lg:h-36"
                     />
                   )}
                   <h2 className="text-2xl pt-8 text-center">
                     {profile.full_name}
                   </h2>
                   <p>{profile.languages}</p>
                   <button className="button w-full">See lessons</button>
                 </div>
               </Link>
            </div>
           ))}
         </div>
       </div>
     </div>
   );
 }


