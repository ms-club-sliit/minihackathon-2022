import React from "react";
import { 
    FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    RedditShareButton, 
    RedditIcon, 
    WhatsappShareButton, 
    WhatsappIcon, 
    LinkedinShareButton, 
    LinkedinIcon, 
    TelegramIcon, 
    TelegramShareButton 
} from "react-share";
import { useDisplaySize } from "../../hooks";

function Share({ url, title }) {
    const dSize = useDisplaySize();
    const size = dSize === 0 ? 35 : 64;
    
    return (

        <div className={`${ dSize === 0 ? "py-6 mt-1":"h-[10em] py-4 mt-4" } ${ dSize === 0 ? "min-w-[20em]":"min-w-[35em]" } rounded-[1em] flex flex-col px-8 justify-center`}>
            <div className="text-2xl md:text-4xl font-bold mb-3 text-center text-white">Share</div>
            <div className="flex flex-row justify-between w-full">
                <FacebookShareButton quote={title} hashtag="" url={url}>
                    <FacebookIcon size={size} round/>
                </FacebookShareButton>

                <TwitterShareButton title={title} url={url} >
                    <TwitterIcon size={size} round/>
                </TwitterShareButton>

                <RedditShareButton title={title} url={url}>
                    <RedditIcon size={size} round/>
                </RedditShareButton>

                <WhatsappShareButton title={title} url={url}>
                    <WhatsappIcon size={size} round/>
                </WhatsappShareButton>

                <LinkedinShareButton title={title} url={url}>
                    <LinkedinIcon size={size} round/>
                </LinkedinShareButton>
                <TelegramShareButton title={title} url={url}>
                    <TelegramIcon size={size} round/>
                </TelegramShareButton>
            </div>
        </div>
    )
}

export default Share;