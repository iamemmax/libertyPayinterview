import * as React from "react"
import { SVGProps } from "react"
const PersonalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 18.334h5c4.167 0 5.833-1.667 5.833-5.834v-5c0-4.166-1.666-5.833-5.833-5.833h-5c-4.167 0-5.833 1.667-5.833 5.833v5c0 4.167 1.666 5.834 5.833 5.834Z"
    />
    <path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.96 9.092a1.965 1.965 0 0 1-.917 1.392v1.65a1.042 1.042 0 0 1-2.084 0v-1.65c-.483-.3-.833-.8-.916-1.392a1.652 1.652 0 0 1-.025-.292c0-1.266 1.2-2.25 2.516-1.9a1.965 1.965 0 0 1 1.384 1.384c.075.275.083.55.041.808ZM18.335 9.092H11.96M8.042 9.092H1.667"
    />
  </svg>
)
export default PersonalIcon
