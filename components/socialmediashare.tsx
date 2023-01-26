import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import React from "react";
import Image from "next/image";

function Share() {
  const shareUrl = "https://conversly.co";
  const shareMessage = "Learn languages the interactive way, which Conversly";

  return (
    <div className="flex flex-col py-8">
      <h1 className="font-body text-xl md:text-2xl mb-2 font-bold mx-auto">
        Tell your friends about us!
      </h1>
      <div className="flex flex-row space-x-2 items-center justify-center py-4">
    
        <WhatsappShareButton
          url={shareUrl}
          title={shareMessage}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <PinterestShareButton url={shareUrl} media={shareMessage}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <TwitterShareButton url={shareUrl} title={shareMessage}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <FacebookShareButton
          url={shareUrl}
          quote={shareMessage}
          hashtag={"#conversly"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </div>
  );
}

export default Share;
