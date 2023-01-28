
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
     <div className="body min-h-[90vh]">
       <div className="flex flex-col items-center py-16">
         {/* <pre>{JSON.stringify(data , null, 2)}</pre> */}
         <h1 className="font-title text-4xl mb-10">
           Your favorite language hosts
         </h1>
         <div className="grid w-full md:grid-flow-col md:grid-cols-3 xl:grid-cols-4 gap-8">
           {data!.map((profile) => (
             <div>
               <Link
                 href={`/hosts/${profile.id}`}
                 key={profile.id}
               >
                 <div
                   id={profile.id}
                   className="flex flex-col justify-center items-center p-8 shadow-[0_0px_20px_0px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] "
                 >
                   {profile.avatar_url && (
                     <Image
                       src={profile.avatar_url}
                       alt="host's profile picture"
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


