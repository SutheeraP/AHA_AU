import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto px-4 pb-12 text-xs text-faded text-center md:tracking-wide relative z-30">
        <div className="h-[0.5px] w-full mx-auto bg-faded mt-40 mb-6"></div>
        <div className="flex justify-center space-x-3 pt-4 mb-2">
          <Link href='https://twitter.com/Apex_Heroic' target="_blank">
<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_172_1007)">
              <path
                d="M10 0C15.5286 0 20 4.47143 20 10C20 15.5286 15.5286 20 10 20C4.47143 20 0 15.5286 0 10C0 4.47143 4.47143 0 10 0ZM8.17143 15.2714C12.6 15.2714 15.0286 11.6 15.0286 8.41429V8.1C15.5 7.75714 15.9143 7.32857 16.2286 6.84286C15.8 7.02857 15.3286 7.15714 14.8429 7.22857C15.3429 6.92857 15.7286 6.45714 15.9 5.9C15.4286 6.17143 14.9143 6.37143 14.3714 6.48571C13.9286 6.01429 13.3 5.72857 12.6143 5.72857C11.2857 5.72857 10.2 6.81429 10.2 8.14286C10.2 8.32857 10.2143 8.51429 10.2714 8.68571C8.27143 8.58571 6.48571 7.62857 5.3 6.17143C5.1 6.52857 4.97143 6.94286 4.97143 7.38571C4.97143 8.21429 5.4 8.95714 6.04286 9.38571C5.64286 9.38571 5.27143 9.27143 4.95714 9.08571V9.11429C4.95714 10.2857 5.78571 11.2571 6.88571 11.4857C6.68571 11.5429 6.47143 11.5714 6.25714 11.5714C6.1 11.5714 5.95714 11.5571 5.8 11.5286C6.1 12.4857 7 13.1857 8.04286 13.2C7.21429 13.8429 6.17143 14.2286 5.04286 14.2286C4.84286 14.2286 4.65714 14.2286 4.47143 14.2C5.52857 14.8857 6.8 15.2857 8.15714 15.2857"
                fill="#ADB7BE"
              />
            </g>
            <defs>
              <clipPath id="clip0_172_1007">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </Link>
          <Link href='https://www.facebook.com/apex.heroic.academy' target="_blank">
<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_172_1005)">
              <path
                d="M20 10.0613C20 4.50378 15.5225 -0.0012207 10 -0.0012207C4.475 2.9297e-05 -0.00250053 4.50378 -0.00250053 10.0625C-0.00250053 15.0838 3.655 19.2463 8.435 20.0013V12.97H5.8975V10.0625H8.4375V7.84378C8.4375 5.32253 9.93125 3.93003 12.215 3.93003C13.31 3.93003 14.4537 4.12628 14.4537 4.12628V6.60128H13.1925C11.9512 6.60128 11.5637 7.37753 11.5637 8.17378V10.0613H14.3362L13.8937 12.9688H11.5625V20C16.3425 19.245 20 15.0825 20 10.0613Z"
                fill="#ADB7BE"
              />
            </g>
            <defs>
              <clipPath id="clip0_172_1005">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </Link>
        </div>
        <div>All informations in this website are fictitious</div>
        <div className="mb-2">©2023 Apex Heroic Academy. All Rights Reserved</div>
        <Link href='/team'>
          <div className="underline">AHA TEAM</div>
        </Link>
        
      </div>
    </div>
  );
};

export default Footer;
