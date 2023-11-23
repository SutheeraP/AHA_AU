"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Kanit } from "@next/font/google";
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600", "700"],
});

const Navcourse = () => {
  const path = usePathname();
  const navLink = [
    {
      id: "level",
      link: "/courses",
      label: "ระดับชั้น",
      icon: (
        <svg
          width="27"
          height="24"
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={path === "/courses" ? "#1BB76C" : "#ADB7BE"}
        >
          <path
            d="M13.4257 20.9777L2.23761 9.24019L5.42342 2.99683H21.428L24.6138 9.24019L13.4257 20.9777Z"
            stroke-width="2.02784"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.901 8.99048L13.4257 13.4857L8.9505 8.99048"
            stroke-width="2.02784"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "lecture",
      link: "/courses/lecture",
      label: "วิชาทฤษฎี",
      icon: (
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={path === "/courses/lecture" ? "#1BB76C" : "#ADB7BE"}
        >
          <path
            d="M0.85144 17.6253V3.44998C0.85144 2.9129 1.06823 2.39782 1.45411 2.01805C1.84 1.63828 2.36337 1.42493 2.9091 1.42493H16.6954C16.8591 1.42493 17.0161 1.48893 17.1319 1.60286C17.2477 1.7168 17.3127 1.87132 17.3127 2.03244V15.3107M2.9091 15.6003H17.3127M2.9091 19.6504H17.3127"
            stroke-width="1.71472"
            stroke-linecap="round"
          />
          <path
            d="M2.9091 19.6504C2.36337 19.6504 1.84 19.4371 1.45411 19.0573C1.06823 18.6776 0.85144 18.1625 0.85144 17.6254C0.85144 17.0883 1.06823 16.5732 1.45411 16.1935C1.84 15.8137 2.36337 15.6003 2.9091 15.6003"
            stroke-width="1.71472"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.99561 5.47504H12.1686"
            stroke-width="1.71472"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      id: "lab",
      link: "/courses/lab",
      label: "วิชาปฎิบัติ",
      icon: (
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill={path === "/courses/lab" ? "#1BB76C" : "#ADB7BE"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.8009 7.54378H18.2418V6.03501C18.2411 5.42238 18.0477 4.82446 17.6874 4.32076C17.327 3.81706 16.8168 3.43144 16.2245 3.21516C15.6322 2.99889 14.9859 2.9622 14.3715 3.10999C13.7572 3.25777 13.2038 3.58302 12.7851 4.0425C12.3861 3.60479 11.8644 3.28848 11.2833 3.13192C10.7022 2.97536 10.0867 2.98525 9.5113 3.16042C8.93591 3.33558 8.42538 3.66848 8.04156 4.11878C7.65775 4.56908 7.41713 5.11745 7.34888 5.69742C6.8753 5.42816 6.33663 5.28474 5.78738 5.28167C5.23812 5.2786 4.69777 5.41599 4.22101 5.67994C3.74425 5.94388 3.34799 6.32502 3.07234 6.78478C2.79669 7.24454 2.65143 7.76661 2.65125 8.29816V12.0701C2.65125 14.671 3.71892 17.1655 5.61939 19.0046C7.51986 20.8438 10.0974 21.877 12.7851 21.877C15.4728 21.877 18.0504 20.8438 19.9508 19.0046C21.8513 17.1655 22.919 14.671 22.919 12.0701V10.5613C22.919 9.76101 22.5905 8.99349 22.0057 8.42759C21.421 7.86169 20.6278 7.54378 19.8009 7.54378ZM15.1237 4.52625C15.5372 4.52625 15.9337 4.6852 16.2261 4.96815C16.5185 5.2511 16.6828 5.63486 16.6828 6.03501V7.54378H13.5646V6.03501C13.5646 5.63486 13.7289 5.2511 14.0213 4.96815C14.3137 4.6852 14.7102 4.52625 15.1237 4.52625ZM8.88747 6.03501C8.88747 5.63486 9.05173 5.2511 9.34411 4.96815C9.63649 4.6852 10.033 4.52625 10.4465 4.52625C10.86 4.52625 11.2566 4.6852 11.549 4.96815C11.8413 5.2511 12.0056 5.63486 12.0056 6.03501V9.80692C12.0056 10.2071 11.8413 10.5908 11.549 10.8738C11.2566 11.1567 10.86 11.3157 10.4465 11.3157C10.033 11.3157 9.63649 11.1567 9.34411 10.8738C9.05173 10.5908 8.88747 10.2071 8.88747 9.80692V6.03501ZM4.2103 8.29816C4.2103 7.89801 4.37456 7.51425 4.66694 7.2313C4.95932 6.94835 5.35587 6.78939 5.76936 6.78939C6.18285 6.78939 6.5794 6.94835 6.87178 7.2313C7.16416 7.51425 7.32842 7.89801 7.32842 8.29816V9.80692C7.32842 10.2071 7.16416 10.5908 6.87178 10.8738C6.5794 11.1567 6.18285 11.3157 5.76936 11.3157C5.35587 11.3157 4.95932 11.1567 4.66694 10.8738C4.37456 10.5908 4.2103 10.2071 4.2103 9.80692V8.29816ZM21.3599 12.0701C21.3599 14.2402 20.4814 16.324 18.9126 17.8748C17.3439 19.4256 15.2099 20.32 12.9679 20.3663C10.7259 20.4125 8.55435 19.607 6.91877 18.1223C5.28319 16.6376 4.3137 14.5919 4.2181 12.4237C4.84119 12.7705 5.56914 12.8978 6.27825 12.784C6.98736 12.6702 7.63388 12.3223 8.10794 11.7994C8.64519 12.3918 9.40106 12.7568 10.2132 12.8158C11.0254 12.8749 11.8292 12.6234 12.4519 12.1153C12.7323 12.5651 13.1285 12.9368 13.6017 13.1941C13.1001 13.6181 12.6982 14.1411 12.4229 14.728C12.1476 15.3148 12.0053 15.9519 12.0056 16.5964C12.0056 16.7964 12.0877 16.9883 12.2339 17.1298C12.3801 17.2713 12.5784 17.3507 12.7851 17.3507C12.9919 17.3507 13.1901 17.2713 13.3363 17.1298C13.4825 16.9883 13.5646 16.7964 13.5646 16.5964C13.5646 15.7961 13.8932 15.0285 14.4779 14.4627C15.0627 13.8968 15.8558 13.5788 16.6828 13.5788C16.8895 13.5788 17.0878 13.4994 17.234 13.3579C17.3802 13.2164 17.4623 13.0245 17.4623 12.8245C17.4623 12.6244 17.3802 12.4325 17.234 12.291C17.0878 12.1496 16.8895 12.0701 16.6828 12.0701H15.1237C14.7102 12.0701 14.3137 11.9111 14.0213 11.6282C13.7289 11.3452 13.5646 10.9615 13.5646 10.5613V9.05254H19.8009C20.2144 9.05254 20.6109 9.2115 20.9033 9.49445C21.1957 9.7774 21.3599 10.1612 21.3599 10.5613V12.0701Z" />
        </svg>
      ),
    },
    {
      id: "club",
      link: "/courses/club",
      label: "ชมรม",
      icon: (
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={path === "/courses/club" ? "#1BB76C" : "#ADB7BE"}
        >
          <path
            d="M11.5 16.1883C10.9973 16.8714 10.325 17.4243 9.54359 17.7973C8.76218 18.1703 7.89611 18.3517 7.02323 18.3253C6.15035 18.2989 5.29802 18.0654 4.54283 17.6459C3.78764 17.2264 3.15326 16.6339 2.69672 15.9218C2.24017 15.2097 1.97577 14.4002 1.92726 13.5662C1.87876 12.7321 2.04768 11.8996 2.41884 11.1435C2.79 10.3873 3.35177 9.73122 4.05365 9.23417C4.75554 8.73711 5.57555 8.41466 6.43998 8.2958C6.21086 7.54442 6.16779 6.75232 6.31417 5.98225C6.46054 5.21219 6.79235 4.48529 7.28331 3.85913C7.77428 3.23298 8.41091 2.72476 9.14279 2.37473C9.87467 2.0247 10.6817 1.84247 11.5 1.84247C12.3183 1.84247 13.1253 2.0247 13.8572 2.37473C14.5891 2.72476 15.2257 3.23298 15.7166 3.85913C16.2076 4.48529 16.5394 5.21219 16.6858 5.98225C16.8322 6.75232 16.7891 7.54442 16.56 8.2958V8.30497C17.4254 8.42276 18.2467 8.74461 18.9498 9.24152C19.6529 9.73844 20.2157 10.3948 20.5876 11.1516C20.9595 11.9083 21.1287 12.7416 21.0802 13.5765C21.0316 14.4114 20.7667 15.2216 20.3093 15.9342C19.8519 16.6468 19.2164 17.2394 18.46 17.6586C17.7036 18.0778 16.8501 18.3105 15.9763 18.3357C15.1025 18.3609 14.2359 18.1779 13.4545 17.803C12.6731 17.4281 12.0014 16.8732 11.5 16.1883ZM11.5 16.1883V20.1666"
            stroke-width="1.48414"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      {/* mobile */}
      <div className="md:hidden fixed bottom-0 w-full">
        <div className="bg-whitesecondary-200 backdrop-blur-sm px-4 pb-10">
          <div className="flex items-center container ">
            {navLink.map(({ id, link, icon }) => (
              <Link key={id} href={link} className="py-8 flex-auto">
                <div className="flex justify-center">
                  <div className="w-min">{icon}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* pc nav course */}
      <div className={kanit.className}>
        <div className="hidden md:block">
          <div className="flex flex-col text-faded font-light text-sm lg:text-base z-20">
            {navLink.map(({ id, link, icon, label }) => (
              <Link
                key={id}
                href={link}
                className="grid grid-cols-5 gap-5 pb-5"
              >
                <div className="col-span-1">
                  <div className="flex justify-center">
                    <div className="w-min">{icon}</div>
                  </div>
                </div>
                <div
                  className={`${
                    path === link ? "text-primary font-semibold" : ""
                  } col-span-4`}
                >
                  {label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navcourse;
