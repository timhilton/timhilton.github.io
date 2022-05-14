import * as React from "react";

const Terminal = (props) => (
  <svg viewBox="0 0 132 132" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient
        cx="50%"
        cy="0%"
        fx="50%"
        fy="0%"
        r="100%"
        id="terminal_svg__a"
      >
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#A19999" offset="100%" />
      </radialGradient>
    </defs>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <circle
        stroke="url(#terminal_svg__a)"
        strokeWidth={2}
        fill="#131B1F"
        cx={65}
        cy={65}
        r={65}
      />
      <path
        d="M78.144 83.688v4.176H54.96v-4.176h23.184ZM33.92 51.656l17.904 7.296v5.184l-17.904 7.2v-5.232l12-4.608-12-4.512v-5.328Z"
        fill="#01F119"
      />
    </g>
  </svg>
);

export default Terminal;

