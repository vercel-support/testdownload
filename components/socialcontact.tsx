import Link from "next/link";
import Image from "next/image";

function ContactIcons() {
    return (
      <div className="flex flex-row space-x-2">
       <Link
        href="/"
        className="flex flex-row py-5 items-center"
      >
        <Image
          src="/Linkedin.svg"
          alt="Linkedin Logo"
          width="30"
          height="30"
          className="cursor-pointer md:w-8"
        />
      </Link>
      <Link
        href="/"
        className="flex flex-row py-5 items-center"
      >
        <Image
          src="/Pinterest.svg"
          alt="Pinterest Logo"
          width="30"
          height="30"
          className="cursor-pointer md:w-8"
        />

      </Link>
      <Link
        href="/"
        className="flex flex-row py-5 items-center"
      >
        <Image
          src="/Mail.svg"
          alt="Mail Logo"
          width="30"
          height="30"
          className="cursor-pointer md:w-8"
        />
      </Link>
      </div>
    );
  }
  
  export default ContactIcons;
  