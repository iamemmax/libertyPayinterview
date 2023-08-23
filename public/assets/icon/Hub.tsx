import * as React from "react"
import { SVGProps } from "react"
const HubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.508 9.682v3.742c0 3.742 1.5 5.242 5.242 5.242h4.492c3.741 0 5.241-1.5 5.241-5.242V9.682"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 10.332c1.525 0 2.65-1.241 2.5-2.766l-.55-5.567H8.058L7.5 7.566c-.15 1.525.975 2.766 2.5 2.766Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.258 10.332c1.684 0 2.917-1.366 2.75-3.041l-.233-2.292c-.3-2.167-1.133-3-3.317-3h-2.541l.583 5.842c.142 1.375 1.383 2.491 2.758 2.491ZM4.7 10.332c1.375 0 2.617-1.116 2.75-2.491l.183-1.842.4-4H5.492c-2.184 0-3.017.833-3.317 3L1.95 7.291c-.167 1.675 1.067 3.041 2.75 3.041ZM10 14.5c-1.392 0-2.083.69-2.083 2.082v2.084h4.166v-2.084c0-1.391-.691-2.083-2.083-2.083Z"
    />
  </svg>
)
export default HubIcon
