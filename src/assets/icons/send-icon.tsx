import React from "react";

const SendIcon = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <g id="info" />
      <g id="icons">
        <path
          fill="currentColor"
          d="M21.5,11.1l-17.9-9C2.7,1.7,1.7,2.5,2.1,3.4l2.5,6.7L16,12L4.6,13.9l-2.5,6.7c-0.3,0.9,0.6,1.7,1.5,1.2l17.9-9   C22.2,12.5,22.2,11.5,21.5,11.1z"
          id="send"
        />
      </g>
    </svg>
  );
};

export default SendIcon;
