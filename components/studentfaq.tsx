import React from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Accordion } from "@mantine/core";

export default function Faq({ faq }) {

  return (
    <div>
      <Head>
        <title>FAQs</title>
        <link rel="icon" href="/conversly_logo.svg" />
      </Head>

      <div>
      <Accordion variant="filled" defaultValue="first">
      <Accordion.Item value="first">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="second">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="third">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
        </div>
    </div>
  );
}


export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );
  const { data } = await supabaseAdmin.from("faq-students").select("*").order("id");
  console.log(data);

  return {
    props: {
      studentfaq: data,
    },
  };
}