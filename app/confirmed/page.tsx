import React from "react";
import Image from "next/image";
import Share from "../../components/socialmediashare";


function Confirmation() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col py-5 items-center space-y-1">
      <Image
              src="/womanReading.png"
              alt="Woman reading in a cozy chair"
              width="300"
              height="300"
              className="my-16 -mr-8"
            />
        <h1 className="font-boldBody font-bold text-3xl pb-3">
          You just joined our Email list!
        </h1>
        <h2 className="font-boldBody font-bold text-xl">
          Thank you for your trust in us,
        </h2>
        <p className="pt-3 font-body font-bold text-center text-lg">
          we will keep you updated, so you know when we are live!
        </p>
        <Share/>
      </div>
    </div>
  );
}

export default Confirmation;
