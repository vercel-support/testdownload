'use client';
import React, { use } from "react";
import { supabase } from "../../utils/supabase";
import { Collapse, Text, Grid } from '@nextui-org/react';

export const revalidate = 3600;

async function getFaq() {
  const { data }  = await supabase.from("faq-hosts").select();
  return data;

}
 export default function Faq() {
   const data  = use(getFaq());

  return (
    <div className="body h-[90vh] flex flex-col items-center justify-center">
<h1 className="font-title text-4xl pb-16">Frequently Asked Questions</h1>
         {/* <p>{JSON.stringify(data , null, 2)}</p> */}

{data!.map((faq) => (
             <Grid.Container gap={2}>
             <Grid>
               <Collapse.Group bordered accordion>
                 <Collapse title={faq.question}>
                   <Text>
                     {faq.answer}
                   </Text>
                 </Collapse>
               </Collapse.Group>
             </Grid>
           </Grid.Container>
          ))}



    </div>
  );
}


