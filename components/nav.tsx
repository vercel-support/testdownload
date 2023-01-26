"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

function Nav() {
  
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-[100] body min-h-[10vh] bg-conversly_color-snow flex flex-row items-center flex-wrap md:flex-nowrap w-full">
      <Link
        href="/"
        className="flex flex-row flex-1 py-5 items-center space-x-3"
      >
        <Image
          src="/conversly_logo.svg"
          alt="Conversly Logo"
          width="40"
          height="40"
          className="cursor-pointer"
        />

        <h1 className="font-boldBody font-bold text-xl">Conversly</h1>
      </Link>


      <div className="space-y-2 block md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
  <span className="block w-8 h-0.5 bg-conversly_color"></span>
  <span className="block w-8 h-0.5 bg-conversly_color"></span>
  <span className="block w-5 h-0.5 bg-conversly_color"></span>
</div>

      <nav className={`${open ? "block" : "hidden"} md:block w-full md:w-auto`}>
      <ul className="flex flex-col text-base md:flex-row md:space-x-5 w-full items-center">
      <li>
          <Link href="/hosts" className={`${pathname === "/hosts" 
       ? "active-navlink" 
       : "navlink"} w-full`} onClick={() => setOpen(false)}>Hosts</Link>
        </li>
        <li>
          <Link href="/about" className={`${pathname === "/about" 
       ? "active-navlink" 
       : "navlink"} w-full`} onClick={() => setOpen(false)}>About</Link>
        </li>
        {/* <li>
          <Link href="/faqs" className={`${pathname === "/faqs" 
       ? "active-navlink" 
       : "navlink"} w-full`} onClick={() => setOpen(false)}>FAQs</Link>
        </li> */}
        {/* <li>
          <Link href="/subscribe" className={`${pathname === "/subscribe" 
       ? "active-navlink" 
       : "navlink"} w-full`} onClick={() => setOpen(false)}>Subscribe</Link>
        </li> */}
        {/* Login/Logout */}
        {/* <li className="ml-auto text-celeste_color-gray">
          <Link href={user ? "/Dashboard" : "/login"}>
            <p>{user ? "Account" : "I'm a Teacher"}</p>
          </Link>
        </li> */}
      </ul>
      </nav>
      </div>
    
  );
}

export default Nav;
