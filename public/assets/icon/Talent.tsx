import * as React from "react"
import { SVGProps } from "react"
const TalentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.767 1.883 5.425 2.925c.633.342.633 1.317 0 1.659l-5.425 2.925a1.614 1.614 0 0 1-1.534 0L3.808 6.467c-.633-.342-.633-1.317 0-1.659l5.425-2.925a1.614 1.614 0 0 1 1.534 0ZM3.008 8.442l5.042 2.525a1.865 1.865 0 0 1 1.025 1.658v4.767a.924.924 0 0 1-1.342.825l-5.041-2.525a1.866 1.866 0 0 1-1.025-1.659V9.267a.924.924 0 0 1 1.341-.825ZM16.992 8.442l-5.042 2.525a1.865 1.865 0 0 0-1.025 1.658v4.767a.924.924 0 0 0 1.342.825l5.041-2.525a1.866 1.866 0 0 0 1.025-1.659V9.267a.924.924 0 0 0-1.341-.825Z"
    />
  </svg>
)
export default TalentIcon
