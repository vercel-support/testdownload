import React from "react";
import Confetti from "../../components/confetti";
import Head from "next/head";


function Thankyou() {
  return (
    <div className="min-h-screen">

      <div className="flex flex-col py-5 items-center space-y-1">
        <Confetti />
        <h1 className="font-boldBody font-bold text-3xl pb-3">
          Thank you for subscribing!
        </h1>
        <h2 className="font-boldBody font-bold text-xl">
          Head over to your email to confirm your subscription
        </h2>
        <p className="pt-3 font-body font-bold text-center text-lg">
          You can close this window;
          <br />
          We will get in touch with you, as soon as we start our courses.
        </p>
      </div>
    </div>
  );
}

export default Thankyou;
