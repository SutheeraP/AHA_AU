import React from "react";

const GreenBlur = () => {
  return (
    <>
      <svg
        width="500"
        height="500"
        viewBox="0 0 820 820"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1" filter="url(#filter0_f_10_3505)">
          <circle cx="410" cy="410" r="210" fill="#1BB76C" />
        </g>
        <defs>
          <filter
            id="filter0_f_10_3505"
            x="0"
            y="0"
            width="820"
            height="820"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_10_3505"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default GreenBlur;
