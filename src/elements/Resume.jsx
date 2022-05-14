import * as React from "react";

const Resume = (props) => (
  <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="resume_svg__a">
        <stop stopColor="#CBFFB7" offset="0%" />
        <stop stopColor="#7FE462" offset="54.269%" />
        <stop stopColor="#2BB310" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle fill="url(#resume_svg__a)" cx={65} cy={65} r={65} />
      <g stroke="#1D1F1F" strokeWidth={2}>
        <path
          d="M39 28h42.59a2 2 0 0 1 1.31.488l6.091 5.277a4 4 0 0 1 .058.052l5.29 4.765A2 2 0 0 1 95 40.068V99a4 4 0 0 1-4 4H39a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4Z"
          fill="#F6F6F6"
        />
        <path
          d="M81.668 28v8.222a4 4 0 0 0 4 4H95M43 40h30M43 50h44M43 60h44M43 70h44M43 80h44M43 90h44"
          strokeLinecap="square"
        />
      </g>
    </g>
  </svg>
);

export default Resume;

