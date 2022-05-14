import * as React from "react";

const Mail = (props) => (
  <svg
    viewBox="0 0 130 130"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <filter
        x="-17.7%"
        y="-22.9%"
        width="135.5%"
        height="154.2%"
        filterUnits="objectBoundingBox"
        id="mail_svg__b"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={4}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-18%"
        y="-26.9%"
        width="136%"
        height="170.1%"
        filterUnits="objectBoundingBox"
        id="mail_svg__e"
      >
        <feMorphology
          radius={0.375}
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset dy={4} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feMorphology radius={1} in="SourceAlpha" result="shadowInner" />
        <feOffset dy={4} in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation={3}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-26.9%"
        y="-29.6%"
        width="153.7%"
        height="171.6%"
        filterUnits="objectBoundingBox"
        id="mail_svg__g"
      >
        <feMorphology
          radius={0.125}
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feMorphology radius={0.5} in="SourceAlpha" result="shadowInner" />
        <feOffset dy={1} in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation={2}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <linearGradient x1="50%" y1="79.197%" x2="50%" y2="0%" id="mail_svg__a">
        <stop stopColor="#5DC1F9" offset="0%" />
        <stop stopColor="#1DA1F9" offset="25.441%" />
        <stop stopColor="#238FFA" offset="50.354%" />
        <stop stopColor="#3953FF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="50%"
        y1="28.579%"
        x2="50.833%"
        y2="63.371%"
        id="mail_svg__d"
      >
        <stop stopColor="#FBFBFB" offset="0%" />
        <stop stopColor="#CECDCD" offset="100%" />
      </linearGradient>
      <path
        d="M4 6.667 30.01 28.97a10 10 0 0 0 13.17-.134L68 6.666"
        id="mail_svg__f"
      />
      <path d="M26.222 25.778 5.778 40.888" id="mail_svg__h" />
      <rect id="mail_svg__c" x={0} y={0} width={73.333} height={48} rx={4} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle fill="url(#mail_svg__a)" cx={65} cy={65} r={65} />
      <g transform="translate(28.5 41)">
        <use fill="#000" filter="url(#mail_svg__b)" xlinkHref="#mail_svg__c" />
        <use fill="url(#mail_svg__d)" xlinkHref="#mail_svg__c" />
      </g>
      <g strokeLinecap="square" transform="translate(28.5 41)">
        <use fill="#000" filter="url(#mail_svg__e)" xlinkHref="#mail_svg__f" />
        <use stroke="#ACAAAA" strokeWidth={0.75} xlinkHref="#mail_svg__f" />
      </g>
      <g strokeLinecap="square" transform="translate(28.5 41)">
        <use fill="#000" filter="url(#mail_svg__g)" xlinkHref="#mail_svg__h" />
        <use stroke="#ACAAAA" strokeWidth={0.75} xlinkHref="#mail_svg__h" />
      </g>
      <path
        stroke="#ACAAAA"
        strokeWidth={0.75}
        strokeLinecap="square"
        d="M76.944 66.778 97.39 81.889"
      />
    </g>
  </svg>
);

export default Mail;

