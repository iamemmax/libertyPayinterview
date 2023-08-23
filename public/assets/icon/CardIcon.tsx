import * as React from "react"
import { SVGProps } from "react"
const CardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M1.667 10.508h14.166"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.833 8.567v5.958c-.025 2.375-.675 2.975-3.15 2.975H4.817c-2.517 0-3.15-.625-3.15-3.108V8.567c0-2.25.525-2.975 2.5-3.092.2-.008.416-.017.65-.017h7.866c2.517 0 3.15.625 3.15 3.109Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 5.608v5.825c0 2.25-.525 2.975-2.5 3.092V8.567c0-2.484-.633-3.109-3.15-3.109H4.817c-.234 0-.45.009-.65.017C4.192 3.1 4.842 2.5 7.317 2.5h7.866c2.517 0 3.15.625 3.15 3.108Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4.375 14.842h1.433M7.592 14.842h2.866"
    />
  </svg>
)
export default CardIcon
