import Link from "next/link";
import React from "react";

const TemplifyLogo = ({ textVisible = true }: { textVisible?: boolean }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="41"
        height="41"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.399902"
          width="30.4"
          height="30.4"
          rx="15.2"
          fill="#00FF66"
        />
        <g clipPath="url(#clip0_3_9)">
          <g clipPath="url(#clip1_3_9)">
            <mask
              id="mask0_3_9"
              style={{
                maskType: "luminance",
              }}
              maskUnits="userSpaceOnUse"
              x="7"
              y="7"
              width="16"
              height="17"
            >
              <path
                d="M7.39996 7.7999V23.3999H23V7.7999H7.39996Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_3_9)">
              <path
                d="M20.0953 15.6029L17.3531 21.1613L18.4573 23.3998L22.3049 15.6009L18.4951 7.7998L17.3786 10.0404L20.0953 15.6029Z"
                fill="#0A0A0A"
              />
              <path
                d="M16.8381 15.6029L14.096 21.1612L15.2004 23.3997L19.0479 15.6009L15.2381 7.7998L14.1216 10.0406L16.8381 15.6029Z"
                fill="#0A0A0A"
              />
              <path
                d="M11.981 7.7998L8.09491 15.5987L11.9434 23.3997L15.7909 15.6008L11.981 7.7998Z"
                fill="#0A0A0A"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_9">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(7.20001 7.59985)"
            />
          </clipPath>
          <clipPath id="clip1_3_9">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(7.20001 7.59985)"
            />
          </clipPath>
        </defs>
      </svg>
      {textVisible && (
        <h1 className="hidden text-xl font-medium lg:block">Templify</h1>
      )}
    </Link>
  );
};

export default TemplifyLogo;
